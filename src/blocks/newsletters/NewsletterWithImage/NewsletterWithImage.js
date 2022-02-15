import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Container from 'components/Container';

const mock = [
  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
];

const NewsletterWithImage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Box marginBottom={3}>
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ fontWeight: 700 }}
                gutterBottom
              >
                Learn new skills, gain more experience
              </Typography>
              <Typography component="p" color="text.secondary">
                Our mission is to spread education that is easy accessible and
                everyone can learn.
              </Typography>
            </Box>
            <Box
              component={'form'}
              noValidate
              autoComplete="off"
              sx={{
                '& .MuiInputBase-input.MuiOutlinedInput-input': {
                  bgcolor: 'background.paper',
                },
              }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <Box
                  flex={'1 1 auto'}
                  component={TextField}
                  label="Enter your email"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  height={54}
                />
                <Box
                  component={Button}
                  variant="contained"
                  color="primary"
                  size="large"
                  height={54}
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                >
                  Subscribe
                </Box>
              </Box>
            </Box>
            <Box marginTop={{ xs: 4, sm: 6, md: 8 }} textAlign={'left'}>
              <Typography
                variant="body2"
                component="p"
                color="text.secondary"
                sx={{ textTransform: 'uppercase' }}
              >
                Trusted by industry leading companies
              </Typography>
              <Box display="flex" flexWrap="wrap" justifyContent={'flex-start'}>
                {mock.map((item, i) => (
                  <Box maxWidth={60} marginTop={2} marginRight={4} key={i}>
                    <Box
                      component="img"
                      height={1}
                      width={1}
                      src={item}
                      alt="..."
                      sx={{
                        filter:
                          theme.palette.mode === 'dark'
                            ? 'brightness(0) invert(0.7)'
                            : 'contrast(0)',
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box component={Card} boxShadow={3} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsletterWithImage;
