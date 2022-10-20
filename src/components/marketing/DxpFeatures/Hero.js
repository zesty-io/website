/**
 * MUI Imports
 */

import { Box, Typography, Grid, Container } from '@mui/material';
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';
import ZestyImage from 'blocks/Image/ZestyImage';

const Hero = ({ content, FillerContent, theme, isMedium, isSmall }) => {
  return (
    <>
      <Box
        component="section"
        sx={{
          py: 10,
          minHeight: 700,
          background: `url(${content.hero_background?.data[0].url}?width=1920&height=859)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container>
          <Grid container spacing={2}>
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
              <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                      fontWeight: 'bold',
                      color: theme.palette.common.white,
                      textAlign: isMedium ? 'center' : 'left',
                    }}
                  >
                    {content.hero_title || FillerContent.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      fontWeight: 500,
                      lineHeight: 1.2,
                      color: theme.palette.common.white,
                      textAlign: isMedium ? 'center' : 'left',
                    }}
                  >
                    {content.hero_description || FillerContent.description}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    mt: 4,
                    display: 'flex',
                    flexDirection: isMedium ? 'column' : 'row',
                    gap: 2,
                  }}
                >
                  <TryFreeButton
                    fullWidth={isMedium}
                    text={content.cta_button_1}
                    target="_blank"
                    variant="contained"
                    color={'secondary'}
                  />

                  <DemoCta
                    href={content.cta_button_2_link}
                    text={content.hero_cta || FillerContent.cta}
                    variant={'contained'}
                    fullWidth={isMedium}
                    sx={{
                      background: theme.palette.common.white,
                      color: theme.palette.zesty.zestyOrange,
                      '&:hover': {
                        background: theme.palette.zesty.zestyOrange,
                        color: theme.palette.common.white,
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <ZestyImage
                alt="dxp features"
                width={794}
                height={508}
                style={{ width: '100%', height: 'auto' }}
                src={content.hero_graphic?.data[0].url}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
