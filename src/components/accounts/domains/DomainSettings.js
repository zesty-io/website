import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useZestyStore } from 'store';
import HttpSettings from 'components/accounts/domains/HttpSettings';
import { ErrorMsg, SuccessMsg } from '../ui';

export default function DomainSettings({ settings, getSettings }) {
  const { ZestyAPI } = useZestyStore((state) => state);

  const updateSettingSucc = () => {
    SuccessMsg({ title: 'Settings Updated' });
  };
  const updateSettingErr = (err) => {
    ErrorMsg({ title: err.error });
  };

  const updateSetting = async (data) => {
    try {
      // get settings body object, destructure object and update value key with new value
      const res = await ZestyAPI.updateSetting(data.ZUID, data);
      !res.error && updateSettingSucc(res);
      res.error && updateSettingErr(res);
      await getSettings();
    } catch (error) {
      updateSettingErr(error);
    }
  };

  useEffect(() => {
    // access necessary endpoints
    getSettings();
  }, []);

  return (
    <Box px={2}>
      <Grid container mb={2}>
        <Grid item xs={12} sm={6} p={2}>
          <Typography variant="h5">Domain Settings</Typography>
          <HttpSettings settings={settings} updateSetting={updateSetting} />
        </Grid>
        <Grid item xs={12} sm={6} p={2}>
          <Typography variant="h5" pb={2}>
            Custom Domain DNS Configuration
          </Typography>
          <Typography variant="body2" pb={2}>
            After adding a domain, launch your site following this guide:{' '}
            <a
              href="https://zesty.org/tools/guides/how-to-launch-an-instance"
              target="_blank"
            >
              DNS configuration
            </a>
            .
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
