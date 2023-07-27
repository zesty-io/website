import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomTextField from 'revamp/components/CustomTextField';

export const SingleFieldForm = ({
  buttonColor,
  getFieldProps,
  errors,
  touched,
  initialValues,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window === 'object') {
      if (!window._zi_fc) {
        window._zi_fc = {};
      }

      window._zi_fc.onRequestSent = (data) => {
        if (data) setIsLoading(true);
      };
      window._zi_fc.onMatch = (data) => {
        /**
         * Abanddon form logic can be added here...
         * But also  this feature can be enabled in the zoominfo dashboard no setup required
         */
        if (data) setIsLoading(false);
      };
    }
  }, []);
  return (
    <>
      <Stack spacing={2} direction="row" mb={3}>
        {/* Note! Input type hidden doesn't seem to work with zoomInfo
         * This sets the field to have width:0 and height:0 and is positioned absolute to be hidden
         */}
        <input
          style={{
            width: 0,
            height: 0,
            border: 'none',
            position: 'absolute',
            top: 0,
          }}
          name="firstName"
          {...getFieldProps('firstName')}
        />
        <input
          style={{
            width: 0,
            height: 0,
            border: 'none',
            position: 'absolute',
            top: 0,
          }}
          name="lastName"
          {...getFieldProps('lastName')}
        />

        <input
          style={{
            width: 0,
            height: 0,
            border: 'none',
            position: 'absolute',
            top: 0,
          }}
          name="phoneNumber"
          {...getFieldProps('phoneNumber')}
        />
        <input
          style={{
            width: 0,
            height: 0,
            border: 'none',
            position: 'absolute',
            top: 0,
          }}
          name="company"
          {...getFieldProps('company')}
        />
        <input
          style={{
            width: 0,
            height: 0,
            border: 'none',
            position: 'absolute',
            top: 0,
          }}
          name="jobTitle"
          {...getFieldProps('jobTitle')}
        />
        <input
          style={{
            width: 0,
            height: 0,
            border: 'none',
            position: 'absolute',
            top: 0,
          }}
          name="linkedIn"
          {...getFieldProps('linkedIn')}
        />
      </Stack>
      <Stack flexDirection={'row'} gap={2} sx={{ mt: -4 }}>
        <CustomTextField
          placeholder="Business Email"
          name="businessEmail"
          value={initialValues.businessEmail}
          error={touched.businessEmail && !!errors.businessEmail}
          helperText={touched.businessEmail && errors.businessEmail}
          {...getFieldProps('businessEmail')}
        />

        <Button
          size={'large'}
          color={buttonColor}
          disabled={isLoading}
          type="submit"
          variant="contained"
          sx={{ width: 200, height: 50 }}
        >
          {isLoading ? (
            <CircularProgress color="primary" size={26} />
          ) : (
            'Book Demo'
          )}
        </Button>
      </Stack>
      <Typography mt={1} variant="caption" color="#BEBBBB">
        By submitting your email you agree to our{' '}
        <Typography
          href="/legal/end-user-license-agreement/"
          component="a"
          variant="caption"
          sx={{
            color: '#bebbbb',
            textDecoration: 'underlined',
            ':visited': {
              color: '#BEBBBB',
            },
          }}
        >
          terms and conditions
        </Typography>
      </Typography>
    </>
  );
};
