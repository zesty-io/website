import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const ColorToggleButton = ({ value, options, handleAdd }) => {
  const [alignment, setAlignment] = React.useState(value);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    handleAdd(newAlignment);
  };

  const switchVal = (val) => {
    switch (val) {
      // Checkboxes options =[0,1]
      // 0=false and 1=true
      case '1':
        return 'Yes';
      case '0':
        return 'No';
      // Use Parsley Debugger options
      // options =[1,2] 1=true and 2=false
      case '2':
        return 'No';
      default:
        return val;
    }
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={value || alignment}
        exclusive
        onChange={handleChange}
      >
        {options?.map((e) => {
          return (
            <ToggleButton value={e.value}>{switchVal(e.value)}</ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </>
  );
};
