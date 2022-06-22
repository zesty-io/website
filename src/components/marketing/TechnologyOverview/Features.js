// MUI imports
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import useMediaQuery from '@mui/material/useMediaQuery';

// Local Assets Imports
import chevron_right from '../../../../public/assets/images/headless-cms/chevron-right.svg';

const Features = ({ theme, isMobile, isDarkMode, content, FillerContent }) => {
  return (
    <Box component="section" sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '15%',
          width: isMobile ? 264 : 'auto',
        }}
        component="img"
        alt=""
        src={chevron_right.src}
      />
      <Container sx={{ position: 'relative', zIndex: 10 }}>
        <Box>
          <MuiMarkdown
            overrides={{
              h2: {
                component: Typography,
                props: {
                  variant: 'h3',
                  component: 'h2',
                  sx: {
                    mt: isMobile ? 5 : 0,
                    color: theme.palette.zesty.zestyOrange,
                    fontWeight: 'bold',
                    letterSpacing: 0.2,
                    textAlign: 'center',
                  },
                },
              },
              p: {
                component: Typography,
                props: {
                  variant: 'h4',
                  component: 'h3',
                  sx: {
                    mt: 2,
                    textAlign: 'center',
                    color: theme.palette.zesty.zestyZambezi,
                    letterSpacing: 0.2,
                  },
                },
              },
            }}
          >
            {content.custom_headless_description || FillerContent.description}
          </MuiMarkdown>
        </Box>

        <Grid
          sx={{ mt: 5, justifyContent: 'center', alignItems: 'center' }}
          container
          spacing={useMediaQuery(theme.breakpoints.between('xs', 600)) ? 2 : 5}
        >
          {content.features_tiles.data.map((item, idx) => (
            <Grid key={idx} item sm={6} md={4}>
              <Card
                sx={{
                  width: '100%',
                  maxWidth: useMediaQuery(theme.breakpoints.between('xs', 600))
                    ? 155
                    : 355,
                  minHeight: 329,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: 'white',
                }}
              >
                <CardContent>
                  <Box>
                    <Box
                      sx={{
                        width: useMediaQuery(
                          theme.breakpoints.between('xs', 600),
                        )
                          ? 39
                          : 'auto',
                      }}
                      component="img"
                      alt=""
                      src={
                        item.icon_image.data[0].url ||
                        FillerContent.logos[0].url
                      }
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        mt: 3,
                        fontWeight: 'bold',
                        color: theme.palette.zesty.zestyOrange,
                        letterSpacing: 0.2,
                        fontSize: isMobile ? 15 : 20,
                      }}
                      variant="h6"
                      component="h4"
                    >
                      {item.feature_name || FillerContent.description}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        color: isDarkMode
                          ? theme.palette.zesty.zestyGrey
                          : theme.palette.zesty.zestyZambezi,
                        letterSpacing: 0.2,
                        fontSize: isMobile ? 12 : 16,
                      }}
                      variant="body1"
                      component="p"
                    >
                      {item.content || FillerContent.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
