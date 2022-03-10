import React from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HeroNotTyped = ({title, description}) => {
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
          {title}
        </Typography>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default HeroNotTyped