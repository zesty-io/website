import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import FillerContent from 'components/FillerContent';
import TryFreeButton from 'components/cta/TryFreeButton';

const SimpleHeroWithImageAndCtaButtons = ({
  mainTitle,
  title,
  description,
  cta_left,
  cta_right,
  cta_left_url,
  cta_right_url,
  image,
}) => {
  const theme = useTheme();


  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box>
            <Box marginBottom={2}>
              <Typography
                component={'h1'}
                variant="p"
                color={theme.palette.zesty.zestyGrey}
                gutterBottom
                sx={{ fontWeight: 400, fontSize: '20px' }}
              >
                {mainTitle}
              </Typography>
              <Typography
                variant="h2"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                {title || FillerContent.header}
                <br />
                {/* <Typography
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
                  inspires
                </Typography> */}
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                {description || FillerContent.description}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <TryFreeButton
                text={cta_left || FillerContent.cta}
                variant="contained"
                color="secondary"
                size="large"
              ></TryFreeButton>

              <Box
                href={cta_right_url || FillerContent.href}
                component={Button}
                color={theme.palette.zesty.zestyOrange}
                size="large"
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                endIcon={
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    width={24}
                    height={24}
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </Box>
                }
              >
                {cta_right || FillerContent.cta}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent={'center'}
          xs={12}
          md={6}
        >
          <Box
            component={'img'}
            height={1}
            width={1}
            src={
              image || 'https://assets.maccarianagency.com/backgrounds/img8.jpg'
            }
            alt="..."
            maxWidth={600}
            maxHeight={500}
            sx={{
              objectFit: 'contain',
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SimpleHeroWithImageAndCtaButtons;
