import { Button, FormControl, Stack, Typography } from '@mui/material';
import React from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';
import CustomTextField from 'revamp/components/CustomTextField';

export const MultiFieldForm = ({
  getFieldProps,
  errors,
  touched,
  initialValues,
  setFieldValue,
  isLong,
  isContact,
  inquiryReasons,
}) => {
  return (
    <>
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
                helperText={touched.phoneNumber && errors.phoneNumber}
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

        {/* Hidden fields */}
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

        <Button type="submit" variant="contained" size="extraLarge" fullWidth>
          Schedule Demo
        </Button>
      </Stack>
    </>
  );
};
