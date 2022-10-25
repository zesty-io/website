/**
 * MUI Imports
 */
import { Box, Grid, Card, Typography, Container } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

/**
 * Components Imports
 */

const LevelUp = ({
  theme,
  // isMedium,
  content,
  FillerContent,
}) => {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 800,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        background: theme.palette.zesty.lightPink,
        transform: 'skew(0deg, 10deg)',
      }}
    >
      <Container sx={{ height: '100%', transform: 'skew(0deg, -10deg)' }}>
        <MuiMarkdown
          overrides={{
            h2: {
              component: Typography,
              props: {
                component: 'h2',
                variant: 'h4',
                sx: {
                  textAlign: 'center',
                },
              },
            },
            p: {
              component: Typography,
              props: {
                component: 'p',
                variant: 'h6',
                sx: {
                  mt: 2,
                  textAlign: 'center',
                  color: theme.palette.zesty.zestyZambezi,
                },
              },
            },
            a: {
              component: Typography,
              props: {
                component: 'a',
                variant: 'h6',
                sx: {
                  mt: 2,
                  textAlign: 'center',
                  color: theme.palette.zesty.zestyOrange,
                },
              },
            },
          }}
        >
          {content.level_up_features}
        </MuiMarkdown>

        <Grid sx={{ mt: 5 }} container spacing={2}>
          {content.level_up_features_cards?.data.map((item, index) => (
            <Grid key={index} item sm={12} md={4}>
              <Card sx={{ px: 4, py: 5, minHeight: 300 }}>
                <Box>
                  <Box sx={{ width: '100%', maxWidth: 60 }}>
                    <Box
                      sx={{ width: '100%' }}
                      component="img"
                      src={`${item.icon_image?.data[0].url}?width=60`}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: 2,
                      fontWeight: 'bold',
                      color: theme.palette.zesty.zestyOrange,
                    }}
                  >
                    {item.feature_name || FillerContent.description}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                      color: theme.palette.zesty.zestyZambezi,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.content || FillerContent.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LevelUp;
