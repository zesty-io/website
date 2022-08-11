import * as React from 'react';
import { Container, Stack, IconButton, Button,InputLabel,FilledInput,FormControl, InputAdornment, Box, TextField, Typography } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useZestyStore } from 'store';
import { setCookie } from 'cookies-next';

function validateName(name){
  return checkStringLength(name, 2);
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

function validatePassword(str){
  return checkStringForUppercase(str) && checkStringForLowercase(str) && checkStringForNumber(str) && checkStringLength(str,8);

}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const Signup = ({
    message = 'What team are you from?',
    callback = {}
  }) => {
    // ref for submit button
    const submitButton = React.useRef(null);

    // zesty store
    const ZestyAPI = useZestyStore((state) => state.ZestyAPI);
    // intial state setup
    const [values, setValues] = React.useState({
      lastname: '',
      firstname: '',
      email: '',
      password: 'aB123dbf#$2',
      confirmPassword: '',
      showPassword: false,
      formValid: false,
    });

    
    // create user function, uses ZestyAPI
    async function createZestyUser(firstName, lastName, email, password){
      // create the user
      let response = await ZestyAPI.createUser(firstName, lastName, email, password);
      // if made successfully, login the user and store the token to cookies
      if(response?.data?.zuid){
        let loginResponse = await ZestyAPI.login(email,password);
        // this emulated accounts for login
        setCookie('APP_SID',loginResponse.meta.token);
        return true;
      }
      return false;
    }
    // updates state with changed values
    const handleChange = e => {
        console.log('handle change changing: ' + e.target.name + ' : ' + e.target.value)
        setValues({...values, [e.target.name]: e.target.value})
        
    }

    // validate fields
    const validFirstName = validateName(values.firstname);
    const validLastName = validateName(values.lastname);
    const validPassword = validatePassword(values.password);
    const validEmail = validateEmail(values.email);

    // check if form is valid 
    const checkAllValid = validFirstName && validLastName &&  validPassword && validEmail;;

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
      // check if user created successfully
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
              error={!validFirstName}
              onKeyUp={handleChange}
            />
            <TextField
              label="Last Name"
              helperText="Incorrect entry."
              name="lastname"
              error={!validLastName}
              onKeyUp={handleChange}
            />
            <FormControl variant="standard">
            <TextField
              label="Email"
              name="email"
              error={!validEmail}
              onKeyUp={handleChange}
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
            error={!validPassword}
            onChange={handleChange}
            onKeyUp={handleChange}
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
      <Button variant="contained" ref={submitButton} disabled={!checkAllValid} onClick={submitForm} >Next</Button>

          </div>
        </Box>
    </Container>
  )
}
