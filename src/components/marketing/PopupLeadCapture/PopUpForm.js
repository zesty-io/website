import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import * as Yup from 'yup';
import {
  getLeadObjectZOHO,
  postToZOHO,
  subscribeToZoho,
} from 'revamp/utils/helper';
import getLastVisitedPathAndUrl from 'revamp/utils/getLastVisitedPathAndUrl';
import PopUpThankYou from './PopUpThankYou';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required *'),
  lastName: Yup.string().required('Last Name is required * '),
  email: Yup.string().email('Invalid email').required('Email is required * '),
});

export default function PopUpForm({
  height,
  setDownloadClick,
  description,
  thankYouMessage,
  pdfLink,
}) {
  const theme = useTheme();

  const { lastVisitedPath, lastVisitedURL } = getLastVisitedPathAndUrl();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (values) => {
    let payload = getLeadObjectZOHO(
      values,
      values?.inquiryReason,
      'Mindshare Pop Up Form',
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

    setSuccess(true);

    return values;
  };
  return (
    <Box
      sx={{
        position: 'fixed',
        right: '0',
        bottom: '0',
        zIndex: 0,
        width: '100%',
        maxWidth: 290,
        height: '100%',
        height: height ? height : 0,
        background: theme.palette.zesty.zestyBlue,
        borderRadius: '20px 0 0 0px',
        transition: 'height 0.1s ease-in-out',
        display: 'flex',
      }}
    >
      <Box sx={{ p: 2 }}>
        {height ? (
          <CloseIcon
            onClick={() => setDownloadClick(false)}
            sx={{
              color: 'white',
              cursor: 'pointer',
              position: 'absolute',
              top: 10,
              right: 10,
              fontSize: 18,
            }}
          />
        ) : null}

        {!success ? (
          <>
            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  letterSpacing: 1,
                  lineHeight: '16px',
                  color: theme.palette.zesty.zestyWhite,
                  fontWeight: 'bold',
                }}
              >
                {description}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Box
                      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                      <Box>
                        <Field name="firstName">
                          {({ field }) => (
                            <TextField
                              {...field}
                              sx={{
                                width: '100%',
                                background: 'white',
                                borderRadius: 2,
                              }}
                              color="primary"
                              label="First Name"
                              variant="filled"
                              type="text"
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          style={{
                            fontSize: 10,
                            color: 'white',
                            textAlign: 'left',
                            marginTop: 2,
                          }}
                        />
                      </Box>
                      <Box>
                        <Field name="lastName">
                          {({ field }) => (
                            <TextField
                              {...field}
                              sx={{
                                width: '100%',
                                background: 'white',
                                borderRadius: 2,
                              }}
                              color="primary"
                              label="Last Name"
                              variant="filled"
                              type="text"
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          style={{
                            fontSize: 10,
                            color: 'white',
                            textAlign: 'left',
                            marginTop: 2,
                          }}
                          name="lastName"
                          component="div"
                        />
                      </Box>
                      <Box>
                        <Field name="email">
                          {({ field }) => (
                            <TextField
                              {...field}
                              sx={{
                                width: '100%',
                                background: 'white',
                                borderRadius: 2,
                              }}
                              color="primary"
                              label="Email"
                              variant="filled"
                              type="email"
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          style={{
                            fontSize: 10,
                            color: 'white',
                            textAlign: 'left',
                            marginTop: 2,
                          }}
                          name="email"
                          component="div"
                        />
                      </Box>
                      <Button
                        variant="contained"
                        sx={{ width: '100%' }}
                        color="secondary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Download Now
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </>
        ) : (
          <>
            {height ? (
              <PopUpThankYou
                pdfLink={pdfLink}
                thankYouMessage={thankYouMessage}
              />
            ) : null}
          </>
        )}
      </Box>
    </Box>
  );
}
