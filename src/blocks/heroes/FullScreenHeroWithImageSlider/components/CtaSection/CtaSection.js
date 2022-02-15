import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

const CtaSection = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'text.secondary'}
      >
        Coworking spaces
      </Typography>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
          Coworking{' '}
          <Typography
            color={'primary'}
            component={'span'}
            variant={'inherit'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            made simple
          </Typography>
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
          For entrepreneurs, startups and freelancers. Discover coworking spaces
          designed to inspire and to connect you to a community of motivated
          people.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
        >
          Book a space
        </Button>
        <Box
          component={Button}
          variant="outlined"
          color="primary"
          size="large"
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          fullWidth={isMd ? false : true}
        >
          Browse spaces
        </Box>
      </Box>
    </Box>
  );
};

export default CtaSection;
