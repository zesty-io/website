import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TryFreeButton from 'components/cta/TryFreeButton';

import Container from 'components/Container';

const CtaSimpleCentered = ({ ctaTitle, description, ctaLeft, ctaRight }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box>
        <Typography
          variant="h4"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          {ctaTitle}
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
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={4}
        >
          <TryFreeButton
            variant="contained"
            color="secondary"
            size="large"
            text={ctaLeft}
            fullWidth={isMd ? false : true}
          />
          <Box
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            width={{ xs: '100%', md: 'auto' }}
          >
            <Button
              component={'a'}
              href={'/docs/introduction'}
              variant="outlined"
              color="secondary"
              size="large"
              fullWidth={isMd ? false : true}
            >
              {ctaRight}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CtaSimpleCentered;
