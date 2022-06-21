/**
 * MUI Imports
 */
import { Box, Card, Container, Link, Typography } from '@mui/material';
import ZoomMui from '@mui/material/Zoom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

/**
 * React Imports
 */
import { useState } from 'react';

/**
 * Helpers Imports
 */
import * as helper from 'utils';

const Implementation = ({ content, theme, isMobile }) => {
  const [headless, setheadless] = useState(true);
  const [hybrid, sethybrid] = useState(false);
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

export default Implementation;
