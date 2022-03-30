/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FillerContent from 'components/FillerContent';
import { Grid } from '@mui/material';
import { useTheme } from '@emotion/react';

const Headline = ({ title, description, images = [] }) => {
  const theme = useTheme();
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
      <Box
        display="flex"
        gap={4}
        flexWrap="wrap"
        marginTop={4}
        justifyContent={'center'}
      >
        {images?.map((item, i) => (
          <Box marginTop={2} key={i}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item}
              alt="..."
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
          </Box>
        ))}
      </Box>
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
