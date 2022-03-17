import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function SubscribeCTA({text='Join thousands of others for our newsletter'}) {
  const theme = useTheme();
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
              variant="outlined"
              color="primary"
              fullWidth
              height={54}
            />
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              height={54}
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
            >
              Subscribe
            </Box>
          </Box>
        </Box>
      </Box>
    )
}