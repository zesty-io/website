import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import Container from 'components/Container';

const WithActionButtons = () => {
  const theme = useTheme();
  return (
    <Box bgcolor="alternate.main">
      <Container maxWidth={600}>
        <Card
          sx={{
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box p={2}>
            <Typography fontWeight={700} gutterBottom>
              Notifications are turned on.
            </Typography>
            <Typography color={'text.secondary'} variant={'subtitle2'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box borderLeft={`1px solid ${theme.palette.divider}`} marginLeft={2}>
            <Box p={2}>
              <Typography color={'primary'}>Reply</Typography>
            </Box>
            <Divider />
            <Box p={2}>
              <Typography>Turn off</Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default WithActionButtons;
