/**
 * MUI Imports
 */

import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import Container from 'blocks/container/Container';
/**
 * Static Assets Imports
 */

/**
 * Components Imports
 */
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import DemoCta from 'components/cta/DemoCta';
import { useEffect, useState } from 'react';

const NewBenefits = ({ content, FillerContent, theme, isMedium }) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  console.log(swiper);

  return (
    <Box sx={{ background: theme.palette.zesty.zestyGray99, py: 10 }}>
      <Container>
        <MuiMarkdown
          overrides={{
            h2: {
              component: Typography,
              props: {
                component: 'h2',
                variant: 'h4',
                sx: {
                  color: theme.palette.zesty.zestyDarkText,
                  fontWeight: 'bold',
                  textAlign: 'center',
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
                  textAlign: 'center',
                },
              },
            },
          }}
        >
          {content.zesty_new_benefits}
        </MuiMarkdown>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <DemoCta
            icon={false}
            href={content.middle_cta_button_link?.data[0].meta.web.uri}
            sx={{
              mt: 4,
              background: theme.palette.zesty.zestyOrange,
              color: theme.palette.common.white,
              '&:hover': {
                background: theme.palette.zesty.zestyOrange,
              },
            }}
            text={content.middle_cta_button_text || FillerContent.href}
          />
        </Box>

        <Box sx={{ mt: 15 }}>
          <Swiper
            loop
            speed={2000}
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {content.zesty_benefits_tiles.data.map((item, index) => (
              <SwiperSlide key={index}>
                {'index ' + index}
                <SlideWrapper item={item} index={index}>
                  <Box
                    sx={{ width: '100%', maxWidth: 715, height: 480 }}
                    component="img"
                    src={item.benefit_image?.data[0].url}
                    alt={item.header}
                  />
                  <Box
                    className="slide-description"
                    sx={{ textAlign: 'center', display: 'flex' }}
                  ></Box>
                </SlideWrapper>
              </SwiperSlide>
            ))}

            <SwiperButtonPrev />
            {content.zesty_benefits_tiles.data.map((item, index) => (
              <Box>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    color: theme.palette.zesty.zestyDarkText,
                    fontWeight: 'bold',
                  }}
                >
                  {item.header || FillerContent.description}
                </Typography>
                <MuiMarkdown
                  overrides={{
                    p: {
                      component: Typography,
                      props: {
                        component: 'p',
                        variant: 'h6',
                        color: theme.palette.zesty.zestyZambezi,
                        mt: 2,
                      },
                    },
                  }}
                >
                  {item.benefit_content || FillerContent.description}
                </MuiMarkdown>
              </Box>
            ))}
            <SwiperButtonNext />
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default NewBenefits;

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
      >
        Next
      </button>
    </>
  );
};

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <>
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        Prev
      </button>
    </>
  );
};

const SlideWrapper = ({ children, item, index }) => {
  const swiperSlide = useSwiperSlide();
  const [active, setActive] = useState(swiperSlide.isNext ? item : null);

  useEffect(() => {
    setActive(swiperSlide.isNext ? item : null);
  }, [swiperSlide]);

  console.log('active item', active, index);

  return (
    <>
      <Box
        className="new-benefits-slide-wrapper"
        sx={{
          img: {
            opacity: !swiperSlide.isNext ? 0.1 : 1,
            filter: !swiperSlide.isNext ? 'grayscale(100%)' : 'grayscale(0%)',
            transition: 'opacity 1.5s ease',
          },
          '.slide-description': {
            display: !swiperSlide.isNext ? 'none' : 'flex',
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};
