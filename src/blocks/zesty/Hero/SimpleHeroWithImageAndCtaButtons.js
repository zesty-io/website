import React from 'react';

/**
 * MUI Imports
 */

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';
import ReactPlayer from 'react-player';

/**
 * Components Import
 */
import Container from 'components/Container';
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';
import CodeBlock from 'components/cta/CodeBlock';

/**
 *
 * @param {string} mainTitle - eyebrow header (text)
 * @param {string} title - title or title and description (textarea/wysiwyg_basic)
 * @param {string} description - description (textarea)
 * @param {string} cta_left - primary button text (text/one_to_one)
 * @param {string} cta_right - secondary button text (text/one_to_one)
 * @param {string} cta_right_url - secondary button url (internal_link/one_to_one)
 * @param {string} backgroundColor - header background color
 * @param {string} image - header main image (images)
 * @param {boolean} bgImage - background image
 *
 */

const SimpleHeroWithImageAndCtaButtons = ({
  mainTitle,
  title,
  description,
  cta_left,
  cta_left_url,
  cta_right,
  cta_right_url,
  backgroundColor = '',
  image,
  video,
  integrationLogo,
  bgImage = false,
  isDarkBackground = false,
  isCodeBlock = false,
  dataTestId = '',
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isExtraLarge = useMediaQuery(theme.breakpoints.down('xl'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      data-testid={dataTestId}
      sx={{
        background: backgroundColor,
        py: isSmall ? 5 : 10,
      }}
      component={'section'}
    >
      <Container>
        {bgImage && (
          <Box
            sx={{
              position: 'absolute',
              left: '15%',
              top: 140,
              display: isSmall ? 'none' : 'flex',
            }}
          >
            <Box
              component="img"
              sx={{ width: 600, opacity: 0.03, zIndex: 0 }}
              src={
                isDarkMode
                  ? 'https://brand.zesty.io/zesty-io-logo-light.png' ||
                    FillerContent.photos[0].src
                  : 'https://brand.zesty.io/zesty-io-logo.svg' ||
                    FillerContent.photos[0].src
              }
              alt=""
            />
          </Box>
        )}

        <Grid container spacing={4} sx={{ zIndex: 100 }}>
          <Grid item container xs={12} md={6} alignItems={'center'}>
            <Box marginBottom={2}>
              {mainTitle && (
                <Typography
                  component={'h1'}
                  variant="p"
                  color={
                    isDarkMode
                      ? theme.palette.zesty.zestyWhite
                      : theme.palette.zesty.zestyOrange
                  }
                  gutterBottom
                  sx={{ fontWeight: 400, fontSize: '20px' }}
                >
                  {mainTitle || FillerContent.header}
                </Typography>
              )}

              <MuiMarkdown
                options={{
                  overrides: {
                    span: {
                      component: Typography,
                      props: {
                        component: mainTitle ? 'h2' : 'h1',
                        variant: 'h3',
                        sx: {
                          fontWeight: 700,
                          color: isDarkBackground
                            ? theme.palette.common.white
                            : theme.palette.zesty.zestyZambezi,
                        },
                      },
                    },
                    h1: {
                      component: Typography,
                      props: {
                        component: mainTitle ? 'h2' : 'h1',
                        variant: 'h3',
                        sx: {
                          fontWeight: 700,
                          color: isDarkBackground
                            ? theme.palette.common.white
                            : theme.palette.zesty.zestyZambezi,
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        my: 2.5,
                        component: 'p',
                        variant: 'h6',
                        sx: {
                          color: isDarkBackground
                            ? theme.palette.common.white
                            : theme.palette.zesty.zestyZambezi,
                        },
                      },
                    },
                  },
                }}
              >
                {title || FillerContent.rich_text_2}
              </MuiMarkdown>
            </Box>

            {description && (
              <Box marginBottom={3}>
                <MuiMarkdown
                  options={{
                    overrides: {
                      p: {
                        component: Typography,
                        props: {
                          variant: 'h6',
                          component: 'p',
                          sx: {
                            color: isDarkBackground
                              ? theme.palette.common.white
                              : theme.palette.zesty.zestyZambezi,
                          },
                        },
                      },
                      span: {
                        component: Typography,
                        props: {
                          variant: 'h6',
                          component: 'p',
                          sx: {
                            color: isDarkBackground
                              ? theme.palette.common.white
                              : theme.palette.zesty.zestyZambezi,
                          },
                        },
                      },
                    },
                  }}
                >
                  {description || FillerContent.description}
                </MuiMarkdown>
              </Box>
            )}

            {isCodeBlock && (
              <>
                <Typography
                  sx={{
                    color: theme.palette.common.white,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  Get started with one line of code
                </Typography>
                <Box
                  sx={{
                    border: `1px solid ${theme.palette.common.white}`,
                    borderRadius: 1,
                    width: '100%',
                    maxWidth: 470,
                    filter:
                      'drop-shadow(4px 4px 30px rgba(176, 176, 176, 0.25))',
                    my: 2,
                  }}
                >
                  <CodeBlock />
                </Box>
              </>
            )}

            <Box
              display="flex"
              sx={{ gap: 2 }}
              flexDirection={{ xs: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <TryFreeButton
                text={cta_left}
                variant="contained"
                size="large"
                color="secondary"
              ></TryFreeButton>
              {cta_right &&
                (isDarkBackground ? (
                  <DemoCta
                    icon={false}
                    fullWidth={isMedium}
                    sx={{
                      width: '100%',
                      maxWidth: isMedium ? '100%' : 174,
                      fontWeight: 'bold',
                      color: theme.palette.zesty.zestyOrange,
                      background: theme.palette.common.white,
                    }}
                    text={cta_right || FillerContent.cta}
                    href={cta_right_url || FillerContent.href}
                  />
                ) : (
                  <DemoCta
                    sx={{ color: theme.palette.zesty.zestyOrange }}
                    text={cta_right || FillerContent.cta}
                    href={cta_right_url || FillerContent.href}
                  />
                ))}
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'flex-start'}
            xs={12}
            md={6}
          >
            {!video ? (
              <ZestyImage
                src={image || FillerContent.image}
                width={600}
                height={350}
                style={{ width: '100%', height: 'auto', objectFit: 'contain'}}
                alt={
                  mainTitle ||
                  'Visual content management for any digital channel'
                }
              />
            ) : (
              <>
                <Box
                  sx={{
                    mb: 2,
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    iframe: {
                      borderRadius: 5,
                    },
                    width: '100%',
                  }}
                >
                  <ReactPlayer
                    width={'100%'}
                    url={video || FillerContent.videoUrl}
                    muted={false}
                    playing={false}
                    loop={true}
                    controls={true}
                  />
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 250,
                    height: 100,
                    background: theme.palette.common.white,
                    display: isExtraLarge ? 'none' : 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                  }}
                >
                  <ZestyImage
                    src={integrationLogo || FillerContent.logos[0].url}
                    width={150}
                    height={90}
                    alt={mainTitle || 'Zesty.io integration'}
                  />
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SimpleHeroWithImageAndCtaButtons;
