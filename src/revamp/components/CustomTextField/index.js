import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const CustomTextField = ({ label, isSelect, menus, ...props }) => {
  return (
    <FormControl
      fullWidth
      sx={{
        '& .MuiInputBase-root': {
          borderRadius: '8px',
        },
        '& input, .MuiSelect-select ': {
          padding: '6px 8px',
        },
        '& fieldset': {
          color: '#F2F4F7',
        },
        '& .MuiFormHelperText-root.Mui-error': {
          mx: 0,
        },
      }}
    >
      <Typography
        color="text.primary"
        variant="body2"
        fontWeight={600}
        mb="4px"
      >
        {label}
      </Typography>
      {isSelect ? (
        <Select {...props}>
          {menus.map((value, i) => (
            <MenuItem key={i} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <TextField {...props} />
      )}
    </FormControl>
  );
};

export default CustomTextField;
