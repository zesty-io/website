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
  gradientBg,
  isTablet,
  theme,
  secondaryCtaLink,
}) => {
  return (
    <Box
      paddingTop={isTablet ? 10 : 25}
      paddingBottom={isTablet ? 10 : 25}
      sx={{
        position: 'relative',
        background: gradientBg,
      }}
    >
      <Container>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Box
              data-aos="zoom-in"
              sx={{
                background: '',
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: '-10vw',
                  top: '-5vh',
                  display: isTablet ? 'none' : 'flex',
                  width: '630px',
                }}
              >
                <Box
                  component="img"
                  src={bgImage}
                  alt="Zesty.io background image"
                  sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Typography
                component={'h2'}
                variant={'h4'}
                fontWeight={600}
                sx={{
                  color: theme.palette.common.white,
                  fontWeight: 500,
                }}
              >
                {eyebrow}
              </Typography>
              <Typography
                component={'h1'}
                variant={'h3'}
                sx={{
                  color: theme.palette.common.white,
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
                  color: theme.palette.common.white,
                  fontWeight: 500,
                }}
              >
                {subHeader}
              </Typography>
              <Box sx={{ display: isTablet ? 'block' : 'flex' }}>
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
                    color: theme.palette.common.white,
                  }}
                >
                  {secondaryCta} <ArrowRightAltIcon />
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item sm={12} md={6}>
            <Box data-aos="zoom-in">
              <Box component="img" sx={{ width: '100%' }} src={mainImage} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
