/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Technology Overview
 * Name: technology_overview
 * Model ZUID: 6-bea29b8bc7-163xd7
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
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
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-bea29b8bc7-163xd7
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 * View  /solutions/headless-cms
 */

import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import bgImage from '../../../public/assets/images/headless-cms/bgImage.png';
import header_image from '../../../public/assets/images/headless-cms/header_image.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useMediaQuery from '@mui/material/useMediaQuery';
import headless_digital from '../../../public/assets/images/headless-cms/headless-digital.svg';
import headless_commerce from '../../../public/assets/images/headless-cms/headless-commerce.svg';
import headless_enterprise from '../../../public/assets/images/headless-cms/headless-enterprise.svg';
import headless_blog_editorial from '../../../public/assets/images/headless-cms/headless-blogs-editorial.svg';
import connection from '../../../public/assets/images/headless-cms/connection.svg';
import connectionMobile from '../../../public/assets/images/headless-cms/connection-mobile.svg';
import connectionSmall from '../../../public/assets/images/headless-cms/connection-small.svg';
import image_one from '../../../public/assets/images/headless-cms/image-one.png';
import image_two from '../../../public/assets/images/headless-cms/image-two.png';
import image_three from '../../../public/assets/images/headless-cms/image-three.png';
import image_four from '../../../public/assets/images/headless-cms/image-four.png';
import image_five from '../../../public/assets/images/headless-cms/image-five.png';
import image_six from '../../../public/assets/images/headless-cms/image-six.png';
import image_seven from '../../../public/assets/images/headless-cms/image-seven.png';
import chevron_left from '../../../public/assets/images/headless-cms/chevron-left.svg';
import chevron_right from '../../../public/assets/images/headless-cms/chevron-right.svg';
import curve from '../../../public/assets/images/headless-cms/curve.svg';
import curve_dark from '../../../public/assets/images/headless-cms/curve-dark.svg';
import curve_mobile from '../../../public/assets/images/headless-cms/curve-mobile.svg';
import s_curve from '../../../public/assets/images/headless-cms/sCurve.svg';
import localize_content from '../../../public/assets/images/headless-cms/localize-content.svg';
import mobile_made_easy from '../../../public/assets/images/headless-cms/mobile-made-easy.svg';
import automated_seo from '../../../public/assets/images/headless-cms/automated-seo.svg';
import faster_page_load_time from '../../../public/assets/images/headless-cms/faster-page-load-time.svg';
import flexible_asset_management from '../../../public/assets/images/headless-cms/flexible-asset-management.svg';
import custom_endpoints from '../../../public/assets/images/headless-cms/custom-endpoints.svg';
import url_routing_management from '../../../public/assets/images/headless-cms/url-routing-management.svg';
import redirects from '../../../public/assets/images/headless-cms/301-redirects.svg';
import easy_editing_experience from '../../../public/assets/images/headless-cms/easy-editing-experience.svg';
import image_eight from '../../../public/assets/images/headless-cms/image_eight.png';
import sing_life from '../../../public/assets/images/headless-cms/singlife.svg';
import amazon from '../../../public/assets/images/headless-cms/amazon.svg';
import fitbit from '../../../public/assets/images/headless-cms/fitbit.svg';
import tech_stack from '../../../public/assets/images/headless-cms/tech-stack.png';
import TryFreeButton from '../../components/cta/TryFreeButton';
import MuiMarkdown from 'mui-markdown';

