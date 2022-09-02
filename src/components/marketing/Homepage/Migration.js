/**
 * MUI Imports
 */

import { Box, Typography, Card, Grid } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import Container from 'blocks/container/Container';
import Image from 'next/image';
/**
 * Static Assets Imports
 */

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Migration = ({ content, FillerContent, theme, isLarge }) => {
  return (
    <Box component="section" sx={{ py: 10 }}>
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
              {/* Card Oval and Circle Design */}
              {/* <Box
            sx={{
              height: 133,
              width: 133,
              background: '#9AB3DF',
              position: 'absolute',
              borderRadius: '50%',
              top: 50,
              right: isLarge ? -85 : -70,
            }}
          /> */}
              {/* <Box
            sx={{
              height: 42,
              width: 42,
              background: '#9AB3DF',
              position: 'absolute',
              borderRadius: '50%',
              top: 230,
              right: isLarge ? -30 : -20,
            }}
          /> */}
              {/* <Box
            sx={{
              height: 79,
              width: 200,
              border: `10px solid #B9F8FF `,
              position: 'absolute',
              borderRadius: 80,
              bottom: -25,
              left: -50,
            }}
          /> */}
              <MuiMarkdown
                overrides={{
                  h2: {
                    component: Typography,
                    props: {
                      'data-aos': 'zoom-in-up',
                      'data-aos-duration': '1000',
                      component: 'h1',
                      variant: 'h3',
                      fontWeight: 'bold',
                      color: theme.palette.zesty.zestyOrange,
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
                }}
              >
                {content.migration_title_and_description ||
                  FillerContent.description}
              </MuiMarkdown>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{ width: '100%', maxWidth: 1503 }}>
              <Image
                alt={'migrations'}
                blurDataURL
                placeholder="blur"
                width={1503}
                height={1310}
                data-aos-offset="200"
                data-aos="zoom-in"
                style={{ width: '100%' }}
                component="img"
                loading="lazy"
                src={`${content.migration_graphic?.data[0].url}?width=1503`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Migration;
