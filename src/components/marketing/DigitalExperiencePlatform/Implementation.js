/**
 * MUI Imports
 */
import { Box, Card, Container, Link, Typography, Grid } from '@mui/material';
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

const Implementation = ({
  content,
  theme,
  isMobile,
  isDarkMode,
  FillerContent,
}) => {
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
          zIndex: 0,
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
              color: isDarkMode
                ? theme.palette.zesty.zestyDarkBlue
                : theme.palette.secondary.darkCharcoal,
              fontSize: isMobile ? '22px' : '32px',
              py: 10,
              textAlign: 'center',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.implementing_header || FillerContent.description,
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
                src={
                  content.headless_cms_toggle_graphic?.data[0].url ||
                  FillerContent.logos[0].url
                }
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
                {content.headless_cms_toggle || FillerContent.description}
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
              <img
                alt=""
                src={
                  content.hybrid_cms_toggle_graphic?.data[0].url ||
                  FillerContent.logos[0].url
                }
              />
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
                {content.hybrid_cms_toggle || FillerContent.description}
              </Typography>
            </Box>
          </Card>{' '}
        </Box>
        <Box>
          <Grid sx={{ mt: 4 }} container spacing={2}>
            <Grid item sm={12} md={6}>
              <ZoomMui in={headless ? headless : hybrid}>
                <Box
                  component="img"
                  src={
                    headless
                      ? content.headless_cms_graphic?.data[0].url ||
                        FillerContent.logos[0].url
                      : content.hybrid_cms_graphic?.data[0].url ||
                        FillerContent.logos[0].url
                  }
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                  }}
                />
              </ZoomMui>
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
              <div data-aos="zoom-in">
                <ZoomMui in={headless ? headless : hybrid}>
                  <Box>
                    <Typography
                      component={'p'}
                      variant={'p'}
                      sx={{
                        color: isDarkMode
                          ? theme.palette.zesty.zestyDarkBlue
                          : theme.palette.secondary.darkCharcoal,
                        textAlign: 'left',
                        fontSize: '1.2rem',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: helper.strColorChanger(
                          headless
                            ? content.headless_cms_description ||
                                FillerContent.description
                            : content.hybrid_cms_description ||
                                FillerContent.description,
                          'Personalize at scale with Data',
                          theme.palette.zesty.zestyOrange,
                        ),
                      }}
                    />
                    {/* <Box>
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
                        Learn More <ArrowRightAltIcon />
                      </Link>
                    </Box> */}
                  </Box>
                </ZoomMui>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Implementation;
