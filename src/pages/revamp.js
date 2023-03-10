import { ThemeProvider } from '@mui/material';
import React from 'react';
import Hero from 'revamp/ui/Hero';
import revampTheme from 'theme/revampTheme';

const revamp = () => {
  return (
    <ThemeProvider theme={revampTheme}>
      <Hero />
    </ThemeProvider>
  );
};

export default revamp;
