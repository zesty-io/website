import React, { useEffect, useState } from 'react';

const useDebounce = (text, callback = () => {}, delay = 200) => {
  const [value, setValue] = useState(text);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(text);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  useEffect(() => {
    callback();
  }, [value]);

  return value;
};

export default useDebounce;
