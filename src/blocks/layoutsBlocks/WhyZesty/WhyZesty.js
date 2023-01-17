/**
 * Mui Imports
 */

import { Box, Grid, Typography, Container } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import { useTheme } from '@mui/material/styles';
import FillerContent from 'components/globals/FillerContent';


import ZestyImage from '../../Image/ZestyImage';
const WhyZesty = ({ header, isMedium, whyzestydata }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        py: 15,
      }}
      component="section"
    >
      <Container>
        <Box>
          <MuiMarkdown
            options={{
              overrides: {
                h2: {
                  component: Typography,
                  props: {
                    variant: 'h3',
                    component: 'h2',
                    sx: {
                      color: theme.palette.zesty.zestyOrange,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    },
                  },
                },
                p: {
                  component: Typography,
                  props: {
                    variant: 'h6',
                    component: 'p',
                    sx: {
                      mt: 2,
                      lineHeight: 1.2,
                      textAlign: 'center',
                      color: theme.palette.zesty.zestyZambezi,
                    },
                  },
                },
              },
            }}
          >
            {header || FillerContent.rich_text}
          </MuiMarkdown>
        </Box>

        <Box sx={{ mt: 10 }}>
          {whyzestydata?.data?.map((item, index) => (
            <Grid sx={{ my: 5 }} key={index} container spacing={2}>
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
                <MuiMarkdown
                  options={{
                    overrides: {
                     h3: {
                        component: Typography,
                        props: {
                           variant: 'h5',
                          component: 'h3',
                          sx: {
                            color: theme.palette.zesty.zestyZambezi,
                            fontWeight: 'bold',
                          },
                        },
                      },
                      span: {
                        component: Typography,
                        props: {
                           variant: 'h5',
                          component: 'h3',
                          sx: {
                            color: theme.palette.zesty.zestyZambezi,
                            fontWeight: 'bold',
                          },
                        },
                      },
                    },
                  }}
                >
                  {item.header}
                </MuiMarkdown>
                <MuiMarkdown
                    options={{
                      overrides: {
                        h2: {
                          component: Typography,
                          props: {
                            component: 'h2',
                            variant: 'h3',
                            sx: {
                              color: theme.palette.zesty.zestyZambezi,
                              fontWeight: 'bold',
                              textAlign: ' center',
                            },
                          },
                        },
                        span: {
                          component: Typography,
                          props: {
                            component: 'h2',
                            variant: 'h3',
                            sx: {
                              color: theme.palette.zesty.zestyZambezi,
                              fontWeight: 'bold',
                              textAlign: ' center',
                            },
                          },
                        },
                        p: {
                          component: Typography,
                          props: {
                            mt: 2,
                            component: 'p',
                            variant: 'h6',
                            sx: {
                              color: theme.palette.zesty.zestyZambezi,
                             textAlign: isMedium ? 'center' : 'left', mt: 3 
                            },
                          },
                        },
                      },
                    }}
                  >
                    {item?.benefit_content  || FillerContent.description}
                  </MuiMarkdown>
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
                <Box>
                  <ZestyImage
                    style={{ width: '100%', maxWidth: 599, height: 'auto' }}
                    width={533}
                    height={349}
                    alt={item.header}
                    src={item.benefit_image?.data[0]?.url}
                  />
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyZesty;
