import React from 'react';
import Box from '@mui/material/Box';

const CoverSlider = (props) => {
  let img = props?.main_image ? props.main_image.data[0].url : `https://assets.maccarianagency.com/backgrounds/img3.jpg`
  return (
    <Box
      sx={{
        height: { xs: 'auto', md: 1 },
        '& img': {
          objectFit: 'cover',
        },
      }}
    >
      <Box
        component={'img'}
        src={img}
        height={{ xs: 'auto', md: 1 }}
        maxHeight={{ xs: 300, md: 1 }}
        width={1}
        maxWidth={1}
      />
    </Box>
  );
};

export default CoverSlider;
