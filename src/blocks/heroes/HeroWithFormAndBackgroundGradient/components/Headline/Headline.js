/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FillerContent from 'components/FillerContent';
import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/router';
import MuiMarkdown from 'mui-markdown';

const Headline = ({
  title,
  description,
  images = [],
  justifyImage = 'start',
}) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isCapterraPage = router.asPath.includes('capterra');

  return (
    <Box sx={{ margin: 'auto', py: 5 }}>
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

      <Grid item xs={12} md={isMobile ? 12 : 9}>
        <MuiMarkdown
          overrides={{
            li: {
              component: Typography,
              props: {
                component: 'li',
                sx: {
                  color: 'white',
                  ml: -2.5,
                },
              },
            },
            p: {
              component: Typography,
              props: {
                component: 'p',
                sx: {
                  color: 'white',
                },
              },
            },
          }}
        >
          {description}
        </MuiMarkdown>
      </Grid>
      {!(router.asPath === '/ppc/content-management-system/') ? (
        <Box
          display="flex"
          gap={4}
          flexWrap="wrap"
          marginTop={4}
          justifyContent={justifyImage}
        >
          {images?.map((item, i) => (
            <Box
              marginTop={2}
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'center',
                // prevent squish in ppc demo pages and align captera logos
                flex: isCapterraPage ? '1' : '0 1 auto',
              }}
            >
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
                      : isCapterraPage
                      ? 'auto'
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
      ) : null}
    </Box>
  );
};

export default Headline;
