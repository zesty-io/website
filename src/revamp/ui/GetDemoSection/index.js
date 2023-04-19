import {
  Button,
  FormControl,
  Stack,
  Typography,
  TextField,
} from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';
import { getCookie } from 'cookies-next';

const acorns =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Acorns%20Logo.svg',
  bjs = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/BJ's%20Logo.svg`,
  rocketLeague = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Horizontal_Text.svg`,
  cornershop = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Logo_de_Cornershop%201.svg`,
  phoenixSuns = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Phoenix%20Suns.svg`,
  singlife = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Singlife%20Logo.svg`,
  sony = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Sony%20Logo.svg`,
  wattpad = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Wattpad-logo-vector%201.svg`,
  pic1 = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/HeadlessCMS_HighPerformer_HighPerformer.svg`,
  pic2 = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/HeadlessCMS_EasiestToDoBusinessWith_EaseOfDoingBusinessWith.svg`,
  pic3 = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/WebContentManagement_MomentumLeader_Leader.svg`;

const phoneRegExp = '^([^0-9]*[0-9]){5}.*$';

const validationSchema = yup.object({
  firstName: yup.string().label('First Name').trim().required(),
  lastName: yup.string().label('Last Name').trim().required(),
  company: yup
    .string()
    .label('Company')
    .trim()
    .required('Please specify your message'),
  email: yup
    .string()
    .label('Email')
    .trim()
    .email('Please enter a valid email address')
    .required(),
  phoneNumber: yup
    .string()
    .label('Phone')
    .trim()
    .matches(phoneRegExp, 'You must enter at least 5 digits.')
    .required(),
});

const shortValidationSchema = yup.object({
  firstName: yup.string().label('First Name').trim().required(),
  lastName: yup.string().label('Last Name').trim().required(),
  email: yup
    .string()
    .label('Email')
    .trim()
    .email('Please enter a valid email address')
    .required(),
});

const CustomTextField = ({ label, ...props }) => {
  return (
    <FormControl
      fullWidth
      sx={{
        '& .MuiInputBase-root': {
          border: '1px solid #F2F4F7',
          borderRadius: '8px',
        },
        '& input': {
          padding: '6px 8px',
        },
        '& .MuiFormHelperText-root.Mui-error': {
          mx: 0,
        },
      }}
    >
      <Typography
        color="text.primary"
        variant="body2"
        fontWeight={600}
        mb="4px"
      >
        {label}
      </Typography>
      <TextField {...props} />
    </FormControl>
  );
};

const GetDemoSection = ({
  title = 'Get Demo',
  supportingText = `Want to see how Zesty can help you and your teams? Fill out the form to be contacted by our content management experts.

