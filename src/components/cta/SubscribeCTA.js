import { React, useRef, useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  fontFamily: "Mulish",
};

function TransitionsModal({title, message, open, setOpen}) {
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  return (
    <div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Thank you
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Have a great day!
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

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
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

    const email = JSON.stringify(values)
     return email;
    },
  });



  return (
    <Box display="flex" flexDirection={'column'} justifyContent={'center'}>
    <TransitionsModal open={open} setOpen={setOpen} />
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
            onClick={() => setOpen(!open)}
          >
            Subscribe
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
