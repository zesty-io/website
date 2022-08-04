import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import {
  AccountsSelect,
  AccountsTextArea,
  AccountTextfield,
  ColorToggleButton,
  SettingsSelect,
  StickyTable,
  SuccessMsg,
} from 'components/accounts';
import * as helper from 'utils';
import { useZestyStore } from 'store';

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

const ActionSwitcher = ({ data, setarrToSubmit, arrToSubmit }) => {
  const { dataType, options, value } = data;

  const OPTIONS = options?.split(';').map((e) => {
    return { value: e, label: e };
  });
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
            options={OPTIONS}
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
            options={OPTIONS}
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
          <SettingsSelect options={OPTIONS} handleAdd={handleAdd} />
        </>
      );
  }
};

const CustomTable = ({ data, arrToSubmit, setarrToSubmit }) => {
  const ROWS = data?.map((e) => {
    return {
      keyFriendly: e.keyFriendly,
      category: e.category,
      tips: e.tips,
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
      <StickyTable rows={ROWS} columns={COLUMNS} />
    </Box>
  );
};

export const Settings = ({ settings = [] }) => {
  const [arrToSubmit, setarrToSubmit] = React.useState([]);
  const { ZestyAPI } = useZestyStore();
  const [search, setsearch] = React.useState('');
  const [categories, setcategories] = React.useState('general');

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

  const updateSettings = async (data) => {
    const dataToUpdate = data?.map(async (e) => {
      const res = await ZestyAPI.updateSetting(e.ZUID, e);
      console.log(res, 'Result');
    });

    await Promise.all(dataToUpdate);
    await SuccessMsg({ title: 'Success' });
    await setarrToSubmit([]);
  };
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
        <Button
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
        </Button>
      </Box>
      <CustomTable
        data={data}
        arrToSubmit={arrToSubmit}
        setarrToSubmit={setarrToSubmit}
      />
    </Box>
  );
};
