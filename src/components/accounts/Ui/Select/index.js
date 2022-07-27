import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import React from 'react';

export const AccountsSelect = ({ list = [], setterFn = () => {}, value }) => {
  return (
    <FormControl fullWidth>
      {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
        {value}
      </InputLabel> */}
      <NativeSelect
        value={value}
        onChange={(e) => setterFn(e.target.value)}
        defaultValue={30}
        inputProps={{
          name: 'age',
          id: 'uncontrolled-native',
        }}
      >
        {list.map((e) => {
          return <option value={e.value}>{e.label}</option>;
        })}
      </NativeSelect>
    </FormControl>
  );
};
