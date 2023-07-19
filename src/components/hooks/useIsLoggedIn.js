import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useIsLoggedIn = () => {
  // update
  const cookies = useContext(AuthContext);
  return JSON.parse(cookies?.isAuthenticated || false);
};

export default useIsLoggedIn;
