import { Box, MenuItem, TextField } from '@mui/material';
import React from 'react';

export const FormSelect = ({ name = '', formik, label = '', options = [] }) => {
  const newLabel =
    label || (name && name[0].toUpperCase() + name.slice(1)) || '';

  return (
    <Box marginBottom={4}>
      <TextField
        sx={{
          height: 54,
          textAlign: 'left',
          // '& .MuiOutlinedInput-root.Mui-focused': {
          //   '& > fieldset': {
          //     border: '1px solid #c4c4c4',
          //   },
          // },
          '& .MuiOutlinedInput-root:hover': {
            '& > fieldset': {
              border: '1px solid #c4c4c4',
            },
          },
        }}
        variant="outlined"
        name={name}
        id={name}
        fullWidth
        select
        label={newLabel}
        value={formik.values[name]}
        onChange={formik.handleChange}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
      >
        {options.map((option) => (
          <MenuItem key={option?.id} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
