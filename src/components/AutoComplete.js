import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

export const ComboBox = ({ instances, setCookies, instanceZUID }) => {
  const [label, setlabel] = React.useState('');
  const newInstances = instances?.map((e) => {
    return {
      ...e,
      label: e.name,
      value: e.ZUID,
    };
  });

  const filterOptions = createFilterOptions({
    matchFrom: 'any',
    stringify: (option) => option.label + option.value,
  });

  const handleChange = (e, newValue) => {
    setCookies('ZESTY_WORKING_INSTANCE', newValue?.value);
    setlabel(newValue?.label);
  };
  const currentVal = newInstances?.find((e) => e.ZUID === instanceZUID);

  React.useEffect(() => {
    instances && setlabel(currentVal?.name);
  }, [instances]);

  return (
    <Autocomplete
      filterOptions={filterOptions}
      onChange={(e, i) => handleChange(e, i)}
      getOptionLabel={(option) => option.label}
      disablePortal
      id="combo-box-demo"
      options={newInstances}
      sx={{ width: 250 }}
      renderInput={(params) => (
        <TextField {...params} label={label || 'Select an instance'} />
      )}
    />
  );
};
