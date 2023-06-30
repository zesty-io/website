import { Button, FormControl, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';
import CustomTextField from 'revamp/components/CustomTextField';
import {
  getLeadObjectZOHO,
  postToZOHO,
  subscribeToZoho,
} from 'revamp/utils/helper';
import {
  shortValidationSchema,
  validationSchema,
  contactPageValidation,
} from 'revamp/utils/validation';

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

const GetDemoSection = ({
  title = 'Connect with Content Experts',
  supportingText = `Want to see how Zesty can help you and your teams? Fill out the form to be contacted by our content management experts.

Please look forward to us scheduling a 15 minute call so that we may customize your demo.`,
  isLong = true,
  redirect = '/meet',
  isContact = false,
}) => {
  let inquiryReasons = [
    'General',
    'Agency Sign Up',
    'Request a Demo',
    'Support',
    'Billing',
    'Press Relations',
  ];

  const onSubmit = async (values) => {
    // download link
    // downloadLink && window.open(downloadLink, '_blank');
    // capterraTracking && capterraTracking();

    let payload = getLeadObjectZOHO(
      values,
      values?.inquiryReason,
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
    window.location = redirect;
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
              inquiryReason: isContact ? 'General' : '',
            }}
            validationSchema={
              isLong && !isContact
                ? validationSchema
                : isContact
                ? contactPageValidation
                : shortValidationSchema
            }
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
                    {isLong && !isContact && (
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
                            Phone (optional)
                          </Typography>

                          <MuiPhoneNumber
                            disableAreaCodes
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

                        {isContact && (
                          <CustomTextField
                            label="Inquiry Reason"
                            isSelect={true}
                            name="inquiryReason"
                            menus={inquiryReasons}
                            value={initialValues.inquiryReason}
                            {...getFieldProps('inquiryReason')}
                          />
                        )}

                        <CustomTextField
                          label="Please tell us about your project (optional)"
                          multiline
                          name="message"
                          rows={2}
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