Please look forward to us scheduling a 15 minute call so that we may customize your demo.`,
  isLong = true,
  cmsModel,
  downloadLink = '',
  capterraTracking = null,
}) => {
  const getLeadObjectZOHO = (
    obj,
    select = '',
    leadDetail = '',
    businessType = '',
    leadSource = 'Website',
  ) => {
    // let acLeadtype = 'Marketing Website';
    let acRole = 'Marketer';
    // possible values
    // "Phone": '+'+country.value + ' ' + document.querySelector('#ac-phone input').value,
    // "Current_CMS": acCMS,
    // "How_Using_Zesty_io": acHow,
    // "Website": document.querySelector('#ac-url').value,
    // 'Project_Timeline' : document.querySelector('#ac-timeline').value,
    // zoho and google click id https://help.zoho.com/portal/en/kb/crm/integrations/google/google-ads/articles/configure-google-ads-crm-integration#Step_2_Add_hidden_element_in_your_web_forms
    return {
      First_Name: obj.firstName,
      Last_Name: obj.lastName,
      Email: obj.email,
      Phone: obj.phoneNumber,
      Inquiry_Reason: select,
      Description: obj.message,
      Zesty_User_Account: obj?.user && obj.user ? true : false,
      newsletter_signup: obj.newsletter_signup,
      Lead_Source: getCookie('utm_source')
        ? getCookie('utm_source')
        : leadSource,
      Role: getCookie('persona') ? getCookie('persona') : acRole,
      Captured_URL:
        window.location.href.match(/localhost/gi) == null
          ? window.location.href
          : 'https://www.testcapurl.com',
      UTM_Campaign: getCookie('utm_campaign')
        ? getCookie('utm_campaign')
        : 'unknown',
      UTM_Source: getCookie('utm_source') ? getCookie('utm_source') : 'unknown',
      UTM_Term: getCookie('utm_term') ? getCookie('utm_term') : 'unknown',
      UTM_Medium: getCookie('utm_medium') ? getCookie('utm_medium') : 'unknown',
      $gclid: getCookie('gclid') ? getCookie('gclid') : '',
      Lead_Source_Detail: getCookie('utm_medium')
        ? getCookie('utm_medium')
        : leadDetail,
      Lead_Source_Topic: getCookie('utm_campaign')
        ? getCookie('utm_campaign')
        : 'none',
      Business_Type: businessType,
      Lead_Status: 'Not Contacted',
      Designation: obj.jobTitle,
      Company: obj.company,
    };
  };

  const subscribeToZoho = async (payload) => {
    const { Email, First_Name, Last_Name } = payload;
    await fetch(
      `https://us-central1-zesty-dev.cloudfunctions.net/zohoEmailSubscribe?email=${Email}&name=${First_Name}_${Last_Name}`,
      {
        method: 'GET',
      },
    )
      .then((res) => res.json())
      .then(() => {
        dataLayer.push({ event: 'emailSubscribeSubmitted', value: '1' });
        // acSENT = true;
      });
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
      .then(() => {
        // google data
        dataLayer.push({ event: 'formCaptureSuccess', value: '1' });
      })
      .catch((error) => {
        throw new Error(`HTTP error: ${error}`);
      });
  };

  const onSubmit = async (values) => {
    // download link
    downloadLink && window.open(downloadLink, '_blank');
    capterraTracking && capterraTracking();

    let payload = getLeadObjectZOHO(
      values,
      // selectValue,
      // leadDetail,
      // businessType,
      // leadSource,
    );
    // post to leads section
    await postToZOHO(payload);

    //post to email marketing signup
    if (payload.newsletter_signup) {
      await subscribeToZoho(payload);
    }

    // cmsModel === 'Gated Content Page'
    //   ? setOpen(true)
    //   : (window.location = '/ppc/thank-you/');
    window.location = '/meet';
    return values;
  };

  return (
    <Stack bgcolor="grey.900">
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            maxWidth: theme.maxWidth,
            mx: 'auto',
            py: 4,
            px: 2,
          },
          [theme.breakpoints.up('tablet')]: {
            py: 6,
            px: 4,
          },
          [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            py: 10,
            px: 14,
            gap: 8,
          },
          [theme.breakpoints.up('desktopWide')]: {
            gap: 15,
          },
        })}
      >
        <Stack
          spacing={8}
          mb={{ xs: 8, lg: 0 }}
          width={{ lg: '456px', desktopWide: '548px' }}
          justifyContent={{ lg: 'center' }}
        >
          <Stack>
            <Typography
              variant="h1"
              fontWeight={800}
              letterSpacing="-0.02em"
              color="white"
              mb="12px"
            >
              {title}
            </Typography>
            <Typography
              whiteSpace="pre-line"
              color="grey.300"
              fontSize="18px"
              lineHeight="28px"
            >
              {supportingText}
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant="body2"
              color="primary"
              mb="12px"
              textTransform="uppercase"
            >
              Trusted By
            </Typography>
            <Stack
              flexWrap="wrap"
              direction="row"
              gap={{ xs: '20px', desktopWide: '30px' }}
            >
              <img src={sony} width="91px" height="32px" />
              <img src={rocketLeague} width="60px" height="32px" />
              <img src={singlife} width="102.12px" height="32px" />
              <img src={acorns} width="94px" height="32px" />
              <img src={phoenixSuns} width="107.54px" height="32px" />
              <img src={wattpad} width="115.91px" height="32px" />
              <img src={cornershop} width="96.69px" height="32px" />
              <img src={bjs} width="36.48px" height="32px" />
            </Stack>
          </Stack>
          <Stack>
            <Typography
              color="primary"
              variant="body2"
              mb="12px"
              textTransform="uppercase"
            >
              G2 MOMENTUM LEADER
            </Typography>
            <Stack flexWrap="wrap" direction="row" gap="20px">
              <img src={pic1} width="92.2px" height="120px" />
              <img src={pic2} width="92.2px" height="120px" />
              <img src={pic3} width="92.2px" height="120px" />
            </Stack>
          </Stack>
        </Stack>

        <Stack
          borderRadius="8px"
          sx={(theme) => ({
            height: '100%',
            alignSelf: { lg: !isLong && 'center' },
            p: 4,
            bgcolor: theme.palette.mode === 'light' ? 'white' : 'grey.800',
            width: { xs: '100%', lg: '456px', desktopWide: '548px' },
          })}
        >
          <Formik
            enableReinitialize
            initialValues={{
              firstName: '',
              lastName: '',
              company: '',
              email: '',
              phoneNumber: '',
              message: '',
            }}
            validationSchema={isLong ? validationSchema : shortValidationSchema}
            onSubmit={async (values) => {
              await onSubmit(values);
            }}
          >
            {({
              handleSubmit,
              getFieldProps,
              errors,
              touched,
              initialValues,
              isSubmitting,
              setFieldValue,
              values,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Stack>
                  <Typography
                    variant="h4"
                    letterSpacing="-0.02em"
                    color="text.primary"
                    fontWeight={800}
                    mb={3}
                  >
                    Contact us for a Custom Demo
                  </Typography>

                  <Stack spacing={2} direction="row" mb={3}>
                    <CustomTextField
                      label="First Name"
                      name="firstName"
                      value={initialValues.firstName}
                      error={touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                      {...getFieldProps('firstName')}
                    />

                    <CustomTextField
                      label="Last Name"
                      name="lastName"
                      value={initialValues.lastName}
                      error={touched.lastName && !!errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                      {...getFieldProps('lastName')}
                    />
                  </Stack>

                  <Stack spacing={3}>
                    {isLong && (
                      <CustomTextField
                        label="Company"
                        name="company"
                        value={initialValues.company}
                        error={touched.company && !!errors.company}
                        helperText={touched.company && errors.company}
                        {...getFieldProps('company')}
                      />
                    )}

                    <CustomTextField
                      label="Email"
                      name="email"
                      value={initialValues.email}
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      {...getFieldProps('email')}
                    />
                    {isLong && (
                      <>
                        <FormControl
                          fullWidth
                          sx={{
                            '& .MuiInputBase-root': {
                              border: '1px solid #F2F4F7',
                              borderRadius: '8px',
                            },
                            '& input': {
                              padding: '6px 8px',
                            },
                            '& .MuiFormHelperText-root.Mui-error': {
                              mx: 0,
                            },
                          }}
                        >
                          <Typography
                            color="text.primary"
                            variant="body2"
                            fontWeight={600}
                            mb="4px"
                          >
                            Phone
                          </Typography>

                          <MuiPhoneNumber
                            variant="outlined"
                            defaultCountry="us"
                            onChange={(e) => setFieldValue('phoneNumber', e)}
                            name="phoneNumber"
                            value={initialValues.phoneNumber}
                            error={touched.phoneNumber && !!errors.phoneNumber}
                            helperText={
                              touched.phoneNumber && errors.phoneNumber
                            }
                          />
                        </FormControl>

                        <CustomTextField
                          label="Please tell us about your project"
                          multiline
                          name="message"
                          rows={4}
                          value={initialValues.message}
                          {...getFieldProps('message')}
                        />
                      </>
                    )}

                    <Button
                      type="submit"
                      variant="contained"
                      size="extraLarge"
                      fullWidth
                    >
                      Schedule Demo
                    </Button>
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GetDemoSection;
