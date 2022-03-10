import React from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HeroNotTyped = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          gutterBottom
          sx={{ fontWeight: 400 }}
        >
          theFront will make your product look modern and professional while
          saving you precious time.
        </Typography>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
    </Box>
  );
}

export default HeroNotTyped