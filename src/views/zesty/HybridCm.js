/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Hybrid CMS 
 * Name: hybrid_cms 
 * Model ZUID: 6-dece98fde3-4vzxq8
 * File Created On: Thu May 26 2022 19:53:01 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_eyebrow (text)
 * hero_title (text)
 * hero_description (text)
 * hero_cta_primary (text)
 * hero_cta_secondary (text)
 * hero_graphic (images)
 * about_hybrid_cms (wysiwyg_basic)
 * about_hybrid_cms_graphic (images)
 * hybrid_interface (wysiwyg_basic)
 * hybrid_interface_graphic (images)
 * hybrid_cms_features_header (wysiwyg_basic)
 * hybrid_cms_feature_1 (wysiwyg_basic)
 * hybrid_cms_feature_1_image (images)
 * hybrid_cms_feature_2 (wysiwyg_basic)
 * hybrid_cms_feature_2_image (images)
 * hybrid_cms_feature_3 (wysiwyg_basic)
 * hybrid_cms_feature_3_image (images)
 * hybrid_cms_feature_4 (wysiwyg_basic)
 * hybrid_cms_feature_4_image (images)
 * hybrid_cms_feature_5 (wysiwyg_basic)
 * hybrid_cms_feature_5_image (images)
 * hybrid_cms_feature_6 (wysiwyg_basic)
 * hybrid_cms_feature_6_image (images)
 * case_study_title (text)
 * case_studies (one_to_many)
 * bottom_cta_header (text)
 * bottom_cta_graphic (images)
 * bottom_cta_primary (text)
 * bottom_cta_secondary (text)
 * related_content_header (text)
 * related_content_articles (one_to_many)
 * related_content_cta_button (text)
 * related_content_button_link (internal_link)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-dece98fde3-4vzxq8
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import chevron_left from '../../../public/assets/images/headless-cms/chevron-left.svg';
import chevron_right from '../../../public/assets/images/headless-cms/chevron-right.svg';
import curve from '../../../public/assets/images/headless-cms/curve.svg';
import curve_dark from '../../../public/assets/images/headless-cms/curve-dark.svg';
import curve_mobile from '../../../public/assets/images/headless-cms/curve-mobile.svg';
import s_curve from '../../../public/assets/images/headless-cms/sCurve.svg';