function TechnologyOverview({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  const themeSettings = {
    theme,
    isMobile,
    isDarkMode,
  };

  const card_icons = [
    headless_digital,
    headless_commerce,
    headless_enterprise,
    headless_blog_editorial,
  ];
  const features = [
    {
      icon: localize_content,
      title: 'Localized Content',
      description:
        'Go global with multi-language and localized content capabilities.',
    },
    {
      icon: mobile_made_easy,
      title: 'Mobile Made Easy',
      description:
        'Quickly adapt your content to mobile and tablet devices without having to redesign everything.',
    },
    {
      icon: automated_seo,
      title: 'Automated SEO',
      description:
        'From meta tags to optimized page speed, let Zesty do the work to keep your SEO running smoothly.',
    },
    {
      icon: faster_page_load_time,
      title: 'Faster Page Load Times',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
    },
    {
      icon: flexible_asset_management,
      title: 'Flexible Digital Asset Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
    },
    {
      icon: custom_endpoints,
      title: 'Custom Endpoints',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
    },
    {
      icon: url_routing_management,
      title: 'URL routing management',
      description:
        'You can define URLs without the need for a developer & create new pages without needing to create with a developer',
    },
    {
      icon: redirects,
      title: ' 301 Redirects',
      description:
        'Manage redirects in the platform without the need for a developer',
    },
    {
      icon: easy_editing_experience,
      title: ' Easy editing experience',
      description: 'Non-developers don’t have to be afraid',
    },
  ];

  const trustIcons = [sing_life, amazon, fitbit];
  return (
    <Box>
      <Hero content={content} {...themeSettings} />
      <UseCase content={content} cardIcons={card_icons} {...themeSettings} />
      <SectionTwo content={content} {...themeSettings} />
      <SectionThree content={content} {...themeSettings} />
      <SectionFour content={content} features={features} {...themeSettings} />
      <SectionFive content={content} {...themeSettings} />
      <SectionSix
        content={content}
        trustIcons={trustIcons}
        {...themeSettings}
      />
      <TechStack content={content} {...themeSettings} />
    </Box>
  );
}

// Hero Section
const Hero = ({ theme, isMobile, content }) => (
  <Box
    sx={{
      overflow: 'hidden',
      position: 'relative',
      mt: 2,
      pt: 25,
      minHeight: 900,
      display: 'flex',
      justifyContent: 'center',
    }}
    component={'section'}
    style={{
      background: isMobile
        ? theme.palette.zesty.zestyBlueGradient
        : theme.palette.zesty.zestyTealGradient,
    }}
  >
    <Box
      component="img"
      style={{
        position: 'absolute',
        left: isMobile ? '' : '10%',
        top: 0,
      }}
      src={bgImage.src}
    />
    <Container sx={{ position: 'relative' }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              height: '100%',
            }}
          >
            <Box
              sx={{
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Typography
                color={theme.palette.common.white}
                variant="h4"
                component={'p'}
                sx={{ fontWeight: 'bold' }}
              >
                {content.header_eyebrow}
              </Typography>
              <Typography
                color={theme.palette.common.white}
                sx={{ fontWeight: 'bold' }}
                variant="h3"
                component={'h1'}
              >
                {content.title}
              </Typography>
              <Typography
                color={theme.palette.common.white}
                variant="h6"
                component={'h3'}
              >
                {content.header_description}
              </Typography>
            </Box>
            <Box>
              {/* <Button
                component={'a'}
                target="_blank"
                fullWidth={isMobile}
                variant="contained"
                sx={{
                  background: theme.palette.common.white,
                  color: theme.palette.zesty.zestyOrange,
                  px: 6,
                }}
                size="large"
              >
                Try Free
              </Button> */}
              <Box sx={{ display: isMobile ? 'block' : 'flex' }}>
                <TryFreeButton
                  fullWidth={isMobile}
                  variant="contained"
                  size="large"
                />
                <Button
                  href={content.cta_right_url.data[0].meta.web.uri}
                  component="a"
                  fullWidth={isMobile}
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    '&:hover': {
                      background: 'transparent',
                    },
                    textDecoration: 'underline',
                    color: theme.palette.common.white,
                    px: 6,
                    my: isMobile && 3,
                  }}
                  size="large"
                >
                  {content.cta_right_text}
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          item
          sm={12}
          md={6}
        >
          <Box sx={{ display: 'flex' }}>
            <Box
              component="img"
              style={{ width: '100%' }}
              src={content.header_image.data[0].url}
            />
          </Box>
        </Grid>
        <Typography
          sx={{
            textAlign: 'center',
            position: isMobile ? 'relative' : 'absolute',
            pt: isMobile ? 10 : 0,
            px: isMobile ? 1 : 2,
            bottom: 0,
            color: theme.palette.zesty.zestyZambezi,
          }}
          variant={'h6'}
          component={'p'}
        >
          {content.use_cases_text}
        </Typography>
      </Grid>
    </Container>
  </Box>
);

