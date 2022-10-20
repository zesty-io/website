import { TextareaAutosize } from '@mui/material';
import React from 'react';

const Index = ({ name, value, handleAdd }) => {
  const handleChange = (event) => {
    handleAdd(event.target.value);
  };

  return (
    <TextareaAutosize
      defaultValue={value}
      aria-label="minimum height"
      minRows={3}
      placeholder={name}
      sx={{ width: 1 }}
      onChange={handleChange}
    />
  );
};
export const AccountsTextArea = React.memo(Index);
