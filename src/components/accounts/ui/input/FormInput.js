const { Box, TextField } = require('@mui/material');
import React from 'react';

const Index = ({
  name,
  formik,
  label,
  type = 'text',
  multiline = false,
  ...props
}) => {
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
          ...props.sx,
        }}
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
        multiline={multiline}
        rows={4}
      />
    </Box>
  );
};

export const FormInput = React.memo(Index);
