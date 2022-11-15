/**
 * MUI Imports
 */
import { Box, Container, Grid, Typography } from '@mui/material';
import ZestyImage from 'blocks/Image/ZestyImage';
import TryFreeButton from 'components/cta/TryFreeButton';
import MuiMarkdown from 'markdown-to-jsx';

const Integrations = ({
  content,
  theme,
  isMobile,
  // isTablet,
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
            <Box>
              <Box>
                <ZestyImage
                  width={537}
                  heght={447}
                  src={content.integrations_graphic.data[0].url}
                  style={{
                    width: '100%',
                    height: 'auto',
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
                zIndex: theme.zIndex.banner,
              }}
            >
              <Box
                sx={{
                  display: isMobile ? 'none' : '',
                }}
              >
                <Box sx={{ position: 'absolute', top: '-10rem', zIndex: '-1' }}>
                  <ZestyImage
                    src={
                      content.integrations_airplane_graphic?.data[0]?.url ||
                      FillerContent.logos[0].url
                    }
                    alt=""
                  />
                </Box>
              </Box>
              <div>
                <MuiMarkdown
                  options={{
                    overrides: {
                      h2: {
                        component: Typography,
                        props: {
                          component: 'h2',
                          variant: 'h4',
                          sx: {
                            color: theme.palette.zesty.zestyOrange,
                          },
                        },
                      },
                    },
                  }}
                >
                  {content.integrations_description ||
                    FillerContent.description}
                </MuiMarkdown>
                <Box>
                  <TryFreeButton
                    text={
                      content.limitless_integration_cta_text ||
                      FillerContent.cta
                    }
                    variant="contained"
                  />
                </Box>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Integrations;
