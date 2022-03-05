/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: About 
 * Name: about 
 * Model ZUID: 6-7c4bbc-wh1sg6
 * File Created On: Mon Feb 21 2022 07:38:12 GMT-0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
  * title (text)
 * hero_content (wysiwyg_basic)
 * page_content (wysiwyg_basic)
 * hero_image (images)
 * section_image (images)
 * team_members (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-7c4bbc-wh1sg6
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

// import Main from '../../layouts/Main';
import Container from 'components/Container';

// Headliner imports
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// Gallery imports
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
// Numbers imports
import Grid from '@mui/material/Grid';
// Team imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

// mock team - Kaite would like more than 4 team members
// team component setup with map methods just need to add extra team members
const mock = [
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Clara Bertoletti',
    title: 'Junior Designer',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
];

function About({ content }) {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
      source: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
      source: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
      source: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
      source: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
      rows: 1,
      cols: 2,
    },
  ];

  //   Main is not needed in page builds as it will duplicate the header and footer

  return (
    <>
      {/* Needs margin top so it is no hidden under navbar mt={} */}
      <Box mt={10}>
        {/* Headline - start */}
        <Container>
          <Box
            sx={{
              position: 'relative',
              '&::after': {
                position: 'absolute',
                content: '""',
                width: '30%',
                zIndex: 1,
                top: 0,
                right: 0,
                height: '100%',
                backgroundSize: '18px 18px',
                backgroundImage: `radial-gradient(${alpha(
                  theme.palette.primary.dark,
                  0.4,
                )} 20%, transparent 20%)`,
                opacity: 0.2,
              },
            }}
          >
            <Box position="relative" zIndex={2}>
              <Typography
                fontWeight={600}
                variant={'h2'}
                gutterBottom
                align={'center'}
              >
                About us
              </Typography>
              <Typography
                variant="h6"
                color={'text.secondary'}
                align={'center'}
                gutterBottom
              >
                We take you by hand on each step of the process
              </Typography>
              <Typography
                variant="h6"
                color={'text.secondary'}
                align={'center'}
              >
                As experts in both design & development, we help you go through
                the complete process. From your new website idea, to design,
                development, launch and scale!
              </Typography>
            </Box>
          </Box>
        </Container>
        {/* Headline - end */}
        {/* Gallery - start */}
        <Container paddingY={'0 !important'}>
          <Box>
            <Box display={'flex'} justifyContent={'flex-end'} marginBottom={2}>
              <Button
                color="primary"
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
                onClick={() => openLightbox(0)}
              >
                Open the gallery
              </Button>
            </Box>
            <Box>
              <ImageList
                variant="quilted"
                cols={3}
                rowHeight={isMd ? 300 : 200}
                gap={isMd ? 16 : 4}
              >
                {photos.map((item, i) => (
                  <ImageListItem key={i} cols={item.cols} rows={item.rows}>
                    <LazyLoadImage
                      height={'100%'}
                      width={'100%'}
                      src={item.src}
                      alt="..."
                      effect="blur"
                      onClick={() => openLightbox(i)}
                      style={{
                        objectFit: 'cover',
                        filter:
                          theme.palette.mode === 'dark'
                            ? 'brightness(0.7)'
                            : 'none',
                        cursor: 'poiner',
                        borderRadius: 8,
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
            {viewerIsOpen && (
              <Lightbox
                mainSrc={photos[currentImage].src}
                nextSrc={photos[(currentImage + 1) % photos.length].src}
                prevSrc={
                  photos[(currentImage + photos.length - 1) % photos.length].src
                }
                onCloseRequest={() => closeLightbox()}
                onMovePrevRequest={() =>
                  setCurrentImage(
                    (currentImage + photos.length - 1) % photos.length,
                  )
                }
                onMoveNextRequest={() =>
                  setCurrentImage((currentImage + 1) % photos.length)
                }
                reactModalStyle={{ overlay: { zIndex: 1500 } }}
              />
            )}
          </Box>
        </Container>
        {/* Gallery - end */}
        {/* Numbers - start */}
        <Container maxWidth={'800px !important'}>
          <Box>
            <Grid container spacing={2}>
              {[
                {
                  title: 12,
                  subtitle: '12 years in business.',
                },
                {
                  title: '5,2K',
                  subtitle: '5.200 sold copies',
                },
                {
                  title: '99%',
                  subtitle: '99% customer statisfication.',
                },
              ].map((item, i) => (
                <Grid key={i} item xs={12} sm={4}>
                  <Typography
                    variant="h3"
                    align={'center'}
                    gutterBottom
                    sx={{
                      fontWeight: 900,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    align={'center'}
                    component="p"
                  >
                    {item.subtitle}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        {/* Number - end */}
        {/* Divider */}
        <Container maxWidth={'800px !important'}>
          <Divider />
        </Container>
        {/* Story - start */}
        <Container>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography fontWeight={700} variant={'h5'}>
                  We design and implement creative solutions to everyday
                  business problems
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  component={'p'}
                  color={'text.secondary'}
                  fontWeight={400}
                >
                  We are a team of creative consultants who help bridge the
                  digital gap between companies and their clients with websites
                  that not only serve as marketing platforms but also provide
                  solutions to online business problems and digital marketing
                  strategies that connect you with the ideal client and help
                  create a loyal customer.
                  <br />
                  <br />
                  We are a team of creative consultants who help bridge the
                  digital gap between companies and their clients with websites
                  that not only serve as marketing platforms but also provide
                  solutions to online business problems and digital marketing
                  strategies that connect you with the ideal client and help
                  create a loyal customer.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
                  {[
                    'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
                    'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
                    'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
                    'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
                    'https://assets.maccarianagency.com/svg/logos/google-original.svg',
                    'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
                  ].map((item, i) => (
                    <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
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
              </Grid>
            </Grid>
          </Box>
        </Container>
        {/* Story - end */}
        {/* Divider */}
        <Container maxWidth={'800px !important'}>
          <Divider />
        </Container>
        {/* Team start */}
        <Container>
          <Box>
            <Box marginBottom={4}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                gutterBottom
                color={'text.secondary'}
                align={'center'}
              >
                Our team
              </Typography>
              <Typography fontWeight={700} variant={'h4'} align={'center'}>
                Trust the professionals
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {mock.map((item, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Box
                    component={Card}
                    boxShadow={2}
                    sx={{
                      textDecoration: 'none',
                      transition: 'all .2s ease-in-out',
                      '&:hover': {
                        transform: `translateY(-${theme.spacing(1 / 2)})`,
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        component={Avatar}
                        src={item.avatar}
                        height={80}
                        width={80}
                      />
                      <Box marginTop={4}>
                        <ListItemText
                          primary={item.name}
                          secondary={item.title}
                        />
                        <Typography
                          variant={'subtitle2'}
                          color={'text.secondary'}
                        >
                          {item.about}
                        </Typography>
                        <Box marginTop={4}>
                          <IconButton size={'small'} color={'primary'}>
                            <FacebookIcon />
                          </IconButton>
                          <IconButton size={'small'} color={'primary'}>
                            <GitHubIcon />
                          </IconButton>
                          <IconButton size={'small'} color={'primary'}>
                            <TwitterIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
        {/* <br />
         <br />
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
         </div> */}
        {/* End of Zesty.io output example */}
      </Box>
    </>
  );
}

export default About;
