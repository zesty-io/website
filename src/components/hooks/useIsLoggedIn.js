import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { getCookie } from 'cookies-next';
import { resetCookies } from 'utils/resetCookie';

const isUserAuthenticated = async () => {
  const isProd = getCookie('PRODUCTION') === 'true' ? true : false;
  const verifyUrl = !isProd
    ? 'https://auth.api.dev.zesty.io/verify'
    : 'https://auth.api.zesty.io/verify';

  const appSid = getCookie(isProd ? 'APP_SID' : 'DEV_APP_SID');

  if (!appSid) {
    resetCookies(isProd);
    return false;
  }

  if (appSid) {
    try {
      const response = await fetch(verifyUrl, {
        headers: {
          Authorization: `Bearer ${appSid}`,
        },
      });
      const data = await response.json();

      if (data?.code === 200) {
        return true;
      } else {
        resetCookies(isProd);
        return false;
      }
    } catch (error) {
      console.log(error, 'error');
      resetCookies(isProd);
      return false;
    }
  }
};

const useIsLoggedIn = () => {
  const cookies = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = async () => {
      setIsAuth(await isUserAuthenticated());
    };
    if (cookies?.isAuthenticated === false) {
      auth();
    }
  }, [isAuth]);

  return isAuth || cookies?.isAuthenticated;
};

export default useIsLoggedIn;
