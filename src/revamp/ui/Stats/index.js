import { Box, Grid, Stack, Typography } from '@mui/material';
import contentStats from '../../assets/contentStats.svg';
import statsIcon1 from '../../assets/statsIcon1.svg';
import statsIcon2 from '../../assets/statsIcon2.svg';
import statsIcon3 from '../../assets/statsIcon3.svg';
import statsIcon4 from '../../assets/statsIcon4.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import React from 'react';

const statsArray = [
  {
    title: '2.5X',
    subtitle: 'Faster deployments with collaborative tools.',
    icon: statsIcon1.src,
  },
  {
    title: '99.99%',
    subtitle: 'Industry leading Uptime that ensures you deliver',
    icon: statsIcon2.src,
  },
  {
    title: '7+',
    subtitle: 'Endpoint formats and APIs to deliver content.',
    icon: statsIcon3.src,
  },
  {
    title: '15X',
    subtitle: 'Faster content production with our AI tool.',
    icon: statsIcon4.src,
  },
];

const Stats = ({
  title = 'Why choose Zesty.io? ',
  header = 'Zesty is named a High Performer for Winter 2023 by G2',
  subHeading = 'At Zesty, we are committed to creating best-in-class technology and our dedication to excellence has been recognized by G2, who have consistently named us a high performer.',
}) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'), {
    defaultMatches: true,
  });

  return (
    <Stack
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          py: 4,
          px: 2,
        },
        [theme.breakpoints.up('tablet')]: {
          py: 6,
          px: 4,
        },
        [theme.breakpoints.up('lg')]: {
          flexDirection: 'row',
          columnGap: '64px',
          px: 14,
          py: 8,
        },
      })}
    >
      <Stack
        width="100%"
        order={isTablet ? 2 : 1}
        height="100%"
        mb={{
          xs: 4,
          tablet: 6,
          desktopWide: '0px',
        }}
        sx={{
          background:
            'radial-gradient(50% 50% at 50% 50%, #363F72 0%, #101828 100%), url(.png)',
        }}
      >
        <Box
          p={{
            xs: '24px 32px',
            lg: '119.5px 22.64px',
            desktopWide: '24px 32px',
          }}
          margin="0 auto"
        >
          <Box
            component="img"
            src={contentStats.src}
            style={{ objectFit: 'contain' }}
            sx={(theme) => ({
              [theme.breakpoints.up('xs')]: {
                margin: '0 auto',
                width: '100%',
                height: '100%',
              },
              [theme.breakpoints.up('tablet')]: {
                width: '410.71px',
                height: '317px',
              },

              [theme.breakpoints.up('md')]: {
                width: '100%',
                height: '100%',
              },
            })}
          />
        </Box>
      </Stack>

      <Stack width="100%" order={isTablet ? 1 : 2}>
        <Stack
          mb={{
            xs: 4,
            tablet: 6,
            lg: 4,
          }}
        >
          <Typography
            mb="4px"
            textTransform="uppercase"
            letterSpacing="1px"
            color="primary"
            fontWeight={600}
            sx={(theme) => ({
              [theme.breakpoints.up('tablet')]: {
                fontSize: '14px',
                lineHeight: '20px',
              },
            })}
          >
            {title}
          </Typography>
          <Typography
            mb={2}
            variant="h2"
            fontWeight={800}
            sx={(theme) => ({
              [theme.breakpoints.up('tablet')]: {
                fontSize: '36px',
                lineHeight: '44px',
              },
            })}
          >
            {header}
          </Typography>
          <Typography
            color="#404040"
            sx={(theme) => ({
              [theme.breakpoints.up('xs')]: {
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '28px',
              },
            })}
          >
            {subHeading}
          </Typography>
        </Stack>
        <Stack mb={{ xs: 4, tablet: 2 }}>
          <Grid container columnSpacing={4} rowGap={4}>
            {statsArray.map((stat) => {
              return (
                <Grid item xs={12} tablet={6}>
                  <Stack direction="row" columnGap={3}>
                    <Stack
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mb="4px"
                    >
                      <img src={stat.icon} width="48px" height="48px" />
                    </Stack>
                    <Stack>
                      <Typography
                        variant="h4"
                        fontWeight={600}
                        mb="4px"
                        sx={(theme) => ({
                          [theme.breakpoints.up('tablet')]: {
                            fontSize: '32px',
                            lineHeight: '40px',
                          },
                        })}
                      >
                        {stat.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.subtitle}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Stats;
