import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useRouter } from 'next/router';
function capitalize(s) {
  return s && s[0]?.toUpperCase() + s.slice(1);
}

const Main = ({ options, onChange, width = 1 }) => {
  const router = useRouter();
  const handleChange = (_, newValue) => {
    onChange(newValue);
  };

  const res = router.asPath.split('/').filter((e) => e)[1];
  return (
    <Stack width={width}>
      <Autocomplete
        disablePortal
        onChange={handleChange}
        id="combo-box-demo"
        options={options}
        sx={{ width: '100%' }}
        // defaultValue={options[0]}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            color="secondary"
            size="small"
            placeholder={capitalize(res) || 'Docs'}
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
