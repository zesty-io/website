const { Box, TextField } = require('@mui/material');
import React from 'react';

const Index = React.memo(({ name, formik, label, type = 'text' }) => {
  const newLabel =
    label || (name && name[0].toUpperCase() + name.slice(1)) || '';
  return (
    <Box sx={{ marginBottom: '2rem' }}>
      <TextField
        sx={{ height: 54 }}
        label={newLabel}
        variant="outlined"
        color="primary"
        size="medium"
        name={name}
        fullWidth
        value={formik.values[name]}
        onChange={formik.handleChange}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
        type={type}
      />
    </Box>
  );
});

export const FormInput = React.memo(Index);
