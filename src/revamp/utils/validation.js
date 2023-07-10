import * as yup from 'yup';

const phoneRegExp = '^([^0-9]*[0-9]){5}.*$';

export const validationSchema = yup.object({
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
    .matches(phoneRegExp, 'You must enter at least 5 digits.'),
  // hidden fields
  jobTitle: yup.string().optional(),
  businessEmail: yup.string().optional(),
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
  // hidden fields
  jobTitle: yup.string().optional(),
  businessEmail: yup.string().optional(),
  linkedIn: yup.string().optional(),
  company: yup.string().optional(),
});

export const shortValidationSchema = yup.object({
  firstName: yup.string().label('First Name').trim().required(),
  lastName: yup.string().label('Last Name').trim().required(),
  email: yup
    .string()
    .label('Email')
    .trim()
    .email('Please enter a valid email address')
    .required(),
  // hidden fields
  jobTitle: yup.string().optional(),
  businessEmail: yup.string().optional(),
  linkedIn: yup.string().optional(),
  company: yup.string().optional(),
});
