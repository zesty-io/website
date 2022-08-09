import * as React from 'react';
import { Container, Stack, IconButton, Button,InputLabel,FilledInput,FormControl, InputAdornment, Box, TextField, Typography } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function checkNameInput(str,inputName){
  if(validateName(str)){
    successStateForField(inputName);
  } else {
    failStateForField(inputName);
  }
}

function checkEmailInput(str){
  if(validateEmail(str)){
    successStateForField('ac-email');
  } else {
    failStateForField('ac-email');
  }
}
function validatePhone(phoneNumber){
  return /^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phoneNumber);
}

function validateName(name){
  return checkStringLength(name, 2);
}

function toggleCharWarning(el,success){
  if(success){
    el.classList.remove('is-primary');
    el.classList.add('is-success');
  } else {
    el.classList.add('is-primary');
    el.classList.remove('is-success');
  }
}

function checkStringLength(str,len){
  if (str.length >= len){
    return true;
  }
  return false
}
function checkStringForNumber(str){
  return /\d/.test(str);
}

function checkStringForUppercase(str){
  return (/[A-Z]/.test(str));
}

function checkStringForLowercase(str){
  return (/[a-z]/.test(str));
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

var ACCOUNTS_API = process.env.PRODUCTION == "true" ? `https://accounts.api.zesty.io/v1/` : `https://accounts.api.stage.zesty.io/v1/`;

function createAccountSubmission(email, firstName, lastName,password){

  var createEndpoint = ACCOUNTS_API + "users";
  
  if(email && firstName && lastName && password ){

    var postBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password
    }

    var params = {
      method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',

       },
      mode: 'no-cors',
      credentials: "omit", // include, *same-origin, omit
      body: JSON.stringify(postBody)
    }

    fetch(createEndpoint, params).then(function(response) {

      if (!response.error) {
        // run GA call

        // ga('send', {
        //   hitType: 'event',
        //   eventCategory: 'create-account',
        //   eventAction: 'submission',
        //   eventLabel: 'User Creation',
        //   transport: 'beacon'
        // });


        // gtag('event', 'conversion', {
        //   send_to: 'AW-955374362/ivZJCMeG3JoBEJq2x8cD'
        // })

        //loginToZesty(postBody.email, postBody.password);

      }

      // run error control


    });

    return true;

  } else {
    console.log('form not validated');
    return false;
  }

}

function loginToZesty(email,password){
  var endpoint = ACCOUNTS_API + "login";
  var params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',

    },
    mode: 'no-cors',
    credentials: "omit", // include, *same-origin, omit
    body: JSON.stringify({ email, password })
  }

  fetch(endpoint, params).then(function(response) { console.log(response); });
}


export const Signup = ({
    message = 'What team are you from?',
    callback = {}
  }) => {

    const [values, setValues] = React.useState({
      lastname: 'test',
      firstname: 'test',
      email: 'tesg@testr.com',
      password: 'ab123dbf#$2',
      confirmPassword: '',
      showPassword: false,
    });

    const handleChange = e => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleMouseDownPassword = () => {
      event.preventDefault();
    };
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };

    const submitForm = () => {
      alert('creating account')
      createAccountSubmission(values.email, values.firstname, values.lastname, values.password)
    }
  return (

    <Container>
        
        <Typography>{message}</Typography>
        <EmailOutlined />
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              // error
              label="First Name"
              name="firstname"
              onChange={handleChange}
            />
            <TextField
              label="Last Name"
              helperText="Incorrect entry."
              name="lastname"
              onChange={handleChange}
            />
            <FormControl variant="standard">
            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <EmailOutlined />
                </InputAdornment>
              }
            />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name="password"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      <Button variant="contained" onClick={submitForm} >Next</Button>

          </div>
        </Box>
    </Container>
  )
}
