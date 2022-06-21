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

/**
 * Temporary Assets
 */
import rocket from '../../../../public/assets/images/marketplace/rocket.png';

const Hero = ({ title, description, features_logos }) => {
  const theme = useTheme();

  console.log(features_logos);

  return (
    <>
      <Box
        sx={{
          minHeight: 560,
        }}
        component="header"
      >
        <Box sx={{ position: 'absolute' }} component="img" src={rocket.src} />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Container disableGutters>
            <Grid container>
              <Grid item sm={12} md={6}>
                <Typography
                  component="h1"
                  variant="h3"
                  sx={{ fontWeight: 'bold', color: theme.palette.common.white }}
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
                        width: 96,
                        height: 96,
                        background: theme.palette.common.white,
                      }}
                    >
                      <Box>
                        <Box
                          sx={{ width: '100%', height: 'auto' }}
                          component="img"
                          src={item.image.data[0].url}
                        />
                      </Box>
                    </Box>
                  ))}
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
