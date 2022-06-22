// MUI imports
import { Box, Container, Grid, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

// Local Assets Imports
import chevron_right from '../../../../public/assets/images/headless-cms/chevron-right.svg';
import chevron_left from '../../../../public/assets/images/headless-cms/chevron-left.svg';

const TimeLine = ({ theme, isMobile, content, FillerContent }) => {
  const timeline = [
    {
      description: content.step_1_description,
      image: content.step_1_image.data[0].url,
    },
    {
      description: content.step_2_description,
      image: content.step_2_image.data[0].url,
    },
    {
      description: content.step_3_description,
      image: content.step_3_image.data[0].url,
    },
    {
      description: content.step_4_description,
      image: content.step_4_image.data[0].url,
    },
  ];
  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestyDarkBlue,
        mt: 14,
        position: 'relative',
        borderRadius: 5,
        overflow: 'hidden',
      }}
      component="section"
    >
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '5%',
          width: isMobile ? 264 : 'auto',
        }}
        component="img"
        alt=""
        src={chevron_right.src}
      />

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: '5%',
          width: isMobile ? 264 : 'auto',
        }}
        component="img"
        alt=""
        src={chevron_left.src}
      />
      <Container>
        <Box sx={{ color: 'white' }}>
          <Box sx={{ position: 'relative' }} component="ul">
            {/* Content One */}
            <Box
              sx={{
                py: isMobile ? 3 : 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: 400,
                listStyleType: 'none',
                borderTopLeftRadius: 155,
                position: 'relative',
              }}
              component="li"
            >
              <Box sx={{ ml: 4, mt: isMobile ? 0 : 15 }}>
                <MuiMarkdown
                  overrides={{
                    h2: {
                      component: Typography,
                      props: {
                        component: 'h2',
                        variant: 'h3',
                        sx: {
                          textAlign: isMobile ? 'center' : 'left',
                          fontWeight: 'bold',
                          background: theme.palette.zesty.zestyOrangeLinear,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          color: 'transparent',
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        variant: 'h4',
                        component: 'p',
                        sx: {
                          marginTop: 2,
                          textAlign: isMobile ? 'center' : 'left',
                          fontSize: isMobile ? 25 : 32,
                        },
                      },
                    },
                  }}
                >
                  {content.how_it_works_header || FillerContent.description}
                </MuiMarkdown>
              </Box>
            </Box>
            {/* Content Loop */}
            {timeline.map((item) => (
              <Box
                sx={{
                  py: isMobile ? 3 : 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: 400,
                  listStyleType: 'none',
                  borderLeft: `2px solid ${
                    isMobile
                      ? theme.palette.zesty.zestyBlue2
                      : theme.palette.common.white
                  }`,
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    width: 15,
                    height: 15,
                    background: theme.palette.zesty.whiteGray,
                    border: `2px solid ${
                      isMobile
                        ? theme.palette.zesty.zestyBlue2
                        : theme.palette.common.white
                    }`,
                    zIndex: 2,
                    borderRadius: '50%',
                    position: 'absolute',
                    left: -8,
                    top: isMobile ? '32%' : '22%',
                  },
                }}
                component="li"
              >
                <Grid container spacing={2}>
                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                    item
                    sm={12}
                    md={6}
                  >
                    <Box sx={{ ml: 4 }}>
                      <MuiMarkdown
                        overrides={{
                          h3: {
                            component: Typography,
                            props: {
                              variant: 'h4',
                              component: 'h2',
                              sx: {
                                fontWeight: 'bold',
                                background:
                                  theme.palette.zesty.zestyOrangeLinear,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                              },
                            },
                          },
                          p: {
                            component: Typography,
                            props: {
                              variant: 'h4',
                              component: 'p',
                              sx: {
                                mt: 2,
                              },
                            },
                          },
                        }}
                      >
                        {item.description || FillerContent.description}
                      </MuiMarkdown>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box
                      sx={{
                        width: '100%',
                        maxWidth: isMobile ? '100%' : 501,
                        height: isMobile ? '100%' : 356,
                      }}
                      src={item?.image || FillerContent.logos[0].url}
                      component="img"
                      alt=""
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TimeLine;
