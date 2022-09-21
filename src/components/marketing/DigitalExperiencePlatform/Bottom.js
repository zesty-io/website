/**
 * MUI Imports
 */
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

/**
 * Helpers Imports
 */
import * as helper from 'utils';

/**
 * Components Imports
 */
import TryFreeButton from 'components/cta/TryFreeButton';

const Bottom = ({ content, theme, isMobile, isTablet, FillerContent }) => {
  const bgImgage =
    content.bottom_page_background_image?.data[0]?.url ||
    FillerContent.dashboard_image;

  return (
    <Box paddingY={isMobile ? 0 : 20} sx={{ position: 'relative' }}>
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          right: 0,
          bottom: 0,
          display: isMobile ? 'none' : 'flex',
        }}
      >
        <img src={bgImgage} alt="bg" />
      </Box>
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
            <Box data-aos="fade-right">
              <Box
                component="img"
                src={
                  content.bottom_cta_graphic?.data[0]?.url ||
                  FillerContent.dashboard_image
                }
                sx={{
                  width: '100%',
                }}
              />
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
            <Box data-aos="fade-left">
              <Box sx={{ position: 'relative' }}>
                <Typography
                  component={'h2'}
                  variant={'p'}
                  sx={{
                    fontSize: isMobile ? '.9rem' : '1.3rem',
                    color: theme.palette.secondary.darkCharcoal,
                    textAlign: isMobile ? 'center' : 'left',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: helper.strColorChanger(
                      content.bottom_cta_description ||
                        FillerContent.description,
                      'Digital Experiences',
                      theme.palette.zesty.zestyOrange,
                    ),
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: isTablet ? 'column' : 'row',
                    alignItems: 'center',
                    gap: '.5rem',
                    color: theme.palette.zesty.zestyTealDark,
                    width: '100%',
                  }}
                >
                  <Box sx={{ width: isTablet ? '100%' : '10rem' }}>
                    <TryFreeButton
                      fullWidth={true}
                      text={
                        content.bottom_cta_button_primary || FillerContent.cta
                      }
                      variant="contained"
                      component="a"
                    />
                  </Box>
                  <Button
                    component="a"
                    href="/demos"
                    variant="text"
                    color="secondary"
                    fullWidth={isMobile}
                    sx={{ textDecoration: 'underline' }}
                  >
                    {content.bottom_cta_button_secondary || FillerContent.cta}
                    <ArrowRightAltIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Bottom;
