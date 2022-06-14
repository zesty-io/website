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
  Link,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import bgImage from '../../../public/assets/images/headless-cms/bgImage.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useMediaQuery from '@mui/material/useMediaQuery';
import headless_digital from '../../../public/assets/images/headless-cms/headless-digital.svg';
import headless_commerce from '../../../public/assets/images/headless-cms/headless-commerce.svg';
import headless_enterprise from '../../../public/assets/images/headless-cms/headless-enterprise.svg';
import headless_blog_editorial from '../../../public/assets/images/headless-cms/headless-blogs-editorial.svg';
import connection from '../../../public/assets/images/headless-cms/connection.svg';
import connectionMobile from '../../../public/assets/images/headless-cms/connection-mobile.svg';
import connectionSmall from '../../../public/assets/images/headless-cms/connection-small.svg';
import chevron_left from '../../../public/assets/images/headless-cms/chevron-left.svg';
import chevron_right from '../../../public/assets/images/headless-cms/chevron-right.svg';
import curve from '../../../public/assets/images/headless-cms/curve.svg';
import curve_dark from '../../../public/assets/images/headless-cms/curve-dark.svg';
import curve_mobile from '../../../public/assets/images/headless-cms/curve-mobile.svg';
import s_curve from '../../../public/assets/images/headless-cms/sCurve.svg';
import tech_stack from '../../../public/assets/images/headless-cms/tech-stack.png';
import TryFreeButton from '../../components/cta/TryFreeButton';
import MuiMarkdown from 'mui-markdown';

