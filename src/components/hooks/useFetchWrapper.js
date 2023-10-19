import { useState, useEffect } from 'react';
import { useZestyStore } from 'store';

const getStatus = (status) => {
  if (status / 100 === 2) return true;
  return false;
};
export const useFetchWrapper = (isLoggedIn) => {
  const [verifySuccess, setverifySuccess] = useState('');
  const [verifyFailed, setverifyFailed] = useState('');
  const [userInfo, setuserInfo] = useState('');
  const [loading, setloading] = useState(false);
  const { ZestyAPI } = useZestyStore((state) => state);

  const verifyUser = async () => {
    setloading(true);
    const res = await ZestyAPI.verify();
    getStatus(res.code) && setverifySuccess(res.meta);
    !getStatus(res.code) && setverifyFailed(res);
    setloading(false);
  };

  const getUserInfo = async () => {
    setloading(true);
    const res = await ZestyAPI.getUser(verifySuccess?.userZuid);
    !res.error && setuserInfo(res);
    setloading(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      verifyUser();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    verifySuccess && getUserInfo();
  }, [verifySuccess]);

  return {
    loading,
    verifyFailed,
    verifySuccess,
    userInfo,
  };
};
