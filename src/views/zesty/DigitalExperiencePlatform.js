/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Digital Experience Platform 
 * Name: digital_experience_platform 
 * Model ZUID: 6-b2a7a8abbb-xtc6nx
 * File Created On: Thu May 26 2022 19:53:01 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_eyebrow (text)
 * header_h1 (text)
 * header_description (text)
 * header_cta_primary (text)
 * header_cta_secondary (text)
 * header_graphic (images)
 * solutions_h2 (text)
 * solution_1_description (wysiwyg_basic)
 * solution_2_graphic (images)
 * solution_2_description (wysiwyg_basic)
 * solution_1_graphic (images)
 * solution_3_description (wysiwyg_basic)
 * solution_3_graphic (images)
 * solution_4_description (wysiwyg_basic)
 * solution_4_graphic (images)
 * about_dxp (wysiwyg_basic)
 * about_zesty_dxp (wysiwyg_basic)
 * about_dxp_graphic (images)
 * middle_solutions_header (text)
 * middle_solution_1_description (wysiwyg_basic)
 * middle_solution_1_graphic (images)
 * middle_solution_2_description (wysiwyg_basic)
 * middle_solution_2_graphic (images)
 * middle_solution_3_description (wysiwyg_basic)
 * middle_solution_3_graphic (images)
 * middle_solution_4_description (wysiwyg_basic)
 * middle_solution_4_graphic (images)
 * features_header (text)
 * features (one_to_many)
 * integrations_description (wysiwyg_basic)
 * integrations_graphic (images)
 * integrations_button_text (text)
 * integrations_button_link (internal_link)
 * integrations_airplane_graphic (images)
 * implementing_header (text)
 * headless_cms_toggle (text)
 * hybrid_cms_toggle (text)
 * headless_cms_description (wysiwyg_basic)
 * headless_cms_graphic (images)
 * hybrid_cms_description (wysiwyg_basic)
 * hybrid_cms_graphic (images)
 * headless_cms_toggle_graphic (images)
 * hybrid_cms_toggle_graphic (images)
 * case_study_header (text)
 * case_studies (one_to_many)
 * bottom_cta_description (wysiwyg_basic)
 * bottom_cta_graphic (images)
 * bottom_cta_button_primary (text)
 * bottom_cta_button_secondary (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b2a7a8abbb-xtc6nx
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';
import SimpleHeroWithImageAndCtaButtonsPage from 'blocks/heroes/SimpleHeroWithImageAndCtaButtons/SimpleHeroWithImageAndCtaButtons.js';
import FillerContent from 'components/FillerContent';
import TryFreeButton from 'components/cta/TryFreeButton';
import * as helper from 'utils';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ZoomMui from '@mui/material/Zoom';
import ZestySvg from '../../../public/assets/images/zesty Logo.png';
import featuresBg1 from '../../../public/assets/images/dxp_features_bg1.svg';
import featuresBg2 from '../../../public/assets/images/dxp_features_bg2.svg';
import headlessCmsBg from '../../../public/assets/images/dxp_headless_bg.svg';
import bottomBg from '../../../public/assets/images/dxp_bottom_bg.svg';
import dxpCurve from '../../../public/assets/images/dxp_curve.svg';
import dxpLine from '../../../public/assets/images/dxp_line.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section1Hero = ({
  eyebrow = FillerContent.header,
  header = FillerContent.header,
  subHeader = FillerContent.header,
  mainImage = FillerContent.dashboard_image,
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
      }}
    >
      <Container
        sx={{
          display: 'flex',

          width: '100%',
          gap: '1rem',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
        }}
      >
        <div
          data-aos="zoom-in"
          style={{
            background: '',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: '-10vw',
              top: '-5vh',
              display: isMobile ? 'none' : 'flex',
              // background: 'red',
              // height: '600px',
              width: '630px',
            }}
          >
            <img
              src={bgImage}
              alt=""
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </Box>
          <Typography
            component={'h2'}
            variant={'p'}
            fontWeight={600}
            sx={{
              color: theme.palette.common.white,
              fontWeight: 500,
            }}
          >
            {eyebrow}
          </Typography>
          <Typography
            component={'h1'}
            variant={'p'}
            sx={{
              color: theme.palette.common.white,
              fontWeight: 'bold',
              fontSize: isMobile ? '38px' : '48px',
            }}
          >
            {header}
          </Typography>
          <Typography
            paddingY={2}
            component={'h3'}
            variant={'p'}
            sx={{
              color: theme.palette.common.white,
              fontWeight: 500,
              fontSize: '20px',
            }}
          >
            {subHeader}
          </Typography>
          <Box sx={{ display: isMobile ? 'block' : 'flex' }}>
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
                gap: '.5rem',
              }}
            >
              {secondaryCta} <ArrowRightAltIcon />
            </Button>
          </Box>
        </div>

        <div
          data-aos="zoom-in"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'end',
            justifyContent: 'flex-end',
            justifyItems: 'flex-end',
            width: '100%',
          }}
        >
          <img src={mainImage} width={isMobile ? 350 : 650} />
        </div>
      </Container>
    </Box>
  );
};

