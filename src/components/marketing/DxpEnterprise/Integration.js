/**
 * Mui Imports
 */

import { Box, Grid, Typography, Container, Button } from '@mui/material';
import TryFreeButton from 'components/cta/TryFreeButton';
import MuiMarkdown from 'markdown-to-jsx';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Integration = ({ content, FillerContent, theme, isMedium, isLarge }) => {
  return (
    <>
      <Box sx={{ mt: 5 }} component="section">
        <Box
          sx={{
            background: theme.palette.background.lightPeach,
            minHeight: 600,
            py: 10,
            borderTopRightRadius: 400,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Container>
            <Grid container spacing={2}>
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
                <Box
                  sx={{ width: '100%', maxWidth: 880 }}
                  component="img"
                  src={
                    content.integrations_graphic.data[0].url ||
                    FillerContent.photos[0].src
                  }
                />
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
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <MuiMarkdown
                    options={{
                      overrides: {
                        span: {
                          component: Typography,
                          props: {
                            sx: {
                              color: theme.palette.zesty.zestyOrange,
                              fontSize: 'inherit',
                              fontWeight: 'inherit',
                              lineHeight: 'inherit',
                            },
                          },
                        },
                        h2: {
                          component: Typography,
                          props: {
                            variant: 'h3',
                            component: 'h2',
                            fontWeight: 'bold',
                            color: theme.palette.zesty.zestyZambezi,
                            lineHeight: 1,
                            textAlign: isMedium ? 'center' : 'text-left',
                          },
                        },
                        p: {
                          component: Typography,
                          props: {
                            variant: 'h6',
                            mt: 2,
                            component: 'p',
                            color: theme.palette.zesty.zestyZambezi,
                            textAlign: isMedium ? 'center' : 'text-left',
                          },
                        },
                      },
                    }}
                  >
                    {content.bottom_description || FillerContent.description}
                  </MuiMarkdown>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: isMedium ? 'column' : 'row',

                      gap: 1,
                    }}
                  >
                    <TryFreeButton
                      fullWidth={isMedium}
                      variant="contained"
                      text={'Get Started'}
                    />
                    <Button
                      target={'_blank'}
                      href={
                        content.footer_cta_secondary_link?.data[0].meta.web
                          .uri || FillerContent.href
                      }
                      component="a"
                      fullWidth={false}
                      endIcon={<ArrowRightAltIcon />}
                      sx={{
                        '&:hover': {
                          background: 'transparent',
                        },
                        color: theme.palette.zesty.zestyOrange,
                        px: 6,
                      }}
                    >
                      {content.footer_cta_secondary}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Integration;
