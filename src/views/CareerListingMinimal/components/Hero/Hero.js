import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      position={'relative'}
      bgcolor={'alternate.main'}
      minHeight={{ xs: 300, sm: 400, md: 600 }}
      display={'flex'}
      alignItems={'center'}
      sx={{
        backgroundImage:
          'url(https://assets.maccarianagency.com/backgrounds/img1.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        position: 'relative',
        marginTop: -13,
        paddingTop: 13,
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha(theme.palette.common.black, 0.3),
          zIndex: 1,
        },
      }}
    >
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Typography
            variant={'h3'}
            fontWeight={700}
            sx={{ color: 'common.white' }}
          >
            Careers
          </Typography>
          <Typography variant={'h6'} sx={{ color: 'common.white' }}>
            We are founded by a leading academic and researcher in the field of
            Industrial Systems Engineering.
          </Typography>
        </Box>
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1921 273"
        sx={{
          position: 'absolute',
          width: '100%',
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 2,
          height: '35%',
        }}
      >
        <polygon
          fill={theme.palette.background.paper}
          points="0,273 1921,273 1921,0 "
        />
      </Box>
    </Box>
  );
};

export default Hero;
