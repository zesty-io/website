import { blockList } from 'lib/emailBlockList/blockList';
import * as yup from 'yup';

const phoneRegExp = '^([^0-9]*[0-9]){5}.*$';
const validEmailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const blockedDomains = ['yahoo.com', 'outlook.com', 'gmail.com'];

export const validationSchema = yup.object({
  firstName: yup.string().label('First Name').trim().optional(),
  lastName: yup.string().label('Last Name').trim().optional(),

  email: yup
    .string()
    .label('Email')
    .trim()
    .email('Please enter a valid email address')
    .optional(),
  phoneNumber: yup.string().optional(),
  // hidden fields
  jobTitle: yup.string().optional(),
  businessEmail: yup
    .string()
    .required()

    .test(
      'is-valid-and-not-blocked-email',
      'Please enter valid business email',
      (value) => {
        if (!value) return true; // If the email is not provided, let required validation handle it.

        // Validates if value is a real email format using regex
        const isValidEmail = validEmailRegex.test(value);

        if (!isValidEmail) return false; // If email is not valid, return false to trigger the error message

        // Extracting the domain from the email address
        const emailParts = value.split('@');
        const domain = emailParts[emailParts.length - 1];

        // Checking if the domain is in the allowedDomains array
        return !blockList.includes(domain);
      },
    ),
  linkedIn: yup.string().optional(),
  company: yup.string().optional(),
});

export const contactPageValidation = yup.object({
  firstName: yup.string().label('First Name').trim().required(),
  lastName: yup.string().label('Last Name').trim().required(),
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

export const shortValidationSchema = yup.object({
  firstName: yup.string().label('First Name').trim().optional(),
  lastName: yup.string().label('Last Name').trim().optional(),
  email: yup
    .string()
    .label('Email')
    .trim()
    .email('Please enter a valid email address')
    .optional(),
  // hidden fields
  jobTitle: yup.string().optional(),
  businessEmail: yup
    .string()
    .required()
    .test(
      'is-valid-and-not-blocked-email',
      'Please enter valid business email',
      (value) => {
        if (!value) return true; // If the email is not provided, let required validation handle it.

        // Validates if value is a real email format using regex
        const isValidEmail = validEmailRegex.test(value);

        if (!isValidEmail) return false; // If email is not valid, return false to trigger the error message

        // Extracting the domain from the email address
        const emailParts = value.split('@');
        const domain = emailParts[emailParts.length - 1];

        // Checking if the domain is in the allowedDomains array
        return !blockList.includes(domain);
      },
    ),
  linkedIn: yup.string().optional(),
  company: yup.string().optional(),
  phoneNumber: yup.string().optional(),
});
