import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = ({eyebrow, title, description, }) => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        {eyebrow}
      </Typography>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          align={'center'}
          color={'secondary'}
          sx={{
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" align={'center'} color={'textSecondary'}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
