/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Reviews = () => {
  const theme = useTheme();

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box
        component="img"
        height={1}
        width={1}
        src={'https://assets.maccarianagency.com/svg/logos/google-original.svg'}
        alt="..."
        maxWidth={{ xs: 80, sm: 100, md: 120 }}
        marginBottom={2}
        sx={{
          filter:
            theme.palette.mode === 'dark'
              ? 'brightness(0) invert(0.7)'
              : 'none',
        }}
      />
      <Typography variant={'h6'} component={'p'} align={'center'}>
        First class templates.
        <br />
        These guys know what they're doing: great code quality, clear naming
        conventions and clear code structure.
        <br />
        Plain awesome and a pleasure to work with.
      </Typography>
      <Box marginTop={{ xs: 2, sm: 4 }}>
        <Typography variant={'h6'} sx={{ fontWeight: 700 }} align={'center'}>
          Jhon Anderson
        </Typography>
        <Typography color="text.secondary" align={'center'}>
          MUI lover
        </Typography>
      </Box>
    </Box>
  );
};

export default Reviews;
