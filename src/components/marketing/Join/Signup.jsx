import * as React from 'react';
import { Container, Stack, IconButton, Button,InputLabel,FilledInput,FormControl, InputAdornment, Box, TextField, Typography } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useZestyStore } from 'store';
import { setCookie } from 'cookies-next';


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

const randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

export const Signup = ({
    message = 'What team are you from?',
    callback = {}
  }) => {
    const ZestyAPI = useZestyStore((state) => state.ZestyAPI);

    const [values, setValues] = React.useState({
      lastname: '',
      firstname: '',
      email: randomString + '@test.com',
      password: 'aB123dbf#$2',
      confirmPassword: '',
      showPassword: false,
    });

    // create user function, uses ZestyAPI
    async function createZestyUser(firstName, lastName, email, password){
      // create the user
      let response = await ZestyAPI.createUser(firstName, lastName, email, password);
      // if made successfully, login the user and store the token to cookies
      if(response?.data?.zuid){
        let loginResponse = await ZestyAPI.login(email,password);
        console.log(loginResponse)
        setCookie('APP_SID',loginResponse.meta.token);
        return true;
      }
      return false;
    }

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

    // user creation submission form 
    const submitForm = async () => {
      
      
      let success = await createZestyUser(values.firstname, values.lastname, values.email, values.password);
      if(success) {
        callback();
      } else {
        alert('user failed to create')
      }

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
              onKeyup={handleChange}
            />
            <TextField
              label="Last Name"
              helperText="Incorrect entry."
              name="lastname"
              onChange={handleChange}
              onKeyup={handleChange}
            />
            <FormControl variant="standard">
            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              onKeyup={handleChange}
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
            onKeyup={handleChange}
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
