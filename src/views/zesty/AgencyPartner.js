/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Agency Partners
 * Name: agency_partners
 * Model ZUID: 6-dcddf2b6b7-hdsjv3
 * File Created On: Thu Mar 03 2022 11:27:11 GMT-0800 (Pacific Standard Time)
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
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-dcddf2b6b7-hdsjv3
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

import Main from 'layouts/Main';
import Container from 'components/Container';

import PortfolioGrid from '../../views/PortfolioGrid/PortfolioGrid.js';

const mock = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img8.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    title: 'Lorem ipsum dolor sit amet,',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
    description: 'Excepteur sint occaecat cupidatat non proident',
    title: 'Consectetur adipiscing elit',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img12.jpg',
    description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    title: 'Labore et dolore magna aliqua',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img11.jpg',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    title: 'Eiusmod tempor incididunt',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img11.jpg',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
    title: 'Sed ut perspiciatis',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img12.jpg',
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Unde omnis iste natus',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
    description:
      'On the other hand, we denounce with righteous indignation and dislike',
    title: 'Sit voluptatem',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img8.jpg',
    description: 'Quos dolores et quas molestias excepturi',
    title: 'Accusantium doloremque',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img12.jpg',
    description: 'Et harum quidem rerum facilis est et expedita distinctio',
    title: 'Totam rem aperiam',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img11.jpg',
    description: 'Nam libero tempore, cum soluta nobis est eligendi optio',
    title: 'Uae ab illo inventore',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img8.jpg',
    description: 'Itaque earum rerum hic tenetur a sapiente delectus',
    title: 'Beatae vitae dicta',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
    description:
      'On the other hand, we denounce with righteous indignation and dislike',
    title: 'Nemo enim ipsam',
  },
];

const partners = [
  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
  'https://assets.maccarianagency.com/svg/logos/hubspot-original.svg',
  'https://assets.maccarianagency.com/svg/logos/mapbox-original.svg',
  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
  'https://assets.maccarianagency.com/svg/logos/slack-original.svg',
];

function AgencyPartner({ content }) {
  const theme = useTheme();
  return (
    <>
      <Container>
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              align={'center'}
              gutterBottom
              sx={{ fontWeight: 400 }}
            >
              theFront will make your product look modern and professional while
              saving you precious time.
            </Typography>
            <Typography
              variant="h3"
              color="text.primary"
              align={'center'}
              sx={{
                fontWeight: 700,
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container paddingY={'0 !important'}>
        <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
          {partners.map((item, i) => (
            <Box
              maxWidth={{ xs: 80, sm: 90 }}
              marginTop={{ xs: 1 }}
              marginRight={{ xs: 3, sm: 6, md: 12 }}
              key={i}
            >
              <Box
                component="img"
                height={1}
                width={1}
                src={item}
                alt="..."
                sx={{
                  filter: 'contrast(0)',
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
      <Container>
        <Box>
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
                    display={'flex'}
                    flexDirection={'column'}
                  >
                    <CardMedia
                      image={item.image}
                      title={item.title}
                      sx={{
                        height: { xs: 340, md: 400 },
                        filter:
                          theme.palette.mode === 'dark'
                            ? 'brightness(0.7)'
                            : 'none',
                      }}
                    />
                    <Box component={CardContent}>
                      <Typography variant={'h6'} fontWeight={700} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant={'body2'} color="text.secondary">
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
      </Container>
      <Box
        position={'relative'}
        marginTop={{ xs: 4, md: 6 }}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 2,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
        <Container>
          <Box>
            <Box marginBottom={4}>
              <Typography
                fontWeight={700}
                variant={'h4'}
                align={'center'}
                gutterBottom
              >
                Ready to growth your business?
              </Typography>
              <Typography
                variant={'h6'}
                component={'p'}
                color={'text.secondary'}
                align={'center'}
              >
                Your website is fully responsive so visitors can view your
                content from their choice of device.
              </Typography>
            </Box>
            <Box maxWidth={600} margin={'0 auto'}>
              <Box
                component={'form'}
                noValidate
                autoComplete="off"
                sx={{
                  '& .MuiInputBase-input.MuiOutlinedInput-input': {
                    bgcolor: 'background.paper',
                  },
                }}
              >
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', md: 'row' }}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  justifyContent={{ xs: 'center' }}
                >
                  <Box
                    flex={'1 1 auto'}
                    component={TextField}
                    label="Enter your email"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    height={54}
                    sx={{
                      maxWidth: 422,
                    }}
                  />
                  <Box
                    component={Button}
                    variant="contained"
                    color="primary"
                    size="large"
                    height={54}
                    marginTop={{ xs: 2, md: 0 }}
                    marginLeft={{ md: 2 }}
                  >
                    Submit
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* <FullScreenHeroWithPromoImagesAndTypedText/> */}
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div>
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

export default AgencyPartner;
