import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { AccountsSelect, StickyTable } from 'components/accounts';
import { generateUniqDropdown } from 'utils';

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
const CustomTable = ({ data }) => {
  const ROWS = data?.map((e) => {
    return {
      keyFriendly: e.keyFriendly,
      category: e.category,
      tips: e.tips,
      action: <Button onClick={() => {}}>{e.dataType}</Button>,
    };
  });
  const memoizeRows = React.useMemo(() => ROWS, [data]);
  const memoizeColumns = React.useMemo(() => COLUMNS, []);

  return (
    <Box>
      <StickyTable rows={memoizeRows} columns={memoizeColumns} />
    </Box>
  );
};

export const Settings = ({ settings = [] }) => {
  const [search, setsearch] = React.useState('');
  const [categories, setcategories] = React.useState('general');
  console.log(settings, '3333333333333');
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
  const dropdownList = generateUniqDropdown({
    data: settings,
    property: 'category',
  });

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
      </Box>
      <CustomTable data={data} />
    </Box>
  );
};
