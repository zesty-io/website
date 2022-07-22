import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

export default function InstanceHeader({ instance }) {
  const webengineUrl = `https://${instance?.randomHashID}-dev.webengine.zesty.io`;
  const managerURl = `https://${instance?.ZUID}.manager.zesty.io`;
  return (
    <Box>
      <Grid container>
        <Grid item md={6} xs={12} lg={6}>
          <Typography variant="h3">{instance?.name}</Typography>
          <Typography variant="h6">{instance?.createdAt}</Typography>
        </Grid>

        <Grid item md={6} xs={12} lg={6}>
          <Button variant={'contained'} size="large" href={managerURl}>
            Edit Content
          </Button>
          <Button variant={'text'} size="large" href={webengineUrl}>
            Preview Website
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
