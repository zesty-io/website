/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
  password: yup
    .string()
    .required('Please specify your password')
    .min(8, 'The password should have at minimum length of 8'),
});

// zoho lead object
const getLeadObjectZOHO = (obj, roles) => {
  let acLeadtype = 'Marketing Website';
  let acRole = 'Marketer';
  return {
    First_Name: obj.firstName,
    Last_Name: obj.lastName,
    Email: obj.email,
    Inquiry_Reason: select,
    Message: obj.message,
    // "Country": country.options[country.selectedIndex].getAttribute('data-countryCode'),
    // "Phone": '+'+country.value + ' ' + document.querySelector('#ac-phone input').value,
    // "Current_CMS": acCMS,
    // "How_Using_Zesty_io": acHow,
    // "Website": document.querySelector('#ac-url').value,
    Lead_Source: 'Website',
    // "Description": document.querySelector('#ac-description').value,
    Role: roles,
    // 'Project_Timeline' : document.querySelector('#ac-timeline').value,
    Lead_Source_Detail: 'Demo Sign Up',
    Business_Type: 'Direct',
    Lead_Status: 'Not Contacted',
  };
};

const Form = ({
  eyebrow = 'Missing Text',
  title = 'Missing Text',
  subtitle = 'Missing Text',
  ctaButtonText = 'Missing Text',
}) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    website: '',
  };
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { marketers, developers, managers } = state;
  const error = [marketers, developers, managers].filter((v) => v).length !== 2;
  const onSubmit = (values) => {
    console.log(values);
    console.log([marketers, developers, managers]);

    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your first name
            </Typography>
            <TextField
              label="First name *"
              variant="outlined"
              name={'firstName'}
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
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your last name
            </Typography>
            <TextField
              label="Last name *"
              variant="outlined"
              name={'lastName'}
              fullWidth
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your email
            </Typography>
            <TextField
              label="Email *"
              variant="outlined"
              name={'email'}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Company Website
            </Typography>
            <TextField
              label="yourwebsite.com *"
              variant="outlined"
              name={'website'}
              fullWidth
              value={formik.values.website}
              onChange={formik.handleChange}
              error={formik.touched.website && Boolean(formik.errors.website)}
              helperText={formik.touched.website && formik.errors.website}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">
                Who are we Demoing to? (Select all that apply)
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={marketers}
                      onChange={handleChange}
                      name="marketers"
                    />
                  }
                  label="Marketers"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={developers}
                      onChange={handleChange}
                      name="developers"
                    />
                  }
                  label="Developers"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={managers}
                      onChange={handleChange}
                      name="managers"
                    />
                  }
                  label="Managers"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              maxWidth={600}
              margin={'0 auto'}
            >
              {/* <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={'subtitle2'}>
                  Rather try it now?{' '}
                  <TryFreeButton
                    component={'a'}
                    variant={'a'}
                    color={'primary'}
                    underline={'none'}
                  >
                    Try Now
                  </TryFreeButton>
                </Typography>
              </Box> */}
              <Button
                size={'large'}
                variant={'contained'}
                type={'submit'}
                color="secondary"
              >
                {ctaButtonText}
              </Button>
            </Box>
          </Grid>
          {/* <Grid
            item
            container
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Typography
              variant={'subtitle2'}
              color={'text.secondary'}
              align={'center'}
            >
              By clicking "Sign up" button you agree with our{' '}
              <Link
                component={'a'}
                color={'primary'}
                href={'/company-terms'}
                underline={'none'}
              >
                company terms and conditions.
              </Link>
            </Typography>
          </Grid> */}
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
