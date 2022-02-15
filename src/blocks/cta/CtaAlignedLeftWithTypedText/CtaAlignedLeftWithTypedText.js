import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const CtaAlignedLeftWithTypedText = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box>
        <Typography
          variant="h3"
          color="text.primary"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Turn your ideas into the{' '}
          <Typography color={'primary'} component={'span'} variant={'inherit'}>
            future.
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400 }}
        >
          theFront will make your product look modern and professional while
          saving you precious time.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          marginTop={4}
        >
          <Button
            component={'a'}
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            href={'/home'}
          >
            View pages
          </Button>
          <Box
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            width={{ xs: '100%', md: 'auto' }}
          >
            <Button
              component={'a'}
              href={'/docs/introduction'}
              variant="outlined"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
            >
              Documentation
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CtaAlignedLeftWithTypedText;
