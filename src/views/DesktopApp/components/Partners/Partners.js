import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const mock = [
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/slack.svg',
    name: 'Slack',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/mailchimp.svg',
    name: 'Mailchimp',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/dropbox.svg',
    name: 'Dropbox',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/google-drive.svg',
    name: 'Google Drive',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/google-ad-manager.svg',
    name: 'Google Ad Manager',
  },
  {
    logo: 'https://assets.maccarianagency.com/svg/logos/atlassian.svg',
    name: 'Atlassian',
  },
];

const Partners = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
          >
            Integrations
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            We love to explore new ways to engage with brands and reach
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary">
            Our mission is to help you to grow your design skills, meet and
            connect with professional dsigners who share your passions.
          </Typography>
          <Box marginTop={2}>
            <Button
              size={'large'}
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
              View all plugins
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item container spacing={2} xs={12} md={6}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={4}
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Card>
                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 3,
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    height={50}
                    width={50}
                    src={item.logo}
                    alt={item.name}
                    effect="blur"
                  />
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Partners;
