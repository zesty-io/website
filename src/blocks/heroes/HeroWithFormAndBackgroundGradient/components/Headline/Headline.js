/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FillerContent from 'components/FillerContent';
import { Grid } from '@mui/material';

const Headline = ({ title, description }) => {
  return (
    <Box>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 900,
          color: 'common.white',
        }}
      >
        {title || FillerContent.header}
      </Typography>

      <Grid item xs={12} md={9}>
        <Box
          sx={{
            fontWeight: 400,
            color: 'common.white',
          }}
          dangerouslySetInnerHTML={{
            __html: description || FillerContent.description,
          }}
        ></Box>
      </Grid>
      {/* <Typography
        variant="h6"
        component="p"
        color="text.primary"
        sx={{
          fontWeight: 500,
          color: 'common.white',
        }}
      >
        Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something
        about TheFront works for our global partners.
        <br />
        Want more information? Download our overview and a member of our
        specialist team will be in touch to talk about your goals for TheFront
        2021.
      </Typography> */}
    </Box>
  );
};

export default Headline;
