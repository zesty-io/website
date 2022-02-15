import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const mock = [
  {
    label: 'Total subscribters',
    value: '71,897',
  },
  {
    label: 'Avg. open rate',
    value: '58.12%',
  },
  {
    label: 'Avg. click rate',
    value: '49.62%',
  },
];

const Simple = () => {
  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Box marginBottom={2}>
          <Typography fontWeight={700}>Last 30 days</Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {mock.map((item, i) => (
            <Grid key={i} item xs={12} sm={4}>
              <Card sx={{ p: { xs: 2, md: 4 } }}>
                <Typography color={'text.secondary'} gutterBottom>
                  {item.label}
                </Typography>
                <Typography
                  variant={'h4'}
                  color={'text.primary'}
                  fontWeight={700}
                >
                  {item.value}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Simple;
