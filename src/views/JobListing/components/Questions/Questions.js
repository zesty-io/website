import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'What is it about?',
    subtitle:
      'Fill out our standardized application on our platform. Most applicants finish in under an hour.',
  },
  {
    title: 'Who is it for?',
    subtitle:
      'Fill out our standardized application on our platform. Most applicants finish in under an hour.',
  },
];

const Questions = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 700 }}>
              {item.title}
            </Typography>
            <Typography color={'text.secondary'}>{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Questions;
