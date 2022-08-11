/**
 * MUI Imports
 */
import { Box, Typography, Grid } from '@mui/material';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';

/**
 * Static Assets Imports
 */
import Line from '../../../../public/assets/images/IntegrationIndividualPage/line.svg';

const Feature = ({ theme, content, FillerContent, isLarge }) => {
  const featureData = [
    {
      description: content.feature_description_1 || FillerContent.description,
      image: content.feature_1_image.data[0].url || FillerContent.photos[0].src,
    },
    {
      description: content.feature_description_2 || FillerContent.description,
      image: content.feature_2_image.data[0].url || FillerContent.photos[0].src,
    },
    {
      description: content.feature_description_3 || FillerContent.description,
      image: content.feature_3_image.data[0].url || FillerContent.photos[0].src,
    },
  ];

  console.log(featureData);

  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestyBackgroundBlue,
        mt: 10,
        minHeight: 2629,
      }}
      component="section"
    >
      <Container
        sx={{
          position: 'relative',
          height: 2629,
        }}
      >
        <Box
          sx={{ position: 'absolute' }}
          component="img"
          alt="line icon"
          src={Line.src}
        />
        <Box sx={{ mt: 10, height: '100%' }}>
          <Box sx={{ pt: 8, pl: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: theme.palette.zesty.zestyDarkText,
                fontWeight: 'bold',
                textDecoration: 'underline',
                textUnderlineOffset: 17,
                textDecorationColor: theme.palette.zesty.zestyOrange,
              }}
            >
              {content.feature_h2 || FillerContent.description}
            </Typography>
          </Box>

          <Box sx={{ pl: 25, mt: 20 }}>
            {featureData.map((item, index) => (
              <Grid
                sx={{ minHeight: 578, mt: 25 }}
                key={index}
                container
                spacing={2}
              >
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
                    <MuiMarkdown
                      overrides={{
                        h2: {
                          component: Typography,
                          props: {
                            variant: 'h4',
                            component: 'h2',
                            fontWeight: 900,
                            color: theme.palette.zesty.zestyOrange,
                          },
                        },
                        p: {
                          component: Typography,
                          props: {
                            variant: 'h6',
                            component: 'p',
                            color: theme.palette.zesty.zestyZambezi,
                            lineHeight: 1.2,
                            mt: 2,
                          },
                        },
                      }}
                    >
                      {item.description}
                    </MuiMarkdown>
                  </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Box>
                    <Box component="img" alt="" src={item.image} />
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Feature;