// Section One
const UseCase = ({ theme, isMobile, isDarkMode, cardIcons, content }) => {
  return (
    <Box sx={{ pt: 10 }} component="section">
      <Container>
        {/* Features Cards Start */}
        <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
          {cardIcons.map((image, idx) => (
            <Grid item sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: 3,
                  width: '100%',
                  maxWidth: useMediaQuery(theme.breakpoints.between('xs', 545))
                    ? 155
                    : 233,
                  minHeight: 190,
                  margin: 'auto',
                }}
              >
                <CardContent>
                  <Box
                    component={'img'}
                    style={{ display: 'block', margin: 'auto' }}
                    src={image.src}
                  />
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      fontSize: isMobile ? 16 : 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      mt: 2,
                      color: theme.palette.zesty.zestyZambezi,
                    }}
                  >
                    Headless digital asset management
                  </Typography>
                </CardContent>
              </Card>
              <Box
                sx={{
                  pt: 2,
                  display:
                    idx === 2 || idx === 3
                      ? 'none'
                      : isMobile
                      ? 'block'
                      : 'none',
                }}
              >
                <Box
                  component="img"
                  style={{
                    display: 'block',
                    margin: 'auto',
                    width: '100%',
                    maxWidth: 17,
                  }}
                  src={connectionSmall.src}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Connections */}
        <Box sx={{ pt: 2 }}>
          <Box
            component="img"
            style={{
              display: 'block',
              margin: 'auto',
              width: '100%',
              maxWidth: isMobile ? 250 : 999,
            }}
            src={isMobile ? connectionMobile.src : connection.src}
          />
        </Box>

        {/* Image One */}
        <Box>
          <img
            style={{
              display: 'block',
              margin: 'auto',
              width: '100%',
              maxWidth: isMobile ? '100%' : 824,
            }}
            src={content.use_cases_graphic.data[0].url}
          />
        </Box>

        {/* Headless CMS Explained Start */}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 10,
          }}
        >
          <MuiMarkdown
            overrides={{
              h2: {
                component: 'h2',
                props: {
                  style: {
                    fontSize: isMobile ? 18 : 32,
                    color: theme.palette.zesty.zestyZambezi,
                    textAlign: 'center',
                  },
                },
              },
              p: {
                component: 'p',
                props: {
                  style: {
                    textAlign: 'center',
                    color: theme.palette.zesty.zestyZambezi,
                    mt: 4,
                    fontSize: isMobile ? 16 : 20,
                  },
                },
              },
            }}
          >
            {content.headless_cms_explained}
          </MuiMarkdown>
        </Box>

        {/* Image Two */}
        <Box sx={{ mt: 4 }}>
          <Box
            component="img"
            style={{
              display: 'block',
              margin: 'auto',
              width: '100%',
              maxWidth: isMobile ? '100%' : 824,
            }}
            src={content.headless_cms_explained_image.data[0].url}
          />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            ml: isMobile ? 4.9 : 4.2,
          }}
          component="img"
          src={
            isMobile
              ? curve_mobile.src
              : isDarkMode
              ? curve_dark.src
              : curve.src
          }
        />
      </Container>
    </Box>
  );
};

