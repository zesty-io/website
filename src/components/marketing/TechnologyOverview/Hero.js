// MUI Imports
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// Components Imports
import TryFreeButton from '../../cta/TryFreeButton';
import ZestyImage from 'blocks/Image/ZestyImage';

const Hero = ({ theme, isMobile, content, FillerContent }) => (
  <Box
    sx={{
      overflow: 'hidden',
      position: 'relative',
      mt: 2,
      pt: isMobile ? 10 : 0,
      py: 15,
      display: 'flex',
      justifyContent: 'center',
    }}
    component={'section'}
    style={{
      background: theme.palette.zesty.zestyBackgroundBlueGradient,
    }}
  >
    <Container sx={{ position: 'relative' }}>
      <Box
        component="img"
        alt="zesty.io logo"
        style={{
          position: 'absolute',
          left: 0,
          top: -120,
          width: 594,
          height: 603,
          opacity: 0.1,
        }}
        src={'https://brand.zesty.io/zesty-io-logo-light.png'}
      />

      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              height: '100%',
            }}
          >
            <Box
              sx={{
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Typography
                color={theme.palette.zesty.zestyOrange}
                variant="h6"
                component={'h1'}
                sx={{ fontWeight: 'bold' }}
              >
                {content.header_eyebrow || FillerContent.description}
              </Typography>
              <Typography
                color={theme.palette.zesty.zestyZambezi}
                sx={{ fontWeight: 'bold' }}
                variant="h3"
                component={'h2'}
              >
                {content.title || FillerContent.description}
              </Typography>
              <Typography
                color={theme.palette.zesty.zestyZambezi}
                variant="h6"
                component={'h3'}
              >
                {content.header_description || FillerContent.description}
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: isMobile ? 'block' : 'flex' }}>
                <TryFreeButton
                  fullWidth={isMobile}
                  variant="contained"
                  size="large"
                />
                <Button
                  href={
                    content.cta_right_url.data[0].meta.web.uri ||
                    FillerContent.href
                  }
                  component="a"
                  fullWidth={isMobile}
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    '&:hover': {
                      background: 'transparent',
                    },
                    textDecoration: 'underline',
                    color: theme.palette.zesty.zestyZambezi,
                    px: 6,
                    my: isMobile && 3,
                  }}
                  size="large"
                >
                  {content.cta_right_text || FillerContent.cta}
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          item
          sm={12}
          md={6}
        >
          <Box sx={{ display: 'flex' }}>
            <ZestyImage
              width={542}
              height={364}
              alt="header image"
              style={{ width: '100%', height: 'auto' }}
              src={content.header_image.data[0].url}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
export default Hero;
