import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import * as yup from 'yup';
import { Headline } from './components';
import {
  Button,
  Card,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import FillerContent from 'components/FillerContent';
import { useFormik } from 'formik';

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
  company: yup.string().trim().required('Please specify your company'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  jobTitle: yup.string().trim().required('Please specify your job title'),
  message: yup.string().trim().required('Please specify your message'),
});

const FormCustom = ({ title }) => {
  const theme = useTheme();

  const initialValues = {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    jobTitle: '',
    message: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });
  return (
    <Box padding={{ xs: 3, sm: 6 }} width={1} component={Card} boxShadow={1}>
      <Typography
        variant={'p'}
        component={'h2'}
        textAlign={'center'}
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: '1.7rem',
          color: theme.palette.common.black,
        }}
      >
        {title || FillerContent.header}
      </Typography>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <Box display="flex" flexDirection={'column'} paddingTop={2}>
          <Box display={'flex'} gap={4} marginBottom={4}>
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
          </Box>
          <Box marginBottom={4}>
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
          </Box>
          <Box marginBottom={4}>
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
          </Box>
          <Box marginBottom={4}>
            <TextField
              sx={{ height: 54 }}
              label="Job Title"
              type="text"
              variant="outlined"
              color="primary"
              size="medium"
              name="jobTitle"
              fullWidth
              value={formik.values.jobTitle}
              onChange={formik.handleChange}
              error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
              helperText={formik.touched.jobTitle && formik.errors.jobTitle}
            />
          </Box>
          <Box marginBottom={4}>
            <TextField
              label="Is there anything you would like to cover in the demo?"
              type="text"
              variant="outlined"
              color="primary"
              size="medium"
              name="message"
              fullWidth
              multiline
              rows={5}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Box>
          <Box>
            <Button
              sx={{ height: 54 }}
              variant="contained"
              color="secondary"
              size="medium"
              fullWidth
              type="submit"
            >
              Request Now
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

const Hero = ({
  headelineTitle,
  description,
  imageCollection,
  backgroundImage,
  form_title,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const images = imageCollection?.map(
    (e) => e.customer_logo?.data && e.customer_logo?.data[0]?.url,
  );

  // old hero bg
  // https://assets.maccarianagency.com/backgrounds/img19.jpg

  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background: `url(${
          backgroundImage || FillerContent.image
        }) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 74%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Grid
          flexDirection={isMobile ? 'column-reverse' : 'initial'}
          paddingY={6}
          container
          spacing={4}
        >
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <Headline
                title={headelineTitle}
                description={description}
                images={images}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <FormCustom title={form_title} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
