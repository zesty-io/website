import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { getCookie } from 'cookies-next';

const isUserAuthenticated = async () => {
  let isProd = JSON.parse(getCookie('PRODUCTION') || true);

  const verifyUrl = !isProd
    ? 'https://auth.api.dev.zesty.io/verify'
    : 'https://auth.api.zesty.io/verify';

  const appSid = getCookie(isProd ? 'APP_SID' : 'DEV_APP_SID');

  const response = await fetch(verifyUrl, {
    headers: {
      Authorization: `Bearer ${appSid}`,
    },
  });
  const data = await response.json();

  return data?.code === 200 ? true : false;
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
  }, []);

  return isAuth || cookies?.isAuthenticated;
};

export default useIsLoggedIn;
