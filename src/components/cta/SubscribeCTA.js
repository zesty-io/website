import { React, useRef } from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function SubscribeCTA({text='Join thousands of others for our newsletter'}) {
  const theme = useTheme();
  const emailInput = useRef(null);
  const validateEmail = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
  const onSubmit = () => {
    let email = emailInput.current.children[1].children[0].value
    if(validateEmail(email)){
      alert('good submit to capture '+email)
    }
    alert('Bad Email: '+email)
  }
  

  return (
    <Box display="flex" flexDirection={'column'} justifyContent={'center'}>
        <Box marginBottom={2}>
          <Typography variant="body1" component="p">
            {text}
          </Typography>
        </Box>
        <Box
          component={'form'}
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiInputBase-input.MuiOutlinedInput-input': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Box
              flex={'1 1 auto'}
              component={TextField}
              label="Enter your email"
              ref={ emailInput }
              variant="outlined"
              color="primary"
              fullWidth
              height={54}
            />
            <Box
              component={Button}
              variant="contained"
              color="primary"
              backgroundColor={theme.palette.secondary.main}
              size="large"
              height={54}
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              onClick={onSubmit}
            >
              Subscribe
            </Box>
          </Box>
        </Box>
      </Box>
    )
}