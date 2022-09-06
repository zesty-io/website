import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { OverviewTabs } from 'components/accounts';
import dayjs from 'dayjs';

export const Overview = ({ instance, userInfo, blueprint }) => {
  return (
    <>
      <Box paddingY={2}>
        <Typography variant="h4">{instance?.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          Last Updated at:
          {dayjs(instance.updatedAt).format(' MMMM D, YYYY')}
        </Typography>
      </Box>
      <Box position={'relative'}>
        <Button
          variant="contained"
          color="secondary"
          href="https://accounts.zesty.io/instances/create"
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: '1000',
          }}
        >
          Create Instance
        </Button>
        <OverviewTabs instance={instance} blueprint={blueprint} />
      </Box>
    </>
  );
};
