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

function sendPayload(payload){
  if(isLive()){
    fetch('https://us-central1-zesty-prod.cloudfunctions.net/onboardQuestion', {
      method: 'POST',
      credentials: 'omit',
      body:    JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    console.log(payload)
  }
}



export const Signup = ({
    message = 'What team are you from?', 
  }) => {

    const [values, setValues] = React.useState({
      lastname: '',
      firtname: '',
      email: '',
      password: '',
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

          </div>
        </Box>
    </Container>
  )
}
