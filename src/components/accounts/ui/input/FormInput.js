const {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} = require('@mui/material');
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PasswordIcon from '@mui/icons-material/Password';
import React, { useState } from 'react';

const Index = ({
  name,
  formik,
  label,
  customLabel,
  type = 'text',
  multiline = false,
  boxGutterBottom = true,
  hasNoLabel = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const newLabel =
    label || (name && name[0].toUpperCase() + name.slice(1)) || '';
  const defaultProps = {
    label: customLabel || hasNoLabel ? '' : newLabel,
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    name,
    fullWidth: true,
    value: formik.values[name],
    onChange: formik.handleChange,
    error: formik.touched[name] && Boolean(formik.errors[name]),
    helperText: formik.touched[name] && formik.errors[name],
    type,
    multiline,
    rows: 4,
  };
  return (
    <Box width={props.fullWidth ? '100%' : 'auto'} mb={boxGutterBottom ? 1 : 0}>
      {customLabel && <Typography variant="h6">{customLabel}</Typography>}
      {type !== 'password' ? (
        <TextField {...defaultProps} {...props} />
      ) : (
        <TextField
          {...defaultProps}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...props}
        />
      )}
    </Box>
  );
};

export const FormInput = React.memo(Index);
