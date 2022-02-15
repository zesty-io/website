import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

const mock = [
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
    companyLogo:
      'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
    description:
      'Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world.',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
    companyLogo:
      'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
    description:
      'Free delivery on millions of items with Prime. Low prices across earth\'s biggest selection of books, music, DVDs, electronics, computers, software',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
    companyLogo:
      'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
    description:
      'Find your fit with Fitbit\'s family of fitness products that help you stay motivated and improve your health by tracking your activity, exercise, food, weight and sleep.',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    companyLogo:
      'https://assets.maccarianagency.com/svg/logos/google-original.svg',
    description:
      'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img1.jpg',
    companyLogo:
      'https://assets.maccarianagency.com/svg/logos/hubspot-original.svg',
    description:
      'HubSpot offers a full platform of marketing, sales, customer service, and CRM software — plus the methodology, resources, and support — to help businesses.',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
    companyLogo:
      'https://assets.maccarianagency.com/svg/logos/mapbox-original.svg',
    description:
      'Integrate custom live maps, location search, and turn-by-turn navigation into any mobile or web app with Mapbox APIs & SDKs. Get started for free.',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
    companyLogo:
      'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
    description:
      'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
    companyLogo:
      'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
    description:
      'PayPal is the faster, safer way to send money, make an online payment, receive money or set up a merchant account.',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
    companyLogo:
      'https://assets.maccarianagency.com/svg/logos/slack-original.svg',
    description:
      'Slack is a new way to communicate with your team. It\'s faster, better organized, and more secure than email.',
  },
];

const Stories = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

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
          align={'center'}
        >
          Success stories
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          See how we are helping teams
          <br />
          and businesses
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                borderRadius={2}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 240,
                  }}
                />
                <Box component={CardContent}>
                  <Box maxWidth={100} marginY={2}>
                    <Box
                      component="img"
                      height={1}
                      width={1}
                      src={item.companyLogo}
                      alt="..."
                      sx={{
                        filter: mode === 'dark' ? 'contrast(0)' : 'none',
                      }}
                    />
                  </Box>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary"
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'flex-start'}>
                  <Button
                    size="large"
                    endIcon={
                      <svg
                        width={16}
                        height={16}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    }
                  >
                    Learn more
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stories;
