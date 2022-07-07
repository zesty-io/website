/**
 *  MUI Imports
 */
import { Box, Typography, Grid, Container } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

/**
 *  Static Assets Imports
 */
import HeaderImage from '../../../../public/assets/images/roi-calculator/curves.svg';

function Hero({ content, FillerContent, theme, isExtraLarge, isLarge }) {
  return (
    <Box
      sx={{
        minHeight: isExtraLarge ? 400 : 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'hidden',
        position: 'relative',
        py: isLarge ? 5 : 0,
      }}
      component="section"
    >
      <Box
        sx={{
          position: 'absolute',
          left: isExtraLarge ? -210 : -270,
          top: -35,
          width: '100%',
          display: isLarge ? 'none' : '',
        }}
        alt=""
        component="img"
        src={HeaderImage.src}
      />

      <Container
        sx={{
          mt: isExtraLarge ? 0 : -10,
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          container
        >
          <Grid sx={{ position: 'relative', zIndex: 10 }} item sm={12} md={6}>
            <MuiMarkdown
              overrides={{
                h1: {
                  component: Typography,
                  props: {
                    component: 'h1',
                    variant: 'h3',
                    sx: {
                      fontWeight: 'bold',
                      color: isLarge
                        ? theme.palette.zesty.zestyZambezi
                        : theme.palette.common.white,
                      textAlign: isLarge ? 'center' : 'left',
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    component: 'p',
                    variant: 'h6',
                    sx: {
                      mt: 2,
                      color: isLarge
                        ? theme.palette.zesty.zestyZambezi
                        : theme.palette.common.white,
                      textAlign: isLarge ? 'center' : 'left',
                    },
                  },
                },
              }}
            >
              {content.page_title_and_description || FillerContent.header}
            </MuiMarkdown>
          </Grid>
          <Grid sx={{ position: 'relative', zIndex: 10 }} item sm={12} md={6}>
            <Box>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: isLarge ? 444 : 666,
                  display: 'block',
                  margin: 'auto',
                }}
                component="img"
                src={
                  content.header_graphic.data[0].url ||
                  FillerContent.photos[0].src
                }
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
