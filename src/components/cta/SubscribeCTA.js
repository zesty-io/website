import { React, useRef, useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function SubscribeCTA({
  text = 'Join thousands of others for our newsletter',
}) {
  const theme = useTheme();

  // const onSubmit = () => {
  //   let email = emailInput.current.children[1].children[0].value
  //   if(validateEmail(email)){
  //     alert('good submit to capture '+email)
  //   }
  //   alert('Bad Email: '+email)
  // }

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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  return (
    <Box display="flex" flexDirection={'column'} justifyContent={'center'}>
      <Box marginBottom={2}>
        <Typography variant="body1" component="p">
          {text}
        </Typography>
      </Box>
      <Box
        component={'form'}
        onSubmit={formik.handleSubmit}
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
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            type="submit"
          >
            Subscribe
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
