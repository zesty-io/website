import * as yup from 'yup';

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

const userName = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Name is required'),
  lastName: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Name is required'),
  persona: yup.string(),
});

const signUp = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('First Name is required*'),
  lastName: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Last Name is required*'),
  password: yup
    .string()
    .min(8, 'Must be atleast 8 Characters*')
    .required('Password is required*'),
  email: yup
    .string()
    .required('Email address is required*')
    .matches(emailRegex, 'Must be a valid email address*'),
});

const invite = yup.object().shape({
  email: yup
    .string()
    .required('Email address is required*')
    .matches(emailRegex, 'Must be a valid email address*'),
});

const login = yup.object().shape({
  email: yup
    .string()
    .email('Email is invalid format')
    .required('Email is required*'),
  password: yup
    .string()
    .min(8, 'Must be atleast 8 Characters*')
    .required('Password is required*'),
});
const addEmail = yup.object().shape({
  email: yup
    .string()
    .email('Email is invalid format')
    .required('Email is required*'),
  name: yup.string().required('Description is required*'),
});
const email = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Name is required'),
  email: yup
    .string()
    .required('Email address is required*')
    .matches(emailRegex, 'Must be a valid email address*'),
  accessLevel: yup.string().required('Role is required*'),
});

const createToken = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Name is required'),
  roleZUID: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Role is required'),
});

const teams = yup.object().shape({
  roleZUID: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Description is required'),
});
const password = yup.object().shape({
  oldPassword: yup
    .string()
    // .min(8, 'Must be atleast 8 Characters')
    .required('Password is required'),
  newPassword: yup
    .string()
    .matches(lowercaseRegex, 'One lowercase required!')
    .matches(uppercaseRegex, 'One uppercase required!')
    .matches(numericRegex, 'One number required!')
    .min(8, 'Must be atleast 8 Characters')
    .required('Password is required'),
  confirmNewPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('newPassword')], 'Password does not match'),
});

const twoFactorAuth = yup.object().shape({
  areaCode: yup.string().required('Area Code is Required*'),
  phoneNumber: yup.string().required('Phone Number is required*'),
});

const demoForm = yup.object().shape({
  company: yup.string().required('Company is Required*'),
  projectDescription: yup.string(),
  phoneNumber: yup.number().required('Phone Number is required*'),
});
const companyDetails = yup.object().shape({
  company: yup.string().required('Company is Required*'),
});

const projectName = yup.object().shape({
  projectName: yup.string().required('Project name is required*'),
});
const localeSchema = yup.object().shape({
  locale: yup.string().required('This is required'),
});

const createWebhook = yup.object().shape({
  parentResourceZUID: yup.string(),
  resource: yup.string().required('This is Required'),
  eventAction: yup.number().required('This is Required'),
  method: yup.string().required('This is Required'),
  URL: yup.string().required('This is Required'),
  contentType: yup.string(),
  authorization: yup.string(),
  text: yup.string(),
});

const otpTwoFactor = yup.object().shape({
  otp: yup.string().required('This is required'),
});

const forgotPassword = yup.object().shape({
  email: yup
    .string()
    .email('Email is invalid format')
    .required('Email is required'),
});

const domain = yup.object().shape({
  domain: yup.string().required('Domain is required'),
  branch: yup.string().required('Branch is required'),
});
const updateTeam = yup.object().shape({
  name: yup.string().label('Team Name').required(),
});

const resetPassword = yup.object().shape({
  newPassword: yup
    .string()
    .label('New Password')
    .required()
    .matches(lowercaseRegex, 'One lowercase required!')
    .matches(uppercaseRegex, 'One uppercase required!')
    .matches(numericRegex, 'One number required!')
    .min(8, 'Must be atleast 8 Characters'),
  confirmNewPassword: yup
    .string()
    .label('Confirm New Password')
    .required()
    .oneOf([yup.ref('newPassword')], 'Your passwords do not match.'),
});

const createTicket = yup.object().shape({
  subject: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Subject is required'),
  description: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Description is required'),
});

export const accountsValidations = {
  domain,
  email,
  password,
  twoFactorAuth,
  teams,
  invite,
  login,
  userName,
  createToken,
  localeSchema,
  createWebhook,
  otpTwoFactor,
  forgotPassword,
  resetPassword,
  updateTeam,
  addEmail,
  signUp,
  demoForm,
  companyDetails,
  projectName,
  createTicket,
};