// Section Two
const SectionTwo = ({ theme, isMobile, content }) => {
  const timeline = [
    {
      description: content.step_1_description,
      image: content.step_1_image.data[0].url,
    },
    {
      description: content.step_2_description,
      image: content.step_2_image.data[0].url,
    },
    {
      description: content.step_3_description,
      image: content.step_3_image.data[0].url,
    },
    {
      description: content.step_4_description,
      image: content.step_4_image.data[0].url,
    },
  ];
  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestyDarkBlue,
        mt: 14,
        position: 'relative',
        borderRadius: 5,
        overflow: 'hidden',
      }}
      component="section"
    >
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '5%',
          width: isMobile ? 264 : 'auto',
        }}
        component="img"
        src={chevron_right.src}
      />

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: '5%',
          width: isMobile ? 264 : 'auto',
        }}
        component="img"
        src={chevron_left.src}
      />
      <Container>
        <Box sx={{ color: 'white' }}>
          <Box sx={{ position: 'relative' }} component="ul">
            {/* Content One */}
            <Box
              sx={{
                py: isMobile ? 3 : 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: 400,
                listStyleType: 'none',
                borderTopLeftRadius: 155,
                position: 'relative',
              }}
              component="li"
            >
              <Box sx={{ ml: 4, mt: isMobile ? 0 : 15 }}>
                <MuiMarkdown
                  overrides={{
                    h2: {
                      component: Typography,
                      props: {
                        component: 'h2',
                        variant: 'h3',
                        sx: {
                          textAlign: isMobile ? 'center' : 'left',
                          fontWeight: 'bold',
                          background: theme.palette.zesty.zestyOrangeLinear,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          color: 'transparent',
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        variant: 'h4',
                        component: 'p',
                        sx: {
                          marginTop: 2,
                          textAlign: isMobile ? 'center' : 'left',
                          fontSize: isMobile ? 25 : 32,
                        },
                      },
                    },
                  }}
                >
                  {content.how_it_works_header}
                </MuiMarkdown>
              </Box>
            </Box>
            {/* Content Loop */}
            {timeline.map((item) => (
              <Box
                sx={{
                  py: isMobile ? 3 : 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: 400,
                  listStyleType: 'none',
                  borderLeft: `2px solid ${
                    isMobile
                      ? theme.palette.zesty.zestyBlue2
                      : theme.palette.common.white
                  }`,
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    width: 15,
                    height: 15,
                    background: theme.palette.zesty.whiteGray,
                    border: `2px solid ${
                      isMobile
                        ? theme.palette.zesty.zestyBlue2
                        : theme.palette.common.white
                    }`,
                    zIndex: 2,
                    borderRadius: '50%',
                    position: 'absolute',
                    left: -8,
                    top: isMobile ? '32%' : '22%',
                  },
                }}
                component="li"
              >
                <Grid container spacing={2}>
                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                    item
                    sm={12}
                    md={6}
                  >
                    <Box sx={{ ml: 4 }}>
                      <MuiMarkdown
                        overrides={{
                          h3: {
                            component: Typography,
                            props: {
                              variant: 'h4',
                              component: 'h2',
                              sx: {
                                fontWeight: 'bold',
                                background:
                                  theme.palette.zesty.zestyOrangeLinear,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                              },
                            },
                          },
                          p: {
                            component: Typography,
                            props: {
                              variant: 'h4',
                              component: 'p',
                              sx: {
                                mt: 2,
                              },
                            },
                          },
                        }}
                      >
                        {item.description}
                      </MuiMarkdown>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      sx={{
                        width: '100%',
                        maxWidth: isMobile ? '100%' : 501,
                        height: isMobile ? '100%' : 356,
                      }}
                      src={item.image}
                      component="img"
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Section Three
const SectionThree = ({ isDarkMode, theme, isMobile }) => {
  return (
    <Box
      component="section"
      sx={{ position: 'relative', mt: 15, minHeight: 610 }}
    >
      <Box
        sx={{
          position: 'absolute',
          margin: 'auto',
          display: 'block',
          width: '100%',
        }}
        component="img"
        src={s_curve.src}
      />
      <Grid container spacing={2}>
        <Grid order={{ sm: 2, md: 1 }} item sm={12} md={6}>
          <Box
            sx={{
              display: 'block',
              margin: 'auto',
              width: '100%',
              maxWidth: 579,
            }}
            component="img"
            src={image_seven.src}
          />
        </Grid>

        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-start',
            flexDirection: 'column',
          }}
          item
          sm={12}
          md={6}
          order={{ sm: 1, md: 2 }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: isMobile ? 'center' : 'left',
                letterSpacing: 1,
                background: theme.palette.zesty.zestyOrangeLinear,
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
              }}
              variant="h4"
              component="h2"
            >
              Ready to transform your digital experiences?
              <Typography
                variant="h4"
                sx={{
                  ml: isMobile ? 1 : 0,
                  fontWeight: 'bold',
                  color: isDarkMode
                    ? theme.palette.common.white
                    : theme.palette.zesty.zestyZambezi,
                }}
                component={isMobile ? 'span' : 'p'}
              >
                Get started with Zesty Headless CMS
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ width: '100%', px: isMobile ? 4 : 0, mt: 4 }}>
            <Button
              component={'a'}
              target="_blank"
              fullWidth={isMobile}
              variant="contained"
              sx={{
                background: theme.palette.zesty.zestyOrange,
                color: theme.palette.common.white,
                px: 6,
              }}
              size="large"
            >
              Try Free
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

