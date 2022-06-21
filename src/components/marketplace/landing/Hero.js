/**
 * MUI Imports
 */
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MuiMarkdown from 'mui-markdown';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';

const Hero = ({ title, description, features_logos, hero_image }) => {
  const theme = useTheme();

  console.log(features_logos);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          minHeight: 560,
          display: 'flex',
          flexDirection: 'column',
        }}
        component="header"
      >
        <Box
          sx={{
            flexShrink: 0,
            minHeight: 560,
          }}
          component="img"
          src={hero_image.data[0].url}
        />
        <Box
          sx={{
            top: '20%',
            position: 'absolute',
            width: '100%',
            zIndex: 1,
          }}
        >
          <Container>
            <Grid container>
              <Grid item sm={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                      fontWeight: 'bold',
                      color: theme.palette.common.white,
                    }}
                  >
                    {title || FillerContent.header}
                  </Typography>

                  <MuiMarkdown
                    overrides={{
                      p: {
                        component: Typography,
                        props: {
                          variant: 'h6',
                          component: 'p',
                          sx: {
                            color: theme.palette.common.white,
                          },
                        },
                      },
                    }}
                  >
                    {description || FillerContent.description}
                  </MuiMarkdown>

                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    {features_logos.data.map((item, index) => (
                      <Box
                        sx={{
                          borderRadius: 1,
                          display: 'flex',
                          gap: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 90,
                          height: 90,
                          background: theme.palette.common.white,
                        }}
                      >
                        <Box sx={{ p: 2 }}>
                          <Box
                            sx={{ width: '100%', height: '100%' }}
                            component="img"
                            src={item.image.data[0].url}
                          />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} md={6}></Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
