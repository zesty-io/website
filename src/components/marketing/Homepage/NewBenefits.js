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
import 'swiper/css/pagination';

import DemoCta from 'components/cta/DemoCta';

const NewBenefits = ({ content, FillerContent, theme, isMedium }) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  console.log(swiper);
  console.log(swiperSlide);

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
            navigation
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {content.zesty_benefits_tiles.data.map((item, index) => (
              <SwiperSlide style={{ width: 715 }} key={index}>
                <Box
                  sx={{ width: '100%', maxWidth: 715, height: 480 }}
                  component="img"
                  src={item.benefit_image?.data[0].url}
                  alt={item.header}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default NewBenefits;
