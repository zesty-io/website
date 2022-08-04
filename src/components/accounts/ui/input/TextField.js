const { Box, TextField } = require('@mui/material');

export const AccountTextfield = ({ name, value, handleAdd }) => {
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
        defaultValue={value}
        id="outlined-basic"
        onChange={handleChange}
        label={name}
        variant="outlined"
      />
    </Box>
  );
};
