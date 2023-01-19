import { LoadingButton } from '@mui/lab';
import { ThemeProvider } from '@mui/material';
import { theme } from '@zesty-io/material';
import React from 'react';

export const SubmitBtn = ({
  disabled = false,
  loading = false,
  children,
  endIcon = <></>,
  startIcon = <></>,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <LoadingButton
        endIcon={endIcon}
        startIcon={startIcon}
        data-testid="submitButton"
        color={'primary'}
        disabled={loading || disabled}
        loading={loading}
        variant="contained"
        fullWidth
        type="submit"
      >
        {children}
      </LoadingButton>
    </ThemeProvider>
  );
};
