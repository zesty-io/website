import React from 'react';
import { useZestyStore, getZestyAPI } from 'store';
import { useRouter } from 'next/router';
import { Overview } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import dayjs from 'dayjs';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function OverviewPage() {
  const { setZestyAPI, userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [instance, setinstance] = React.useState({});
  const [users, setusers] = React.useState([]);
  const [locales, setlocales] = React.useState([]);
  const [teams, setteams] = React.useState([]);
  const [usage, setusage] = React.useState({});
  const [models, setmodels] = React.useState([]);
  const [audits, setaudits] = React.useState([]);
  const router = useRouter();
  const { zuid } = router.query;
  const dateEnd = dayjs().format('YYYY-MM-DD');
  const dateStart = '2022-08-30';

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
  const handleGetUsageSuccess = (res) => {
    setusage(res);
    console.log(res);
  };
  const handleGetUsageErr = (res) => {
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
  const getUsage = async (zuid, dateStart, dateEnd) => {
    const res = await ZestyAPI.getUsage(zuid, dateStart, dateEnd);
    !res.error && handleGetUsageSuccess(res);
    res.error && handleGetUsageErr(res);
  };

  const purgeUrl = `${
    process.env.NEXT_PUBLIC_CLOUD_FUNCTIONS_DOMAIN ||
    'https://us-central1-zesty-prod.cloudfunctions.net'
  }/fastlyPurge?zuid=${zuid}&instance=${zuid}`;
  const clearCache = async () => {
    try {
      await fetch(purgeUrl)
        .then((data) => {
          SuccessMsg({ title: 'Cache Successfully Cleared' });
          return data.json();
        })
        .catch((error) => {
          ErrorMsg({ title: error });
          return error;
        });
    } catch (error) {
      ErrorMsg({ title: error });
      return error;
    }
  };

  const getPageData = async () => {
    await Promise.all([
      getInstance(),
      getLocales(),
      getAllInstancesTeams(),
      getModels(),
      getUsers(),
      getInstanceAudit(),
      getUsage(zuid, dateStart, dateEnd),
    ]);
  };

  const overviewProps = {
    teams,
    userInfo,
    users,
    locales,
    instance,
    models,
    audits,
    clearCache,
    usage,
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
