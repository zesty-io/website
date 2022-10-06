import React, { useEffect, useState } from 'react';
import { useZestyStore, getZestyAPI } from 'store';
import { useRouter } from 'next/router';
import { Overview } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import dayjs from 'dayjs';
import { isProd } from 'utils';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function OverviewPage() {
  const [loading, setloading] = useState(false);
  const { setZestyAPI, userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);
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

  const [isInstanceAuditLoading, setIsInstanceAuditLoading] = useState(false);
  const [instanceAudit, setInstanceAudit] = useState([]);
  const uniqueIds = new Set();

  const unique = (arr) => {
    return arr.filter((element) => {
      const isDuplicate = uniqueIds.has(
        element.affectedZUID + element.meta.message,
      );

      uniqueIds.add(element.affectedZUID + element.meta.message);

      if (!isDuplicate) {
        return true;
      }

      return false;
    });
  };

  const setResponseToAuditState = async (zuid, limit = 20) => {
    const response = await ZestyAPI.getInstanceAuditInitZUID(limit, zuid);

    if (!response?.error) {
      const instanceAuditData = [...response?.data].map((audit) => {
        return {
          ...audit,
          entityName: instance?.name,
          totalActions: response?.data?.filter(
            (c) =>
              c.meta.message === audit.meta.message &&
              c.affectedZUID === audit.affectedZUID,
          )?.length,
          screenshotURL: instance?.screenshotURL,
        };
      });
      setInstanceAudit((prev) =>
        [...prev, ...instanceAuditData].sort(
          (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt),
        ),
      );
    }
  };

  const getAudit = async () => {
    if (typeof ZestyAPI?.getInstanceAuditInitZUID === 'function') {
      setIsInstanceAuditLoading(true);
      setInstanceAudit([]);

      await setResponseToAuditState(instance.ZUID);

      setInstanceAudit((prev) => unique(prev));
      setIsInstanceAuditLoading(false);
    }
  };

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
  const handleGetRolesSuccess = (res) => {
    setInstanceUserWithRoles(res.data);
  };
  const handleGetRolesErr = (res) => {
    console.log(res);
  };
  const getInstanceAudit = async () => {
    const limit = '10';
    const res = await ZestyAPI.getInstanceAudit(limit);
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
    const res = await ZestyAPI.getUsage(zuid, dateStart, dateEnd, isProd);
    !res.error && handleGetUsageSuccess(res);
    res.error && handleGetUsageErr(res);
  };

  const getInstanceUserRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    !res.error && handleGetRolesSuccess(res);
    res.error && handleGetRolesErr(res);
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
    setloading(true);
    await Promise.all([
      getInstance(),
      getLocales(),
      getAllInstancesTeams(),
      getModels(),
      getUsers(),
      getInstanceAudit(),
      getInstanceUserRoles(),
      getUsage(zuid, dateStart, dateEnd),
    ]);
    setloading(false);
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
    isInstanceAuditLoading,
    instanceAudit,
    instanceUserWithRoles,
    loading,
  };

  useEffect(() => {
    setZestyAPI(getZestyAPI(zuid));
  }, []);

  useEffect(() => {
    // this for initial getting of audit
    getAudit();
  }, [instance]);

  useEffect(() => {
    if (router.isReady) {
      getPageData();
    }
  }, [router.isReady]);

  return <Overview {...overviewProps} />;
}

OverviewPage.data = {
  container: 'InstanceContainer',
};