const CustomCard = ({ data, theme }) => {
  return (
    <Card
      sx={{
        marginTop: '1rem',
        padding: '3rem 1rem',
        display: 'flex',
        alignItems: 'flex-start',
        borderTop: `6px solid ${theme.palette.zesty.zestyTealWhite}`,
      }}
    >
      <Box paddingX={2} paddingTop={2}>
        <img src={data.icon} alt="" width={50} />
      </Box>
      <Box>
        <Typography
          component={'p'}
          variant={'p'}
          sx={{
            color: theme.palette.secondary.darkCharcoal,
            textAlign: 'left',
          }}
          dangerouslySetInnerHTML={{
            __html: helper.strColorChanger(
              data.text,
              data.subText,
              theme.palette.zesty.zestyOrange,
            ),
          }}
        />
        <Link
          href="#"
          underline="always"
          paddingTop={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            color: theme.palette.zesty.zestyTealDark,
            fontWeight: 'bold',
          }}
        >
          {data.ctaName} <ArrowRightAltIcon />
        </Link>
      </Box>
    </Card>
  );
};
const Section2Solution = ({ content, theme, isMobile }) => {
  const [active, setactive] = React.useState(0);
  const headerRegex = /\>(.*?)\</;
  const cardData = [
    {
      id: 0,
      name: 'personalize',
      icon: content.solutions_icon_1?.data[0]?.url,
      text: content.solution_1_description,
      subText: content.solution_1_description?.match(headerRegex)[1],
      img: content.solution_1_graphic.data[0]?.url,
      ctaName: 'Learn More',
      href: '#',
    },
    {
      id: 1,
      name: 'ecom',
      icon: content.solutions_icon_2?.data[0]?.url,
      text: content.solution_2_description,
      subText: content.solution_2_description?.match(headerRegex)[1],
      img: content.solution_2_graphic?.data[0]?.url,
      ctaName: 'Learn More',
      href: '#',
    },
    {
      id: 2,
      name: 'distribution',
      icon: content.solutions_icon_3?.data[0]?.url,
      text: content.solution_3_description,
      subText: content.solution_3_description?.match(headerRegex)[1],
      img: content.solution_3_graphic.data[0]?.url,
      ctaName: 'Learn More',
      href: '#',
    },
    {
      id: 3,
      name: 'innovate',
      icon: content.solutions_icon_4.data[0]?.url,
      text: content.solution_4_description,
      subText: content.solution_4_description?.match(headerRegex)[1],
      img: content.solution_4_graphic.data[0]?.url,
      ctaName: 'Learn More',
      href: '#',
    },
  ];

  const imgWidth = isMobile ? 300 : 500;
  return (
    <Box paddingY={1}>
      <Container>
        <Box paddingBottom={isMobile ? 10 : 10} sx={{}}>
          <Typography
            component={'h2'}
            variant={'p'}
            paddingTop={isMobile ? 0 : 10}
            sx={{
              color: theme.palette.secondary.darkCharcoal,
              fontWeight: 800,
              fontSize: isMobile ? '20px' : '32px',
              textAlign: 'center',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.solutions_h2,
                'digital experience',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: isMobile ? '1rem' : '4rem',
            height: isMobile ? '100vh' : '50vh',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <div data-aos="fade-right">
            <Box sx={{}}>
              <ZoomMui
                in={active === 0}
                style={{ display: active === 0 ? 'block' : 'none' }}
              >
                <img
                  src={content[`solution_1_graphic`].data[0].url}
                  alt=""
                  width={imgWidth}
                />
              </ZoomMui>
              <ZoomMui
                in={active === 1}
                style={{ display: active === 1 ? 'block' : 'none' }}
              >
                <img
                  width={imgWidth}
                  src={content[`solution_2_graphic`].data[0].url}
                  alt=""
                />
              </ZoomMui>
              <ZoomMui
                in={active === 2}
                style={{ display: active === 2 ? 'block' : 'none' }}
              >
                <img
                  width={imgWidth}
                  src={content[`solution_3_graphic`].data[0].url}
                  alt=""
                />
              </ZoomMui>
              <ZoomMui
                in={active === 3}
                style={{ display: active === 3 ? 'block' : 'none' }}
              >
                <img
                  width={imgWidth}
                  src={content[`solution_4_graphic`].data[0].url}
                  alt=""
                />
              </ZoomMui>
            </Box>
          </div>
          <div data-aos="fade-left">
            <Box sx={{ background: '' }}>
              {cardData.map((e, i) => {
                return i === active ? (
                  <CustomCard data={e} theme={theme} />
                ) : (
                  <Box
                    onClick={() => setactive(i)}
                    paddingY={2}
                    paddingLeft={4}
                    sx={{
                      borderBottom: `1px solid ${theme.palette.secondary.whiteSmoke}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      cursor: 'pointer',
                    }}
                  >
                    <img src={e.icon} alt="" width={50} />
                    <Typography
                      component={'p'}
                      variant={'p'}
                      sx={{
                        color: theme.palette.secondary.darkCharcoal,
                        fontWeight: 'light',
                        textAlign: 'left',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: e.subText,
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </div>
        </Box>
        <div data-aos="zoom-in">
          <Grid item xs={12} md={9}>
            <Box
              paddingTop={isMobile ? 10 : 10}
              paddingBottom={10}
              sx={{
                textAlign: 'center',
                color: theme.palette.secondary.darkCharcoal,
                fontSize: isMobile ? '1rem' : '1.5rem',
              }}
              dangerouslySetInnerHTML={{
                __html: helper.strColorChanger(
                  content.about_zesty_dxp,
                  'Zesty',
                  theme.palette.zesty.zestyOrange,
                ),
              }}
            ></Box>
          </Grid>
        </div>
      </Container>
    </Box>
  );
};

const Section3About = ({ content, theme, isMobile }) => {
  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestySeaShell,
      }}
      paddingBottom={isMobile ? 1 : 20}
      paddingTop={isMobile ? 1 : 10}
    >
      <Container>
        <Box>
          <Typography
            component={'p'}
            variant={'p'}
            paddingBottom={isMobile ? 2 : 10}
            sx={{
              fontSize: isMobile ? '1rem' : '1.4rem',
              color: theme.palette.secondary.darkCharcoal,
              textAlign: 'center',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.about_dxp,
                'Digital Experience Platform?',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: '1000',
          }}
        >
          <div data-aos="zoom-in">
            <img
              src={content.about_dxp_graphic.data[0].url}
              alt=""
              width={isMobile ? 300 : 700}
            />
          </div>
        </Box>
      </Container>
    </Box>
  );
};

const RevealComponent = ({
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
      paddingY={1}
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : reverse ? 'row-reverse' : 'row',
        position: 'relative',
        zIndex: '1000',
        gap: isMobile ? '4rem' : '0',
      }}
    >
      {index !== 3 && (
        <Box
          sx={{
            zIndex: '10',
            background: theme.palette.zesty.zestyBackgroundBlue,
            height: isMobile ? '15px' : '20px',
            width: isMobile ? '15px' : '20px',
            borderRadius: '50%',
            position: 'absolute',
            left: isMobile ? '1.8%' : '50.1%',
            bottom: isMobile ? '45%' : '0',
            transform: 'translate(-50%,-50%)',
          }}
        />
      )}

      <div data-aos="zoom-out-left">
        <Box sx={{ position: 'relative' }}>
          <Typography
            component={'h3'}
            variant={'p'}
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
          <Link
            href="#"
            underline="always"
            paddingLeft={isMobile ? 2 : 0}
            sx={{
              position: 'absolute',
              top: isMobile ? '11rem' : '22rem',
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              color: theme.palette.zesty.zestyTealDark,
              fontWeight: 'bold',
            }}
          >
            Learn More <ArrowRightAltIcon />
          </Link>
        </Box>
      </div>
      <div data-aos="zoom-out-right">
        <img src={img} width={isMobile ? 350 : 700} />
      </div>
    </Box>
  );
};

const Section4Middle = ({ content, theme, isMobile }) => {
  const FillerImage =
    content.middle_solution_1_graphic?.data[0]?.url ||
    FillerContent.dashboard_image;
  const bracketImg =
    content.dxp_background_images?.data[0]?.url ||
    FillerContent.dashboard_image;
  const arr = [
    {
      text: content.middle_solution_1_description,
      img:
        content.middle_solution_1_graphic &&
        content.middle_solution_1_graphic.data[0].url,
      strToChange: 'Personalized experience',
      reverse: false,
      theme: theme,
    },
    {
      text: content.middle_solution_2_description,
      img:
        (content.middle_solution_2_graphic &&
          content.middle_solution_2_graphic?.data[0]?.url) ||
        FillerImage,
      strToChange: 'Commerce experience',
      reverse: true,
      theme: theme,
    },
    {
      text: content.middle_solution_3_description,
      img:
        (content.middle_solution_3_graphic &&
          content.middle_solution_3_graphic.data[0]?.url) ||
        FillerImage,
      strToChange: 'Content Experience',
      reverse: false,
      theme: theme,
    },
    {
      text: content.middle_solution_4_description,
      img:
        (content.middle_solution_4_graphic &&
          content.middle_solution_4_graphic.data[0]?.url) ||
        FillerImage,
      strToChange: 'Enterprise Experience',
      reverse: true,
      theme: theme,
    },
  ];
  return (
    <Box
      paddingY={isMobile ? 2 : 10}
      sx={{
        backgroundColor: theme.palette.zesty.zestyDarkBlue,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          zIndex: '100',
          position: 'absolute',
          left: '15%',
          top: 0,
          display: isMobile ? 'flex' : 'none',
          width: 'calc(50vw - 15%)',
          height: '50px',
          position: 'absolute',
          borderRight: `2px solid ${theme.palette.zesty.zestyBackgroundBlue}`,
          borderRadius: '0 0 45px 0',
        }}
      ></Box>
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          left: '5%',
          top: '50px',
          display: isMobile ? 'flex' : 'none',
          width: 'calc(50vw - 15%)',
          height: '100%',
          position: 'absolute',
          border: `1px solid ${theme.palette.zesty.zestyBackgroundBlue}`,
          borderRight: 0,
          borderRadius: '50px 0 0 0',
        }}
      ></Box>
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          left: 0,
          bottom: 0,
          display: isMobile ? 'none' : 'flex',
        }}
      >
        <img src={bracketImg} alt="bg" />
      </Box>
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          right: 0,
          top: 0,
          display: isMobile ? 'none' : 'flex',
          transform: 'rotate(180deg)',
        }}
      >
        <img src={bracketImg} alt="bg" />
      </Box>
      <Box
        sx={{
          zIndex: '10',
          background: theme.palette.zesty.zestyBackgroundBlue,
          height: isMobile ? '0' : '260vh',
          width: '2px',
          position: 'absolute',
          left: isMobile ? '5%' : '50%',
          bottom: '0',
        }}
      />
      <Container>
        <Box>
          <Typography
            component={'h2'}
            variant={'p'}
            paddingTop={isMobile ? 8 : 10}
            paddingBottom={isMobile ? 0 : 10}
            sx={{
              color: theme.palette.common.white,
              textAlign: 'center',
              fontSize: isMobile ? '28px' : '48px',
              position: 'relative',
              zIndex: '1000',
              textTransform: 'capitalize',
            }}
          >
            {content.middle_solutions_header}
          </Typography>
        </Box>
        {arr?.map((e, i) => {
          return (
            <RevealComponent
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
      </Container>
    </Box>
  );
};

const Section5Features = ({ content, theme, isMobile }) => {
  const arr = content.features.data;
  const bracketImg =
    content.dxp_background_images?.data[0]?.url ||
    FillerContent.dashboard_image;
  return (
    <Box
      paddingBottom={isMobile ? 20 : 20}
      sx={{
        position: 'relative',
        zIndex: '500',
        background: theme.palette.common.white,
      }}
    >
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          left: 0,
          bottom: 0,
          display: isMobile ? 'none' : 'flex',
        }}
      >
        <img src={bracketImg} alt="bg" />
      </Box>
      <Container>
        <Box>
          <Typography
            component={'h2'}
            variant={'p'}
            paddingTop={isMobile ? 4 : 10}
            paddingBottom={isMobile ? 4 : 10}
            sx={{
              color: theme.palette.secondary.darkCharcoal,
              textAlign: 'center',
              fontSize: isMobile ? '24px' : '48px',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.features_header,
                'Zesty',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyItems: 'center',
            justifyContent: 'center',
            gap: '4rem',
            position: 'relative',
            zIndex: '1000',
          }}
        >
          {arr?.map((e) => {
            return (
              <div data-aos="zoom-in-down">
                <Card
                  sx={{
                    width: '20rem',
                    height: '22rem',
                    padding: '3rem 2rem',
                    background: theme.palette.common.white,
                  }}
                >
                  <img src={e.icon_image.data[0].url} alt="" />

                  <Typography
                    component={'p'}
                    variant={'p'}
                    paddingTop={4}
                    paddingBottom={2}
                    sx={{
                      color: theme.palette.zesty.zestyOrange,
                      textAlign: 'left',
                      fontSize: '20px',
                    }}
                  >
                    {e?.feature_name}
                  </Typography>
                  <Typography
                    component={'h2'}
                    variant={'p'}
                    sx={{
                      color: theme.palette.common.dark,
                      textAlign: 'left',
                      fontSize: '16px',
                      fontWeight: 'light',
                    }}
                  >
                    {e?.content}
                  </Typography>
                </Card>
              </div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

const Section6Integrations = ({ content, theme, isMobile }) => {
  return (
    <Box
      paddingY={2}
      sx={{
        background: theme.palette.zesty.zestyGray99,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          gap: '4rem',
        }}
      >
        <div data-aos="fade-right">
          <Box sx={{}}>
            <img
              src={content.integrations_graphic.data[0].url}
              width={isMobile ? 400 : 700}
            />
          </Box>
        </div>
        <Box
          sx={{
            background: '',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
            zIndex: '1000',
          }}
        >
          <div data-aos="flip-right">
            <Box sx={{ position: 'absolute', top: '-5rem', zIndex: '2000' }}>
              <img
                src={content.integrations_airplane_graphic?.data[0]?.url}
                alt=""
              />
            </Box>
          </div>
          <div data-aos="fade-left">
            <Typography
              component={'p'}
              variant={'p'}
              paddingY={isMobile ? 6 : 10}
              sx={{
                color: theme.palette.secondary.darkCharcoal,
                textAlign: 'left',
              }}
              dangerouslySetInnerHTML={{
                __html: helper.strColorChanger(
                  content.integrations_description,
                  'Limitless Integrations for Limitless Reach',
                  theme.palette.zesty.zestyOrange,
                ),
              }}
            />
            <Box>
              <Button
                variant="contained"
                size="large"
                fullWidth={isMobile}
                // href={
                //   content.integrations_button_link?.data[0]?.meta?.web?.uri ||
                //   ''
                // }
                sx={{
                  backgroundColor: theme.palette.zesty.zestyOrange,
                  color: theme.palette.common.white,
                  padding: '.6rem 4rem',
                  fontSize: '16px',
                }}
              >
                {content.integrations_button_text}
              </Button>
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

const Section7Implementing = ({ content, theme, isMobile }) => {
  const [headless, setheadless] = React.useState(true);
  const [hybrid, sethybrid] = React.useState(false);
  const swooshBg =
    content.headless_background_image?.data[0]?.url ||
    FillerContent.dashboard_image;
  return (
    <Box
      paddingY={isMobile ? 4 : 15}
      sx={{
        background: theme.palette.common.white,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          right: 0,
          top: 0,
          display: isMobile ? 'none' : 'flex',
        }}
      >
        <img src={swooshBg} alt="bg" />
      </Box>
      <Container
        sx={{
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            textAlign: 'center',
            justifyItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            component={'h2'}
            variant={'p'}
            paddingBottom={8}
            sx={{
              fontSize: isMobile ? '22px' : '32px',
              color: theme.palette.secondary.darkCharcoal,
              textAlign: 'center',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.implementing_header,
                'Digital Experience',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card sx={{ display: 'flex' }}>
            <Box
              onClick={() => {
                setheadless(true);
                sethybrid(false);
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: isMobile ? '1rem 1rem' : '1rem 5rem',
                gap: '1rem',
                position: 'relative',
                zIndex: '1000',
                cursor: 'pointer',
                color: headless
                  ? theme.palette.zesty.zestyTealDark
                  : theme.palette.common.dark,
                borderBottom: `4px solid ${
                  headless ? theme.palette.zesty.zestyTealDark : 'transparent'
                }`,
              }}
            >
              <img
                src={content.headless_cms_toggle_graphic.data[0].url}
                alt=""
              />
              <Typography
                component={'p'}
                variant={'p'}
                sx={{
                  textAlign: 'left',
                  color: headless
                    ? theme.palette.zesty.zestyTealDark
                    : theme.palette.secondary.darkCharcoal,
                }}
              >
                {content.headless_cms_toggle}
              </Typography>
            </Box>
            <Box
              onClick={() => {
                setheadless(false);
                sethybrid(true);
              }}
              sx={{
                display: 'flex',
                cursor: 'pointer',
                alignItems: 'center',
                padding: isMobile ? '1rem 1rem' : '1rem 5rem',
                position: 'relative',
                zIndex: '1000',
                gap: '1rem',
                borderBottom: `4px solid ${
                  hybrid ? theme.palette.zesty.zestyTealDark : 'transparent'
                }`,
              }}
            >
              <img alt="" src={content.hybrid_cms_toggle_graphic.data[0].url} />
              <Typography
                component={'p'}
                variant={'p'}
                sx={{
                  textAlign: 'left',
                  color: hybrid
                    ? theme.palette.zesty.zestyTealDark
                    : theme.palette.secondary.darkCharcoal,
                }}
              >
                {content.hybrid_cms_toggle}
              </Typography>
            </Box>
          </Card>{' '}
        </Box>
        <Box
          paddingTop={isMobile ? 4 : 15}
          sx={{
            display: 'flex',
            position: 'relative',
            zIndex: '1000',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <div data-aos="zoom-in">
            <ZoomMui
              in={headless}
              style={{
                display: headless ? 'flex' : 'none',
                justifyContent: 'center',
                justifyItems: 'center',
                alignItems: 'center',
                margin: '0 auto',
              }}
            >
              <img
                src={content.headless_cms_graphic.data[0].url}
                width={isMobile ? 350 : 600}
              />
            </ZoomMui>
            <ZoomMui
              in={hybrid}
              style={{
                display: hybrid ? 'flex' : 'none',
                justifyContent: 'center',
                justifyItems: 'center',
                alignItems: 'center',

                margin: '0 auto',
              }}
            >
              <img
                width={isMobile ? 350 : 600}
                src={content.headless_cms_graphic.data[0].url}
              />
            </ZoomMui>
          </div>

          <div data-aos="zoom-in">
            <ZoomMui
              in={headless}
              style={{ display: headless ? 'block' : 'none' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <Typography
                  component={'p'}
                  variant={'p'}
                  paddingY={isMobile ? 4 : 10}
                  sx={{
                    color: theme.palette.secondary.darkCharcoal,
                    textAlign: 'left',
                    fontSize: '1.2rem',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: helper.strColorChanger(
                      content.headless_cms_description,
                      'Personalize at scale with Data',
                      theme.palette.zesty.zestyOrange,
                    ),
                  }}
                />
                <Link
                  href="#"
                  underline="always"
                  sx={{
                    position: 'absolute',
                    top: isMobile ? '10rem' : '10rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.5rem',
                    color: theme.palette.zesty.zestyTealDark,
                  }}
                >
                  Learn More <ArrowRightAltIcon />
                </Link>
              </Box>
            </ZoomMui>
            <ZoomMui in={hybrid} style={{ display: hybrid ? 'block' : 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <Typography
                  component={'p'}
                  variant={'p'}
                  paddingY={isMobile ? 4 : 10}
                  sx={{
                    color: theme.palette.secondary.darkCharcoal,
                    textAlign: 'left',
                    fontSize: '1.2rem',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: helper.strColorChanger(
                      content.hybrid_cms_description,
                      'Personalize at scale with Data',
                      theme.palette.zesty.zestyOrange,
                    ),
                  }}
                />
                <Link
                  href="#"
                  underline="always"
                  sx={{
                    position: 'absolute',
                    top: '25vh',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.5rem',
                    color: theme.palette.zesty.zestyTealDark,
                  }}
                >
                  Learn More <ArrowRightAltIcon />
                </Link>
              </Box>
            </ZoomMui>
          </div>
        </Box>
      </Container>
    </Box>
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

const Section8CaseStudies = ({ content, theme, isMobile }) => {
  const [active, setactive] = React.useState(content?.case_studies?.data[0]);

  return (
    <Box paddingY={isMobile ? 8 : 0} sx={{}}>
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
              content.case_study_header,
              '',
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
const Section9Bottom = ({ content, theme, isMobile }) => {
  const bgImgage =
    content.bottom_page_background_image?.data[0]?.url ||
    FillerContent.dashboard_image;

  return (
    <Box paddingY={isMobile ? 0 : 20} sx={{ position: 'relative' }}>
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          right: 0,
          bottom: 0,
          display: isMobile ? 'none' : 'flex',
        }}
      >
        <img src={bgImgage} alt="bg" />
      </Box>
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
                  fontSize: isMobile ? '.9rem' : '1.3rem',
                  color: theme.palette.secondary.darkCharcoal,
                  textAlign: isMobile ? 'center' : 'left',
                }}
                dangerouslySetInnerHTML={{
                  __html: helper.strColorChanger(
                    content.bottom_cta_description,
                    'Digital Experiences',
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
                <Button
                  sx={{ padding: '.5rem 4rem' }}
                  variant="contained"
                  color="secondary"
                  fullWidth={isMobile}
                >
                  {content.bottom_cta_button_primary}
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  fullWidth={isMobile}
                  sx={{ textDecoration: 'underline' }}
                >
                  {content.bottom_cta_button_secondary}
                  <ArrowRightAltIcon />
                </Button>
              </Box>
            </Box>
          </div>
          <div data-aos="fade-right">
            <Box paddingY={isMobile ? 15 : 0}>
              <img
                src={
                  content.bottom_cta_graphic?.data[0]?.url ||
                  FillerContent.dashboard_image
                }
                width={isMobile ? 350 : 600}
              />
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

function DigitalExperiencePlatform({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  console.log(content, 122);
  const Section1Props = {
    eyebrow: content.header_eyebrow,
    header: content.header_h1,
    subHeader: content.header_description,
    mainImage: content.header_graphic?.data[0]?.url,
    primaryCta: content.header_cta_primary,
    secondaryCta: content.header_cta_secondary,
    gradientBg: theme.palette.zesty.zestyBlueGradient,
    bgImage: content.header_background_image?.data[1]?.url,
    isMobile,
    theme,
  };
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Section1Hero {...Section1Props} />
      <Section2Solution content={content} theme={theme} isMobile={isMobile} />
      <Section3About content={content} theme={theme} isMobile={isMobile} />
      <Section4Middle content={content} theme={theme} isMobile={isMobile} />
      <Section5Features content={content} theme={theme} isMobile={isMobile} />
      <Section6Integrations
        content={content}
        theme={theme}
        isMobile={isMobile}
      />
      <Section7Implementing
        content={content}
        theme={theme}
        isMobile={isMobile}
      />
      <Section8CaseStudies
        content={content}
        theme={theme}
        isMobile={isMobile}
      />
      <Section9Bottom content={content} theme={theme} isMobile={isMobile} />
    </Box>
  );
}

export default DigitalExperiencePlatform;
