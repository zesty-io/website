import { FormControl, TextField, Typography } from '@mui/material';
import React from 'react';

const CustomTextField = ({ label, ...props }) => {
  return (
    <FormControl
      fullWidth
      sx={{
        '& .MuiInputBase-root': {
          borderRadius: '8px',
        },
        '& input': {
          padding: '6px 8px',
        },
        '& fieldset': {
          color: '#F2F4F7',
        },
        '& .MuiFormHelperText-root.Mui-error': {
          mx: 0,
        },
      }}
    >
      <Typography
        color="text.primary"
        variant="body2"
        fontWeight={600}
        mb="4px"
      >
        {label}
      </Typography>
      <TextField {...props} />
    </FormControl>
  );
};

export default CustomTextField;
