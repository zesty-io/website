/**
 * MUI Imports
 * */

import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

/**
 *  Components Imports
 * */
import TryFreeButton from 'components/cta/TryFreeButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FillerContent from 'components/globals/FillerContent';

const Hero = ({
  eyebrow = FillerContent.header,
  header = FillerContent.header,
  subHeader = FillerContent.header,
  mainImage,
  bgImage = FillerContent.dashboard_image,
  primaryCta = 'Try Free',
  secondaryCta = 'Try Free',

  isMobile,
  theme,
}) => {
  return (
    <Box
      paddingTop={isMobile ? 4 : 15}
      paddingBottom={isMobile ? 4 : 25}
      sx={{
        position: 'relative',
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
              top: '2rem',
              display: isMobile ? 'none' : 'flex',
            }}
          >
            <Box
              component="img"
              sx={{ width: 797, opacity: 0.03, zIndex: 0 }}
              src={bgImage}
              alt=""
            />
          </Box>
          <Typography
            component={'h2'}
            variant={'h4'}
            sx={{
              color: theme.palette.zesty.zestyOrange,
              fontWeight: 'bold',
            }}
          >
            {eyebrow}
          </Typography>
          <Typography
            component={'h1'}
            variant={'h3'}
            sx={{
              color: theme.palette.zesty.zestyZambezi,
              fontWeight: 'bold',
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
              href={'/demos'}
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
            <Box
              component="img"
              src={mainImage}
              sx={{
                maxWidth: 928,
                width: '100%',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Hero;
