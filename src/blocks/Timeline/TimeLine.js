// MUI imports
import { Box, Container, Grid, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

// Local Assets Imports
// import chevron_right from '../../../public/assets/images/headless-cms/chevron-right.svg';
// import chevron_left from '../../../public/assets/images/headless-cms/chevron-left.svg';
import curve from '../../../public/assets/images/headless-cms/curve.svg';
import curve_dark from '../../../public/assets/images/headless-cms/curve-dark.svg';
import curve_mobile from '../../../public/assets/images/headless-cms/curve-mobile.svg';

const TimeLine = ({
  theme,
  isMobile,
  FillerContent,
  timelineData,
  isDarkMode,
}) => {
  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestyDarkBlue,
        mt: 25,
        position: 'relative',
      }}
      component="section"
    >
      {/* <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: '5%',
          width: isMobile ? 264 : 'auto',
        }}
        component="img"
        alt=""
        src={chevron_left.src}
      /> */}
      <Container>
        <Box
          sx={{
            position: 'absolute',

            ml: isMobile ? 0 : -0.9,
            mt: -14.4,
          }}
          component="img"
          alt=""
          src={
            isMobile
              ? curve_mobile.src
              : isDarkMode
              ? curve_dark.src
              : curve.src
          }
        />

        <Box sx={{ color: 'white', mt: -5 }}>
          <Box sx={{ position: 'relative' }}>
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
                        component: 'h3',
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
                  {timelineData.header || FillerContent.description}
                </MuiMarkdown>
              </Box>
            </Box>
            {/* Content Loop */}
            {timelineData.data.map((item) => (
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
                      src={item?.image || FillerContent.photos[0].src}
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
