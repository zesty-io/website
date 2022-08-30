/**
 * MUI Imports
 */
import { Box, Grid, Card, Typography, Container } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import { useTheme } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

/**
 * Components Imports
 */

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const PowerHeadless = ({ theme, isMedium, content, FillerContent }) => {
  return (
    <Box component="section" sx={{ py: 5 }}>
      <Container sx={{ height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: isMedium ? 'flex-start' : 'flex-end',
          }}
        >
          <Box
            sx={{ width: '100%', width: 700, margin: isMedium ? 'auto' : 0 }}
          >
            <MuiMarkdown
              overrides={{
                span: {
                  component: Typography,
                  props: {
                    component: 'span',
                    variant: 'h4',
                    sx: {
                      color: theme.palette.zesty.zestyOrange,
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                    },
                  },
                },
                h2: {
                  component: Typography,
                  props: {
                    component: 'h2',
                    variant: 'h4',
                    sx: {
                      textAlign: isMedium ? 'center' : 'right',
                      fontWeight: 'bold',
                      color: theme.palette.zesty.zestyDarkText,
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
                      textAlign: isMedium ? 'center' : 'right',
                      lineHeight: 1.2,
                      color: theme.palette.zesty.zestyZambezi,
                    },
                  },
                },
                a: {
                  component: Typography,
                  props: {
                    component: 'a',
                    variant: 'h6',
                    sx: {
                      mt: 2,
                      textAlign: isMedium ? 'center' : 'right',
                      color: theme.palette.zesty.zestyOrange,
                    },
                  },
                },
              }}
            >
              {content.power_of_headless_cms || FillerContent.description}
            </MuiMarkdown>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          mt: 10,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: `url(${content.background_orange.data[2].url}?width=1731)`,
          minHeight: 655,
        }}
      >
        <Container>
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            loop
            speed={2000}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {content.power_of_headless_cms_cards?.data.map((item, index) => (
              <SwiperSlide
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 5,
                }}
                key={index}
              >
                <Grid container spacing={2}>
                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                    item
                    sm={12}
                    md={6}
                  >
                    <Box sx={{ p: isMedium ? 0 : 5 }}>
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                          fontWeight: 'bold',
                          textAlign: isMedium ? 'center' : 'text-left',
                        }}
                      >
                        {item.header}
                      </Typography>
                      <MuiMarkdown
                        overrides={{
                          p: {
                            component: 'p',
                            variant: 'h6',
                            props: {
                              sx: {
                                color: theme.palette.zesty.zestyZambezi,
                              },
                            },
                          },
                        }}
                      >
                        {item.content}
                      </MuiMarkdown>
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
                      sx={{ width: '100%' }}
                      component="img"
                      src={
                        `${item.image.data[0].url}?width=860` ||
                        FillerContent.photos[0].src
                      }
                      alt={item.header || ''}
                    />
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}

            <Box
              sx={{
                px: 5,

                display: 'flex',
                gap: 3,
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Box>
                <SwiperButtonPrev />
              </Box>
              <Box>
                <SwiperButtonNext />
              </Box>
            </Box>
          </Swiper>
        </Container>
      </Box>
    </Box>
  );
};

export default PowerHeadless;

const SwiperButtonNext = () => {
  const theme = useTheme();
  const swiper = useSwiper();

  return (
    <>
      <Box
        sx={{
          width: 38,
          height: 38,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: `1px solid ${theme.palette.zesty.zestyZambezi}`,
          borderRadius: '50%',
        }}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <ArrowForwardIosIcon
          sx={{ width: '100%', color: theme.palette.zesty.zestyZambezi }}
        />
      </Box>
    </>
  );
};

const SwiperButtonPrev = () => {
  const theme = useTheme();
  const swiper = useSwiper();
  return (
    <>
      <Box
        sx={{
          width: 38,
          height: 38,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: `1px solid ${theme.palette.zesty.zestyZambezi}`,
          borderRadius: '50%',
        }}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <ArrowBackIosNewIcon
          sx={{ width: '100%', color: theme.palette.zesty.zestyZambezi }}
        />
      </Box>
    </>
  );
};
