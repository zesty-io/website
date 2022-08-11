import { useState } from 'react';

const useDropdown = () => {
  const [value, setValue] = useState('');
  const handleClick = (value) => {
    setValue(value);
  };
  const reset = () => {
    setValue('');
  };

  return [value, handleClick, reset];
};

export default useDropdown;
