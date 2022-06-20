// MUI Imports
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// Components Imports
import TryFreeButton from '../../cta/TryFreeButton';

const Hero = ({ theme, isMobile, content, FillerContent }) => (
  <Box
    sx={{
      overflow: 'hidden',
      position: 'relative',
      mt: 2,
      pt: isMobile ? 10 : 25,
      minHeight: 900,
      display: 'flex',
      justifyContent: 'center',
    }}
    component={'section'}
    style={{
      background: theme.palette.zesty.zestyTealGradient,
    }}
  >
    <Box
      component="img"
      style={{
        position: 'absolute',
        left: isMobile ? '' : '10%',
        top: 100,
        width: 594,
        height: 603,
        opacity: 0.1,
      }}
      src={'https://brand.zesty.io/zesty-io-logo-light.png'}
    />
    <Container sx={{ position: 'relative' }}>
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
                color={theme.palette.common.white}
                variant="h4"
                component={'p'}
                sx={{ fontWeight: 'bold' }}
              >
                {content.header_eyebrow}
              </Typography>
              <Typography
                color={theme.palette.common.white}
                sx={{ fontWeight: 'bold' }}
                variant="h3"
                component={'h1'}
              >
                {content.title}
              </Typography>
              <Typography
                color={theme.palette.common.white}
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
                  href={content.cta_right_url.data[0].meta.web.uri}
                  component="a"
                  fullWidth={isMobile}
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    '&:hover': {
                      background: 'transparent',
                    },
                    textDecoration: 'underline',
                    color: theme.palette.common.white,
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
            <Box
              component="img"
              style={{ width: '100%' }}
              src={content.header_image.data[0].url}
            />
          </Box>
        </Grid>
        <Typography
          sx={{
            textAlign: 'center',
            position: isMobile ? 'relative' : 'absolute',
            pt: isMobile ? 10 : 0,
            px: isMobile ? 1 : 2,
            bottom: 0,
            color: theme.palette.zesty.zestyZambezi,
          }}
          variant={'h6'}
          component={'p'}
        >
          {content.use_cases_text || FillerContent.description}
        </Typography>
      </Grid>
    </Container>
  </Box>
);
export default Hero;
