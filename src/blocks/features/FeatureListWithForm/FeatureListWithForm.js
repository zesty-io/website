/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';

const FeatureListWithForm = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box maxWidth={400} margin={'0 auto'}>
              <Card
                sx={{
                  backgroundImage: 'none',
                  boxShadow: 4,
                }}
              >
                <CardMedia
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    component={'img'}
                    src={
                      'https://assets.maccarianagency.com/backgrounds/img3.jpg'
                    }
                    height={{ xs: 240, sm: 340, md: 280 }}
                    width={1}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    component={'svg'}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1920 100.1"
                    sx={{
                      width: '100%',
                      bottom: 0,
                      position: 'absolute',
                    }}
                  >
                    <path
                      fill={theme.palette.background.default}
                      d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                    ></path>
                  </Box>
                </CardMedia>
                <CardContent>
                  <form noValidate autoComplete="off">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Full name"
                          name="fullName"
                          fullWidth
                          type="text"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Email"
                          name="email"
                          fullWidth
                          type="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Occupation" fullWidth />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item container alignItems={'center'} xs={12} md={6}>
            <Box>
              <Box marginBottom={2}>
                <Typography
                  variant={'h4'}
                  sx={{ fontWeight: 700 }}
                  gutterBottom
                >
                  The most useful resource ever created for{' '}
                  <Typography
                    color={'primary'}
                    component={'span'}
                    variant={'inherit'}
                  >
                    startups
                  </Typography>
                </Typography>
                <Typography color="text.secondary">
                  Using theFront to build your site means never worrying about
                  designing another page or cross browser compatibility. Our
                  ever-growing library of components and pre-designed layouts
                  will make your life easier.
                </Typography>
              </Box>
              <Grid container spacing={1}>
                {[
                  'All features',
                  'Email support',
                  'Lifetime updates',
                  'Tons of assets',
                  'Tech support',
                  'Integration ready',
                ].map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      </Box>
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureListWithForm;
