import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import {
  AccountsSelect,
  AccountsTextArea,
  AccountTextfield,
  ColorToggleButton,
  SettingsSelect,
  StickyTable,
} from 'components/accounts';
import * as helper from 'utils';
import SaveIcon from '@mui/icons-material/Save';

const COLUMNS = [
  {
    id: 'keyFriendly',
    label: 'Name',
  },
  {
    id: 'category',
    label: 'Category',
  },
  {
    id: 'tips',
    label: 'Description',
  },
  {
    id: 'action',
    label: 'Action',
  },
  {
    id: 'save',
    label: 'Save',
  },
];

const OPTIONS = (options, separator) => {
  const res = options?.split(separator).map((e) => {
    return { value: e, label: e };
  });
  return res;
};

const ActionSwitcher = ({ data, setarrToSubmit, arrToSubmit }) => {
  const { dataType, options, value } = data;

  const handleAdd = (value) => {
    data['value'] = value;
    setarrToSubmit([...arrToSubmit, data]);
  };

  switch (dataType) {
    case 'checkbox':
      return (
        <>
          <ColorToggleButton
            value={value}
            options={OPTIONS(options, ',')}
            handleAdd={handleAdd}
          />
        </>
      );
    case 'text':
      return (
        <>
          <AccountTextfield
            name={data?.keyFriendly}
            value={value}
            handleAdd={handleAdd}
          />
        </>
      );
    case 'dropdown':
      return (
        <>
          <SettingsSelect
            value={value}
            name={data?.keyFriendly}
            options={OPTIONS(options, ';')}
            handleAdd={handleAdd}
          />
        </>
      );
    case 'textarea':
      return (
        <>
          <AccountsTextArea
            name={data?.keyFriendly}
            value={value}
            handleAdd={handleAdd}
          />
        </>
      );

    default:
      return (
        <>
          <SettingsSelect
            options={OPTIONS(options, ',')}
            handleAdd={handleAdd}
          />
        </>
      );
  }
};

const CustomTable = ({
  data,
  arrToSubmit,
  setarrToSubmit,
  loading,
  singleSettingsUpdate,
}) => {
  const handleClick = (data) => {
    singleSettingsUpdate(data);
    setarrToSubmit(arrToSubmit.filter((e) => e.ZUID !== data.ZUID));
  };
  const ROWS = data?.map((e) => {
    const isDataChange = helper
      .removeDupsInArrObj(arrToSubmit, 'keyFriendly')
      .find((x) => x.ZUID === e.ZUID);

    return {
      keyFriendly: e.keyFriendly,
      category: e.category,
      tips: e.tips || '-',
      save: isDataChange ? (
        <Button
          onClick={() => handleClick(e)}
          variant="contained"
          color="secondary"
        >
          <SaveIcon size={20} />
          Save
        </Button>
      ) : (
        <>-</>
      ),
      action: (
        <ActionSwitcher
          data={e}
          arrToSubmit={arrToSubmit}
          setarrToSubmit={setarrToSubmit}
        />
      ),
    };
  });

  // const memoizeRows = React.useMemo(() => ROWS, [data]);
  // const memoizeColumns = React.useMemo(() => COLUMNS, []);

  return (
    <Box>
      <StickyTable loading={loading} rows={ROWS} columns={COLUMNS} />
    </Box>
  );
};

export const Settings = ({ settings = [], singleSettingsUpdate, loading }) => {
  const [arrToSubmit, setarrToSubmit] = React.useState([]);
  const [search, setsearch] = React.useState('');
  const [categories, setcategories] = React.useState('');

  const data = settings?.filter((e) => {
    if (search || categories) {
      return (
        e.keyFriendly.toLowerCase().includes(search.toLowerCase()) &&
        e.category === categories
      );
    } else {
      return settings;
    }
  });

  const dropdownList = helper.generateUniqDropdown({
    data: settings,
    property: 'category',
  });

  // OLd setting to be remove
  // const updateSettings = async (data) => {
  //   const dataToUpdate = data?.map(async (e) => {
  //     const res = await ZestyAPI.updateSetting(e.ZUID, e);
  //     console.log(res, 'Result');
  //   });
  //   await Promise.all(dataToUpdate);
  //   await SuccessMsg({ title: 'Success' });
  //   await setarrToSubmit([]);
  // };

  return (
    <Box>
      <Typography variant="h3">Settings</Typography>
      <Box display={'flex'} alignItems="center">
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          onChange={(e) => setsearch(e.target.value)}
        />

        <AccountsSelect
          list={dropdownList}
          setterFn={setcategories}
          value={categories}
          setdirty={() => {}}
        />

        {/* Old setting to be remove */}
        {/* <Button
          color="primary"
          variant="contained"
          disabled={arrToSubmit.length === 0 ? true : false}
          onClick={() =>
            updateSettings(
              helper.removeDupsInArrObj(arrToSubmit, 'keyFriendly'),
            )
          }
        >
          Save Changes
        </Button> */}
      </Box>
      <CustomTable
        loading={loading}
        data={data}
        arrToSubmit={arrToSubmit}
        setarrToSubmit={setarrToSubmit}
        singleSettingsUpdate={singleSettingsUpdate}
      />
    </Box>
  );
};
