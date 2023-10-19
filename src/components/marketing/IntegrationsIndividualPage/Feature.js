/**
 * MUI Imports
 */
import { Box, Typography, Grid } from '@mui/material';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'markdown-to-jsx';
import { useRouter } from 'next/router';

/**
 * Static Assets Imports
 */
import Line from '../../../../public/assets/images/IntegrationIndividualPage/line.svg';
import Chevron from '../../../../public/assets/images/IntegrationIndividualPage/chevron.svg';

const Feature = ({
  theme,
  content,
  FillerContent,
  isMedium,
  //  isDarkMode
}) => {
  const router = useRouter();
  const isNextCms = router.asPath.includes('/integrations/nextjs-cms/');
  // const isTeamBenefits = router.asPath.includes(
  //   '/integrations/nextjs-team-benefits/',
  // );

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

  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestyDarkBlue,
        mt: 10,

        overflow: 'hidden',
        position: 'relative',
      }}
      component="section"
    >
      <Box
        sx={{ position: 'absolute', opacity: 0.1 }}
        component="img"
        src={Chevron.src}
        alt="chevron icon"
      />
      <Box
        sx={{ position: 'absolute', opacity: 0.1, bottom: 0 }}
        component="img"
        src={Chevron.src}
        alt="chevron icon"
      />
      <Container
        sx={{
          position: 'relative',
          py: 2,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            height: 2300,
            display: isMedium ? 'none' : 'block',
          }}
          component="img"
          alt="line icon"
          src={Line.src}
        />
        <Box sx={{ height: '100%' }}>
          <Box sx={{ pt: 8, pl: isMedium ? 0 : 8 }}>
            <Typography
              variant={'h3'}
              component="h2"
              sx={{
                textAlign: isMedium ? 'center' : 'left',
                color: theme.palette.common.white,
                fontWeight: 'bold',

                textDecoration: isMedium ? 'none' : 'underline',
                textUnderlineOffset: 17,
                textDecorationColor: theme.palette.zesty.zestyOrange,
              }}
            >
              {content.feature_h2 || FillerContent.description}
            </Typography>
          </Box>

          <Box sx={{ pl: isMedium ? 0 : 25, mt: isMedium ? 10 : 25 }}>
            {featureData.map((item, index) => (
              <Grid
                sx={{ minHeight: 578, mt: 10 }}
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
                      options={{
                        overrides: {
                          h2: {
                            component: Typography,
                            props: {
                              variant: 'h4',
                              component: 'h2',
                              fontWeight: 900,
                              position: 'relative',
                              sx: {
                                color: theme.palette.zesty.zestyOrange,
                                '&:before': {
                                  visibility: isMedium ? 'hidden' : 'visible',
                                  content: '""',
                                  height: 21,
                                  width: 21,
                                  display: 'block',
                                  background: theme.palette.zesty.zestyOrange,
                                  position: 'absolute',
                                  borderRadius: 100,
                                  left: -83,
                                  top: 10,
                                },
                              },
                            },
                          },
                          p: {
                            component: Typography,
                            props: {
                              variant: 'h6',
                              component: 'p',
                              color: theme.palette.common.white,
                              lineHeight: 1.5,
                              mt: 2,
                            },
                          },
                        },
                      }}
                    >
                      {item.description}
                    </MuiMarkdown>
                  </Box>
                </Grid>
                <Grid
                  sx={{ position: 'relative', display: 'flex' }}
                  item
                  sm={12}
                  md={6}
                >
                  {isNextCms && (
                    <Box sx={{ display: 'flex', pl: isMedium ? 0 : 15 }}>
                      <Box
                        sx={{ position: 'absolute', ml: isMedium ? 0 : -15 }}
                      >
                        <Box
                          sx={{ width: '100%', maxWidth: 768, height: 568 }}
                          component="img"
                          alt="background image"
                          src={item.image}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: 1276,
                          height: 568,
                          opacity: 0.1,
                          filter: 'invert(30%)',
                        }}
                        component="img"
                        alt="image"
                        src={item.image}
                      />
                    </Box>
                  )}

                  <Box sx={{ alignSelf: 'center', py: 2 }}>
                    <Box
                      sx={{ width: '100%' }}
                      component="img"
                      src={item.image}
                      alt="image"
                    />
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
