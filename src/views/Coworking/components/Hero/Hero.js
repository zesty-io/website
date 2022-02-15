import React from 'react';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'text.secondary'}
      >
        Coworking spaces
      </Typography>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
          Coworking{' '}
          <Typography
            color={'primary'}
            component={'span'}
            variant={'inherit'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            made simple
          </Typography>
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
          For entrepreneurs, startups and freelancers. Discover coworking spaces
          designed to inspire and to connect you to a community of motivated
          people.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
        >
          Book a space
        </Button>
        <Box
          component={Button}
          variant="outlined"
          color="primary"
          size="large"
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          fullWidth={isMd ? false : true}
        >
          Browse spaces
        </Box>
      </Box>
    </Box>
  );

  const RightSide = () => {
    const sliderOpts = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <Box
        sx={{
          height: { xs: 'auto', md: 1 },
          '& .slick-slide img': {
            objectFit: 'cover',
          },
          '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
            height: { xs: 'auto', md: 1 },
          },
          '& .slick-prev, & .slick-next': {
            zIndex: 2,
            bottom: 0,
            top: '100%',
            left: '100%',
            right: 0,
            transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
            marginLeft: theme.spacing(-2),
            width: 32,
            height: 32,
            '&:before': {
              fontSize: 32,
            },
          },
          '& .slick-prev': {
            marginLeft: theme.spacing(-7),
          },
          '& .lazy-load-image-loaded': {
            height: 1,
            width: 1,
          },
        }}
      >
        <Slider {...sliderOpts}>
          {[
            'https://assets.maccarianagency.com/backgrounds/img1.jpg',
            'https://assets.maccarianagency.com/backgrounds/img3.jpg',
            'https://assets.maccarianagency.com/backgrounds/img24.jpg',
            'https://assets.maccarianagency.com/backgrounds/img25.jpg',
          ].map((item) => (
            <Box
              key={item}
              component={LazyLoadImage}
              effect="blur"
              src={item}
              height={{ xs: 'auto', md: 1 }}
              maxHeight={{ xs: 300, md: 1 }}
              width={1}
              maxWidth={1}
            />
          ))}
        </Slider>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
          minHeight={{ xs: 'auto', md: 600 }}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display={'flex'}
            alignItems={'center'}
          >
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                    clipPath: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                    shapeOutside: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default Hero;
