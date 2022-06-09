/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless eCommerce 
 * Name: headless_ecommerce 
 * Model ZUID: 6-b69895e8cf-p4125x

 * File Created On: Tue May 31 2022 23:39:21 GMT+0800 (Philippine Standard Time)

 * 
 * Model Fields:
 * 
  * header_eyebrow (text)
 * header_h1 (text)
 * header_description (textarea)
 * header_cta_button_primary (text)
 * header_cta_button_secondary (text)
 * header_graphic (images)
 * headless_cms_benefit_description (wysiwyg_basic)
 * headless_cms_benefit_graphic (images)
 * traditional_v_headless_description (wysiwyg_basic)
 * traditional_v_headless_cta (text)
 * traditional_v_headless_link (internal_link)
 * traditional_description (wysiwyg_basic)
 * traditional_graphic (images)
 * headless_description (wysiwyg_basic)
 * headless_graphic (images)
 * headless_ecomm_benefits_header (text)
 * benefit_1 (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2 (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * ecomm_integrations_header (text)
 * ecomm_integrations_logos (one_to_many)
 * why_zesty_description (wysiwyg_basic)
 * why_zesty_ecomm_cards (one_to_many)
 * customers (text)
 * customer_logos (one_to_many)
 * bottom_cta_description (wysiwyg_basic)
 * bottom_cta_graphic (images)
 * bottom_cta_primary (text)
 * bottom_cta_secondary (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b69895e8cf-p4125x
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
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

function HeadlessEcommerce({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Box>
      <Hero theme={theme} isMobile={isMobile} />
      <SectionOne isDarkMode={isDarkMode} theme={theme} isMobile={isMobile} />
      <SectionTwo theme={theme} isMobile={isMobile} />
      <SectionThree isDarkMode={isDarkMode} theme={theme} isMobile={isMobile} />
    </Box>
  );
}

// Hero Section
const Hero = ({ theme, isMobile }) => (
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
                Headless CMS
              </Typography>
              <Typography
                color={theme.palette.common.white}
                sx={{ fontWeight: 'bold' }}
                variant="h3"
                component={'h1'}
              >
                Build, test and deploy content quickly
              </Typography>
              <Typography
                color={theme.palette.common.white}
                variant="h6"
                component={'h3'}
              >
                Zesty.io is a headless content management solution built upon
                flexibility and data for optimal digital experiences across
                every channel and every device.
              </Typography>
            </Box>
            <Box>
              <Button
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
              </Button>

              <Button
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
                Arrange Demo
              </Button>
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
              src={header_image.src}
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
            color: theme.palette.zesty.zestyDarkGray,
          }}
          variant={'h6'}
          component={'p'}
        >
          Empower your marketers, free up your developers, and drive your
          business forward with a headless CMS that simplifies content
          production, lowers total cost of ownership, and adapts to your growing
          business.
        </Typography>
      </Grid>
    </Container>
  </Box>
);

// Section One
const SectionOne = ({ theme, isMobile, isDarkMode }) => {
  const card_icons = [
    headless_digital,
    headless_commerce,
    headless_enterprise,
    headless_blog_editorial,
  ];
  return (
    <Box sx={{ pt: 10 }} component="section">
      <Container>
        {/* Features Cards Start */}
        <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
          {card_icons.map((image, idx) => (
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
                      color: theme.palette.zesty.zestyDarkGray,
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
            src={image_one.src}
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
          <Typography
            sx={{ color: theme.palette.zesty.zestyDarkGray }}
            variant="h4"
            component="h2"
          >
            Headless CMS explained
          </Typography>
          <Typography
            sx={{
              color: theme.palette.zesty.zestyDarkGray,
              textAlign: 'center',
              mt: 4,
            }}
            variant="h6"
            component="p"
          >
            A headless CMS is a content management system containing only
            backend code without frontend design. Content can be retrieved via
            APIs, which allows creators to publish across any device or digital
            asset, streamlining workflows for a digital-first world.
          </Typography>
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
            src={image_two.src}
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
const SectionTwo = ({ theme, isMobile }) => {
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

                // borderLeft: '1px solid white',
                position: 'relative',
                // '&:before': {
                //   content: '""',
                //   width: 15,
                //   height: 15,
                //   background: '#F4F6FB',
                //   border: '1px solid #F4F6FB',
                //   borderRadius: '50%',
                //   position: 'absolute',
                //   left: -7,
                //   top: '35%',
                // },
              }}
              component="li"
            >
              <Box sx={{ ml: 4, mt: isMobile ? 0 : 15 }}>
                <Typography
                  sx={{
                    textAlign: isMobile ? 'center' : 'left',
                    fontWeight: 'bold',
                    background: theme.palette.zesty.zestyOrangeLinear,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                  variant="h3"
                  component="h2"
                >
                  How our headless CMS works
                </Typography>
                <Typography
                  sx={{ mt: 2, textAlign: isMobile ? 'center' : 'left' }}
                  variant="h4"
                  component="p"
                >
                  Create content across devices in minutes. Leverage any
                  endpoint and customize your API using our robust platform.
                </Typography>
              </Box>
            </Box>
            {/* Content Two */}
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
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        background: theme.palette.zesty.zestyOrangeLinear,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                      variant="h4"
                      component="h2"
                    >
                      Design your content architecture easily
                    </Typography>
                    <Typography sx={{ mt: 2 }} variant="h4" component="p">
                      Select your model type, define your content models, and
                      relate your content fields, all in one easy-to-use schema
                      editor
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: isMobile ? '100%' : 501,
                      height: isMobile ? '100%' : 356,
                    }}
                    src={image_three.src}
                    component="img"
                  />
                </Grid>
              </Grid>
            </Box>
            {/* Content Three */}
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
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        background: theme.palette.zesty.zestyOrangeLinear,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                      variant="h4"
                      component="h2"
                    >
                      Quickly create and edit your headless content
                    </Typography>
                    <Typography sx={{ mt: 2 }} variant="h4" component="p">
                      With your architecture defined, adding headless content is
                      a breeze with Zesty’s intuitive content manager.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: isMobile ? '100%' : 501,
                      height: isMobile ? '100%' : 356,
                    }}
                    src={image_four.src}
                    component="img"
                  />
                </Grid>
              </Grid>
            </Box>
            {/* Content Four */}
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
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        background: theme.palette.zesty.zestyOrangeLinear,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                      variant="h4"
                      component="h2"
                    >
                      Develop any application, website, or digital experience
                    </Typography>
                    <Typography sx={{ mt: 2 }} variant="h4" component="p">
                      Push your content live via Zesty or choose to integrate
                      with any technology stack you choose to optimize your
                      digital experiences
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: isMobile ? '100%' : 501,
                      height: isMobile ? '100%' : 356,
                    }}
                    src={image_five.src}
                    component="img"
                  />
                </Grid>
              </Grid>
            </Box>
            {/* Content Five */}
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
                  borderRadius: '50%',
                  position: 'absolute',
                  left: -8,
                  top: isMobile ? '32%' : '32%',
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
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        background: theme.palette.zesty.zestyOrangeLinear,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                      variant="h4"
                      component="h2"
                    >
                      Deploy on a cloud-native
                    </Typography>
                    <Typography sx={{ mt: 2 }} variant="h4" component="p">
                      Automated SEO means that your page rank and performance
                      never degrade
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: isMobile ? '100%' : 501,
                      height: isMobile ? '100%' : 356,
                    }}
                    src={image_six.src}
                    component="img"
                  />
                </Grid>
              </Grid>
            </Box>
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
                    : theme.palette.zesty.zestyDarkGray,
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

export default HeadlessEcommerce;
