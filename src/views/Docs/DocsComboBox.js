import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useRouter } from 'next/router';

const capitalize = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Input should be a string.');
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};
const Main = ({ options, onChange, width = 1, value = '' }) => {
  const router = useRouter();
  const route = router.asPath.split('/').filter((e) => e);

  const [selectedValue, setSelectedValue] = useState();
  const handleChange = (_, newValue) => {
    onChange(newValue);
    setSelectedValue(newValue);
  };

  const placeholder = () => {
    const str = capitalize(route[1]) || capitalize(value);
    return str.replaceAll('-', ' ');
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
            placeholder={placeholder()}
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
