import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const AppFooter = () => {
  return (
    <Stack py={2} component="footer">
      <Typography
        align="center"
        variant="subtitle2"
        color="text.secondary"
        component="p"
        gutterBottom
      >
        &copy;
        <Link underline="none" href="https://zesty.io/">
          Zesty.io
        </Link>{' '}
        Platform, Inc. All Rights Reserved.
      </Typography>

      <Typography align="center" variant="caption" color="text.secondary">
        <Link underline="none" href="/legal/privacy-policy/">
          Privacy Policy
        </Link>
        {' | '}
        <Link underline="none" href="/legal/end-user-license-agreement/">
          Terms and Conditions
        </Link>
        .
      </Typography>
    </Stack>
  );
};

export default AppFooter;
