import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useZestyStore } from 'store';
import HttpSettings from 'components/accounts/domains/HttpSettings';
import { ErrorMsg, SuccessMsg } from '../ui';

export default function DomainSettings({ settings, getSettings }) {
  const { ZestyAPI } = useZestyStore((state) => state);

  const updateSettingSucc = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Settings Updated' });
  };
  const updateSettingErr = (err) => {
    console.log(err);
    ErrorMsg({ title: err.error });
  };

  const updateSetting = async (data) => {
    try {
      // get settings body object, destructure object and update value key with new value
      const res = await ZestyAPI.updateSetting(data.ZUID, data);
      !res.error && updateSettingSucc(res);
      res.error && updateSettingErr(res);
      // const res = await ZestyAPI.updateSetting(settingZUID);
      await getSettings();
      console.log(
        '🚀 ~ file: DomainListings.js ~ line 79 ~ updateSetting ~ res',
        res,
      );
    } catch (error) {
      updateSettingErr(error);
      console.log(
        '🚀 ~ file: DomainListings.js ~ line 81 ~ updateSetting ~ error',
        error,
      );
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
            {` It's easy to launch your instance with Zesty.io. Simply set your domain, configure your DNS, and then confirm your site is live.`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
