const { Box, TextField } = require('@mui/material');
import React from 'react';

const Index = ({ name, value, handleAdd }) => {
  const handleChange = (event) => {
    handleAdd(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        size="small"
        defaultValue={value}
        id="outlined-basic"
        onChange={handleChange}
        placeholder={name}
        variant="outlined"
      />
    </Box>
  );
};

export const AccountTextfield = React.memo(Index);
