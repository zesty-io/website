import React from 'react';

export const useFetchWrapper = (userAppSID, instanceZUID) => {
  const [verifySuccess, setverifySuccess] = React.useState('');
  const [verifyFailed, setverifyFailed] = React.useState('');
  const [instances, setinstances] = React.useState([]);
  const [models, setmodels] = React.useState('');
  const [views, setviews] = React.useState('');
  // for verify user loading
  const [loading, setloading] = React.useState(false);

  // FetchWrapper Section
  // const instanceZUID = helper.getCookie("INSTANCE_ZUID") || "8-c4eec0b7d4-8lx0ch"
  // const userAppSID =
  //    helper.getCookie("APP_SID") || "f3555fb52bdd3c6e3b3ff5421b74b740bf41f4e5"
  // const instanceZUID = ""
  // const userAppSID = ""

  // @ts-ignore
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

  React.useEffect(() => {
    verifyUser();
    getInstances();
    getModels();
    getViews();
  }, []);

  //    React.useEffect(() => {
  //       console.log(instances, views, models, "datas")
  //    }, [instances, models, views])

  return {
    loading,
    verifyFailed,
    verifySuccess,
    models,
    instances,
    views,
  };
};
