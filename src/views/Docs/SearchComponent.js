const { TextField } = require('@mui/material');
import React from 'react';

const Main = ({ search = '', onChange = () => {} }) => {
  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      color="secondary"
      value={search}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};
export const SearchComponent = React.memo(Main);
