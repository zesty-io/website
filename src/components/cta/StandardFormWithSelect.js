/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
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
import TransitionsModal from './TransitionModal';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';

// for hiding of ellipis in message in mobile
const StyledTextField = styled(TextField)({
  [`& .${inputLabelClasses.outlined}`]: {
    whiteSpace: 'normal',
  },
});

/* validation for form component */

const getLeadObjectZOHO = (
  obj,
  select,
  leadDetail,
  businessType,
  leadSource = 'Website',
) => {
  let acLeadtype = 'Marketing Website';
  let acRole = 'Marketer';
  return {
    First_Name: obj.firstName,
    Last_Name: obj.lastName,
    Email: obj.email,
    Inquiry_Reason: select,
    Description: obj.message,
    // "Country": country.options[country.selectedIndex].getAttribute('data-countryCode'),
    // "Phone": '+'+country.value + ' ' + document.querySelector('#ac-phone input').value,
    // "Current_CMS": acCMS,
    // "How_Using_Zesty_io": acHow,
    // "Website": document.querySelector('#ac-url').value,
    Lead_Source: leadSource,
    Role: acRole,
    Captured_URL: window.location.href.match(/localhost/ig) == null ? window.location.href : 'https://www.testcapurl.com',
    Referring_URL: document.referrer,
    // 'Project_Timeline' : document.querySelector('#ac-timeline').value,
    Lead_Source_Detail: leadDetail,
    Business_Type: businessType,
    Lead_Status: 'Not Contacted',
    Job_Title: obj.jobTitle,
    Company: obj.company,
  };
};

const postToZOHO = async (payloadJSON) => {
  fetch('https://us-central1-zesty-prod.cloudfunctions.net/zoho', {
    method: 'POST',
    body: JSON.stringify(payloadJSON),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // acSENT = true;
    })
    .catch((error) => {
      throw new Error(`HTTP error: ${error}`);
    });
};

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
  message: yup.string().trim().required('Please specify your message'),
});

const validationSchemaForPpc = yup.object({
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
  message: yup.string().trim().required('Please specify your message'),
  company: yup.string().trim().required('Please specify your company'),
  jobTitle: yup.string().trim().required('Please specify your job title'),
});

function StandardFormWithSelect({
  selectedValue = 0,
  hideSelect = false,
  hideMessage = true,
  defaultMessage = '',
  leadDetail = 'Contact Us',
  leadSource = 'Website',
  businessType = 'Direct',
  modalTitle = 'Thank you',
  modalMessage = 'Have a great day.',
  displayMsgUnderButton = `We'll get back to you in 1-2 business days.`,
  additionalTextfield = {},
  buttonFullWidth = false,
  hidePrivacySection = false,
  messageLabel = 'Message',
  customButtonStyle = { display: 'flex', justifyContent: 'initial' },
}) {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  let inquiryReasons = [
    'General',
    'Agency Sign Up',
    'Request a Demo',
    'Support',
    'Billing',
    'Press Relations',
  ];
  const [selectValue, setSelectValue] = useState(inquiryReasons[selectedValue]);

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    company: '',
    jobTitle: '',
  };

  const onSubmit = async (values) => {
    let payload = getLeadObjectZOHO(
      values,
      selectValue,
      leadDetail,
      businessType,
      leadSource,
    );
    await postToZOHO(payload);
    setOpen(!open);
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: additionalTextfield.company
      ? validationSchemaForPpc
      : validationSchema,
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
              helperText={formik.touched.firstName && formik.errors.firstName}
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
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          {additionalTextfield.company && (
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Company"
                type="text"
                variant="outlined"
                color="primary"
                size="medium"
                name="company"
                fullWidth
                value={formik.values.company}
                onChange={formik.handleChange}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
              />
            </Grid>
          )}
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
          {additionalTextfield.jobTitle && (
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Job Title"
                type="test"
                variant="outlined"
                color="primary"
                size="medium"
                name="jobTitle"
                fullWidth
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                error={
                  formik.touched.jobTitle && Boolean(formik.errors.jobTitle)
                }
                helperText={formik.touched.jobTitle && formik.errors.jobTitle}
              />
            </Grid>
          )}
          {/* logic to hide the select */}
          {hideSelect && (
            <Grid display={hideSelect ? 'none' : 'block'} item xs={12}>
              <input value={selectValue} name="inquiryReason" type="hidden" />
            </Grid>
          )}
          {/* logic to hide the select */}
          {!hideSelect && (
            <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Inquiry Reason
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectValue}
                    label="Inquiry Reason"
                    onChange={handleChange}
                    name="inquiryReason"
                  >
                    {/* <MenuItem value=''><em>None</em></MenuItem> */}
                    {inquiryReasons.map((value, i) => (
                      <MenuItem key={i} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          )}
          <Grid item xs={12}>
            <StyledTextField
              label={messageLabel}
              multiline
              rows={6}
              variant="outlined"
              color="primary"
              size="medium"
              name="message"
              fullWidth
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth={buttonFullWidth}
              sx={{ height: 54, minWidth: 150 }}
              variant="contained"
              color="secondary"
              className="contactButton"
              size="medium"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography color="text.secondary">
              {displayMsgUnderButton}
            </Typography>
          </Grid>
          <Grid display={hidePrivacySection ? 'none' : 'block'} item xs={12}>
            <Divider />
          </Grid>
          <Grid display={hidePrivacySection ? 'none' : 'block'} item xs={12}>
            <Box style={customButtonStyle}>
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
        title={modalTitle}
        message={modalMessage}
        open={open}
        setOpen={setOpen}
      />
    </Box>
  );
}

export default StandardFormWithSelect;
