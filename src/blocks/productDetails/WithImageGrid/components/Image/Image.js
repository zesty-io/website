import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const mock = [
  'https://assets.maccarianagency.com/backgrounds/img57.jpg',
  'https://assets.maccarianagency.com/backgrounds/img56.jpg',
  'https://assets.maccarianagency.com/backgrounds/img58.jpg',
];

const Image = () => {
  return (
    <Grid container spacing={2} sx={{ height: 1 }}>
      {mock.map((item, i) => (
        <Grid key={i} item xs={i === 0 ? 12 : 6}>
          <Box
            sx={{
              display: 'flex',
              height: 1,
              '& img': {
                width: 1,
                height: 1,
                objectFit: 'cover',
                borderRadius: 2,
              },
            }}
          >
            <img src={item} alt={'Sport shoes'} loading={'lazy'} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Image;
