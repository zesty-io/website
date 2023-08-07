import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const Main = ({ options, onChange, width = 1, value = '' }) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const handleChange = (_, newValue) => {
    onChange(newValue);
    setSelectedValue(newValue);
  };

  return (
    <Stack width={width}>
      <Autocomplete
        disablePortal
        onChange={handleChange}
        id="combo-box-demo"
        options={options}
        sx={{ width: '100%' }}
        value={selectedValue}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            color="secondary"
            size="small"
            InputProps={{
              ...params.InputProps,
              startAdornment: <LanguageIcon color="disabled" sx={{ ml: 1 }} />,
            }}
          />
        )}
      />
    </Stack>
  );
};

export const DocsComboBox = React.memo(Main);
