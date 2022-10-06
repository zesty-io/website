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
/**
 * Helpers Imports
 */
import * as helper from 'utils';

const Integrations = ({
  content,
  theme,
  isMobile,
  isTablet,
  FillerContent,
}) => {
  return (
    <Box
      paddingY={8}
      sx={{
        background: theme.palette.zesty.zestyGray99,
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ margin: 'auto' }} item sm={12} md={6}>
            <Box data-aos="fade-right">
              <Box>
                <Box
                  component={'img'}
                  src={content.integrations_graphic.data[0].url}
                  sx={{
                    width: '100%',
                  }}
                />
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
            <Box
              sx={{
                display: 'flex',
                position: 'relative',
                zIndex: '1000',
              }}
            >
              <Box
                sx={{
                  display: isMobile ? 'none' : '',
                }}
                data-aos="flip-right"
              >
                <Box
                  sx={{ position: 'absolute', top: '-10rem', zIndex: '2000' }}
                >
                  <Box
                    component="img"
                    src={
                      content.integrations_airplane_graphic?.data[0]?.url ||
                      FillerContent.logos[0].url
                    }
                    alt=""
                  />
                </Box>
              </Box>
              <div data-aos="fade-left">
                <Typography
                  component={'p'}
                  variant={'p'}
                  sx={{
                    color: theme.palette.secondary.darkCharcoal,
                    textAlign: 'left',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: helper.strColorChanger(
                      content.integrations_description ||
                        FillerContent.description,
                      'Limitless Integrations for Limitless Reach',
                      theme.palette.zesty.zestyOrange,
                    ),
                  }}
                />
                {/* <Box>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth={isTablet}
                    href={
                      content.integrations_button_link?.data[0]?.meta?.web
                        ?.uri || FillerContent.href
                    }
                    sx={{
                      backgroundColor: theme.palette.zesty.zestyOrange,
                      color: theme.palette.common.white,
                      padding: '.6rem 4rem',
                      fontSize: '16px',
                    }}
                  >
                    {content.integrations_button_text || FillerContent.cta}
                  </Button>
                </Box> */}
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Integrations;
