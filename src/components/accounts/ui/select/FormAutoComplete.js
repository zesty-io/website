import {
  Autocomplete,
  Box,
  createFilterOptions,
  TextField,
} from '@mui/material';
import React from 'react';

const filterOptions = createFilterOptions({
  matchFrom: 'any',
  stringify: (option) => {
    return option.value || option.label;
  },
});
export const FormAutoComplete = ({
  name = '',
  label = '',
  options = [],
  formik,
}) => {
  return (
    <Box marginBottom={4}>
      <Autocomplete
        id={name}
        name={name}
        options={options}
        filterOptions={filterOptions}
        getOptionLabel={(option) => {
          return option.label;
        }}
        onChange={(e, option) => {
          formik.setFieldValue(name, option?.value);
        }}
        renderInput={(params) => (
          <TextField
            sx={{
              height: 54,
              textAlign: 'left',
              // '& .MuiOutlinedInput-root.Mui-focused': {
              //   '& > fieldset': {
              //     border: '1px solid #c4c4c4',
              //   },
              // },
              '& .MuiOutlinedInput-root:hover': {
                '& > fieldset': {
                  border: '1px solid #c4c4c4',
                },
              },
            }}
            label={label}
            fullWidth
            name={name}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            {...params}
          />
        )}
      />
    </Box>
  );
};
