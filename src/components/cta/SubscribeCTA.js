/* eslint-disable no-undef */
import { React, useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import TransitionsModal from './TransitionModal';

export default function SubscribeCTA({
  text = 'Join thousands of others for our newsletter',
}) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  const handleModal = () => {
    if (formik.values.email !== '' && formik.isValid) {
      if (formik.values.email !== '' && formik.isValid) {
        fetch(
          'https://us-central1-zesty-dev.cloudfunctions.net/zohoEmailSubscribe?email=' +
            formik.values.email,
          {
            method: 'GET',
          },
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            dataLayer.push({ event: 'emailSubscribeSubmitted', value: '1' });
            acSENT = true;
          });
      }

      setOpen(!open);
    }
  };

  return (
    <Box display="flex" flexDirection={'column'} justifyContent={'center'}>
      <TransitionsModal
        open={open}
        setOpen={setOpen}
        title="Thank you for subscribing!"
        message="Check your email to confirm."
      />
      <Box marginBottom={2}>
        <Typography variant="body1" component="p">
          {text}
        </Typography>
      </Box>
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
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        >
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Box
            component={Button}
            variant="contained"
            color="primary"
            backgroundColor={theme.palette.secondary.main}
            size="large"
            height={54}
            className="subscribeButton"
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            type="submit"
            onClick={handleModal}
          >
            Subscribe
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
