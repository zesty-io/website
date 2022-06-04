import React from 'react';

const getStatus = (status) => {
  if (status / 100 === 2) return true;
  return false;
};
export const useFetchWrapper = (userAppSID, instanceZUID) => {
  const [verifySuccess, setverifySuccess] = React.useState('');
  const [verifyFailed, setverifyFailed] = React.useState('');
  const [instances, setinstances] = React.useState([]);
  const [models, setmodels] = React.useState('');
  const [views, setviews] = React.useState('');
  const [userInfo, setuserInfo] = React.useState('');
  const [loading, setloading] = React.useState(false);

  const ZestyAPI = new Zesty.FetchWrapper(instanceZUID, userAppSID);

  const verifyUser = async () => {
    setloading(true);
    const res = await ZestyAPI.verify();
    getStatus(res.code) && setverifySuccess(res.meta);
    !getStatus(res.code) && setverifyFailed(res);
    setloading(false);
  };

  const getInstances = async () => {
    setloading(true);
    const res = await ZestyAPI.getInstances();
    !res.error && setinstances(res);
    res.error && console.log(res, 'instance failed');
    setloading(false);
  };
  const getModels = async () => {
    const res = await ZestyAPI.getModels();
    !res.error && setmodels(res);
    res.error && console.log(res, 'models failed');
  };
  const getViews = async () => {
    const res = await ZestyAPI.getViews();
    !res.error && setviews(res);
    res.error && console.log(res, 'views failed');
  };

  const getUserInfo = async () => {
    setloading(true);
    const res = await ZestyAPI.getUser(verifySuccess?.userZuid);
    !res.error && setuserInfo(res);
    setloading(false);
  };

  React.useEffect(() => {
    verifyUser();
    getInstances();
    // getModels();
    // getViews();
  }, []);

  React.useEffect(() => {
    verifySuccess && getUserInfo();
  }, [verifySuccess]);

  return {
    loading,
    verifyFailed,
    verifySuccess,
    models,
    instances,
    views,
    userInfo,
  };
};
