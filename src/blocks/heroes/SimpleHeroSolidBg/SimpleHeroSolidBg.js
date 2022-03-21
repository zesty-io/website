/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const Hero = ({title, subtitle, description}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container
      sx={{
        backgroundColor: theme.palette.primary.main,
        backgroundSize: 'cover',
        maxWidth: '100%'
      }}
    >
      <Box position={'relative'} zIndex={2}>
        <Box marginBottom={2}>
          <Typography
            variant="h3"
            color={theme.palette.primary.contrastText}
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            {title}
            <br />
            {subtitle}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
