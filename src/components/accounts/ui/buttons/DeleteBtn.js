import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

export const DeleteBtn = ({ onClick, children = <></> }) => {
  return (
    <Button onClick={onClick} color="error" variant="text" type="button">
      <DeleteIcon /> {children}
    </Button>
  );
};
