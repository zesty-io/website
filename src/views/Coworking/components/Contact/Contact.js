import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Map, Form } from './components';

const Contact = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={isMd ? 8 : 4}>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Form />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
