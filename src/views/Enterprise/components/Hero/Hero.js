/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typed from 'react-typed';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
          Turn your ideas
          <br />
          into a{' '}
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
            <Typed
              strings={['startup.', 'future.', 'success.']}
              typeSpeed={80}
              loop={true}
            />
          </Typography>
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400 }}
        >
          theFront will make your product look modern and professional while
          saving you precious time.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      >
        <Button
          component={'a'}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          href={'https://mui.com/store/items/the-front-landing-page/'}
          target={'_blank'}
        >
          Purchase now
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
            View documentation
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
