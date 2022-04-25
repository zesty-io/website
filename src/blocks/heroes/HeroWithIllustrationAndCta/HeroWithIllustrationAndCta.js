/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import TryFreeButton from 'components/cta/TryFreeButton';

const HeroWithIllustrationAndCta = ({
  title,
  subtitle,
  description = '',
  image,
  button_left_text,
  button_left_link,
  hero_button_right,
  button_right_link,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  let titleSplits = title?.split('<br>');
  return (
    <Box
      position={'relative'}
      sx={{ backgroundColor: theme.palette.alternate.main }}
    >
      {' '}
      <Container>
        {' '}
        <Grid
          container
          spacing={4}
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
        >
          {' '}
          <Grid item container alignItems={'center'} xs={12} md={6}>
            {' '}
            <Box>
              {' '}
              <Box>
                {' '}
                <Typography
                  variant="h6"
                  component="h1"
                  color="text.secondary"
                  sx={{ fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                ></Typography>
              </Box>
              <Box>
                <Typography
                  variant="p"
                  component={'h3'}
                  color="text.primary"
                  sx={{
                    fontWeight: 700,
                    fontSize: isMobile ? '38px' : '60px',
                    margin: '0',
                    lineHeight: isMobile ? '46px' : '65px',
                  }}
                >
                  {titleSplits && titleSplits[0]}
                </Typography>
              </Box>
              <Box marginBottom={2}>
                <Typography
                  variant="p"
                  component={'h3'}
                  color={theme.palette.zesty.zestyOrange}
                  sx={{
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  {titleSplits && titleSplits[1]}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  component="h2"
                  color="text.secondary"
                  sx={{ fontWeight: 400, fontSize: isMobile ? '18px' : '20px' }}
                  marginBottom={6}
                  dangerouslySetInnerHTML={{ __html: description }}
                ></Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <TryFreeButton
                  component={'a'}
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth={isMd ? false : true}
                  text={button_left_text}
                ></TryFreeButton>

                {hero_button_right && (
                  <Box
                    marginTop={{ xs: 2, sm: 0 }}
                    marginLeft={{ sm: 2 }}
                    width={{ xs: '100%', md: 'auto' }}
                  >
                    <Button
                      component={'a'}
                      href={'/demos/'}
                      variant="outlined"
                      color="secondary"
                      size="large"
                      fullWidth={isMd ? false : true}
                    >
                      {hero_button_right}
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              height={1}
              width={1}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box height={1} width={1} maxWidth="100%">
                <Box
                  component={'img'}
                  src={image}
                  width={1}
                  height={1}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.8)'
                        : 'none',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default HeroWithIllustrationAndCta;