import React from 'react';
import {
  Box,
  Button,
  Card,
  cardClasses,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FillerContent from 'components/globals/FillerContent';
import ZestySvg from '../../../public/assets/images/zesty Logo.png';
import featuresBg1 from '../../../public/assets/images/dxp_features_bg1.svg';
import featuresBg2 from '../../../public/assets/images/dxp_features_bg2.svg';
import headlessCmsBg from '../../../public/assets/images/dxp_headless_bg.svg';
import bottomBg from '../../../public/assets/images/dxp_bottom_bg.svg';
import dxpCurve from '../../../public/assets/images/dxp_curve.svg';
import dxpLine from '../../../public/assets/images/dxp_line.svg';
import { fontSize } from '@mui/system';
import * as helper from 'utils';
import styled from '@emotion/styled';
import curvePc from '../../../public/assets/images/hybrid_curve_pc.svg';
import curveMobile from '../../../public/assets/images/hybrid_curve_mobile.png';
import TryFreeButton from 'components/cta/TryFreeButton';

function makeDate(date) {
  var d = new Date(date);
  var options = {
    year: 'numeric',
    month: 'long',
  };
  var n = d.toLocaleDateString('en-US', options);

  var replace = n.replace(new RegExp(',', 'g'), ' ');
  return replace;
}

const RevealCompo = ({
  text = '',
  img = FillerContent.dashboard_image,
  strToChange = '',
  reverse = false,
  theme,
  strColor = theme.palette.zesty.zestyOrange,
  data,
  index,
  isMobile,
}) => {
  return (
    <Box
      sx={{
        py: isMobile ? 3 : 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: 400,
        listStyleType: 'none',
        borderLeft: `2px solid ${
          isMobile ? theme.palette.zesty.zestyBlue2 : theme.palette.common.white
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
              paddingLeft={isMobile ? 2 : 0}
              paddingTop={isMobile ? 2 : 10}
              paddingBottom={isMobile ? 6 : 10}
              sx={{
                color: theme.palette.common.white,
                textAlign: 'left',
                fontSize: isMobile ? '1rem' : '1.5rem',
              }}
              dangerouslySetInnerHTML={{
                __html: helper.strColorChanger(text, strToChange, strColor),
              }}
            />
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box
            sx={{
              width: '100%',
              maxWidth: isMobile ? '100%' : 501,
              height: isMobile ? '100%' : 356,
            }}
            src={img}
            component="img"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const Section4HybridCMS = ({ content, theme, isMobile, isDarkMode }) => {
  const bgTriangleLeft = chevron_left.src;
  const bgTriangleRight = chevron_right.src;

  const arr = [
    {
      text: content.hybrid_cms_feature_1,
      img:
        content.hybrid_cms_feature_1_image &&
        content.hybrid_cms_feature_1_image.data[0].url,
      strToChange: 'Multi-Channel Content Management',
      reverse: false,
      theme: theme,
    },
    {
      text: content.hybrid_cms_feature_2,
      img:
        content.hybrid_cms_feature_2_image &&
        content.hybrid_cms_feature_2_image.data[0].url,
      strToChange: 'Visual Publishing',
      reverse: false,
      theme: theme,
    },
    {
      text: content.hybrid_cms_feature_3,
      img:
        content.hybrid_cms_feature_3_image &&
        content.hybrid_cms_feature_3_image.data[0].url,
      strToChange: 'LowCode Interface',
      reverse: false,
      theme: theme,
    },
    {
      text: content.hybrid_cms_feature_4,
      img:
        content.hybrid_cms_feature_4_image &&
        content.hybrid_cms_feature_4_image.data[0].url,
      strToChange: 'Easy Tech Stack Integration',
      reverse: false,
      theme: theme,
    },
    {
      text: content.hybrid_cms_feature_5,
      img:
        content.hybrid_cms_feature_5_image &&
        content.hybrid_cms_feature_5_image.data[0].url,
      strToChange: 'Organized Workflows &amp; Team Management',
      reverse: false,
      theme: theme,
    },
    {
      text: content.hybrid_cms_feature_6,
      img:
        content.hybrid_cms_feature_6_image &&
        content.hybrid_cms_feature_6_image.data[0].url,
      strToChange: 'Strong Security',
      reverse: false,
      theme: theme,
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
        src={bgTriangleRight}
      />

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: '5%',
          width: isMobile ? 264 : 'auto',
        }}
        component="img"
        src={bgTriangleLeft}
      />
      <Container>
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
                <Typography
                  paddingTop={isMobile ? 2 : 10}
                  paddingBottom={isMobile ? 0 : 10}
                  paddingRight={isMobile ? 0 : 40}
                  paddingLeft={isMobile ? 0 : 6}
                  sx={{
                    color: theme.palette.common.white,
                    textAlign: isMobile ? 'center' : 'left',
                    fontSize: isMobile ? '1rem' : '1.5rem',
                    position: 'relative',
                    zIndex: '1000',
                    textTransform: 'capitalize',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: helper.strColorChanger(
                      content.hybrid_cms_features_header,
                      'Hybrid CMS Features',
                      theme.palette.zesty.zestyOrange,
                    ),
                  }}
                ></Typography>
              </Box>
            </Box>
            {arr.map((e, i) => {
              return (
                <RevealCompo
                  isMobile={isMobile}
                  data={e}
                  index={i}
                  text={e.text}
                  img={e.img}
                  strToChange={e.strToChange}
                  reverse={e.reverse}
                  theme={e.theme}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const Section1Hero = ({
  eyebrow = FillerContent.header,
  header = FillerContent.header,
  subHeader = FillerContent.header,
  mainImage,
  bgImage = FillerContent.dashboard_image,
  primaryCta = 'Try Free',
  secondaryCta = 'Try Free',
  gradientBg,
  isMobile,
  theme,
}) => {
  return (
    <Box
      paddingTop={isMobile ? 4 : 15}
      paddingBottom={isMobile ? 4 : 25}
      sx={{
        position: 'relative',
        background: gradientBg,
        textAlign: 'center',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          gap: '3rem',
          flexDirection: isMobile ? 'column' : 'column',
        }}
      >
        <Box
          sx={{
            background: '',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: '15rem',
              display: isMobile ? 'none' : 'flex',
            }}
          >
            <img src={bgImage} alt="" />
          </Box>
          <Typography
            component={'h2'}
            variant={'p'}
            sx={{
              color: theme.palette.zesty.zestyOrange,
              fontWeight: 'bold',
              fontSize: isMobile ? '24px' : '32px',
            }}
          >
            {eyebrow}
          </Typography>
          <Typography
            component={'h1'}
            variant={'p'}
            sx={{
              color: theme.palette.zesty.zestyZambezi,
              fontWeight: 'bold',
              fontSize: isMobile ? '24px' : '48px',
            }}
          >
            {header}
          </Typography>
          <Typography
            paddingY={2}
            component={'h3'}
            variant={'p'}
            sx={{
              color: theme.palette.zesty.zestyZambezi,
              fontWeight: 500,
              fontSize: '20px',
            }}
          >
            {subHeader}
          </Typography>
          <Box
            sx={{
              display: isMobile ? 'block' : 'flex',
              width: '100%',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <Box sx={{ width: isMobile ? '100%' : '10rem' }}>
              <TryFreeButton
                fullWidth={true}
                text={primaryCta}
                variant="contained"
                component="a"
              />
            </Box>
            <Button
              href={''}
              variant="text"
              color="secondary"
              fullWidth={isMobile ? true : false}
              sx={{
                display: secondaryCta ? 'flex' : 'none',
                padding: '.6rem 4rem',
                fontSize: '16px',
                whiteSpace: 'nowrap',
                alignItems: 'center',
                textDecoration: 'underline',
                gap: '.5rem',
              }}
            >
              {secondaryCta}
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Box>

        {mainImage && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <img src={mainImage} width={isMobile ? 350 : 900} />
          </Box>
        )}
      </Container>
    </Box>
  );
};
const Section2About = ({ text, img, isMobile, theme }) => {
  const swooshBg = headlessCmsBg.src;
  return (
    <Box
      paddingY={isMobile ? 0 : 0}
      sx={{ position: 'relative', background: theme.palette.zesty.zestyAzure }}
    >
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          right: 0,
          bottom: '-30vw',
          display: isMobile ? 'none' : 'flex',
        }}
      >
        <img src={swooshBg || FillerContent.dashboard_image} alt="bg" />
      </Box>
      <Container>
        <Box
          paddingY={isMobile ? 2 : 8}
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '1rem' : '4rem',
          }}
        >
          <div data-aos="fade-left">
            <Box sx={{ position: 'relative' }}>
              <Typography
                sx={{
                  fontSize: isMobile ? '.9rem' : '1.3rem',
                  color: theme.palette.secondary.darkCharcoal,
                  textAlign: isMobile ? 'left' : 'left',
                }}
                dangerouslySetInnerHTML={{
                  __html: helper.strColorChanger(
                    text,
                    'Hybrid CMS',
                    theme.palette.zesty.zestyOrange,
                  ),
                }}
              />
            </Box>
          </div>
          <div data-aos="fade-right">
            <Box paddingY={isMobile ? 1 : 0}>
              <img src={img} width={isMobile ? 350 : 600} />
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

const Section3Hybrid = ({ text, img, theme, isMobile, isDarkMode }) => {
  return (
    <Box paddingY={isMobile ? 4 : 0} sx={{ position: 'relative' }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div data-aos="zoom-in">
          <Typography
            sx={{
              fontSize: isMobile ? '.9rem' : '1.3rem',
              color: theme.palette.secondary.darkCharcoal,
              textAlign: isMobile ? 'center' : 'center',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                text,
                'A Quick Look Into Zesty&rsquo;s Hybrid CMS Interface',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
        </div>
        <div data-aos="fade-right">
          <Box
            paddingY={isMobile ? 1 : 0}
            sx={{
              display: 'flex',
              justifyItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: '100',
            }}
          >
            <img src={img} width={isMobile ? 350 : 600} />
          </Box>
        </div>
      </Container>
    </Box>
  );
};

const MiniDot = ({ theme, isMobile }) => {
  return (
    <Box
      sx={{
        zIndex: '10',
        background: theme.palette.zesty.zestyBackgroundBlue,
        height: isMobile ? '15px' : '15px',
        width: isMobile ? '15px' : '15px',
        borderRadius: '50%',
        position: 'absolute',
        left: isMobile ? '1.8%' : '0',
        top: isMobile ? '45%' : '38%',
        transform: 'translate(-50%,-50%)',
      }}
    />
  );
};

const CustomButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  user-select: none;
  opacity: ${(props) => (props.active ? 1 : 0.3)};
  &:active {
    transform: scale(0.9);
  }
  &:focus {
  }
  &:hover {
    opacity: 1;
  }
`;

const Section5CaseStudies = ({ content, theme, isMobile }) => {
  const [active, setactive] = React.useState(content?.case_studies?.data[0]);

  return (
    <Box paddingY={isMobile ? 8 : 8} sx={{}}>
      <Container sx={{}}>
        <Typography
          component={'h2'}
          variant={'p'}
          paddingBottom={4}
          sx={{
            fontSize: isMobile ? '20px' : '32px',
            color: theme.palette.zesty.zestyZambezi,
            textAlign: 'center',
          }}
          dangerouslySetInnerHTML={{
            __html: helper.strColorChanger(
              content.case_study_title,
              'none',
              theme.palette.zesty.zestyOrange,
            ),
          }}
        />
      </Container>
      <Box
        paddingY={isMobile ? 4 : 8}
        sx={{
          background: theme.palette.zesty.zestyLightRedOrange,
          height: isMobile ? '60vh' : 'auto',
        }}
      >
        <Container
          sx={{
            height: '20rem',
            background: theme.palette.zesty.zestyLightRedOrange,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row-reverse',
            alignItems: 'center',
          }}
        >
          <Box
            paddingX={isMobile ? 2 : 8}
            paddingY={isMobile ? 8 : 8}
            boxShadow={2}
            marginLeft={2}
            borderRadius={2}
            sx={{
              width: '100%',
              display: isMobile ? 'flex' : 'grid',
              flexDirection: 'column',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              background: theme.palette.common.white,
            }}
          >
            <Box
              borderRadius={2}
              overflow={'hidden'}
              bgcolor="red"
              sx={{ display: isMobile ? 'none' : 'block' }}
            >
              <img
                src={
                  active?.image?.data[0]?.url || FillerContent.dashboard_image
                }
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />
            </Box>
            <Box sx={{ background: '' }}>
              <Box
                paddingBottom={2}
                sx={{
                  display: 'flex',
                  justifyItems: 'flex-start',
                  justifyContent: isMobile ? 'center' : 'start',
                }}
              >
                <img src={active.logo.data[0].url} />
              </Box>
              <Typography
                sx={{
                  color: theme.palette.zesty.zestyGray,
                  fontWeight: 500,
                  fontSize: isMobile ? '14px' : '20px',
                  textAlign: 'left',
                }}
              >
                {active?.summary}
              </Typography>
            </Box>
          </Box>
          <Box
            paddingY={4}
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              flexWrap: 'wrap',
              justifyContent: 'center',
              justifyItems: 'center',
              gap: '3rem',
              width: isMobile ? '100%' : '10rem',
              background: 'transparent',
            }}
          >
            {content.case_studies?.data?.map((e, i) => {
              return (
                <CustomButton
                  active={active?.title === e?.title ? true : false}
                  theme={theme}
                  onClick={() => setactive(e)}
                >
                  <img src={e.logo.data[0].url} />
                </CustomButton>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
const Section6Bottom = ({ content, theme, isMobile }) => {
  return (
    <Box
      marginY={10}
      paddingY={isMobile ? 0 : 0}
      sx={{
        position: 'relative',

        background: theme.palette.zesty.zestyLightRedOrange,
      }}
    >
      <Container>
        <Box
          paddingY={isMobile ? 2 : 8}
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row-reverse',
            gap: isMobile ? '1rem' : '4rem',
          }}
        >
          <div data-aos="fade-left">
            <Box sx={{ position: 'relative' }}>
              <Typography
                component={'h2'}
                variant={'p'}
                sx={{
                  fontSize: isMobile ? '.9rem' : '2.1rem',
                  color: theme.palette.secondary.darkCharcoal,
                  textAlign: isMobile ? 'center' : 'left',
                }}
                dangerouslySetInnerHTML={{
                  __html: helper.strColorChanger(
                    content.bottom_cta_header,
                    'Hybrid CMS',
                    theme.palette.zesty.zestyOrange,
                  ),
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: isMobile ? '6rem' : '10rem',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: 'center',
                  gap: '.5rem',
                  color: theme.palette.zesty.zestyTealDark,
                  width: '100%',
                }}
              >
                <Box sx={{ width: isMobile ? '100%' : '10rem' }}>
                  <TryFreeButton
                    fullWidth={true}
                    text={content.bottom_cta_primary}
                    variant="contained"
                    component="a"
                  />
                </Box>
                {/* <Button
                  sx={{ padding: '.5rem 4rem' }}
                  variant="contained"
                  color="secondary"
                  fullWidth={isMobile}
                >
                  {content.bottom_cta_primary}
                </Button> */}
                <Button
                  variant="text"
                  color="secondary"
                  fullWidth={isMobile}
                  sx={{ textDecoration: 'underline' }}
                >
                  {content.bottom_cta_secondary}
                  <ArrowRightAltIcon />
                </Button>
              </Box>
            </Box>
          </div>
          <div data-aos="fade-right">
            <Box paddingY={isMobile ? 15 : 0}>
              <img
                src={content.bottom_cta_graphic.data[0].url}
                width={isMobile ? 350 : 600}
              />
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
};
const ArticleCard = ({ data, isMobile, theme }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: '50',
        backgroundImage: `url("${data.hero_image.data[0].url}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '30rem',
        width: '22rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
      }}
    >
      <Box
        paddingBottom={4}
        paddingX={2}
        sx={{
          borderBottom: `1px solid ${theme.palette.common.white}`,
          display: 'flex',
          background: ' rgba(0, 0, 0, 0.2)',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'end',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem',
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? '.9rem' : '1.2rem',
              color: theme.palette.common.white,
              textAlign: isMobile ? 'left' : 'left',
              fontWeight: 'bold',
            }}
          >
            {data.title}
          </Typography>
          <Typography
            sx={{
              fontSize: isMobile ? '.9rem' : '.9rem',
              color: theme.palette.common.white,
              textAlign: isMobile ? 'left' : 'left',
              height: '6rem',
              // fontWeight: 'medium',
            }}
          >
            {data.description}
          </Typography>
          <Link
            href="#"
            underline="always"
            sx={{
              top: isMobile ? '10rem' : '10rem',
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              color: theme.palette.zesty.zestyTealDark,
              fontSize: '.8rem',
              fontWeight: 'bold',
            }}
          >
            Learn More <ArrowRightAltIcon />
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          background: ' rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
        }}
        paddingX={2}
        paddingY={1}
      >
        <Box
          sx={{ display: 'flex', alignItems: 'center', flex: 1, gap: '.5rem' }}
        >
          <Box
            sx={{
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <img
              src={data.author.data[0].headshot.data[0].url}
              alt="author"
              height={50}
              width={50}
            />
          </Box>
          <Typography
            sx={{
              fontSize: isMobile ? '.9rem' : '.9rem',
              color: theme.palette.common.white,
              textAlign: isMobile ? 'center' : 'left',
              fontWeight: 500,
            }}
          >
            {data.author.data[0].name}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: isMobile ? '.9rem' : '.9rem',
              color: theme.palette.common.white,
              textAlign: isMobile ? 'center' : 'left',
              fontWeight: 500,
            }}
          >
            {makeDate(data.date)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Section7Related = ({ content, theme, isMobile }) => {
  const arr = content?.related_content_articles?.data;
  const bgImage = bottomBg.src;
  return (
    <Box paddingBottom={10} sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          zIndex: '10',
          right: 0,
          bottom: 0,
          width: isMobile ? '200px' : '400px',
        }}
      >
        <img
          src={bgImage}
          alt="image"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: isMobile ? '1rem' : '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '15rem',
              height: '1px',
              background: theme.palette.zesty.zestyOrange,
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: isMobile ? '1.2rem' : '1.6rem',
              color: theme.palette.zesty.zestyZambezi,
              textAlign: isMobile ? 'center' : 'center',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.related_content_header,
                'Hybrid CMS',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
          <Box
            sx={{
              width: '15rem',
              height: '1px',
              background: theme.palette.zesty.zestyOrange,
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '0 1rem',
          }}
        >
          {arr.map((e) => {
            return <ArticleCard data={e} isMobile={isMobile} theme={theme} />;
          })}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ padding: '.6rem 4rem' }}
          >
            {content.related_content_cta_button}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

function HybridCm({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';
  console.log(content, 1111);
  const Section1Props = {
    eyebrow: content.hero_eyebrow,
    header: content.hero_title,
    subHeader: content.hero_description,
    mainImage: content.hero_graphic?.data[0]?.url,
    bgImage: ZestySvg.src,
    primaryCta: content.hero_cta_primary,
    secondaryCta: content.hero_cta_secondary,
    gradientBg: theme.palette.common.white,
    isMobile,
    theme,
  };
  const Section2Props = {
    text: content.about_hybrid_cms,
    img: content.about_hybrid_cms_graphic.data[0].url,
    isMobile,
    theme,
  };
  const Section3Props = {
    text: content.hybrid_interface,
    img: content.hybrid_interface_graphic?.data[0]?.url,
    isMobile,
    theme,
    isDarkMode,
  };

  const Section4Props = {
    content,
    isMobile,
    theme,
    isDarkMode,
  };

  const Section5Props = {
    content,
    isMobile,
    theme,
  };
  const Section6Props = {
    content,
    isMobile,
    theme,
  };
  const Section7Props = {
    content,
    isMobile,
    theme,
  };
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Section1Hero {...Section1Props} />
      <Section2About {...Section2Props} />
      <Section3Hybrid {...Section3Props} />
      <Section4HybridCMS {...Section4Props} />
      <Section5CaseStudies {...Section5Props} />
      <Section6Bottom {...Section6Props} />
      <Section7Related {...Section7Props} />
    </>
  );
}

export default HybridCm;
