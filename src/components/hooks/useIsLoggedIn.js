import { useContext } from 'react';
import { CookiesContext } from '../context/CookiesProvider';

const useIsLoggedIn = () => {
  const cookies = useContext(CookiesContext);
  return JSON.parse(cookies?.isAuthenticated || false);
};

export default useIsLoggedIn;
