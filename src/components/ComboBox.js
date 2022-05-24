import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Autocomplete, {
  autocompleteClasses,
  createFilterOptions,
} from '@mui/material/Autocomplete';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListSubheader from '@mui/material/ListSubheader';
import Popper from '@mui/material/Popper';
import { useTheme, styled } from '@mui/material/styles';
import { VariableSizeList } from 'react-window';
import Typography from '@mui/material/Typography';

const LISTBOX_PADDING = 8; // px

function renderRow(props) {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: style.top + LISTBOX_PADDING,
  };

  if (dataSet.hasOwnProperty('group')) {
    return (
      <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
        {dataSet.group}
      </ListSubheader>
    );
  }

  return (
    <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
      {dataSet[1]}
    </Typography>
  );
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref,
) {
  const { children, ...other } = props;
  const itemData = [];
  children.forEach((item) => {
    itemData.push(item);
    itemData.push(...(item.children || []));
  });

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true,
  });

  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child) => {
    if (child.hasOwnProperty('group')) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

ListboxComponent.propTypes = {
  children: PropTypes.node,
};

function random(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
});

// const OPTIONS1 = Array.from(new Array(1000))
//   .map(() => random(10 + Math.ceil(Math.random() * 20)))
//   .map((e, i) => {
//     return {
//       label: e,
//       name: e,
//       value: i,
//     };
//   });

const filterOptions = createFilterOptions({
  matchFrom: 'any',
  stringify: (option) => option.label + option.value,
});

const Index = ({ instances, setCookies, instanceZUID }) => {
  const [label, setlabel] = React.useState('');
  const memoizedInstances = React.useMemo(() => {
    return instances;
  }, [instances]);

  const OPTIONS = memoizedInstances?.map((e) => {
    return {
      name: e.name,
      value: e.ZUID,
    };
  });

  const currentVal = memoizedInstances?.find((e) => e.ZUID === instanceZUID);

  const handleChange = (e, newValue) => {
    setCookies('ZESTY_WORKING_INSTANCE', newValue?.value);
    setlabel(newValue?.name);
  };

  React.useEffect(() => {
    instances && setlabel(currentVal?.name);
  }, [instances]);

  return (
    <Autocomplete
      filterOptions={filterOptions}
      id="virtualize-demo"
      onChange={handleChange}
      sx={{ width: 300 }}
      disableListWrap
      PopperComponent={StyledPopper}
      ListboxComponent={ListboxComponent}
      options={OPTIONS}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => {
        return <TextField {...params} label={label || 'Select an instance'} />;
      }}
      renderOption={(props, option) => {
        return [props, option.name];
      }}
    />
  );
};
export const ComboBox = React.memo(Index);
