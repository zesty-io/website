import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function BlogCTA({ title , description, ctaBtn}) {
  const theme = useTheme();
  return (
    <Box
      component={Card}
      boxShadow={2}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row-reverse' }}
      sx={{ backgroundImage: 'none' }}
    >
      <Box
        sx={{
          width: { xs: 1, md: '50%' },
          position: 'relative',
          '& .lazy-load-image-loaded': {
            height: 1,
            display: 'flex !important',
          },
        }}
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={
            'https://kfg6bckb.media.zestyio.com/Subscribe-newsletter.jpg?width=3864&height=2577'
          }
          alt="Subscribe"
          effect="blur"
          sx={{
            objectFit: 'cover',
            maxHeight: 360,
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Box
          component={'svg'}
          viewBox="0 0 112 690"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          sx={{
            position: 'absolute',
            bottom: 0,
            top: '-50%',
            left: 0,
            right: 0,
            color: theme.palette.background.paper,
            transform: 'scale(2)',
            height: 1,
            width: 'auto',
            transformOrigin: 'top center',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <path
            d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
            fill="currentColor"
          />
        </Box>
      </Box>
      <CardContent
        sx={{
          position: 'relative',
          width: { xs: 1, md: '50%' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant={'h6'} gutterBottom>
                {title}
              </Typography>
              <Typography color={'text.secondary'}>{description}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name "
                variant="outlined"
                name={'name'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email "
                variant="outlined"
                name={'email'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                size={'large'}
                fullWidth
                variant={'contained'}
                type={'submit'}
                sx={{ height: 54 }}
              >
                {ctaBtn}
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Box>
  );
}

export default BlogCTA;
