import React from 'react';
import Box from '@mui/material/Box';

const CoverSlider = () => {
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
        src={'https://assets.maccarianagency.com/backgrounds/img3.jpg'}
        height={{ xs: 'auto', md: 1 }}
        maxHeight={{ xs: 300, md: 1 }}
        width={1}
        maxWidth={1}
      />
    </Box>
  );
};

export default CoverSlider;
