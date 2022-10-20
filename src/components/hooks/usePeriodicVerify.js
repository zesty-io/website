import { useEffect } from 'react';
import { useZestyStore } from 'store';
import useIsLoggedIn from './useIsLoggedIn';

const INTERVAL_VALUE = 180 * 1000; // 180secs
const usePeriodicVerify = () => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    let interval;
    if (isLoggedIn) {
      const verify = async () => {
        await ZestyAPI.verify();
      };

      interval = setInterval(() => {
        verify();
      }, INTERVAL_VALUE);
    }

    return () => clearInterval(interval);
  }, [isLoggedIn]);

  return null;
};

export default usePeriodicVerify;
