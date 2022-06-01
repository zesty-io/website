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
  useTheme,
} from '@mui/material';
import React from 'react';
import SimpleHeroWithImageAndCtaButtonsPage from 'blocks/heroes/SimpleHeroWithImageAndCtaButtons/SimpleHeroWithImageAndCtaButtons.js';
import FillerContent from 'components/FillerContent';
import TryFreeButton from 'components/cta/TryFreeButton';
import * as helper from 'utils';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from '@mui/material/Slide';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ZoomMui from '@mui/material/Zoom';
import ZestySvg from '../../../public/assets/images/zesty Logo.png';
import featuresBg1 from '../../../public/assets/images/dxp_features_bg1.svg';
import featuresBg2 from '../../../public/assets/images/dxp_features_bg2.svg';
import headlessCmsBg from '../../../public/assets/images/dxp_headless_bg.svg';
import bottomBg from '../../../public/assets/images/dxp_bottom_bg.svg';

const Section1Hero = ({ content, theme }) => {
  return (
    <Box
      paddingTop={15}
      paddingBottom={25}
      sx={{
        position: 'relative',
        background:
          'linear-gradient(180deg, rgba(31,93,207,1) 45%, rgba(112,152,224,1) 70%, rgba(255,255,255,1) 100%);',
      }}
    >
      <Container sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <Box
          sx={{
            background: '',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ position: 'absolute', left: '15rem' }}>
            <img src={ZestySvg.src} alt="" />
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
            {'DXP'}
          </Typography>
          <Typography
            component={'h1'}
            variant={'p'}
            sx={{
              color: theme.palette.common.white,
              fontWeight: 'bold',
              fontSize: '48px',
            }}
          >
            {content.header_eyebrow}
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
            {content.header_h1}
          </Typography>
          <Box>
            <Button
              href={''}
              component={Button}
              variant="contained"
              sx={{
                backgroundColor: theme.palette.common.white,
                color: theme.palette.zesty.zestyOrange,
                padding: '.6rem 4rem',
                fontSize: '16px',
              }}
            >
              {content.header_cta_primary}
            </Button>
          </Box>
        </Box>

        <Box sx={{}}>
          <img src={content.header_graphic.data[0].url} width={700} />
        </Box>
      </Container>
    </Box>
  );
};

