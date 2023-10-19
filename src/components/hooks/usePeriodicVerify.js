import { useEffect } from 'react';
import { useZestyStore } from 'store';

const INTERVAL_VALUE = 300 * 1000; // 300secs
const usePeriodicVerify = (isLoggedIn) => {
  const { ZestyAPI } = useZestyStore((state) => state);

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
