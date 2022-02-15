import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const mock = [
  {
    title: 'Your brand platform',
    description:
      'Monetize your website and manage all guest interactions with your own brand, logo and domains.',
    illustration:
      'https://assets.maccarianagency.com/svg/illustrations/illustration4.svg',
    illustrationDark:
      'https://assets.maccarianagency.com/svg/illustrations/illustration4--dark.svg',
    color: colors.blue[200],
  },
  {
    title: 'Your brand platform',
    description:
      'Monetize your website and manage all guest interactions with your own brand, logo and domains.',
    illustration:
      'https://assets.maccarianagency.com/svg/illustrations/illustration3.svg',
    illustrationDark:
      'https://assets.maccarianagency.com/svg/illustrations/illustration3--dark.svg',
    color: colors.purple[200],
  },
  {
    label: 'Client portal access',
    title: 'Simple customer dashboards',
    description:
      'Give sub-users access to a simplified dashboard with limited permission levels to offer remote management and real-time analytics.',
    illustration:
      'https://assets.maccarianagency.com/svg/illustrations/illustration2.svg',
    illustrationDark:
      'https://assets.maccarianagency.com/svg/illustrations/illustration2--dark.svg',
    color: colors.indigo[200],
  },
  {
    title: 'Mobile compatible platform',
    description:
      'Introduce your brand-new mobile friendly website to your customers. Seamlessly integrates with WiFi hardware and marketing automation software.',
    illustration:
      'https://assets.maccarianagency.com/svg/illustrations/illustration1.svg',
    illustrationDark:
      'https://assets.maccarianagency.com/svg/illustrations/illustration1--dark.svg',
    color: colors.green[200],
  },
];

const Solutions = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          Solutions
        </Typography>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Your new website marketing solution is here
        </Typography>
        <Typography variant="h6" color={'text.secondary'} data-aos={'fade-up'}>
          theFront Kit offers a completely customizable website landing pages
          and supported pages management platform.
          <br />
          Here’s what makes us different.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginTop: 2 }}
        >
          View all
        </Button>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={6}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={Card}
              height={1}
              bgcolor={alpha(item.color, 0.2)}
              boxShadow={0}
              sx={{
                transform: i % 2 === 1 ? { md: 'translateY(80px)' } : 'none',
              }}
            >
              <CardContent sx={{ padding: 4 }}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  marginBottom={{ xs: 2, md: 4 }}
                  sx={{
                    '& .lazy-load-image-loaded': {
                      maxWidth: { xs: '80%', md: '70%' },
                    },
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    effect="blur"
                    src={
                      theme.palette.mode === 'light'
                        ? item.illustration
                        : item.illustrationDark
                    }
                    width={1}
                  />
                </Box>
                <Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                  <Button
                    size={'large'}
                    sx={{ marginTop: 2 }}
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    Learn more
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;
