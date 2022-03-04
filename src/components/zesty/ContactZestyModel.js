/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Contact 
 * Name: contact 
 * Model ZUID: 6-e2bbe081f2-8lr9x8
 * File Created On: Fri Mar 04 2022 14:20:19 GMT+0100 (Central European Standard Time)
 * 
 * Model Fields:
 * 
  * title (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-e2bbe081f2-8lr9x8
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
/* imports for form component*/
import { useFormik } from 'formik';
import * as yup from 'yup';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

/* mock content for contact component */
const mock = [
    {
      label: 'Phone',
      value: '+39 659-657-0133',
      icon: (
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'hi@maccarianagency.com',
      icon: (
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
    },
    {
      label: 'Address',
      value: 'Via Venini 33, 20147',
      icon: (
        <svg
          width={20}
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  /* validation for form component */

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
  
  
function ContactZestyModel({content}) {
    const theme = useTheme();
    /* Begin Leftside Component */
    const LeftSide = () => {
        const initialValues = {
          firstName: '',
          lastName: '',
          email: '',
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
          <Box>
            <Box marginBottom={4}>
              <Typography variant={'h3'} sx={{ fontWeight: 700 }} gutterBottom>
                Contact us
              </Typography>
              <Typography color="text.secondary">
                Rather than worrying about switching offices every couple years, you
                can instead stay in the same location and grow-up from your shared
                coworking space to an office that takes up an entire floor.
              </Typography>
            </Box>
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
                      color="primary"
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
                          href=""
                          color={theme.palette.text.primary}
                          fontWeight={'700'}
                        >
                          Privacy Policy
                        </Box>
                        ,{' '}
                        <Box
                          component="a"
                          href=""
                          color={theme.palette.text.primary}
                          fontWeight={'700'}
                        >
                          Data Policy
                        </Box>{' '}
                        and{' '}
                        <Box
                          component="a"
                          href=""
                          color={theme.palette.text.primary}
                          fontWeight={'700'}
                        >
                          Cookie Policy
                        </Box>
                        .
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        );
      };
    /* End Leftside Component*/
    /* Begin Rightside Component */
    const RightSide = () => {
        return (
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Milan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{
              minHeight: 300,
              filter:
                theme.palette.mode === 'dark'
                  ? 'grayscale(0.5) opacity(0.7)'
                  : 'none',
            }}
          />
        );
      };
    /* End Rightside Component */

    return (
        <>
        <Container>
        {/*Begin Form Component*/}
        <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            width={1}
            order={{ xs: 2, md: 1 }}
          >
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              minHeight: { xs: 300, md: 600 },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
        {/*End Form Component*/}
        </Container>
      <Box position={'relative'} bgcolor={'alternate.main'}>
        <Container>
            {/*Begin Contact Component*/}
            <Box>
            <Box marginBottom={2}>
                <Typography
                variant={'h4'}
                sx={{ fontWeight: 700 }}
                gutterBottom
                align={'center'}
                >
                Contact details
                </Typography>
                <Typography color="text.secondary" align={'center'}>
                Keep track of what's happening with your data, change permissions, and
                run reports against your data anywhere in the world. Keep track of
                what's happening with your data, change permissions.
                </Typography>
            </Box>
            <Box
                display={'flex'}
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent={'space-between'}
                marginBottom={4}
            >
                {mock.map((item, i) => (
                <Box
                    key={i}
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
                        width={40}
                        height={40}
                    >
                        {item.icon}
                    </Box>
                    </Box>
                    <ListItemText primary={item.label} secondary={item.value} />
                </Box>
                ))}
            </Box>
            </Box>
            {/*End Contact Component*/}
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>


            {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
            {/*
            <div style={{background: '#eee', border: '1px #000 solid', margin: '10px', padding: '20px'}}>
                <h2>Accessible Zesty.io JSON Object</h2>
                <pre>{JSON.stringify(content, null, 2)}</pre>
            </div>
            {/* End of Zesty.io output example */}
            
        </>
    );
}
  
export default ContactZestyModel;
