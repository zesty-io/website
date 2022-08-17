export * from './SettingsSelect';
export * from './UsersSelect';
export * from './FormSelect';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import React from 'react';

const Index = ({
  setdirty = () => {},
  list = [],
  setterFn = () => {},
  value,
}) => {
  return (
    <FormControl fullWidth sx={{ margin: '.5rem 2rem' }}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        {value}
      </InputLabel>
      <NativeSelect
        variant="filled"
        onClick={() => setdirty(true)}
        value={value}
        onChange={(e) => setterFn(e.target.value)}
        defaultValue={30}
        inputProps={{
          name: 'age',
          id: 'uncontrolled-native',
        }}
      >
        {list?.map((e) => {
          return <option value={e.value}>{e.label}</option>;
        })}
      </NativeSelect>
    </FormControl>
  );
};
export const AccountsSelect = React.memo(Index);
