import { useState } from 'react';

const useDropdown = () => {
  const [value, setValue] = useState('');
  const handleClick = (value) => {
    setValue(value);
  };

  return [value, handleClick];
};

export default useDropdown;
