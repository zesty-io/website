const { Box, TextField } = require('@mui/material');

export const AccountTextfield = ({ handleAdd }) => {
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
        id="outlined-basic"
        onChange={handleChange}
        label="Outlined"
        variant="outlined"
      />
    </Box>
  );
};
