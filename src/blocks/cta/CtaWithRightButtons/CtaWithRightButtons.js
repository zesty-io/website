import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const CtaWithRightButtons = () => {
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Everything your team could need.
          </Typography>
          <Typography variant="h6" color={'text.secondary'}>
            We make sure to include all the amenities and niceties that a
            growing startup could possibly need.
          </Typography>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box>
            <Typography fontWeight={700} variant={'h6'} gutterBottom>
              Apply in 15 minutes
            </Typography>
            <Typography>
              Get your dream coworking space without the hassle.
            </Typography>
          </Box>
          <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
            <Button variant="contained" color="primary" size="large">
              Apply
            </Button>
            <Box
              component={Button}
              variant="outlined"
              color="primary"
              size="large"
              marginLeft={2}
            >
              Explore
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CtaWithRightButtons;
