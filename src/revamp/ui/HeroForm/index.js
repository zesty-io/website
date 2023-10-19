import { Button, Divider, Stack, Typography, useTheme } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import React from 'react';
import CustomTextField from 'revamp/components/CustomTextField';
import {
  getLeadObjectZOHO,
  postToZOHO,
  subscribeToZoho,
} from 'revamp/utils/helper';
import { Form, Formik } from 'formik';
import { shortValidationSchema } from 'revamp/utils/validation';

const listItems = [
  'Enterprise grade security, out of the box',
  'Hosting, backups, system updates, and more all done for you',
  'Scalable to serve 1B+ requests per month at 99.999% uptime SLA',
  'Easy contract, pricing, and migration process',
];

const logo =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/rocketLeagueHero.svg',
  logoDark =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/rocketLeague.svg';

const HeroForm = ({
  heading = 'The Headless CMS Chosen by Gaming Enterprises',
  overline = 'Secure. Scalable. Cost effective.',
  supportingText = 'Zesty is the headless CMS that financial companies trust. From banks to crypto, we serve FinTech across the globe. Take advantage of features like:',
  lists = listItems,
  supportingText2 = '“Media insights show us what assets are being requested the most and help inform what content we need to focus on and invest in improving”',
}) => {
  const theme = useTheme();

  const onSubmit = async (values) => {
    let payload = getLeadObjectZOHO(values);
    // post to leads section
    await postToZOHO(payload);

    //post to email marketing signup
    if (payload.newsletter_signup) {
      await subscribeToZoho(payload);
    }

    window.location = '/meet';
    return values;
  };
  return (
    <Stack>
      <Stack
        spacing={{ xs: 4, lg: 10 }}
        direction={{ xs: 'column', lg: 'row' }}
        sx={(theme) => ({
          [theme.breakpoints.up('xs')]: {
            py: 4,
            px: 2,
            maxWidth: theme.maxWidth,
            mx: 'auto',
          },
          [theme.breakpoints.up('tablet')]: {
            py: 6,
            px: 4,
            gap: 10,
          },
          [theme.breakpoints.up('lg')]: {
            py: 10,
            px: 14,
          },
        })}
      >
        <Stack
          spacing={4}
          width={{ xs: '100%', lg: '448px', desktopWide: '568px' }}
        >
          <Stack spacing="12px">
            <Typography
              variant="h1"
              fontWeight={800}
              color="text.primary"
              letterSpacing="-0.02em"
              sx={(theme) => ({
                [theme.breakpoints.up('tablet')]: {
                  fontSize: '44px',
                  lineHeight: '48px',
                },
              })}
            >
              {heading}
            </Typography>
            <Typography variant="body2" color="primary" fontWeight={600}>
              {overline}
            </Typography>
            <Typography
              fontSize="18px"
              lineHeight="28px"
              color="text.secondary"
            >
              {supportingText}
            </Typography>
            <Stack rowGap="16px" mb={{ xs: 3, lg: 4 }}>
              {lists.map((list) => (
                <Stack direction="row" columnGap="12px" key={list}>
                  <CheckRoundedIcon color="primary" />
                  <Typography
                    fontSize="18px"
                    lineHeight="28px"
                    color="text.secondary"
                  >
                    {list}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={2}>
            <Typography
              fontSize="18px"
              lineHeight="28px"
              color="text.secondary"
            >
              {supportingText2}
            </Typography>
            <img
              src={theme.palette.mode === 'light' ? logo : logoDark}
              width="110.44px"
              height="40px"
            />
          </Stack>
        </Stack>

        <Stack
          sx={(theme) => ({
            bgcolor: theme.palette.mode === 'light' ? 'grey.50' : 'grey.800',
          })}
          p={4}
          borderRadius={2}
          width={{ xs: '100%', lg: '448px', desktopWide: '568px' }}
          alignSelf={{ xs: 'stretch', lg: 'center' }}
        >
          <Formik
            enableReinitialize
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              message: '',
            }}
            validationSchema={shortValidationSchema}
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
            }) => (
              <Form onSubmit={handleSubmit}>
                <Stack>
                  <Typography
                    variant="h4"
                    mb={3}
                    fontWeight={800}
                    letterSpacing="-0.02em"
                    color="text.primary"
                  >
                    Speak with a solutions engineer to learn more
                  </Typography>
                  <Stack spacing={3}>
                    <Stack
                      direction={{ xs: 'column', tablet: 'row' }}
                      spacing={2}
                    >
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

                    <CustomTextField
                      label="Email"
                      name="email"
                      value={initialValues.email}
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      {...getFieldProps('email')}
                    />
                    <CustomTextField
                      label="Message"
                      multiline
                      name="message"
                      rows={4}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="extraLarge"
                      fullWidth
                    >
                      Free Consultation
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

export default HeroForm;
