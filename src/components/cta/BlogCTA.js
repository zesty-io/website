import { React, useEffect, useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import TransitionsModal from './TransitionModal';

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
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    firstName: yup
      .string('Enter your first name')
     // .firstName('Enter your first name')
      .required('First name is required'),
    lastName: yup
      .string('Enter your last name')
    //  .lastName('Enter your last name')
      .required('Last name is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     // handleModal();
     // alert(JSON.stringify(values, null, 2));
    },
  });
  const handleModal = () => {
    if (formik.values.email !== '' && formik.isValid) {

        if (formik.values.email !== '' && formik.isValid) {
          fetch('https://us-central1-zesty-dev.cloudfunctions.net/zohoEmailSubscribe?email='+formik.values.email+'&first_name='+formik.values.firstName+'&last_name='+formik.values.lastName, {
            method: 'GET'
          })
            .then(res => res.json())
            .then(data => {
              acSENT = true;
            });
        }

      setOpen(!open);
    }
  };

  return (
    <Box
      component={Card}
      boxShadow={2}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row-reverse' }}
      sx={{ backgroundImage: 'none' }}
    >
      <TransitionsModal open={open} setOpen={setOpen}
      title="Thank you for subscribing!"
      message="Check your email to confirm."/>
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
        <Box
          onSubmit={formik.handleSubmit}
          component={'form'}
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiInputBase-input.MuiOutlinedInput-input': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant={'h6'} gutterBottom>
                {title}
              </Typography>
              <Typography color={'text.secondary'}>{description}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="First Name "
                variant="outlined"
                name={'firstName'}
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Last Name "
                  variant="outlined"
                  name={'lastName'}
                  fullWidth
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email "
                variant="outlined"
                name={'email'}
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>

              <Button
                size={'large'}
                color="secondary"
                fullWidth
                variant={'contained'}
                type={'submit'}
                sx={{ height: 54 }}
                onClick={handleModal}
              >
                {ctaBtn}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Box>
  );
}

export default BlogCTA;
