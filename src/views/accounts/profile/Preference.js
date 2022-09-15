import React from 'react';
import { Box, Button } from '@mui/material';
import { useZestyStore } from 'store';
import {
  AccountsSelect,
  ErrorMsg,
  StickyTable,
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

  const handleSaveSuccess = (data) => {
    console.log(data, 'succ');
    SuccessMsg({ title: 'Success' });
  };
  const handleSaveErr = (err) => {
    console.log(err, 'err');
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

  const COLUMNS = [
    {
      id: 'name',
      label: 'Preferences Name',
    },
    {
      id: 'description',
      label: 'Description',
    },
    {
      id: 'action',
      label: (
        <Button
          fullWidth
          variant="contained"
          disabled={!dirty}
          onClick={() => handleSave(userInfo)}
          color="success"
        >
          Save
        </Button>
      ),
    },
  ];

  const ROWS = [
    {
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

  const memoizeRows = React.useMemo(() => ROWS, [instance_layout, teamOptions]);
  const memoizeColumns = React.useMemo(
    () => COLUMNS,
    [userInfo, teamOptions, instance_layout, dirty],
  );

  React.useEffect(() => {
    setTeamOptions(prefs?.teamOptions);
    setInstance_layout(prefs?.instance_layout);
  }, [prefs?.teamOptions, prefs?.instance_layout]);

  return (
    <Box>
      <StickyTable rows={memoizeRows} columns={memoizeColumns} />
    </Box>
  );
};