// Section Four
const SectionFour = ({ theme, isMobile, features, isDarkMode }) => {
  return (
    <Box component="section" sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '15%',
          width: isMobile ? 264 : 'auto',
        }}
        component="img"
        src={chevron_right.src}
      />
      <Container sx={{ position: 'relative', zIndex: 10 }}>
        <Box>
          <Typography
            sx={{
              mt: isMobile ? 5 : 0,
              color: theme.palette.zesty.zestyOrange,
              fontWeight: 'bold',
              letterSpacing: 0.2,
              textAlign: 'center',
            }}
            variant="h3"
            component="h2"
          >
            How our headless CMS works
          </Typography>
          <Typography
            sx={{
              mt: 2,
              textAlign: 'center',
              color: theme.palette.zesty.zestyZambezi,
              letterSpacing: 0.2,
            }}
            variant="h4"
            component="h3"
          >
            Create content across devices in minutes. Leverage any endpoint and
            customize your API using our robust platform.
          </Typography>
        </Box>

        <Grid
          sx={{ mt: 5, justifyContent: 'center', alignItems: 'center' }}
          container
          spacing={useMediaQuery(theme.breakpoints.between('xs', 600)) ? 2 : 5}
        >
          {features.map((item) => (
            <Grid item sm={6} md={4}>
              <Card
                sx={{
                  width: '100%',
                  maxWidth: useMediaQuery(theme.breakpoints.between('xs', 600))
                    ? 155
                    : 355,
                  minHeight: 329,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: 'white',
                }}
              >
                <CardContent>
                  <Box>
                    <Box
                      sx={{
                        width: useMediaQuery(
                          theme.breakpoints.between('xs', 600),
                        )
                          ? 39
                          : 'auto',
                      }}
                      component="img"
                      src={item.icon.src}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        mt: 3,
                        fontWeight: 'bold',
                        color: theme.palette.zesty.zestyOrange,
                        letterSpacing: 0.2,
                        fontSize: isMobile ? 15 : 20,
                      }}
                      variant="h6"
                      component="h4"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        color: isDarkMode
                          ? theme.palette.zesty.zestyGrey
                          : theme.palette.zesty.zestyZambezi,
                        letterSpacing: 0.2,
                        fontSize: isMobile ? 12 : 16,
                      }}
                      variant="body1"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Section Five