function TechnologyOverview({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  const pageData = {
    theme,
    isMobile,
    isDarkMode,
    content,
  };

  const useCase = [
    {
      logo: headless_digital,
      description: 'Headless digital asset management',
    },
    {
      logo: headless_commerce,
      description: 'Headless commerce',
    },
    {
      logo: headless_enterprise,
      description: 'Headless enterprise',
    },
    {
      logo: headless_blog_editorial,
      description: 'Blogs & editorial',
    },
  ];

  return (
    <Box>
      <Hero {...pageData} />
      <UseCase useCaseData={useCase} {...pageData} />
      <TimeLine {...pageData} />
      <GetStarted {...pageData} />
      <Features {...pageData} />
      <HeadlessApi {...pageData} />
      <TopBrands {...pageData} />
      <Articles {...pageData} />
      <TechStack {...pageData} />
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

// Use case Section
const UseCase = ({ theme, isMobile, isDarkMode, useCaseData, content }) => {
  return (
    <Box sx={{ pt: 10 }} component="section">
      <Container>
        {/* Features Cards Start */}
        <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
          {useCaseData.map((item, idx) => (
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
                    src={item.logo.src}
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
                    {item.description}
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

// Timline Section
const TimeLine = ({ theme, isMobile, content }) => {
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

// Get Started Section
const GetStarted = ({ isDarkMode, theme, isMobile, content }) => {
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
            src={content.get_started_graphic.data[0].url}
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
            <MuiMarkdown
              overrides={{
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h2',
                    sx: {
                      textAlign: isMobile ? 'center' : 'left',
                      letterSpacing: 1,
                      background: theme.palette.zesty.zestyOrangeLinear,
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: 'bold',
                    },
                  },
                },
                span: {
                  component: Typography,
                  props: {
                    variant: 'h4',
                    component: 'h4',
                    sx: {
                      ml: isMobile ? 1 : 0,
                      fontWeight: 'bold',
                      color: isDarkMode
                        ? theme.palette.common.white
                        : theme.palette.zesty.zestyZambezi,
                    },
                  },
                },
              }}
            >
              {content.get_started_header}
            </MuiMarkdown>
          </Box>
          <Box sx={{ width: '100%', px: isMobile ? 4 : 0, mt: 4 }}>
            <TryFreeButton
              fullWidth={isMobile}
              variant="contained"
              size="large"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

// Features Section
const Features = ({ theme, isMobile, isDarkMode, content }) => {
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
          <MuiMarkdown
            overrides={{
              h2: {
                component: Typography,
                props: {
                  variant: 'h3',
                  component: 'h2',
                  sx: {
                    mt: isMobile ? 5 : 0,
                    color: theme.palette.zesty.zestyOrange,
                    fontWeight: 'bold',
                    letterSpacing: 0.2,
                    textAlign: 'center',
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  variant: 'h4',
                  component: 'h3',
                  sx: {
                    mt: 2,
                    textAlign: 'center',
                    color: theme.palette.zesty.zestyZambezi,
                    letterSpacing: 0.2,
                  },
                },
              },
            }}
          >
            {content.custom_headless_description}
          </MuiMarkdown>
        </Box>

        <Grid
          sx={{ mt: 5, justifyContent: 'center', alignItems: 'center' }}
          container
          spacing={useMediaQuery(theme.breakpoints.between('xs', 600)) ? 2 : 5}
        >
          {content.features_tiles.data.map((item) => (
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
                      src={item.icon_image.data[0].url}
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
                      {item.feature_name}
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
                      {item.content}
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

// Headless Api Section
const HeadlessApi = ({ theme, isMobile, content }) => {
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
            <MuiMarkdown
              overrides={{
                h2: {
                  component: Typography,
                  props: {
                    sx: {
                      mt: isMobile ? 5 : 0,
                      color: theme.palette.zesty.zestyOrange,
                      fontWeight: 'bold',
                      letterSpacing: 0.2,
                      textAlign: 'center',
                    },
                    variant: 'h3',
                    component: 'h2',
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    sx: {
                      mt: 2,
                      textAlign: 'center',
                      color: theme.palette.zesty.zestyZambezi,
                      letterSpacing: 0.2,
                    },
                    variant: 'h4',
                    component: 'h3',
                  },
                },
              }}
            >
              {content.headless_apis}
            </MuiMarkdown>
          </Box>

          <Box
            sx={{
              display: 'inline-block',
              margin: 'auto',
              mt: 5,
              width: '100%',
            }}
            src={content.headless_apis_graphic.data[0].url}
            component="img"
          />
        </Container>
      </Box>
    </Box>
  );
};

// Top Brands Section
const TopBrands = ({ theme, content, isMobile, isDarkMode }) => {
  const caseStudies = [...content.case_studies.data];
  const [active, setActive] = useState(caseStudies[0]);
  /**
   * set the current active case study
   * @param idx - the index of the case study that was clicked
   */
  const caseStudyActiveHandler = (idx) => {
    setActive(caseStudies[idx]);
  };

  return (
    <Box component="section">
      <Box>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mt: 5,
            color: theme.palette.zesty.zestyZambezi,
            textAlign: 'center',
            fontWeight: 'bold',
            px: 4,
          }}
        >
          {content.case_study_header}
        </Typography>
      </Box>
      <Box
        component="section"
        sx={{ background: theme.palette.zesty.zestySeaShell, py: 5, mt: 5 }}
      >
        <Container>
          <Grid container>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              order={{ xs: 2, md: 1 }}
              sm={12}
              md={3}
            >
              <Box
                sx={{
                  flexDirection: isMobile ? 'row' : 'column',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 4,
                  mt: 4,
                  flexWrap: 'wrap',
                }}
              >
                {caseStudies.map((item, idx) => (
                  <Button
                    onClick={() => caseStudyActiveHandler(idx)}
                    sx={{ opacity: item.title === active.title ? 1 : 0.3 }}
                  >
                    <Box
                      sx={{
                        width: 126,
                        height: 43,
                        filter: isDarkMode ? 'invert(100%)' : 'inherit',
                      }}
                      src={item.logo.data[0].url}
                      component="img"
                    />
                  </Button>
                ))}
              </Box>
            </Grid>
            <Grid order={{ xs: 1, md: 2 }} item sm={12} md={9}>
              <Card
                sx={{
                  p: 5,
                  mt: 5,
                  minHeight: 294,
                  background: isDarkMode
                    ? 'transparent'
                    : theme.palette.common.white,

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Grid container spacing={2}>
                  <Grid sx={{ width: '100%' }} item sm={12} lg={6}>
                    <Box>
                      <Box
                        sx={{
                          borderRadius: 5,
                          display: 'block',
                          width: '100%',
                          maxWidth: 341,
                          minHeight: 218,
                        }}
                        component="img"
                        src={active.image.data[0].url}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                    item
                    sm={12}
                    lg={6}
                  >
                    <Box>
                      <Box>
                        <Box
                          sx={{
                            my: 2,
                            width: 143,
                            filter: isDarkMode ? 'invert(100%)' : 'inherit',
                          }}
                          component="img"
                          src={active.logo.data[0].url}
                        />
                      </Box>

                      <MuiMarkdown
                        overrides={{
                          p: {
                            component: Typography,
                            props: {
                              variant: 'h6',
                              component: 'p',
                              sx: {
                                color: theme.palette.zesty.zestyZambezi,
                                letterSpacing: 0,
                                lineHeight: '25px',
                              },
                            },
                          },
                        }}
                      >
                        {active.summary}
                      </MuiMarkdown>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

// Industry Insightss
const Articles = ({ theme, isMobile, content, isDarkMode }) => {
  const articles = [...content.articles.data];

  return (
    <Box sx={{ pt: 10 }} component="section">
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 5,
            alignItems: 'center',
            mt: 5,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 216,
              height: 2,
              background: theme.palette.zesty.zestyOrange,
            }}
          />
          <Typography
            sx={{ fontWeight: 'bold', color: theme.palette.zesty.zestyZambezi }}
            variant="h3"
            component="h2"
          >
            Industry Insights
          </Typography>
          <Box
            sx={{
              width: '100%',
              maxWidth: 216,
              height: 2,
              background: theme.palette.zesty.zestyOrange,
            }}
          />
        </Box>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {articles.map((item) => (
            <Grid item xs={12} sm={6} lg={4}>
              <Box
                sx={{
                  backgroundImage: `url(${item.hero_image.data[0].url})`,
                  position: 'relative',
                  height: '100%',
                  minHeight: 475,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'top',
                  backgroundSize: 'cover',
                }}
              >
                <Box
                  sx={{
                    justifyContent: 'flex-end',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(109, 46, 0, 0.44)',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      p: 4,
                    }}
                  >
                    <Typography
                      sx={{
                        lineHeight: 1.2,
                        color: theme.palette.common.white,
                        fontWeight: 'bold',
                      }}
                      variant="h5"
                      component="h3"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        lineHeight: 1.2,
                        color: theme.palette.common.white,
                        fontWeight: 'medium',
                      }}
                      variant="Subtitle1"
                      component="p"
                    >
                      {item.description}
                    </Typography>

                    <Link
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: theme.palette.zesty.zestyTealWhite,
                        fontWeight: 'bold',
                      }}
                      href={item.meta.web.uri}
                    >
                      Learn More <ArrowRightAltIcon />
                    </Link>
                  </Box>

                  <Box
                    sx={{
                      py: 1,
                      px: 4,
                      borderTop: `2px solid ${theme.palette.common.white}`,
                      background: 'rgba(0, 0, 0, 0.35)',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        component="a"
                        sx={{ textDecoration: 'none' }}
                        href={item.author.data[0].meta.web.uri}
                      >
                        <Box
                          sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
                        >
                          <Box
                            component="img"
                            sx={{ width: 40, height: 40, borderRadius: '50%' }}
                            src={item.author.data[0].headshot.data[0].url}
                          />
                          <Typography
                            variant="subtitle1"
                            component="span"
                            sx={{
                              color: theme.palette.common.white,
                              fontWeight: 'bold',
                            }}
                          >
                            {item.author.data[0].name}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: theme.palette.common.white,
                            fontWeight: 'bold',
                          }}
                        >
                          {item.date}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Section Tech Stack Section
const TechStack = ({ theme, isMobile, content }) => {
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
              <MuiMarkdown
                overrides={{
                  span: {
                    component: Typography,
                    props: {
                      variant: 'h3',
                      component: 'span',
                      sx: {
                        fontWeight: 'bold',
                        fontWeight: 'regular',
                        color: theme.palette.zesty.zestyOrange,
                      },
                    },
                  },
                  h2: {
                    component: Typography,
                    props: {
                      variant: 'h4',
                      component: 'h3',
                      sx: {
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                  h3: {
                    component: Typography,
                    props: {
                      variant: 'h3',
                      component: 'h2',
                      sx: {
                        mt: 2,
                        fontWeight: 'bold',
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },

                  p: {
                    component: Typography,
                    props: {
                      variant: 'h5',
                      component: 'p',
                      sx: {
                        mt: 2,
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                }}
              >
                {content.integrations_description}
              </MuiMarkdown>

              <Box sx={{ width: '100%', mt: 4 }}>
                <Button
                  component={'a'}
                  target="_blank"
                  fullWidth={isMobile}
                  variant="contained"
                  href={content.integration_link.data[0].meta.web.uri}
                  sx={{
                    background: theme.palette.zesty.zestyOrange,
                    color: theme.palette.common.white,
                    px: 6,
                  }}
                  size="large"
                >
                  {content.integrations_button}
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
