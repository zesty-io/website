import React from 'react'
import { Container, Stack, Button, Box, TextField, Typography } from '@mui/material';

export const Signup = ({
    message = 'What team are you from?', 
  }) => {
  return (
    <Container>
        
        <Typography>{message}</Typography>
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
              error
              id="outlined-error"
              label="Error"
              defaultValue="Hello World"
            />
            <TextField
              error
              id="outlined-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
            />
          </div>
        </Box>
    </Container>
  )
}
