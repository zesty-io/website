import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mock = [
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    feedback:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Reviews = () => {
  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box maxWidth={600} width={1} margin={'0 auto'}>
      <Typography
        variant={'h4'}
        align={'center'}
        sx={{ fontWeight: 700, marginBottom: 4, color: 'common.white' }}
      >
        Trusted by the world’s most innovative businesses – big and small
      </Typography>
      <Slider {...sliderOpts}>
        {mock.map((item, i) => (
          <Box key={i} paddingX={4}>
            <Typography
              align={'center'}
              variant={'h6'}
              sx={{ color: 'common.white', fontStyle: 'italic' }}
            >
              {item.feedback}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Reviews;
