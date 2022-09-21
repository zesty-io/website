import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { useZestyStore } from 'store';

const useIsLoggedIn = () => {
  const { ZestyAPI } = useZestyStore((state) => state);

  // isLoggedIn initial value is (isAuthenticated value from cookie).
  // Then it will start checking after the set INTERVAL_VALUE TIMES
  const [isLoggedIn, setIsLoggedIn] = useState(getCookie('isAuthenticated'));
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
