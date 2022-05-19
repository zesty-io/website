import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

export const ComboBox = ({ instances, helper, instanceZUID }) => {
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
    console.log(newValue, '4444');
    helper.setCookie('ZESTY_WORKING_INSTANCE', newValue?.value, 1);
    setlabel(newValue?.label);
  };
  const currentVal = instances?.find((e) => e.ZUID === instanceZUID);

  React.useEffect(() => {
    console.log(label, 'label', newInstances, 'new', instanceZUID, 'ZUI');
  }, []);

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
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label={label || 'Select an instance'} />
      )}
    />
  );
};
