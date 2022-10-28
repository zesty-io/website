/**
 * Mui Imports
 */

import { Box, Grid, Typography, Container } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';

import ZestyImage from '../../Image/ZestyImage';
const WhyZesty = ({ header, FillerContent, theme, isMedium, whyZestyData }) => {
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
            {header}
          </MuiMarkdown>
        </Box>

        <Box sx={{ mt: 10 }}>
          {whyZestyData.map((item) => (
            <Grid sx={{ my: 5 }} container spacing={2}>
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
                <MuiMarkdown
                  options={{
                    overrides: {
                      h3: {
                        component: Typography,
                        props: {
                          variant: 'h4',
                          component: 'h3',
                          color: theme.palette.zesty.zestyOrange,
                          textAlign: isMedium ? 'center' : 'text-left',
                          fontWeight: 'bold',
                        },
                      },
                      p: {
                        component: Typography,
                        props: {
                          variant: 'h5',
                          mt: 1,
                          component: 'p',
                          color: theme.palette.zesty.zestyZambezi,
                          textAlign: isMedium ? 'center' : 'text-left',
                        },
                      },
                    },
                  }}
                >
                  {item.text}
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
                    alt={item.text}
                    src={item.image}
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