const CustomCard = ({ data, theme }) => {
  return (
    <Card
      sx={{
        marginTop: '1rem',
        padding: '2rem 3rem',

        display: 'flex',
        alignItems: 'flex-start',
        borderTop: `6px solid ${theme.palette.zesty.zestyTealWhite}`,
      }}
    >
      <Box>
        <ArrowRightAltIcon />
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
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            color: theme.palette.zesty.zestyTealDark,
          }}
        >
          {data.ctaName} <ArrowRightAltIcon />
        </Link>
      </Box>
    </Card>
  );
};
const SecondSection = ({ content, theme }) => {
  const [active, setactive] = React.useState(0);
  const headerRegex = /\>(.*?)\</;
  const cardData = [
    {
      id: 0,
      name: 'personalize',
      icon: '',
      text: content.solution_1_description,
      subText: content.solution_1_description?.match(headerRegex)[1],
      img: content.solution_1_graphic.data[0].url,
      ctaName: 'Learn More',
      href: '#',
    },
    {
      id: 1,
      name: 'ecom',
      icon: '',
      text: content.solution_2_description,
      subText: content.solution_2_description?.match(headerRegex)[1],
      img: content.solution_2_graphic.data[0].url,
      ctaName: 'Learn More',
      href: '#',
    },
    {
      id: 2,
      name: 'distribution',
      icon: '',
      text: content.solution_3_description,
      subText: content.solution_3_description?.match(headerRegex)[1],
      img: content.solution_3_graphic.data[0].url,
      ctaName: 'Learn More',
      href: '#',
    },
    {
      id: 3,
      name: 'innovate',
      icon: '',
      text: content.solution_4_description,
      subText: content.solution_4_description?.match(headerRegex)[1],
      img: content.solution_4_graphic.data[0].url,
      ctaName: 'Learn More',
      href: '#',
    },
  ];

  return (
    <Box paddingY={1}>
      <Container>
        <Box sx={{}}>
          <Typography
            component={'h2'}
            variant={'p'}
            paddingTop={10}
            sx={{
              color: theme.palette.secondary.darkCharcoal,
              fontWeight: 800,
              fontSize: '32px',
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
            gap: '4rem',
            height: '50vh',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <Zoom>
            <Box sx={{}}>
              <ZoomMui
                in={active === 0}
                style={{ display: active === 0 ? 'block' : 'none' }}
              >
                <img
                  src={content[`solution_1_graphic`].data[0].url}
                  alt=""
                  width={500}
                />
              </ZoomMui>
              <ZoomMui
                in={active === 1}
                style={{ display: active === 1 ? 'block' : 'none' }}
                width={500}
              >
                <img
                  width={500}
                  src={content[`solution_2_graphic`].data[0].url}
                  alt=""
                />
              </ZoomMui>
              <ZoomMui
                in={active === 2}
                style={{ display: active === 2 ? 'block' : 'none' }}
              >
                <img
                  width={500}
                  src={content[`solution_3_graphic`].data[0].url}
                  alt=""
                />
              </ZoomMui>
              <ZoomMui
                in={active === 3}
                style={{ display: active === 3 ? 'block' : 'none' }}
              >
                <img
                  width={500}
                  src={content[`solution_4_graphic`].data[0].url}
                  alt=""
                />
              </ZoomMui>
            </Box>
          </Zoom>
          <Zoom>
            <Box sx={{ background: '' }}>
              {cardData.map((e, i) => {
                return i === active ? (
                  <CustomCard data={e} theme={theme} />
                ) : (
                  <Box
                    onClick={() => setactive(i)}
                    paddingY={2}
                    sx={{
                      borderBottom: `1px solid ${theme.palette.secondary.whiteSmoke}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      cursor: 'pointer',
                    }}
                  >
                    {/* <img src="" alt="" /> */}
                    <ArrowRightAltIcon />
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
          </Zoom>
        </Box>
        <Zoom>
          <Grid item xs={12} md={9}>
            <Box
              paddingTop={10}
              paddingBottom={10}
              sx={{
                textAlign: 'center',
                color: theme.palette.secondary.darkCharcoal,
                fontSize: '1.5rem',
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
        </Zoom>
      </Container>
    </Box>
  );
};

const ThirdSection = ({ content, theme }) => {
  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestySeaShell,
      }}
      paddingBottom={20}
      paddingTop={10}
    >
      <Container>
        <Box>
          <Typography
            component={'p'}
            variant={'p'}
            paddingBottom={10}
            sx={{
              fontSize: '1.4rem',
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
          <Zoom>
            <img src={content.about_dxp_graphic.data[0].url} alt="" />
          </Zoom>
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
}) => {
  return (
    <Box
      paddingY={2}
      sx={{
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        position: 'relative',
        zIndex: '1000',
      }}
    >
      {index !== 3 && (
        <Box
          sx={{
            zIndex: '10',
            background: theme.palette.zesty.zestyBackgroundBlue,
            height: '20px',
            width: '20px',
            borderRadius: '50%',
            position: 'absolute',
            left: '50.2%',
            bottom: '0',
            transform: 'translate(-50%,-50%)',
          }}
        />
      )}

      <Fade left>
        <Box sx={{ position: 'relative' }}>
          <Typography
            component={'h3'}
            variant={'p'}
            paddingTop={10}
            paddingBottom={10}
            sx={{
              color: theme.palette.common.white,
              textAlign: 'left',
              fontSize: '1.5rem',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(text, strToChange, strColor),
            }}
          />
          <Link
            href="#"
            underline="always"
            sx={{
              position: 'absolute',
              top: '22rem',
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
      </Fade>
      <Fade right>
        <img src={img} width={700} />
      </Fade>
    </Box>
  );
};

const FourthSection = ({ content, theme }) => {
  const FillerImage =
    content.middle_solution_1_graphic.data[0].url ||
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
      paddingY={10}
      sx={{
        backgroundColor: theme.palette.zesty.zestyDarkBlue,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          left: 0,
          bottom: 0,
        }}
      >
        <img src={featuresBg1.src} alt="bg" />
      </Box>
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      >
        <img src={featuresBg2.src} alt="bg" />
      </Box>
      <Box
        sx={{
          zIndex: '10',
          background: theme.palette.zesty.zestyBackgroundBlue,
          height: '290vh',
          width: '3px',
          position: 'absolute',
          left: '50%',
          bottom: '0',
        }}
      />
      <Container>
        <Box>
          <Typography
            component={'h2'}
            variant={'p'}
            paddingTop={10}
            paddingBottom={10}
            sx={{
              color: theme.palette.common.white,
              textAlign: 'center',
              fontSize: '48px',
              position: 'relative',
              zIndex: '1000',
              textTransform: 'capitalize',
            }}
          >
            {content.middle_solutions_header}
          </Typography>
        </Box>
        {arr.map((e, i) => {
          return (
            <RevealComponent
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
const FifthSection = ({ content, theme }) => {
  const arr = content.features.data;
  return (
    <Box paddingBottom={20} sx={{ position: 'relative' }}>
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          left: 0,
          bottom: 0,
        }}
      >
        <img src={featuresBg1.src} alt="bg" />
      </Box>
      <Container>
        <Box>
          <Typography
            component={'h2'}
            variant={'p'}
            paddingTop={10}
            paddingBottom={10}
            sx={{
              color: theme.palette.secondary.darkCharcoal,
              textAlign: 'center',
              fontSize: '48px',
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
          {arr.map((e) => {
            return (
              <Zoom>
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
              </Zoom>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

const SixtheSection = ({ content, theme }) => {
  return (
    <Box
      paddingY={30}
      sx={{
        background: theme.palette.zesty.zestyGray99,
        // background: 'aqua',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '4rem',
        }}
      >
        <Fade left>
          <Box sx={{}}>
            <img src={content.integrations_graphic.data[0].url} />
          </Box>
        </Fade>
        <Fade right>
          <Box
            sx={{
              background: '',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <Box sx={{ position: 'absolute', top: '-5rem' }}>
              <img
                src={content.integrations_airplane_graphic.data[0].url}
                alt=""
              />
            </Box>
            <Typography
              component={'p'}
              variant={'p'}
              paddingTop={10}
              paddingBottom={10}
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
                href={
                  content.integrations_button_link.data[0].meta.web.uri || ''
                }
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
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

const Section7 = ({ content, theme }) => {
  const [headless, setheadless] = React.useState(true);
  const [hybrid, sethybrid] = React.useState(false);
  return (
    <Box
      paddingY={15}
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
        }}
      >
        <img src={headlessCmsBg.src} alt="bg" />
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
              fontSize: '32px',
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
                padding: '1rem 5rem',
                gap: '1rem',
                position: 'relative',
                zIndex: '2000',
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
                padding: '1rem 5rem',
                position: 'relative',
                zIndex: '2000',
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
          paddingTop={15}
          sx={{
            display: 'flex',
            position: 'relative',
            zIndex: '1000',
          }}
        >
          <Zoom>
            <ZoomMui
              in={headless}
              style={{ display: headless ? 'block' : 'none' }}
            >
              <img src={content.headless_cms_graphic.data[0].url} />
            </ZoomMui>
            <ZoomMui in={hybrid} style={{ display: hybrid ? 'block' : 'none' }}>
              <img src={content.headless_cms_graphic.data[0].url} />
            </ZoomMui>
          </Zoom>
          <Zoom>
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
                  paddingTop={10}
                  paddingBottom={10}
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
                  paddingTop={10}
                  paddingBottom={10}
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
          </Zoom>
        </Box>
      </Container>
    </Box>
  );
};

const Section9CaseStudies = ({ content, theme }) => {
  return (
    <Box>
      <Container>
        <Typography
          component={'h2'}
          variant={'p'}
          paddingBottom={10}
          sx={{
            fontSize: '32px',
            color: theme.palette.secondary.darkCharcoal,
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
        <Box>
          <img src="" />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {content.case_studies.data.map((e) => {
            return <img src={e.logo.data[0].url} />;
          })}
        </Box>
      </Container>
    </Box>
  );
};
const Section10Bottom = ({ content, theme }) => {
  return (
    <Box paddingY={20} sx={{ position: 'relative' }}>
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          right: 0,
          bottom: 0,
        }}
      >
        <img src={bottomBg.src} alt="bg" />
      </Box>
      <Container>
        <Box
          paddingY={8}
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            gap: '2rem',
          }}
        >
          <Fade left>
            <Box sx={{ position: 'relative' }}>
              <Typography
                component={'h2'}
                variant={'p'}
                sx={{
                  color: theme.palette.secondary.darkCharcoal,
                  textAlign: 'left',
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
                  top: '10rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  color: theme.palette.zesty.zestyTealDark,
                }}
              >
                <Button
                  sx={{ padding: '.5rem 4rem' }}
                  variant="contained"
                  color="secondary"
                >
                  {content.bottom_cta_button_primary}
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  sx={{ textDecoration: 'underline' }}
                >
                  {content.bottom_cta_button_secondary}
                  <ArrowRightAltIcon />
                </Button>
              </Box>
            </Box>
          </Fade>
          <Fade right>
            <img src={content.bottom_cta_graphic.data[0].url} />
          </Fade>
        </Box>
      </Container>
    </Box>
  );
};
function DigitalExperiencePlatform({ content }) {
  console.log(content, 12222);
  const theme = useTheme();

  return (
    <>
      <Section1Hero content={content} theme={theme} />
      <SecondSection content={content} theme={theme} />
      <ThirdSection content={content} theme={theme} />
      <FourthSection content={content} theme={theme} />
      <FifthSection content={content} theme={theme} />
      <SixtheSection content={content} theme={theme} />
      <Section7 content={content} theme={theme} />
      <Section9CaseStudies content={content} theme={theme} />
      <Section10Bottom content={content} theme={theme} />
    </>
  );
}

export default DigitalExperiencePlatform;
