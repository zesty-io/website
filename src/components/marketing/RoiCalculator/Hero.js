/**
 *  MUI Imports
 */
import { Box, Typography, Grid, Container } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

function Hero({ content, FillerContent, theme }) {
  return (
    <Box
      sx={{
        minHeight: 391,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.background.lightGrey,
      }}
      component="section"
    >
      <Container>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          container
        >
          <Grid item sm={12} md={6}>
            <MuiMarkdown
              overrides={{
                h1: {
                  component: Typography,
                  props: {
                    component: 'h1',
                    variant: 'h3',
                    sx: {
                      fontWeight: 'bold',
                      color: theme.palette.zesty.zestyZambezi,
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
                      color: theme.palette.zesty.zestyZambezi,
                    },
                  },
                },
              }}
            >
              {content.page_title_and_description || FillerContent.header}
            </MuiMarkdown>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box>
              <Box
                sx={{ width: '100%', maxWidth: 666 }}
                component="img"
                src={content.header_graphic || FillerContent.photos[0].src}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
