import { LoadingButton } from '@mui/lab';
import { ThemeProvider } from '@mui/material';
import { theme } from '@zesty-io/material';
import React from 'react';

export const SubmitBtn = ({ disabled = false, loading = false, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LoadingButton
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
