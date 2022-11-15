import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import FillerContent from 'components/globals/FillerContent';
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';
import ZestyImage from 'blocks/Image/ZestyImage';

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
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box>
            <Box marginBottom={2}>
              <Typography
                component={'h1'}
                variant="p"
                color={
                  isDarkMode
                    ? theme.palette.zesty.zestyWhite
                    : theme.palette.zesty.zestyOrange
                }
                gutterBottom
                sx={{ fontWeight: 400, fontSize: '20px' }}
              >
                {mainTitle}
              </Typography>
              <Typography
                variant="h2"
                color="text.primary"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.zesty.zestyZambezi,
                }}
              >
                {title || FillerContent.header}
                <br />
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                {description || FillerContent.description}
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{gap:2}}
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <TryFreeButton
                text={cta_left || FillerContent.cta}
                variant="contained"
                size="large"
                color="secondary"
              ></TryFreeButton>

              <DemoCta sx={{color: theme.palette.zesty.zestyOrange}} text={cta_right || FillerContent.cta} href={cta_right_url || FillerContent.href}/>

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

          <ZestyImage 
          src={image || 'https://assets.maccarianagency.com/backgrounds/img8.jpg'}
          width={600}
          height={350} 
          style={{width:"100%", height:"auto", objectFit: 'contain'}}  
          alt="why zesty"/>

        </Grid>
      </Grid>
    </Container>
  );
};

export default SimpleHeroWithImageAndCtaButtons;
