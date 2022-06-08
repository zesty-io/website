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

function HeadlessEcommerce({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  console.log(theme);
  return (
    <Box>
      <Hero theme={theme} isMobile={isMobile} />
      <SectionOne theme={theme} isMobile={isMobile} />
      <SectionTwo theme={theme} isMobile={isMobile} />
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
const SectionOne = ({ theme, isMobile }) => {
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
                  maxWidth: useMediaQuery(theme.breakpoints.between('xs', 550))
                    ? 163
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
        minHeight: 2279,
        mt: 10,
      }}
      component="section"
    >
      <Container>
        <Box sx={{ color: 'white' }}>
          <Box sx={{ position: 'relative' }} component="ul">
            <Box
              sx={{
                minHeight: 354,
                listStyleType: 'none',
                borderLeft: '1px solid white',
                position: 'relative',
                '&:before': {
                  content: '""',
                  width: 15,
                  height: 15,
                  background: 'white',
                  border: '1px solid white',
                  borderRadius: '50%',
                  position: 'absolute',
                  left: -7,
                  top: '50%',
                },
              }}
              component="li"
            >
              <Typography
                sx={{
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
              <Typography variant="h4" component="p">
                Create content across devices in minutes. Leverage any endpoint
                and customize your API using our robust platform.
              </Typography>
            </Box>
            <Box
              sx={{
                minHeight: 354,
                listStyleType: 'none',
                borderLeft: '1px solid white',
                position: 'relative',
                '&:before': {
                  content: '""',
                  width: 15,
                  height: 15,
                  background: 'white',
                  border: '1px solid white',
                  borderRadius: '50%',
                  position: 'absolute',
                  left: -7,
                  top: '50%',
                },
              }}
              component="li"
            >
              Test
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeadlessEcommerce;
