import React from 'react';
import { useZestyStore, getZestyAPI } from 'store';
import { useRouter } from 'next/router';
import { Overview } from 'views/accounts';

export default function OverviewPage() {
  const { setZestyAPI, userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [instance, setinstance] = React.useState({});
  const [users, setusers] = React.useState([]);
  const [locales, setlocales] = React.useState([]);
  const [teams, setteams] = React.useState([]);
  const [models, setmodels] = React.useState([]);
  const [audits, setaudits] = React.useState([]);
  const router = useRouter();
  const { zuid } = router.query;

  const handleGetInstanceSuccess = (res) => {
    console.log(res, 'succ upp');
    setinstance(res.data);
  };
  const handleGetInstanceErr = (res) => {
    console.log(res);
  };

  const handleGetlocalesSucc = (res) => {
    console.log(res, 'succ upp');
    setlocales(res.data);
  };
  const handleGetlocalesErr = (error) => {
    console.log(error, 'succ upp');
  };

  const handleGetAllInstancesTeamsSuccess = (res) => {
    setteams(res.data);
  };
  const handleGetAllInstancesTeamsError = (err) => {
    console.log(err);
  };
  const handleGetModelsSucc = (res) => {
    setmodels(res.data);
  };
  const handleGetModelsErr = (res) => {
    console.log(res);
  };

  const handleGetUserSuccess = (res) => {
    setusers(res.data);
    console.log(res);
  };
  const handleGetUserErr = (res) => {
    console.log(res);
  };

  const handleGetInstanceAuditSucc = (res) => {
    setaudits(res.data);
    console.log(res);
  };
  const handleGetInstanceAuditErr = (res) => {
    console.log(res);
  };
  const getInstanceAudit = async () => {
    const res = await ZestyAPI.getInstanceAudit();
    !res.error && handleGetInstanceAuditSucc(res);
    res.error && handleGetInstanceAuditErr(res);
  };
  const getInstance = async () => {
    const res = await ZestyAPI.getInstance(zuid);
    !res.error && handleGetInstanceSuccess(res);
    res.error && handleGetInstanceErr(res);
  };

  const getAllInstancesTeams = async () => {
    const res = await ZestyAPI.getAllInstancesTeams(zuid);
    !res.error && handleGetAllInstancesTeamsSuccess(res);
    res.error && handleGetAllInstancesTeamsError(res);
  };
  const getLocales = async () => {
    const res = await ZestyAPI.getLocales('all');
    !res.error && handleGetlocalesSucc(res);
    res.error && handleGetlocalesErr(res);
  };
  const getModels = async () => {
    const res = await ZestyAPI.getModels();
    !res.error && handleGetModelsSucc(res);
    res.error && handleGetModelsErr(res);
  };

  const getUsers = async () => {
    const res = await ZestyAPI.getInstanceUsers(zuid);
    !res.error && handleGetUserSuccess(res);
    res.error && handleGetUserErr(res);
  };

  const getPageData = async () => {
    await getInstance();
    await getLocales();
    await getAllInstancesTeams();
    await getModels();
    await getUsers();
    await getInstanceAudit();
  };

  const overviewProps = {
    teams,
    userInfo,
    users,
    locales,
    instance,
    models,
    audits,
  };

  React.useEffect(() => {
    setZestyAPI(getZestyAPI(zuid));
  }, []);

  React.useEffect(() => {
    if (router.isReady) {
      getPageData();
    }
  }, [router.isReady]);

  return <Overview {...overviewProps} />;
}

OverviewPage.data = {
  container: 'InstanceContainer',
};
