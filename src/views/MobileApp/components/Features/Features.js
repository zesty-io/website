/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Always know what you'll pay.
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Once you're setup, instantly withdraw payments or deposit into your
          bank
          <br />
          account within 2-3 business days.
        </Typography>
        <Box marginTop={2} display={'flex'} justifyContent={'center'}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            Learn more
          </Button>
        </Box>
      </Box>
      <Grid container spacing={isMd ? 0 : 2}>
        <Grid item xs={12} md={6}>
          <Card data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <CardContent sx={{ padding: { sm: 4 } }}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    <Typography
                      variant={'h1'}
                      sx={{ fontWeight: 700 }}
                      color={'primary'}
                    >
                      15%
                    </Typography>
                    <Typography color={'text.secondary'}>
                      per successful transaction
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    <Box color={theme.palette.primary.main}>
                      <svg
                        width={50}
                        height={50}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                      </svg>
                    </Box>
                    <Typography sx={{ fontWeight: 700 }} align={'center'}>
                      Account creation
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    <Box color={theme.palette.primary.main}>
                      <svg
                        width={50}
                        height={50}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </Box>
                    <Typography sx={{ fontWeight: 700 }} align={'center'}>
                      Professional account
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display={'flex'} justifyContent={'center'}>
                    <Typography
                      variant={'caption'}
                      align={'center'}
                      color={'text.secondary'}
                    >
                      Included for 3 months, <br />
                      then $2.5/monthly included VAT
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box marginTop={2} display={'flex'} justifyContent={'center'}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </Box>
                      }
                    >
                      Get started
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box component={Card} bgcolor={theme.palette.primary.main}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: { sm: 4 },
              }}
            >
              <Box color={theme.palette.common.white} marginBottom={4}>
                <svg
                  width={80}
                  height={80}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </Box>
              <Typography
                variant={'h4'}
                gutterBottom
                sx={{ fontWeight: 600, color: theme.palette.common.white }}
              >
                Customized
              </Typography>
              <Typography
                gutterBottom
                align={'center'}
                sx={{ color: theme.palette.common.white }}
              >
                Design a custom package for your business.
              </Typography>
              <Typography
                align={'center'}
                sx={{ color: theme.palette.common.white }}
              >
                Available for businesses with large payments volume or unique
                business models.
              </Typography>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'center' }}>
              <Box
                component={Button}
                color={theme.palette.common.white}
                size={'large'}
              >
                Contact sales
              </Box>
            </CardActions>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
