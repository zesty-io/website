// MUI Imports
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

// Local Assets Imports

const TechStack = ({ theme, isMobile, content, FillerContent }) => {
  console.log(content.integrations_logos);
  return (
    <Box component="section" sx={{ px: 4, mt: 10 }}>
      <Box
        sx={{
          background: theme.palette.zesty.zestySeaShell,
          borderRadius: 10,
          py: 10,
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <MuiMarkdown
                overrides={{
                  span: {
                    component: Typography,
                    props: {
                      variant: 'h3',
                      component: 'span',
                      sx: {
                        fontWeight: 'bold',
                        fontWeight: 'regular',
                        color: theme.palette.zesty.zestyOrange,
                      },
                    },
                  },
                  h2: {
                    component: Typography,
                    props: {
                      variant: 'h4',
                      component: 'h3',
                      sx: {
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                  h3: {
                    component: Typography,
                    props: {
                      variant: 'h3',
                      component: 'h2',
                      sx: {
                        mt: 2,
                        fontWeight: 'bold',
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },

                  p: {
                    component: Typography,
                    props: {
                      variant: 'h5',
                      component: 'p',
                      sx: {
                        mt: 2,
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                }}
              >
                {content.integrations_description || FillerContent.description}
              </MuiMarkdown>

              <Box sx={{ width: '100%', mt: 4 }}>
                {content.integration_link?.data && (
                  <Button
                    component={'a'}
                    target="_blank"
                    fullWidth={isMobile}
                    variant="contained"
                    href={content.integration_link.data[0].meta.web.uri}
                    sx={{
                      background: theme.palette.zesty.zestyOrange,
                      color: theme.palette.common.white,
                      px: 6,
                    }}
                    size="large"
                  >
                    {content.integrations_button || FillerContent.description}
                  </Button>
                )}
              </Box>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              item
              sm={12}
              md={6}
            >
              <Box
                sx={{
                  mt: isMobile ? 4 : 0,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.0,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    height: 88,
                    width: 230,
                    display: isMobile ? 'none' : 'block',
                  }}
                />
                {content.integrations_logos?.data.map((item, idx) => {
                  return (
                    <>
                      <Box
                        key={idx}
                        sx={{ height: 88, width: 'auto' }}
                        component="img"
                        src={item.logo.data[0].url}
                      />
                    </>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default TechStack;
