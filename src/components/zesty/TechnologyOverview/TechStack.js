// MUI Imports
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import MuiMarkdown from 'mui-markdown';

// Local Assets Imports
import tech_stack from '../../../../public/assets/images/headless-cms/tech-stack.png';

const TechStack = ({ theme, isMobile, content }) => {
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
                {content.integrations_description}
              </MuiMarkdown>

              <Box sx={{ width: '100%', mt: 4 }}>
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
                  {content.integrations_button}
                </Button>
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box sx={{ mt: isMobile ? 4 : 0 }}>
                <Box
                  sx={{ width: '100%' }}
                  component="img"
                  src={tech_stack.src}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default TechStack;
