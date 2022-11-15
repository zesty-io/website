/**
 * MUI Imports
 */
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

/**
 * Components Import
 */
import TryFreeButton from 'components/cta/TryFreeButton';

const Hero = ({
  eyebrow,
  header,
  subHeader,
  mainImage,
  bgImage,
  primaryCta = 'Try Free',
  secondaryCta = 'Try Free',
  // gradientBg,
  isTablet,
  theme,
  secondaryCtaLink,
  isDarkMode,
}) => {
  return (
    <Box
      paddingTop={isTablet ? 10 : 25}
      paddingBottom={isTablet ? 10 : 25}
      sx={{
        position: 'relative',
        background: isDarkMode
          ? theme.palette.zesty.zestyDarkBlue
          : theme.palette.zesty.zestyWhite,
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: -150,
            left: 100,
            display: isTablet ? 'none' : 'flex',
          }}
        >
          <Box
            component="img"
            src={bgImage}
            alt="Zesty.io background image"
            sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </Box>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Box
              sx={{
                background: '',
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                component={'h1'}
                variant={'h5'}
                fontWeight={600}
                sx={{
                  color: theme.palette.zesty.zestyZambezi,
                  fontWeight: 500,
                }}
              >
                {eyebrow}
              </Typography>
              <Typography
                component={'h2'}
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
                component={'p'}
                variant={'h6'}
                sx={{
                  color: theme.palette.zesty.zestyZambezi,
                  fontWeight: 500,
                }}
              >
                {subHeader}
              </Typography>
              <Box sx={{ display: isTablet ? 'block' : 'flex', gap: 1 }}>
                <Box sx={{ width: isTablet ? '100%' : '10rem' }}>
                  <TryFreeButton
                    fullWidth={true}
                    text={primaryCta}
                    variant="contained"
                    component="a"
                  />
                </Box>

                <Button
                  href={secondaryCtaLink}
                  variant="text"
                  fullWidth={isTablet ? true : false}
                  sx={{
                    my: isTablet ? 2 : 0,
                    display: secondaryCta ? 'flex' : 'none',
                    padding: '.6rem 4rem',
                    whiteSpace: 'nowrap',
                    gap: 1,
                    color: theme.palette.zesty.zestyOrange,
                  }}
                >
                  {secondaryCta} <ArrowRightAltIcon />
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item sm={12} md={6}>
            <Box>
              <Box component="img" sx={{ width: '100%' }} src={mainImage} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
