import { useEffect, useState } from 'react';
import { useZestyStore } from 'store';

const INTERVAL_VALUE = 90 * 1000; // 90secs
const useIsLoggedIn = () => {
  const { ZestyAPI, isAuthenticated } = useZestyStore((state) => state);

  // isLoggedIn initial value is (isAuthenticated value from useZestyStore).
  // Then it will start checking after the set INTERVAL_VALUE TIMES
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);

  useEffect(() => {
    const verify = async () => {
      const response = await ZestyAPI.verify();
      if (response.code === 200) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    };

    const interval = setInterval(() => {
      verify();
    }, INTERVAL_VALUE);

    return () => clearInterval(interval);
  }, []);

  return isLoggedIn;
};

export default useIsLoggedIn;
