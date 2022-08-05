/**
 * MUI Imports
 */

import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

/**
 * Static Assets Imports
 */

import HeartQuote from '../../../../public/assets/images/homepage/heartQuote.svg';
import Star from '../../../../public/assets/images/homepage/star.svg';

/**
 * Components Imports
 */

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Container from 'blocks/container/Container';

const Testimonials = ({ content, FillerContent, theme, isMedium, isLarge }) => {
  return (
    <Box
      component="section"
      sx={{
        py: 10,
        background: `url(${content.testimonials_background?.data[2].url})`,
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
          <Grid item sm={12} md={5}>
            Test
          </Grid>
          <Grid item sm={12} md={7}>
            <Box>
              <Swiper
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  1200: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
                loop
                speed={2000}
                modules={[Navigation, Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {content.testimonials?.data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Card
                      sx={{
                        py: 3,
                        width: '100%',
                        maxWidth: 462,
                        minHeight: 491,
                      }}
                    >
                      <Box sx={{ width: 75, height: 71, margin: 'auto' }}>
                        <Box
                          sx={{ width: '100%' }}
                          component="img"
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
                          <Box
                            sx={{ px: 0.5 }}
                            component="img"
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
              </Swiper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
