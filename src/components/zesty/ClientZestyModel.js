/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Clients
 * Name: clients
 * Model ZUID: 6-f4e585eec4-98pz6d
 * File Created On: Thu Mar 03 2022 11:31:37 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-f4e585eec4-98pz6d
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Main from 'layouts/Main';
import Container from 'components/Container';

import ShowcaseBgImagePage from 'pages/blocks/category-showcases/showcase-bg-image';
import CtaSimpleCenteredPage from 'pages/blocks/cta/cta-simple-centered';

const icon = [
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
      "Free delivery on millions of items with Prime. Low prices across earth's biggest selection of books, music, DVDs, electronics, computers, software",
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
    companyLogo:
      'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
    description:
      "Find your fit with Fitbit's family of fitness products that help you stay motivated and improve your health by tracking your activity, exercise, food, weight and sleep.",
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    companyLogo:
      'https://assets.maccarianagency.com/svg/logos/google-original.svg',
    description:
      "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
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
      "Slack is a new way to communicate with your team. It's faster, better organized, and more secure than email.",
  },
];

function ClientZestyModel({ content }) {
  const theme = useTheme();
  const { mode } = theme.palette;
  return (
    <>
      <Box>
        <Box
          position={'relative'}
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container zIndex={3} position={'relative'}>
            <Container marginLeft={'0 !important'}>
              <Box>
                <Box>
                  <Typography variant="h3" gutterBottom>
                    You're in good company.
                  </Typography>
                  <Typography variant="h3" color={'primary'} fontWeight={700}>
                    Join millions of businesses today.
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Container>
          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            width={1}
            marginBottom={-1}
            position={'relative'}
            zIndex={2}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </Box>
        </Box>
        <Box position={'relative'} zIndex={3} marginTop={{ xs: 0, md: -22 }}>
          <Container>
            <Grid container spacing={0}>
              {icon.map((item, index) => (
                <Grid
                  item
                  container
                  key={index}
                  xs={4}
                  direction={index < 3 ? 'row' : 'row-reverse'}
                >
                  <Grid item xs={6}>
                    <Avatar
                      src={item.logo}
                      sx={{
                        width: { xs: 60, md: 80 },
                        height: { xs: 60, md: 80 },
                        padding: 2,
                        boxShadow: 4,
                        marginTop: 1,
                        bgcolor: 'background.paper',
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}></Grid>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Container>
          <Box>
            <Box marginBottom={4}>
              <ShowcaseBgImagePage />
            </Box>
          </Box>
        </Container>
        <Container>
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
                      <Box
                        component={CardActions}
                        justifyContent={'flex-start'}
                      >
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
        </Container>
        <Box bgcolor={theme.palette.alternate.main}>
          <CtaSimpleCenteredPage />
        </Box>
      </Box>

      <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div>
      {/* End of Zesty.io output example */}
    </>
  );
}

export default ClientZestyModel;
