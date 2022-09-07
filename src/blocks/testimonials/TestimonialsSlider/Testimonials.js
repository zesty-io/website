/**
 * MUI Imports
 */

import { Box, Typography, Card, Grid } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Static Assets Imports
 */

import HeartQuote from '../../../../public/assets/images/homepage/heartQuote.svg';
import Star from '../../../../public/assets/images/homepage/star.svg';

/**
 * Components Imports
 */

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import ZestyImage from 'blocks/Image/ZestyImage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Container from 'blocks/container/Container';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';

const Testimonials = ({ title, data }) => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const backgroundUrl = 'https://kfg6bckb.media.zestyio.com/testimonials.svg';

  return (
    <Box
      component="section"
      sx={{
        mt: 10,
        py: 10,
        background: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Grid
          sx={{
            minHeight: 615,
          }}
          container
          spacing={4}
        >
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            item
            xs={12}
            md={5}
          >
            <Box sx={{ width: '100%', maxWidth: 450 }}>
              <MuiMarkdown
                overrides={{
                  h1: {
                    component: Typography,
                    props: {
                      component: 'h2',
                      variant: 'h4',
                      sx: {
                        color: theme.palette.zesty.zestyOrange,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      component: 'p',
                      variant: 'h4',
                      sx: {
                        color: theme.palette.zesty.zestyZambezi,
                        fontWeight: 'bold',
                      },
                    },
                  },
                }}
              >
                {title}
              </MuiMarkdown>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ borderRadius: 5 }}>
              <Swiper
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1200: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                loop
                speed={2000}
                modules={[Navigation, Pagination, Autoplay]}
              >
                {data.map((item, index) => (
                  <SwiperSlide
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 5,
                    }}
                    key={index}
                  >
                    <Card
                      sx={{
                        py: 3,
                        margin: '0 5px',
                        width: '100%',
                        maxWidth: 462,
                        minHeight: 491,
                      }}
                    >
                      <Box sx={{ width: 75, height: 71, margin: 'auto' }}>
                        <ZestyImage
                          width={75}
                          height={71}
                          loading="lazy"
                          src={HeartQuote.src}
                          alt="heart quote"
                        />
                      </Box>

                      <Box sx={{ px: 4 }}>
                        <Typography
                          sx={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            mt: 2,
                          }}
                          component="p"
                          variant="h6"
                        >
                          {item.title || FillerContent.description}
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: 'center',
                            mt: 2,
                            color: theme.palette.zesty.zestyZambezi,
                          }}
                        >
                          {item.review || FillerContent.description}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mt: 4,
                        }}
                      >
                        {[1, 2, 3, 4, 5].map(() => (
                          <ZestyImage
                            width={20}
                            height={20}
                            style={{ paddingLeft: 0.5, paddingRight: 0.5 }}
                            loading="lazy"
                            src={Star.src}
                            alt="star rating"
                          />
                        ))}
                      </Box>

                      <Box
                        sx={{ textAlign: 'center', fontWeight: 'bold', mt: 2 }}
                      >
                        {item.reviewer_title || FillerContent.description}
                      </Box>
                    </Card>
                  </SwiperSlide>
                ))}

                <Box
                  sx={{
                    display: 'flex',
                    gap: 3,
                    position: 'relative',
                    zIndex: 1,
                    mt: 2,
                    justifyContent: isLarge ? 'center' : 'flex-start',
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;

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
