/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react';
import Box from '@mui/material/Box';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';



function TransitionsModal({open, handleOpen, handleClose}) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #FF5D0A',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };

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
            Thank you for contacting Zesty.io
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Our team will be in touch soon regarding your request.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

/* validation for form component */

const getLeadObjectZOHO = (obj, select, leadDetail, businessType) => {
  let acLeadtype = 'Marketing Website';
  let acRole ='Marketer';
  return {
    
    "First_Name": obj.firstName,
    "Last_Name": obj.lastName,
    "Email": obj.email,
    "Inquiry_Reason": select,
    "Message": obj.message,
    // "Country": country.options[country.selectedIndex].getAttribute('data-countryCode'),
    // "Phone": '+'+country.value + ' ' + document.querySelector('#ac-phone input').value,
    // "Current_CMS": acCMS,
    // "How_Using_Zesty_io": acHow,
    // "Website": document.querySelector('#ac-url').value,
    "Lead_Source": "Website",
    // "Description": document.querySelector('#ac-description').value,
    // "Role": acRole,
    // 'Project_Timeline' : document.querySelector('#ac-timeline').value,
    "Lead_Source_Detail": leadDetail,
    "Business_Type": businessType,
    "Lead_Status": "Not Contacted"
  }

}

const postToZOHO = async (payloadJSON) => {
 
    fetch('https://us-central1-zesty-prod.cloudfunctions.net/zoho',{
      method: 'POST',
      body: JSON.stringify(payloadJSON),
      headers: {
          "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(data => {
      // acSENT = true;
    }).catch((error)=>{
      throw new Error(`HTTP error: ${error}`);
    })
}

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  message: yup
    .string()
    .trim()
    .required('Please specify your message'),
});

function StandardFormWithSelect({selectedValue=0, hideSelect=false, hideMessage=true, defaultMessage=''}) {
  
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  let inquiryReasons = [
    'General',
    'Agency Sign Up',
    'Request a Demo',
    'Support',
    'Billing',
    'Press Relations',
  ]
  const [selectValue, setSelectValue] = useState(inquiryReasons[selectedValue]);
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectValue(event.target.value);
  };


  const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  };

  const onSubmit = async (values) => {
    let payload = hideMessage ? getLeadObjectZOHO(values, select, 'Contact Us', '') : getLeadObjectZOHO(values, select, 'Agency Partner Sign Up', 'Partner');
    console.log(payload);
    await postToZOHO(payload);
    handleOpen();
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
  
  <Box>
      <form noValidate onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
              <TextField
              sx={{ height: 54 }}
              label="First name"
              variant="outlined"
              color="primary"
              size="medium"
              name="firstName"
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={
                  formik.touched.firstName && formik.errors.firstName
              }
              />
          </Grid>
          <Grid item xs={12} sm={6}>
              <TextField
              sx={{ height: 54 }}
              label="Last name"
              variant="outlined"
              color="primary"
              size="medium"
              name="lastName"
              fullWidth
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
              }
              helperText={formik.touched.lastName && formik.errors.lastName}
              />
          </Grid>
          <Grid item xs={12}>
              <TextField
              sx={{ height: 54 }}
              label="Email"
              type="email"
              variant="outlined"
              color="primary"
              size="medium"
              name="email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              />
          </Grid>
          {/* logic to hide the select */}
          {hideSelect && <Grid item xs={12}><input value={selectValue}  name="inquiryReason" type="hidden" /></Grid>}
          {/* logic to hide the select */}
          {!hideSelect && 
          <Grid item xs={12}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Inquiry Reason</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectValue}
                label="Inquiry Reason"
                onChange={handleChange}
                name="inquiryReason"
                >
                  {/* <MenuItem value=''><em>None</em></MenuItem> */}
                  {inquiryReasons.map(value => <MenuItem value={value}>{value}</MenuItem>)}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          }
          <Grid item xs={12}>
              <TextField
              label="Message"
              multiline
              rows={6}
              variant="outlined"
              color="primary"
              size="medium"
              name="message"
              fullWidth
              value={formik.values.message}
              onChange={formik.handleChange}
              error={
                  formik.touched.message && Boolean(formik.errors.message)
              }
              helperText={formik.touched.message && formik.errors.message}
              />
          </Grid>
          <Grid item xs={12}>
              <Button
              sx={{ height: 54, minWidth: 150 }}
              variant="contained"
              color="secondary"
              size="medium"
              type="submit"
              >
              Submit
              </Button>
          </Grid>
          <Grid item xs={12}>
              <Typography color="text.secondary">
              We'll get back to you in 1-2 business days.
              </Typography>
          </Grid>
          <Grid item xs={12}>
              <Divider />
          </Grid>
          <Grid item xs={12}>
              <Box>
              <Typography component="p" variant="body2" align="left">
                  By clicking on "submit" you agree to our{' '}
                  <Box
                  component="a"
                  href="/legal/privacy-policy/"
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                  >
                  Privacy Policy
                  </Box>
                  .
              </Typography>
              </Box>
          </Grid>
          </Grid>
      </form>
      <TransitionsModal
      open={open}
      handleClose={handleClose}
      handleOpen={handleOpen} />
  </Box>

  );

}

export default StandardFormWithSelect;