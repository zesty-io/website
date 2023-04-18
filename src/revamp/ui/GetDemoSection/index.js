import { FormControl, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { LoadingButton } from '@mui/lab';
import { FieldTypeText } from '@zesty-io/material';
import MuiPhoneNumber from 'material-ui-phone-number';

const acorns =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Acorns%20Logo.svg',
  bjs = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/BJ's%20Logo.svg`,
  rocketLeague = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Horizontal_Text.svg`,
  cornershop = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Logo_de_Cornershop%201.svg`,
  phoenixSuns = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Phoenix%20Suns.svg`,
  singlife = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Singlife%20Logo.svg`,
  sony = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Sony%20Logo.svg`,
  wattpad = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/Wattpad-logo-vector%201.svg`,
  pic1 = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/HeadlessCMS_HighPerformer_HighPerformer.png`,
  pic2 = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/HeadlessCMS_EasiestToDoBusinessWith_EaseOfDoingBusinessWith.png`,
  pic3 = `https://storage.googleapis.com/assets.zesty.io/website/images/assets/demo/WebContentManagement_MomentumLeader_Leader.png`;

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
  message: yup.string().label('Message').trim().required(),
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

const GetDemoSection = ({
  title = 'Get Demo',
  supportingText = `Want to see how Zesty can help you and your teams? Fill out the form to be contacted by our content management experts.

Please look forward to us scheduling a 15 minute call so that we may customize your demo.`,
  isLong = true,
}) => {
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
            gap: 14,
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
            <Stack flexWrap="wrap" direction="row" gap="20px">
              <img src={sony} width="91px" height="32px" />
              <img src={rocketLeague} width="53.94px" height="32px" />
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
          p={4}
          bgcolor="white"
          borderRadius="8px"
          sx={{
            height: '100%',
            alignSelf: { lg: !isLong && 'center' },
          }}
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
              console.log({ values });
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
                    <FormControl fullWidth>
                      <FieldTypeText
                        name="firstName"
                        value={initialValues.firstName}
                        error={touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        label="First Name"
                        {...getFieldProps('firstName')}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <Typography
                        color="text.primary"
                        variant="body2"
                        fontWeight={600}
                      >
                        Last Name
                      </Typography>

                      <FieldTypeText
                        name="lastName"
                        value={initialValues.lastName}
                        error={touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        {...getFieldProps('lastName')}
                      />
                    </FormControl>
                  </Stack>

                  <Stack spacing={3}>
                    {isLong && (
                      <FormControl fullWidth>
                        <Typography
                          color="text.primary"
                          variant="body2"
                          fontWeight={600}
                        >
                          Company
                        </Typography>

                        <FieldTypeText
                          name="company"
                          value={initialValues.company}
                          error={touched.company && !!errors.company}
                          helperText={touched.company && errors.company}
                          {...getFieldProps('company')}
                        />
                      </FormControl>
                    )}
                    <FormControl fullWidth>
                      <Typography
                        color="text.primary"
                        variant="body2"
                        fontWeight={600}
                      >
                        Email
                      </Typography>

                      <FieldTypeText
                        name="email"
                        value={initialValues.email}
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        {...getFieldProps('email')}
                      />
                    </FormControl>
                    {isLong && (
                      <>
                        <FormControl
                          fullWidth
                          sx={{
                            '& input': {
                              padding: '6px 8px',
                            },
                          }}
                        >
                          <Typography
                            color="text.primary"
                            variant="body2"
                            fontWeight={600}
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
                        <FormControl fullWidth>
                          <Typography
                            color="text.primary"
                            variant="body2"
                            fontWeight={600}
                          >
                            Please tell us about your project
                          </Typography>

                          <FieldTypeText
                            multiline
                            name="message"
                            rows={5}
                            value={initialValues.message}
                            error={touched.message && !!errors.message}
                            helperText={touched.message && errors.message}
                            {...getFieldProps('message')}
                          />
                        </FormControl>
                      </>
                    )}

                    <LoadingButton
                      type="submit"
                      variant="contained"
                      size="extraLarge"
                      fullWidth
                      loading={isSubmitting}
                    >
                      Schedule Demo
                    </LoadingButton>
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
