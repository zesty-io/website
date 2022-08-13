import * as React from 'react';
import { Container, Stack, Grid, OutlinedInput, FormHelperText, IconButton, Button,InputLabel,FilledInput, InputAdornment, Box, TextField, Typography } from '@mui/material';
import FormControl, { useFormControl } from '@mui/material/FormControl';

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
  let valid = re.test(String(email).toLowerCase());
  return valid;
}


function PasswordHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'UPPERCASE, lowercase, number, and SP3CI@L CH@R please.';
    }

    return 'Minimum 8 characters. At least one number. A combination of lower and uppercase letters.';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
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
      lastName: '',
      firstName: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      formValid: false,
    });

    
    // create user function, uses ZestyAPI
    async function createZestyUser(firstName, lastName, email, password){
      // create the user
      let response = await ZestyAPI.createUser(firstName, lastName, email, password);
      console.log('user create response', response)
      // if made successfully, login the user and store the token to cookies
      if(response?.data?.ZUID){
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
    const validFirstName =  validateName(values.firstName);
    const validLastName = validateName(values.lastName);
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
        callback(values);
      } else {
        alert('user failed to create')
      }

    }
  return (

    <Container>     
        <Typography>{message}</Typography>   
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <Grid container gap={1} paddingY={2}>
            <Grid md={5} lg={5} xs={12} item>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                helperText={ validFirstName ? '' : 'Name not long engough' }
                error={!validFirstName}
                onKeyUp={handleChange}
              />
            </Grid>
            <Grid md={5} lg={5} xs={12} item>
              <TextField
                fullWidth
                label="Last Name"
                helperText={ validLastName ? '' : 'Name not long engough' }
                name="lastName"
                error={!validLastName}
                onKeyUp={handleChange}
              />
            </Grid>
          </Grid>
          <Grid gap={1} container paddingY={1}>
            <Grid md={5} lg={5} xs={12} item>
            
              <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput
                  fullWidth
                  type={'text'}
                  id="email"
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
                {validEmail ? '' : <FormHelperText>Valid email required</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid md={5} lg={5} xs={12} item>
              

              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  fullWidth
                  label="Password"
                  type={values.showPassword ? 'text' : 'password'}
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
                <PasswordHelperText />
              </FormControl>
            </Grid>
          </Grid>
        <Button variant="contained" ref={submitButton} disabled={!checkAllValid} onClick={submitForm} >Next</Button>

          
        </Box>
    </Container>
  )
}
