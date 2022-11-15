import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import * as helper from 'utils';

import { ColorToggleButton } from '../ui';

const OPTIONS = (options, separator) => {
  const res = options?.split(separator).map((e) => {
    return { value: e, label: e };
  });
  return res;
};

// domain setting toggle
const SettingsToggle = ({
  data,
  // updateSetting,
  arrToSubmit,
  setarrToSubmit,
}) => {
  const { options, value } = data;

  const handleAdd = async (value) => {
    data['value'] = value;
    setarrToSubmit([...arrToSubmit, data]);
  };

  return (
    <ColorToggleButton
      value={value}
      options={OPTIONS(options, ',')}
      handleAdd={handleAdd}
    />
  );
};

export default function HttpSettings({ settings, updateSetting }) {
  const [arrToSubmit, setarrToSubmit] = React.useState([]);
  const handleUpdateSetting = async (data) => {
    updateSetting(data);
    setarrToSubmit(arrToSubmit.filter((e) => e.ZUID !== data.ZUID));
  };

  return (
    <Box mt={2}>
      {settings?.map((setting) => {
        const isDataChange = helper
          .removeDupsInArrObj(arrToSubmit, 'keyFriendly')
          .find((x) => x.ZUID === setting.ZUID);
        return (
          <Grid container key={setting.key} mb={2} spacing={1}>
            <Grid item xs={6} alignContent={'center'} alignSelf={'center'}>
              <Typography variant="subtitle1">{setting.keyFriendly}</Typography>
            </Grid>
            <Grid item xs={3}>
              <SettingsToggle
                arrToSubmit={arrToSubmit}
                setarrToSubmit={setarrToSubmit}
                data={setting}
                updateSetting={updateSetting}
              />
            </Grid>
            <Grid item xs={3}>
              {isDataChange && (
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => handleUpdateSetting(setting)}
                >
                  Save
                </Button>
              )}
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}
