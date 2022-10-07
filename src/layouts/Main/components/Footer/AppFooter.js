import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Divider, Stack } from '@mui/material';

const AppFooter = () => {
  return (
    <Stack
      bgcolor="transparent"
      direction="row"
      zIndex={0}
      py={2}
      component="footer"
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        align="center"
        variant="subtitle2"
        color="text.secondary"
        component="p"
        gutterBottom
        mb={0}
      >
        <Link color="text.secondary" underline="none" href="https://zesty.io/">
          Zesty.io
        </Link>{' '}
        Platform, Inc. All Rights Reserved.
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Link
          variant="subtitle2"
          color="text.secondary"
          underline="none"
          href="/legal/privacy-policy/"
        >
          Privacy Policy
        </Link>

        <Link
          variant="subtitle2"
          color="text.secondary"
          underline="none"
          href="/legal/end-user-license-agreement/"
        >
          Terms and Conditions.
        </Link>
      </Stack>
    </Stack>
  );
};

export default AppFooter;
