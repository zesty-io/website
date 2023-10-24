import { Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import MuiMarkdown from 'markdown-to-jsx';
import {
  shortValidationSchema,
  validationSchema,
  contactPageValidation,
} from 'revamp/utils/validation';

import { SingleFieldForm } from './SingleFieldForm';
import {
  getLeadObjectZOHO,
  postToZOHO,
  subscribeToZoho,
} from 'revamp/utils/helper';
import { MultiFieldForm } from './MultiFieldForm';
import getLastVisitedPathAndUrl from 'revamp/utils/getLastVisitedPathAndUrl';
import { generateAlt } from 'utils';

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
  supportingText = `<p>Book a free 15-minute consultation with a content expert.  Discuss your application, pain points and requirements.  Understand how Zesty's lower total cost of ownership, features, functionality can elevate your business by creating extraordinary digital experiences.</p>`,
  isLong = true,
  redirect = '/meet',
  isContact = false,
  formTitle = 'Start by Entering your Email',
  formCtaText = 'Submit',
}) => {
  const { lastVisitedPath, lastVisitedURL } = getLastVisitedPathAndUrl();
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

    if (values.firstName === '') {
      values.firstName = 'Unknown';
    }
    if (values.lastName === '') {
      values.lastName = 'N/A in Zoominfo';
    }
    let payload = getLeadObjectZOHO(
      values,
      values?.inquiryReason,
      'Demo Sign Up',
      '',
      'Website', // leadsource
      lastVisitedPath,
      lastVisitedURL,
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
            >
              {title}
            </Typography>

            <MuiMarkdown
              options={{
                overrides: {
                  p: {
                    component: Typography,
                    props: {
                      mt: 2,
                      component: 'p',
                      variant: 'h6',
                      whiteSpace: 'pre-line',
                      color: 'grey.300',
                      fontSize: '18px',
                      lineHeight: '28px',
                    },
                  },
                },
              }}
            >
              {supportingText}
            </MuiMarkdown>
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
              <img
                loading="lazy"
                src={sony}
                width="91px"
                height="32px"
                alt={generateAlt('Sony')}
              />
              <img
                loading="lazy"
                src={rocketLeague}
                width="60px"
                height="32px"
                alt={generateAlt('Rocket League')}
              />
              <img
                loading="lazy"
                src={singlife}
                width="102.12px"
                height="32px"
                alt={generateAlt('Singlife')}
              />
              <img
                loading="lazy"
                src={acorns}
                width="94px"
                height="32px"
                alt={generateAlt('Acorns')}
              />
              <img
                loading="lazy"
                src={phoenixSuns}
                width="107.54px"
                height="32px"
                alt={generateAlt('Phoenix Suns')}
              />
              <img
                loading="lazy"
                src={wattpad}
                width="115.91px"
                height="32px"
                alt={generateAlt('Wattpad')}
              />
              <img
                loading="lazy"
                src={cornershop}
                width="96.69px"
                height="32px"
                alt={generateAlt('Corner Shop')}
              />
              <img
                loading="lazy"
                src={bjs}
                width="36.48px"
                height="32px"
                alt={generateAlt('Bjs')}
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack>
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
                jobTitle: '',
                businessEmail: '',
                linkedIn: '',
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
                <Form id="site-form" onSubmit={handleSubmit}>
                  <Stack>
                    <Typography
                      component={'p'}
                      variant="h4"
                      letterSpacing="-0.02em"
                      color="text.primary"
                      fontWeight={800}
                      mb={3}
                    >
                      {formTitle}
                    </Typography>

                    {/* Save this component as backup */}

                    {isContact ? (
                      <MultiFieldForm
                        {...{
                          isLong,
                          isContact,
                          handleSubmit,
                          getFieldProps,
                          errors,
                          touched,
                          initialValues,
                          isSubmitting,
                          setFieldValue,
                          values,
                          inquiryReasons,
                        }}
                      />
                    ) : (
                      <SingleFieldForm
                        formButtonText={formCtaText}
                        {...{
                          isLong,
                          isContact,
                          handleSubmit,
                          getFieldProps,
                          errors,
                          touched,
                          initialValues,
                          isSubmitting,
                          setFieldValue,
                          values,
                          inquiryReasons,
                        }}
                      />
                    )}
                  </Stack>
                </Form>
              )}
            </Formik>
          </Stack>

          <Stack sx={{ mt: 8 }}>
            <Typography
              color="primary"
              variant="body2"
              mb="12px"
              textTransform="uppercase"
            >
              G2 MOMENTUM LEADER
            </Typography>
            <Stack flexWrap="wrap" direction="row" gap="20px">
              <img
                alt={generateAlt('')}
                loading="lazy"
                src={pic1}
                width="92.2px"
                height="120px"
              />
              <img
                alt={generateAlt('')}
                loading="lazy"
                src={pic2}
                width="92.2px"
                height="120px"
              />
              <img
                alt={generateAlt('')}
                loading="lazy"
                src={pic3}
                width="92.2px"
                height="120px"
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GetDemoSection;