const SectionFive = ({ theme, isMobile }) => {
  return (
    <Box component="section" sx={{ px: 4, mt: 10 }}>
      <Box
        sx={{
          background: theme.palette.zesty.zestySeaShell,
          borderRadius: 10,
          py: 10,
        }}
      >
        <Container>
          <Box>
            <Typography
              sx={{
                mt: isMobile ? 5 : 0,
                color: theme.palette.zesty.zestyOrange,
                fontWeight: 'bold',
                letterSpacing: 0.2,
                textAlign: 'center',
              }}
              variant="h3"
              component="h2"
            >
              Design Headless APIs
            </Typography>
            <Typography
              sx={{
                mt: 2,
                textAlign: 'center',
                color: theme.palette.zesty.zestyZambezi,
                letterSpacing: 0.2,
              }}
              variant="h4"
              component="h3"
            >
              Create content across devices in minutes. Leverage any endpoint
              and customize your API using our robust platform.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'inline-block',
              margin: 'auto',
              mt: 5,
              width: '100%',
            }}
            src={image_eight.src}
            component="img"
          />
        </Container>
      </Box>
    </Box>
  );
};

// SectionSix
const SectionSix = ({ theme, isMobile, trustIcons }) => {
  return (
    <Box component="section" sx={{ mt: 10 }}>
      <Box>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            color: theme.palette.zesty.zestyZambezi,
            textAlign: 'center',
            fontWeight: 'bold',
            px: 4,
          }}
        >
          See why top brands trust Zesty headless CMS
        </Typography>
      </Box>
      <Container>
        <Box
          sx={{
            p: 5,
            mt: 5,
            minHeight: 294,
            background: theme.palette.zesty.zestyDarkBlue,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Box>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    color: theme.palette.common.white,
                    letterSpacing: 0,
                    lineHeight: '25px',
                  }}
                >
                  Personalized, omnichannel, multi-language commerce
                  experiences: whatever you need, Zesty can help you get there.
                  Personalized, omnichannel, multi-language commerce
                  experiences: whatever you need, Zesty can help you get there.
                </Typography>
              </Box>
            </Grid>
            <Grid sx={{ width: '100%' }} item sm={12} md={6}>
              <Box>
                <Box
                  sx={{ display: 'block', margin: 'auto', mt: 4 }}
                  component="img"
                  src={sing_life.src}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          mt: 4,
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{ width: 126, height: 43 }}
          src={sing_life.src}
          component="img"
        />
        <Box sx={{ width: 126, height: 43 }} src={amazon.src} component="img" />
        <Box sx={{ width: 126, height: 43 }} src={fitbit.src} component="img" />
      </Box>
    </Box>
  );
};

// Section Tech Stack
const TechStack = ({ theme, isMobile }) => {
  return (
    <Box component="section" sx={{ px: 4, mt: 10 }}>
      <Box
        sx={{
          background: theme.palette.zesty.zestySeaShell,
          borderRadius: 10,
          py: 10,
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Typography
                sx={{ color: theme.palette.zesty.zestyZambezi }}
                variant="h4"
                component="h3"
              >
                Integrations
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontWeight: 'bold',
                  color: theme.palette.zesty.zestyZambezi,
                }}
                variant="h3"
                component="h2"
              >
                A{' '}
                <Box
                  component="span"
                  sx={{ color: theme.palette.zesty.zestyOrange }}
                >
                  Headless CMS
                </Box>{' '}
                That Plays Well with Your Tech Stack
              </Typography>

              <Typography
                sx={{
                  mt: 2,

                  color: theme.palette.zesty.zestyZambezi,
                }}
                variant="h5"
                component="p"
              >
                Sub content introducing integrations
              </Typography>

              <Box sx={{ width: '100%', mt: 4 }}>
                <Button
                  component={'a'}
                  target="_blank"
                  fullWidth={isMobile}
                  variant="contained"
                  sx={{
                    background: theme.palette.zesty.zestyOrange,
                    color: theme.palette.common.white,
                    px: 6,
                  }}
                  size="large"
                >
                  See All
                </Button>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box sx={{ mt: isMobile ? 4 : 0 }}>
                <Box
                  sx={{ width: '100%' }}
                  component="img"
                  src={tech_stack.src}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default TechnologyOverview;
