/**
 * MUI Imports
 */

import { Box, Typography, Card, Grid } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import Container from 'blocks/container/Container';
import ZestyImage from 'blocks/Image/ZestyImage';
/**
 * Static Assets Imports
 */

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Migration = ({ content, FillerContent, theme, isLarge }) => {
  return (
    <Box component="section" sx={{ pb: 10 }}>
      <Container>
        <Grid container spacing={2}>
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
            <Card
              data-aos-offset="200"
              data-aos="zoom-in"
              sx={{
                width: '100%',
                maxWidth: 695,
                height: 400,
                p: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: isLarge ? 'hidden' : 'unset',
                borderRadius: 5,
                margin: isLarge ? 'auto' : 0,
              }}
            >
              <MuiMarkdown
                options={{
                  overrides: {
                    h2: {
                      component: Typography,
                      props: {
                        'data-aos': 'zoom-in-up',
                        'data-aos-duration': '1000',
                        component: 'h1',
                        variant: 'h3',
                        fontWeight: 'bold',
                        color: theme.palette.zesty.zestyZambezi,
                        lineHeight: 1,
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        'data-aos-duration': '1500',
                        'data-aos': 'zoom-in-up',
                        component: 'p',
                        variant: 'h6',
                        sx: {
                          color: theme.palette.zesty.zestyZambezi,
                          lineHeight: 1.2,
                          mt: 2,
                        },
                      },
                    },
                  },
                }}
              >
                {content.migration_title_and_description ||
                  FillerContent.description}
              </MuiMarkdown>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{ width: '100%', maxWidth: 1503 }}>
              <ZestyImage
                width={1503}
                height={1310}
                style={{ width: '100%', maxWidth: 1503, height: 'auto' }}
                alt={'migrations'}
                attributes={{ 'data-aos-offset': '200', 'data-aos': 'zoom-in' }}
                loading="lazy"
                src={content.migration_graphic?.data[0].url}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Migration;
