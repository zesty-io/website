import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import Container from 'components/Container';

const HeroWithIllustrationAndSearchBar = ({
  titleAndDescription,
  description,
  image,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
  search,
  onChange,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Box
        bgcolor={'alternate.main'}
        padding={{ xs: 2, md: 4 }}
        borderRadius={2}
      >
        <Grid
          flexDirection={isMobile ? 'column-reverse' : 'initial'}
          container
          spacing={4}
        >
          <Grid
            item
            container
            xs={12}
            md={6}
            alignItems={'center'}
            sx={{ position: 'relative' }}
          >
            <Box marginBottom={4}>
              <Grid item xs={12} md={9}>
                <Box
                  dangerouslySetInnerHTML={{ __html: titleAndDescription }}
                ></Box>
              </Grid>
              {/* <Box marginBottom={2}>
                <Typography
                  variant="h3"
                  component={'h3'}
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {title}
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography variant="h6" component="p" color="text.secondary">
                  {description}
                </Typography>
              </Box> */}
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                {primaryCta && (
                  <Box
                    component={Button}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth={!isMd}
                  >
                    {primaryCta}
                  </Box>
                )}

                {secondaryCta && (
                  <Box
                    component={Button}
                    color="primary"
                    size="large"
                    fullWidth={!isMd}
                    marginTop={{ xs: 1, sm: 0 }}
                    marginLeft={{ sm: 2 }}
                    startIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </Box>
                    }
                  >
                    {secondaryCta}
                  </Box>
                )}
              </Box>
            </Box>
            {search && (
              <Box
                sx={{
                  width: '100%',
                  background: theme.palette.background.paper,
                  [theme.breakpoints.up('md')]: {
                    position: 'absolute',
                    bottom: 0,
                    transform: 'translateY(100%)',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '0 !important',
                  },
                }}
              >
                <FormControl fullWidth variant="outlined">
                  <OutlinedInput
                    sx={{
                      background: theme.palette.background.paper,
                      boxShadow: 4,
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </Box>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              height={1}
              width={1}
              display={'flex'}
              justifyContent={'center'}
            >
              <Box
                height={1}
                width={1}
                maxWidth={{ xs: 600, md: '100%' }}
                maxHeight={500}
              >
                <Box
                  component={'img'}
                  src={
                    image ||
                    'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
                  }
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
      </Box>
    </Container>
  );
};

export default HeroWithIllustrationAndSearchBar;
