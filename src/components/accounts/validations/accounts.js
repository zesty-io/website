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
});

const invite = yup.object().shape({
  email: yup
    .string()
    .required('Email address is required*')
    .matches(emailRegex, 'Must be a valid email address*'),
});

const login = yup.object().shape({
  email: yup.string().required('Username is required*'),
  password: yup
    .string()
    .min(8, 'Must be atleast 8 Characters*')
    .required('Password is required*'),
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
});

const createToken = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Name is required'),
});

const teams = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be atleast 2 Characters')
    .required('Name is required'),
  description: yup
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
  areaCode: yup.string().required('This is required'),
  phoneNumber: yup.string().required('Email address is required*'),
});

const createWebhook = yup.object().shape({
  scopedResource: yup.string().required('This is Required'),
  parentResourceZUID: yup.string(),
  resource: yup.string().required('This is Required'),
  eventAction: yup.number().required('This is Required'),
  method: yup.string().required('This is Required'),
  URL: yup.string().required('This is Required'),
  contentType: yup.string().required('This is Required'),
  authorization: yup.string(),
  text: yup.string().required('This is Required'),
});
export const accountsValidations = {
  email,
  password,
  twoFactorAuth,
  teams,
  invite,
  login,
  userName,
  createToken,
  createWebhook,
};
