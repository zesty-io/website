import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/material';
import { useZestyStore } from 'store';

export const Preference = () => {
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const prefs = userInfo?.prefs && JSON.parse(userInfo?.prefs);
  const [teamOptions, setTeamOptions] = React.useState(prefs?.teamOptions || 0);
  const [instance_layout, setInstance_layout] = React.useState(
    prefs?.instance_layout || 'list',
  );

  const handleManageTeams = async (event, data) => {
    await setTeamOptions(data);
    const userZUID = userInfo.ZUID;
    const body = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      prefs: JSON.stringify({ ...prefs, teamOptions: data, instance_layout }),
    };
    const res = await ZestyAPI.updateUser(userZUID, body);
    console.log(res, event, 'response');
  };

  const handleInstanceLayout = async (event, data) => {
    await setInstance_layout(data);
    const userZUID = userInfo.ZUID;
    const body = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      prefs: JSON.stringify({ ...prefs, instance_layout: data, teamOptions }),
    };
    const res = await ZestyAPI.updateUser(userZUID, body);
    console.log(res, event, 'response');
  };

  React.useEffect(() => {
    setTeamOptions(prefs?.teamOptions);
    setInstance_layout(prefs?.instance_layout);
  }, [prefs?.teamOptions, prefs?.instance_layout]);

  return (
    <Box>
      <Box>Preference</Box>

      <Box>
        Manage Teams:
        <ToggleButtonGroup
          color="primary"
          value={teamOptions}
          exclusive
          onChange={handleManageTeams}
        >
          <ToggleButton value={0}>No</ToggleButton>
          <ToggleButton value={1}>Yes</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box>
        Instance Grid View:
        <ToggleButtonGroup
          color="primary"
          value={instance_layout}
          exclusive
          onChange={handleInstanceLayout}
        >
          <ToggleButton value={'list'}>No</ToggleButton>
          <ToggleButton value={'grid'}>Yes</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};
