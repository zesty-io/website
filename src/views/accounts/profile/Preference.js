import React from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { useZestyStore } from 'store';
import {
  AccountsHeader,
  AccountsSelect,
  AccountsTable,
  AccountsTableHead,
  ErrorMsg,
  SuccessMsg,
} from 'components/accounts';

const teamOption = [
  { value: 0, label: 'Hide' },
  { value: 1, label: 'Show' },
];
const instanceOptions = [
  { value: 'List', label: 'List' },
  { value: 'Grid', label: 'Grid' },
];

function capitalize(s) {
  return s && s[0]?.toUpperCase() + s?.slice(1);
}

export const Preference = () => {
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const [dirty, setdirty] = React.useState(false);
  const prefs = userInfo?.prefs && JSON.parse(userInfo?.prefs);
  const [teamOptions, setTeamOptions] = React.useState();
  const [instance_layout, setInstance_layout] = React.useState();

  const handleSaveSuccess = () => {
    SuccessMsg({ title: 'Success' });
  };
  const handleSaveErr = (err) => {
    ErrorMsg({ text: err.error });
  };
  const handleSave = async (userInfo) => {
    const userZUID = userInfo?.ZUID;
    const body = {
      firstName: userInfo?.firstName,
      lastName: userInfo?.lastName,
      prefs: JSON.stringify({ ...prefs, teamOptions, instance_layout }),
    };
    const res = await ZestyAPI.updateUser(userZUID, body);
    !res.error && handleSaveSuccess(res);
    res.error && handleSaveErr(res);
    setdirty(false);
  };

  const ROWS = [
    {
      id: 1,
      name: 'Manage Teams',
      description: 'Show or Hide Teams',
      action: (
        <AccountsSelect
          list={teamOption}
          setterFn={setTeamOptions}
          value={teamOptions}
          setdirty={setdirty}
        />
      ),
    },
    {
      id: 2,
      name: 'Instance View',
      description: 'Grid or List View',
      action: (
        <AccountsSelect
          list={instanceOptions}
          setterFn={setInstance_layout}
          value={capitalize(instance_layout)}
          setdirty={setdirty}
        />
      ),
    },
  ];

  const COLUMNS = [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
    },
    {
      field: 'name',
      headerName: 'Preference Name',
      width: 300,
      editable: false,
      sortable: false,
      renderHeader: () => (
        <AccountsTableHead>Preference Name</AccountsTableHead>
      ),
      renderCell: (params) => {
        return <Typography variant="body2">{params.row.name}</Typography>;
      },
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
      editable: false,
      sortable: false,
      renderHeader: () => <AccountsTableHead>Description</AccountsTableHead>,
      renderCell: (params) => {
        return (
          <Typography variant="body2">{params.row.description}</Typography>
        );
      },
    },
    {
      field: 'action',
      headerName: '',
      width: 200,
      editable: false,
      sortable: false,
      renderHeader: () => (
        <Stack width={1} pl={6}>
          <Button
            fullWidth
            variant="contained"
            disabled={!dirty}
            onClick={() => handleSave(userInfo)}
            color="primary"
          >
            Save
          </Button>
        </Stack>
      ),
      renderCell: (params) => {
        return params.row.action;
      },
    },
  ];

  React.useEffect(() => {
    setTeamOptions(prefs?.teamOptions);
    setInstance_layout(prefs?.instance_layout);
  }, [prefs?.teamOptions, prefs?.instance_layout]);

  const headerProps = {
    title: 'Preference',
    description: `Manage your Preference`,
  };
  return (
    <Grid container>
      <AccountsHeader {...headerProps}></AccountsHeader>
      <Grid item xs={12}>
        <Stack p={4}>
          <AccountsTable
            loading={false}
            rows={ROWS}
            columns={COLUMNS}
            pageSize={100}
            autoHeight={true}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
