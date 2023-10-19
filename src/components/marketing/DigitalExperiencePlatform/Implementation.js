/**
 * MUI Imports
 */
import { Box, Card, Container, Typography, Grid } from '@mui/material';
import ZoomMui from '@mui/material/Zoom';
import MuiMarkdown from 'markdown-to-jsx';
/**
 * React Imports
 */
import { useState } from 'react';

/**
 * Helpers Imports
 */
import ZestyImage from 'blocks/Image/ZestyImage';

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
        background: isDarkMode
          ? theme.palette.zesty.zestyDarkBlue
          : theme.palette.common.white,
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
          width: '100%',
        }}
      >
        <Box sx={{ width: '100%' }} component="img" src={swooshBg} alt="bg" />
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
                : theme.palette.zesty.zestyZambezi,
              py: 10,
              textAlign: 'center',
            }}
          >
            {content.implementing_header || FillerContent.description}
          </Typography>
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
                zIndex: theme.zIndex.banner,
                cursor: 'pointer',
                color: headless
                  ? theme.palette.zesty.zestyTealDark
                  : theme.palette.common.dark,
                borderBottom: `4px solid ${
                  headless ? theme.palette.zesty.zestyTealDark : 'transparent'
                }`,
              }}
            >
              <ZestyImage
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
                zIndex: theme.zIndex.banner,
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
              <div>
                <ZoomMui in={headless ? headless : hybrid}>
                  <Box>
                    <MuiMarkdown
                      options={{
                        overrides: {
                          p: {
                            component: Typography,
                            props: {
                              component: 'p',
                              variant: 'h6',
                              sx: {
                                color: theme.palette.zesty.zestyZambezi,
                              },
                            },
                          },
                        },
                      }}
                    >
                      {headless
                        ? content.headless_cms_description ||
                          FillerContent.description
                        : content.hybrid_cms_description ||
                          FillerContent.description}
                    </MuiMarkdown>
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
