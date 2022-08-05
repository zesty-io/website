/**
 * MUI Imports
 */

import { Box, Typography, Grid } from '@mui/material';
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';
import MuiMarkdown from 'mui-markdown';

/**
 * Static Assets Imports
 */
import heroBackground from '../../../../public/assets/images/homepage/hero_background.svg';

const Hero = ({ content, FillerContent, theme, isMedium }) => {
  return (
    <>
      <Box
        component="section"
        sx={{
          background: `url(${heroBackground.src})`,
          height: 955,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
              <MuiMarkdown
                overrides={{
                  h1: {
                    component: Typography,
                    props: {
                      component: 'h1',
                      variant: 'h3',
                      sx: {
                        fontWeight: 900,
                        color: theme.palette.common.white,
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      component: 'p',
                      variant: 'h6',
                      sx: {
                        fontWeight: 'bold',
                        mt: 2,
                        color: theme.palette.common.white,
                      },
                    },
                  },
                }}
              >
                {content.header_title_and_description ||
                  FillerContent.rich_text}
              </MuiMarkdown>

              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  flexDirection: isMedium ? 'column' : 'row',
                  gap: 2,
                }}
              >
                <TryFreeButton
                  text={content.hero_button_left || FillerContent.cta}
                  variant="outline"
                  fullWidth={isMedium}
                  sx={{
                    color: theme.palette.zesty.zestyOrange,
                    background: 'white',
                    fontWeight: 'bold',
                    borderRadius: 1,
                  }}
                />
                <DemoCta
                  fullWidth={isMedium}
                  href={content.hero_button_right_link?.data[0].meta.web.uri}
                  text={content.hero_button_right || FillerContent.cta}
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 'bold',
                  }}
                />
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box>
                <Box
                  sx={{ width: '100%', maxWidth: 846 }}
                  component="img"
                  src={
                    content.header_graphic?.data[0].url ||
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
