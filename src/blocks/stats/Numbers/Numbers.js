import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Numbers = ({ stats }) => {
  // order stats
  const order = () => {
    stats = stats.sort(
      (a, b) => parseInt(a.sort_order) - parseInt(b.sort_order),
    );
  };
  order();

  return (
    <Box>
      <Grid container spacing={2}>
        {stats.map((item, i) => (
          <Grid key={i} item xs={12} sm={4}>
            <Typography
              variant="h3"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 900,
              }}
            >
              {item.stat}
            </Typography>
            <Typography color="text.secondary" align={'center'} component="p">
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Numbers;
