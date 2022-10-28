import { createContext } from 'react';

export const CookiesContext = createContext();

const CookiesProvider = ({ value, children }) => {
  return (
    <CookiesContext.Provider value={value}>{children}</CookiesContext.Provider>
  );
};

export default CookiesProvider;
