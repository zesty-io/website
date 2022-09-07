import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export const LaunchInstance = ({
  children = (
    <Typography
      variant="p"
      sx={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}
    >
      <AddIcon /> Create Instance
    </Typography>
  ),
  onClick,
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <Box sx={{ height: '100%' }}>
      <Button
        sx={{ height: '100%' }}
        type="button"
        color="secondary"
        variant="contained"
        onClick={handleClick}
      >
        {children}
      </Button>
    </Box>
  );
};
