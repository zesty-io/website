/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FillerContent from 'components/FillerContent';
import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

const Headline = ({
  title,
  description,
  images = [],
  justifyImage = 'start',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        justifyContent={justifyImage}
      >
        {images?.map((item, i) => (
          <Box marginTop={2} key={i}>
            <Box
              component="img"
              width={1}
              src={item}
              alt="..."
              // Scale the height of images specially the rocket leage mobile and desktop
              sx={{
                height:
                  i === 1 && isMobile
                    ? '2.3rem'
                    : i === 1 && !isMobile
                    ? '2.5rem'
                    : !isMobile
                    ? '3rem'
                    : '2.4rem',
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Headline;
