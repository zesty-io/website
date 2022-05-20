import React from 'react';

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
    res.code === 200 && setverifySuccess(res.meta);
    res.code !== 200 && setverifyFailed(res.error);
    setloading(false);
  };

  const getInstances = async () => {
    const res = await ZestyAPI.getInstances();
    !res.error && setinstances(res);
    res.error && console.log(res, 'instance failed');
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
    const res = await ZestyAPI.getUser(verifySuccess?.userZuid);
    !res.error && setuserInfo(res);
  };

  React.useEffect(() => {
    verifyUser();
    getInstances();
    getModels();
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
