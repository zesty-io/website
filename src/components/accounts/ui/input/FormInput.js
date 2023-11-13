import { Visibility, VisibilityOff } from '@mui/icons-material';
import PasswordIcon from '@mui/icons-material/Password';
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

function Index({
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
}) {
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
      {customLabel && typeof customLabel === 'string' ? (
        <Typography variant={customLabelVariant}>{customLabel}</Typography>
      ) : customLabel ? (
        customLabel
      ) : (
        <></>
      )}
      {type !== 'password' ? (
        <TextField
          autoComplete="new-password"
          FormHelperTextProps={{ style: { background: 'transparent' } }}
          {...defaultProps}
          {...props}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              fontSize: '14px',
              '& fieldset': {
                border: '1px solid #F2F4F7',
              },
              '&:hover fieldset': {
                border: '2px solid #FF5D0A',
              },
              '&.Mui-focused fieldset': {
                border: '2px solid #FF5D0A',
              },
            },
          }}
        />
      ) : (
        <TextField
          FormHelperTextProps={{ style: { background: 'transparent' } }}
          autoComplete="new-password"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              fontSize: '14px',
              '& fieldset': {
                border: '1px solid #F2F4F7',
              },
              '&:hover fieldset': {
                border: '2px solid #FF5D0A',
              },
              '&.Mui-focused fieldset': {
                border: '2px solid #FF5D0A',
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
}

export const FormInput = React.memo(Index);
