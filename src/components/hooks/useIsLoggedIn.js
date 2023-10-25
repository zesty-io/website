import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { deleteCookie, getCookie } from 'cookies-next';

const isUserAuthenticated = async () => {
  const isProd = getCookie('PRODUCTION') === 'true' ? true : false;
  const verifyUrl = !isProd
    ? 'https://auth.api.dev.zesty.io/verify'
    : 'https://auth.api.zesty.io/verify';

  const appSid = getCookie(isProd ? 'APP_SID' : 'DEV_APP_SID');

  if (!appSid) {
    deleteCookie(isProd ? 'APP_SID' : 'DEV_APP_SID', {
      domain: '.zesty.io',
      secure: true,
    });
    deleteCookie('isAuthenticated');
    deleteCookie('ZESTY_WORKING_INSTANCE', {});
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
        deleteCookie(isProd ? 'APP_SID' : 'DEV_APP_SID', {
          domain: '.zesty.io',
          secure: true,
        });
        deleteCookie('isAuthenticated');
        deleteCookie('ZESTY_WORKING_INSTANCE', {});
        return false;
      }
    } catch (error) {
      console.log(error, 'error');
      deleteCookie(isProd ? 'APP_SID' : 'DEV_APP_SID', {
        domain: '.zesty.io',
        secure: true,
      });
      deleteCookie('isAuthenticated');
      deleteCookie('ZESTY_WORKING_INSTANCE', {});
      return false;
    }
  }
};

const useIsLoggedIn = () => {
  // update
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
