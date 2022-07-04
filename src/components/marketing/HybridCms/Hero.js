/**
 * MUI Imports
 * */

import React from 'react';
import {
  Box,
  Button,
  Card,
  cardClasses,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

/**
 *  Components Imports
 * */
import TryFreeButton from 'components/cta/TryFreeButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Hero = ({
  eyebrow = FillerContent.header,
  header = FillerContent.header,
  subHeader = FillerContent.header,
  mainImage,
  bgImage = FillerContent.dashboard_image,
  primaryCta = 'Try Free',
  secondaryCta = 'Try Free',
  gradientBg,
  isMobile,
  theme,
}) => {
  return (
    <Box
      paddingTop={isMobile ? 4 : 15}
      paddingBottom={isMobile ? 4 : 25}
      sx={{
        position: 'relative',
        background: gradientBg,
        textAlign: 'center',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          gap: '3rem',
          flexDirection: isMobile ? 'column' : 'column',
        }}
      >
        <Box
          sx={{
            background: '',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: '15rem',
              display: isMobile ? 'none' : 'flex',
            }}
          >
            <img src={bgImage} alt="" />
          </Box>
          <Typography
            component={'h2'}
            variant={'p'}
            sx={{
              color: theme.palette.zesty.zestyOrange,
              fontWeight: 'bold',
              fontSize: isMobile ? '24px' : '32px',
            }}
          >
            {eyebrow}
          </Typography>
          <Typography
            component={'h1'}
            variant={'p'}
            sx={{
              color: theme.palette.zesty.zestyZambezi,
              fontWeight: 'bold',
              fontSize: isMobile ? '24px' : '48px',
            }}
          >
            {header}
          </Typography>
          <Typography
            paddingY={2}
            component={'h3'}
            variant={'p'}
            sx={{
              color: theme.palette.zesty.zestyZambezi,
              fontWeight: 500,
              fontSize: '20px',
            }}
          >
            {subHeader}
          </Typography>
          <Box
            sx={{
              display: isMobile ? 'block' : 'flex',
              width: '100%',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <Box sx={{ width: isMobile ? '100%' : '10rem' }}>
              <TryFreeButton
                fullWidth={true}
                text={primaryCta}
                variant="contained"
                component="a"
              />
            </Box>
            <Button
              href={''}
              variant="text"
              color="secondary"
              fullWidth={isMobile ? true : false}
              sx={{
                display: secondaryCta ? 'flex' : 'none',
                padding: '.6rem 4rem',
                fontSize: '16px',
                whiteSpace: 'nowrap',
                alignItems: 'center',
                textDecoration: 'underline',
                gap: '.5rem',
              }}
            >
              {secondaryCta}
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Box>

        {mainImage && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <img src={mainImage} width={isMobile ? 350 : 900} />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Hero;
