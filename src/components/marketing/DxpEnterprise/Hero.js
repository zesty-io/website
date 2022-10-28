/**
 * Mui Imports
 */

import { Box, Grid, Typography, Button } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';

/**
 * Local Assets Imports
 */
import HeroBackground from '../../../../public/assets/images/dxp-enterprise/hero-background.svg';
const Hero = ({ content, FillerContent, theme, isMedium, isLarge }) => {
  return (
    <>
      <Box
        component="header"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundSize: ' cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          minHeight: 700,
          backgroundImage: `url(${HeroBackground.src})`,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 1500, px: 4 }}>
          <Grid container>
            <Grid
              sx={{
                mt: isLarge ? 15 : 25,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
              item
              sm={12}
              md={6}
            >
              <Typography
                sx={{
                  color: theme.palette.zesty.zestyZambezi,
                  fontWeight: 'bold',
                  '& span': {
                    color: 'inherit',
                  },
                }}
                variant="h3"
                component="h1"
              >
                <MuiMarkdown
                  options={{
                    overrides: {
                      strong: {
                        component: Typography,
                        props: {
                          component: 'strong',
                          sx: {
                            fontSize: 'inherit',
                            fontWeight: 'inherit',
                            color: theme.palette.zesty.zestyOrange,
                          },
                        },
                      },
                    },
                  }}
                >
                  {content.h1_title?.replaceAll(
                    'enterprise solution',
                    `<strong>enterprise solution</strong>`,
                  ) || FillerContent.header}
                </MuiMarkdown>
              </Typography>

              <Typography
                sx={{ mt: 2, color: theme.palette.zesty.zestyZambezi }}
                component="h2"
                variant="h6"
              >
                {content.hero_description}
              </Typography>

              <Box
                component={Button}
                variant="contained"
                sx={{
                  background: theme.palette.zesty.zestyOrange,
                  width: ' 100%',
                  maxWidth: isMedium ? '100%' : 174,
                  mt: 2,
                }}
                href={
                  content.hero_cta_link?.data[0].meta.web.uri ||
                  FillerContent.href
                }
              >
                Schedule A Demo
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
              <Box
                sx={{ width: '100%', maxWidth: 836.36 }}
                component="img"
                src={
                  content.hero_graphic?.data[0].url ||
                  FillerContent.photos[0].src
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
