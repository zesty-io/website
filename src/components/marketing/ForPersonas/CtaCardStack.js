import { React } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  alpha,
} from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Link from 'next/link';
import { pushDataLayer } from 'lib/ga';

const CtaCardStack = () => {
  const theme = useTheme();
  return (
    <Stack
      bgcolor="grey.900"
      py={{ xs: 4, tablet: 6, lg: 10 }}
      px={{ xs: 2, tablet: 4, lg: 14 }}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Stack mb={{ xs: 8, lg: 10 }}>
        <Typography variant="h1" fontWeight={800} color="white">
          Start Your Free Trial with Zesty.io Today
        </Typography>
        <Typography
          mt={1}
          component="p"
          variant="h6"
          whiteSpace="pre-line"
          color="grey.300"
          fontSize="18px"
          lineHeight="28px"
        >
          Transform how you manage your insurance content and digital
          experiences. Contact us to learn how.
        </Typography>
      </Stack>

      <Grid
        container
        spacing={{ xs: 4, sm: 1, md: 4 }}
        sx={{ width: '100%', maxWidth: 1200 }}
        justifyContent="center"
      >
        <Grid
          component={Link}
          onClick={() =>
            pushDataLayer({
              buttonText: '',
              targetPage: '/contact?type=demo',
            })
          }
          href="/contact?type=demo"
          sx={{ textDecoration: 'none' }}
          item
          xs={12}
          sm={4}
        >
          <Stack
            height={'100%'}
            minHeight={250}
            component={Card}
            sx={(theme) => ({
              '&:hover': {
                background:
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
              },
            })}
            borderRadius="8px"
          >
            <Stack sx={{ height: '100%' }}>
              <Box
                p="20px"
                spacing={1}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  letterSpacing="-0.02em"
                  color="text.primary"
                  fontWeight={600}
                >
                  Tailored Demo
                </Typography>

                <ArrowForwardRoundedIcon
                  sx={{
                    width: '16px',
                    height: '16px',
                    alignSelf: 'center',
                    fill: alpha(theme.palette.grey[900], '.4'),
                  }}
                />
              </Box>
              <Box
                sx={{
                  mb: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Stack gap={2} px="20px">
                  <MuiMarkdown
                    options={{
                      overrides: {
                        p: {
                          component: Typography,
                          props: {
                            sx: {
                              textAlign: 'left',
                              fontSize: { sm: 14, md: 'unset' },
                            },
                            color: 'text.secondary',
                          },
                        },
                        span: {
                          component: Typography,
                          props: {
                            sx: {
                              textAlign: 'left',
                              fontSize: { sm: 14, md: 'unset' },
                            },
                            color: 'text.secondary',
                          },
                        },
                      },
                    }}
                  >
                    Discover how our solutions meet your unique needs. Schedule
                    a personalized demo today.
                  </MuiMarkdown>
                </Stack>

                <Button sx={{ mx: 2 }} variant="contained" size="medium">
                  Book Demo
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Grid>

        <Grid
          component={Link}
          onClick={() =>
            pushDataLayer({
              buttonText: '',
              targetPage: '/contact?type=discovery',
            })
          }
          href="/contact?type=discovery"
          sx={{ textDecoration: 'none' }}
          item
          xs={12}
          sm={4}
        >
          <Stack
            height={'100%'}
            minHeight={250}
            component={Card}
            sx={(theme) => ({
              '&:hover': {
                background:
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
              },
            })}
            borderRadius="8px"
          >
            <Stack sx={{ height: '100%' }}>
              <Box
                p="20px"
                spacing={1}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  letterSpacing="-0.02em"
                  color="text.primary"
                  fontWeight={600}
                >
                  Discovery Call
                </Typography>

                <ArrowForwardRoundedIcon
                  sx={{
                    width: '16px',
                    height: '16px',
                    alignSelf: 'center',
                    fill: alpha(theme.palette.grey[900], '.4'),
                  }}
                />
              </Box>
              <Box
                sx={{
                  mb: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Stack gap={2} px="20px">
                  <MuiMarkdown
                    options={{
                      overrides: {
                        p: {
                          component: Typography,
                          props: {
                            sx: {
                              textAlign: 'left',
                              fontSize: { sm: 14, md: 'unset' },
                            },
                            color: 'text.secondary',
                          },
                        },
                        span: {
                          component: Typography,
                          props: {
                            sx: {
                              textAlign: 'left',
                              fontSize: { sm: 14, md: 'unset' },
                            },
                            color: 'text.secondary',
                          },
                        },
                      },
                    }}
                  >
                    {`${"Let's discuss your content challenges together. Book your discovery call now."}`}
                  </MuiMarkdown>
                </Stack>

                <Button sx={{ mx: 2 }} variant="contained" size="medium">
                  Book Call
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default CtaCardStack;
