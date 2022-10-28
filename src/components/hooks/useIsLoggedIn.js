import { useContext, useEffect, useState } from 'react';
import { useZestyStore } from 'store';
import { CookiesContext } from './CookiesProvider';

const useIsLoggedIn = () => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const cookies = useContext(CookiesContext);
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(cookies?.isAuthenticated || false),
  );

  useEffect(() => {
    const verify = async () => {
      const response = await ZestyAPI.verify();
      if (response.code === 200) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    };

    verify();
  }, []);

  return isLoggedIn;
};

export default useIsLoggedIn;
