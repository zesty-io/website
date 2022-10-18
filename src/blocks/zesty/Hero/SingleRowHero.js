/**
 * MUI Imports
 * */

import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
/**
 *  Components Imports
 * */
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FillerContent from 'components/globals/FillerContent';

const TwoRowsHero = ({
  eyebrow = FillerContent.header,
  header = FillerContent.header,
  description = FillerContent.description,
  cta_left = FillerContent.cta,
  cta_left_link = FillerContent.href,
  cta_right = FillerContent.cta,
  cta_right_link = FillerContent.href,
  isMobile,
}) => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ pt: 15, pb:8 }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            component={'h1'}
            variant={'h6'}
            sx={{
              color: theme.palette.zesty.zestyZambezi,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {eyebrow}
          </Typography>
          <Typography
            component={'h2'}
            variant={'h3'}
            sx={{
              fontWeight: 'bold',
              color: theme.palette.zesty.zestyZambezi,
              textAlign: 'center',
            }}
          >
            {header}
          </Typography>
          <Typography
            variant={'h6'}
            component={'p'}
            sx={{
              mt: 2,
              lineHeight: 1.2,
              maxWidth: 850,
              marginLeft: 'auto',
              marginRight: 'auto',
              color: theme.palette.zesty.zestyZambezi,
              textAlign: 'center',
            }}
          >
            {description}
          </Typography>

          <Box
            sx={{
              display: isMobile ? 'block' : 'flex',
              width: '100%',
              justifyContent: 'center',
              justifyItems: 'center',
              mt: 4,
              gap: 1,
            }}
          >
            <Box sx={{ width: isMobile ? '100%' : '10rem' }}>
              <Button
                fullWidth={true}
                color="secondary"
                variant="contained"
                component="a"
                href={cta_left_link}
                target="_blank"
              >
                {cta_left}
              </Button>
            </Box>
            <Button
              component="a"
              target="_blank"
              href={cta_right_link}
              variant="outlined"
              color="secondary"
              fullWidth={isMobile ? true : false}
              sx={{
                display: cta_right ? 'flex' : 'none',
                alignItems: 'center',
                gap: '.5rem',
              }}
            >
              {cta_right}
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TwoRowsHero;
