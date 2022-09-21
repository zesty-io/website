import { Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';

export const SubmitBtn = ({ disabled = false, loading = false, children }) => {
  return (
    <Button
      disabled={loading || disabled}
      color="primary"
      variant="contained"
      fullWidth
      type="submit"
    >
      {loading ? (
        <CircularProgress color="inherit" size={20} />
      ) : (
        <Typography variant="p">{children}</Typography>
      )}
    </Button>
  );
};
