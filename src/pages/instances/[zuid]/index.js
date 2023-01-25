import React, { useEffect, useState } from 'react';
import { useZestyStore, getZestyAPI } from 'store';
import { useRouter } from 'next/router';
import { Overview } from 'views/accounts';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import dayjs from 'dayjs';
import { isProd } from 'utils';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function OverviewPage() {
  const [loading, setloading] = useState(false);
  const { setZestyAPI, userInfo, ZestyAPI, usage, setusage } = useZestyStore(
    (state) => state,
  );
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);
  const [instance, setinstance] = React.useState({});
  const [users, setusers] = React.useState(undefined);
  const [locales, setlocales] = React.useState([]);
  const [teams, setteams] = React.useState([]);
  const [models, setmodels] = React.useState([]);
  const [audits, setaudits] = React.useState([]);
  const router = useRouter();
  const { zuid } = router.query;
  const dateEnd = dayjs().format('YYYY-MM-DD');
  const dateStart = dayjs().startOf('month').format('YYYY-MM-DD');

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
    setinstance(res.data);
  };

  const handleGetlocalesSucc = (res) => {
    setlocales(res.data);
  };

  const handleGetAllInstancesTeamsSuccess = (res) => {
    setteams(res.data);
  };

  const handleGetModelsSucc = (res) => {
    setmodels(res.data);
  };

  const handleGetUserSuccess = (res) => {
    setusers(res.data);
  };

  const handleGetUsageSuccess = (res) => {
    setusage(res);
  };

  const handleGetInstanceAuditSucc = (res) => {
    setaudits(res.data);
  };

  const handleGetRolesSuccess = (res) => {
    setInstanceUserWithRoles(res.data);
  };

  const getInstanceAudit = async () => {
    const limit = '10';
    const res = await ZestyAPI.getInstanceAudit(limit);
    !res.error && handleGetInstanceAuditSucc(res);
  };
  const getInstance = async () => {
    const res = await ZestyAPI.getInstance(zuid);
    !res.error && handleGetInstanceSuccess(res);
  };

  const getAllInstancesTeams = async () => {
    const res = await ZestyAPI.getAllInstancesTeams(zuid);
    !res.error && handleGetAllInstancesTeamsSuccess(res);
  };
  const getLocales = async () => {
    const res = await ZestyAPI.getLocales('all');
    !res.error && handleGetlocalesSucc(res);
  };
  const getModels = async () => {
    const res = await ZestyAPI.getModels();
    !res.error && handleGetModelsSucc(res);
  };

  const getUsers = async () => {
    const res = await ZestyAPI.getInstanceUsers(zuid);
    !res.error && handleGetUserSuccess(res);
  };
  const getUsage = async (zuid, dateStart, dateEnd) => {
    const res = await ZestyAPI.getUsage(zuid, dateStart, dateEnd, isProd);
    !res.error && handleGetUsageSuccess(res);
  };

  const getInstanceUserRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    !res.error && handleGetRolesSuccess(res);
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

  return (
    <InstanceContainer>
      <Overview {...overviewProps} />
    </InstanceContainer>
  );
}
