import { LoadingButton } from '@mui/lab';
import React from 'react';

export const JoinAppBtn = ({
  children,
  onClick,
  endIcon = <></>,
  startIcon = <></>,
}) => {
  return (
    <LoadingButton
      endIcon={endIcon}
      startIcon={startIcon}
      variant="contained"
      onClick={onClick}
      sx={{
        bgcolor: '#fff',
        border: `1px solid #ff5d0a`,
        color: '#ff5d0a',
        ':hover': {
          bgcolor: '#ff5d0a',
          color: '#fff',
          boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75);',
        },
      }}
    >
      {children}
    </LoadingButton>
  );
};
