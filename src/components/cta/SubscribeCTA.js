import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SubscribeCTA() {
  return (
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
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        </div>
    </Box>
    )
}