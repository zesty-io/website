import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const images = [
  {
    group: [
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img1.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img1--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img4.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img4--dark.png',
      },
    ],
  },
  {
    group: [
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img10.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img10--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img13.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img13--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img7.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img7--dark.png',
      },
    ],
  },
  {
    group: [
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img6.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img6--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img24.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img24--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img17.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img17--dark.png',
      },
      {
        cover:
          'https://assets.maccarianagency.com/screenshots/the-front/img12.png',
        coverDark:
          'https://assets.maccarianagency.com/screenshots/the-front/img12--dark.png',
      },
    ],
  },
];

const Hero = () => {
  const theme = useTheme();

  return (
    <Box position={'relative'}>
      <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'text.secondary'}
            >
              Introduction
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              theFront - multipurpose template and UI kit
            </Typography>
            <Typography variant="h6" color={'text.secondary'}>
              A professional React Kit that comes with plenty of ready-to-use
              MUI components that will help you to build faster & beautiful
              frontend pages.
              <br />
              Each component is fully customizable, responsive, and easy to
              integrate
            </Typography>
          </Box>
        </Container>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'50%'}
            top={0}
            position={'absolute'}
            sx={{ transform: 'translate3d(20%, -50%, 0)' }}
          >
            {images.map((item, i) => (
              <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                {item.group.map((g, j) => (
                  <Box
                    key={j}
                    padding={1}
                    bgcolor={'background.paper'}
                    borderRadius={2}
                    boxShadow={3}
                    marginTop={2}
                  >
                    <Box
                      component={LazyLoadImage}
                      effect="blur"
                      src={
                        theme.palette.mode === 'dark' ? g.coverDark : g.cover
                      }
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
