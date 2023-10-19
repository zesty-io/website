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
  hasHelperText = true,
  hasError = true,
  customLabelVariant = 'h6',
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
    error: hasError && formik.touched[name] && Boolean(formik.errors[name]),
    helperText: hasHelperText && formik.touched[name] && formik.errors[name],
    type,
    multiline,
    rows: 4,
  };
  return (
    <Box width={props.fullWidth ? '100%' : 'auto'} mb={boxGutterBottom ? 1 : 0}>
      {customLabel && (
        <Typography variant={customLabelVariant}>{customLabel}</Typography>
      )}
      {type !== 'password' ? (
        <TextField
          FormHelperTextProps={{ style: { background: 'transparent' } }}
          {...defaultProps}
          {...props}
          sx={{
            '& .MuiInputBase-root': { background: '#fff' },
            '& .MuiOutlinedInput-root:hover': {
              '& > fieldset': {
                border: '1px solid #c4c4c4',
              },
            },
          }}
        />
      ) : (
        <TextField
          FormHelperTextProps={{ style: { background: 'transparent' } }}
          sx={{
            '& .MuiInputBase-root': { background: '#fff' },
            '& .MuiOutlinedInput-root:hover': {
              '& > fieldset': {
                border: '1px solid #c4c4c4',
              },
            },
          }}
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
