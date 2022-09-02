/**
 * MUI Imports
 */

import { Box, Typography, Grid } from '@mui/material';
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';
import MuiMarkdown from 'mui-markdown';
import Image from 'next/image';

/**
 * Static Assets Imports
 */
// import heroBackground from '../../../../public/assets/images/homepage/hero_background.svg';

const Hero = ({ content, FillerContent, theme, isMedium, isSmall }) => {
  return (
    <>
      <Box
        component="section"
        sx={{
          // background: `url(${heroBackground.src})`,
          minHeight: 700,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: isMedium ? 10 : 0,
        }}
      >
        <Box
          sx={{
            height: ' 100%',
            width: '100%',
            maxWidth: 1500,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            px: 4,
          }}
        >
          <Grid container spacing={3.5}>
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
              <Box>
                <MuiMarkdown
                  overrides={{
                    h1: {
                      component: Typography,
                      props: {
                        'data-aos': 'fade-up',
                        'data-aos-duration': '1000',
                        component: 'h1',
                        variant: 'h3',
                        sx: {
                          color: theme.palette.zesty.zestyDarkText,
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        'data-aos': 'fade-up',
                        'data-aos-duration': '1500',
                        component: 'p',
                        variant: 'h6',
                        sx: {
                          mt: 2,
                          color: theme.palette.text.secondary,
                        },
                      },
                    },
                  }}
                >
                  {content.header_title_and_description ||
                    FillerContent.rich_text}
                </MuiMarkdown>
              </Box>

              <Box
                data-aos="fade-up"
                data-aos-duration="2500"
                sx={{
                  mt: 4,
                  display: 'flex',
                  flexDirection: isMedium ? 'column' : 'row',
                  gap: 2,
                }}
              >
                <TryFreeButton
                  text={content.hero_button_left || FillerContent.cta}
                  variant="contained"
                  fullWidth={isMedium}
                  // sx={{
                  //   color: theme.palette.zesty.zestyOrange,
                  //   background: 'white',
                  //   fontWeight: 'bold',
                  //   borderRadius: 1,
                  // }}
                />
                <DemoCta
                  fullWidth={isMedium}
                  href={content.hero_button_right_link?.data[0].meta.web.uri}
                  text={content.hero_button_right || FillerContent.cta}
                />
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box>
                <Image
                  quality={70}
                  loading="lazy"
                  data-aos="fade-up"
                  style={{ width: '100%', maxWidth: 846 }}
                  width={846}
                  height={576}
                  src={
                    `${content.header_graphic?.data[0].url}?width=846` ||
                    FillerContent.photos[0].src
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
