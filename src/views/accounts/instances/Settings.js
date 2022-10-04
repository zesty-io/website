import React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import {
  AccountSelect,
  AccountsHeader,
  AccountsTextArea,
  AccountTextfield,
  ColorToggleButton,
  SettingsSelect,
  StickyTable,
} from 'components/accounts';
import * as helper from 'utils';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';

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
      action: (
        <Stack gap={2} direction="row" alignItems={'center'}>
          <ActionSwitcher
            data={e}
            arrToSubmit={arrToSubmit}
            setarrToSubmit={setarrToSubmit}
          />

          <Stack>
            <Button
              onClick={() => handleClick(e)}
              variant="contained"
              color="primary"
              size="small"
              sx={{ visibility: isDataChange ? 'visible' : 'hidden' }}
            >
              <SaveIcon fontSize="small" sx={{ marginRight: '.3rem' }} />
              <Typography variant="body2">Save</Typography>
            </Button>
          </Stack>
        </Stack>
      ),
    };
  });

  return (
    <Box>
      <StickyTable
        perPage={100}
        pagination={false}
        loading={loading}
        rows={ROWS}
        columns={COLUMNS}
      />
    </Box>
  );
};

export const Settings = ({
  settings = [],
  singleSettingsUpdate,
  loading,
  downloadTemplate,
  instance_zuid,
  token,
}) => {
  const [arrToSubmit, setarrToSubmit] = React.useState([]);
  const [search, setsearch] = React.useState('');
  const [categories, setcategories] = React.useState('');

  const data = settings?.filter((e) => {
    if (!categories && search) {
      return e.keyFriendly.toLowerCase().includes(search.toLowerCase());
    } else if (search || categories) {
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

  const handleOnchange = (data) => {
    setcategories(data.value);
  };
  const headerProps = {
    title: 'Settings',
    description: `Manage your Settings`,
  };

  return (
    <Grid container>
      <AccountsHeader {...headerProps}>
        <TextField
          size="small"
          placeholder=" Search Settings"
          fullWidth
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon color="disabled" />,
          }}
        />

        <Stack>
          <AccountSelect
            options={dropdownList}
            onChange={handleOnchange}
            value={categories}
            width={200}
          />
        </Stack>
        {/* <AccountsSelect
          list={dropdownList}
          setterFn={setcategories}
          value={categories}
          setdirty={() => {}}
        /> */}

        <Button
          size="small"
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => downloadTemplate(instance_zuid, token)}
        >
          <DownloadIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body1">Export as Template</Typography>
        </Button>
      </AccountsHeader>
      <Grid item xs={12} px={4}>
        <CustomTable
          loading={loading}
          data={data}
          arrToSubmit={arrToSubmit}
          setarrToSubmit={setarrToSubmit}
          singleSettingsUpdate={singleSettingsUpdate}
        />
      </Grid>
    </Grid>
  );
};
