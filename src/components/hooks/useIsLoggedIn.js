import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useIsLoggedIn = () => {
  const cookies = useContext(AuthContext);
  return JSON.parse(cookies?.isAuthenticated || false);
};

export default useIsLoggedIn;
