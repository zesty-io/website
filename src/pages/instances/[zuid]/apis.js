import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Apis } from 'views/accounts';
import { ErrorMsg, SuccessMsg, TokenPrompt } from 'components/accounts';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import * as helpers from 'utils';

const MySwal = withReactContent(Swal);

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function ApisPage() {
  const [search, setsearch] = React.useState('');
  const [loading, setloading] = React.useState(false);
  const [tokens, settokens] = React.useState([]);
  const [instanceRoles, setInstanceRoles] = React.useState([]);
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);
  const [settings, setsettings] = React.useState([]);
  const [arrToSubmit, setarrToSubmit] = React.useState([]);

  const router = useRouter();

  const { zuid } = router.query;

  const handleGetInstanceTokenSuccess = (res) => {
    settokens(res.data);
  };
  const handleGetInstanceTokenError = (res) => {
    console.log(res);
  };

  const handleGetInstanceRolesSuccess = (res) => {
    console.log(res, 'succ upp');
    const data = res.data.map((e) => {
      return { ...e, value: e.name, label: e.name };
    });
    setInstanceRoles(data);
  };
  const handleGetInstanceRolesErr = (res) => {
    console.log(res);
    ErrorMsg({ text: res.error });
  };
  const handleGetInstanceUserWithRolesSucc = (res) => {
    setInstanceUserWithRoles(res.data);
  };
  const handleGetInstanceUserWithRolesErr = (res) => {
    ErrorMsg({ text: res.error });
  };

  const handleCreateTokenSucc = (res) => {
    MySwal.fire({
      title: 'You must copy this token now.',
      html: <TokenPrompt token={res?.data?.token} />,
      showConfirmButton: false,
    });
  };
  const handleCreateTokenErr = (res) => {
    ErrorMsg({ text: res.error });
  };

  const handleDeleteTokenSucc = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Token Successfully Deleted' });
  };
  const handleDeleteTokenErr = (res) => {
    ErrorMsg({ text: res.error });
  };

  const handleUpdateTokenSucc = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Token Successfully Updated' });
  };
  const handleUpdateTokenErr = (res) => {
    ErrorMsg({ text: res.error });
  };

  const handleGetSettingsSucc = (res) => {
    const data = res?.data?.filter((e) => {
      return (
        e.key === 'mode' ||
        e.key === 'preview_lock_password' ||
        e.key === 'headless_authorization_key' ||
        e.key === 'authorization_key' ||
        e.key === 'gql_cors' ||
        e.key === 'basic_content_api_cors_allow_any_origin' ||
        e.key === 'gql' ||
        e.key === 'basic_content_api_enabled' ||
        e.key === 'ajax_cors_allow_any_origin'
      );
    });
    setsettings(data);
  };
  const handleGetSettingsErr = (res) => {
    console.log(res);
  };

  const handleUpdateSettingSucc = (res) => {
    console.log(res);
    SuccessMsg({ title: 'Settings Updated' });
  };
  const handleUpdateSettingErr = (error) => {
    console.log(error);
    ErrorMsg({ title: error.error });
  };
  const getInstanceTokens = async () => {
    const res = await ZestyAPI.getInstanceToken(zuid);
    !res.error && handleGetInstanceTokenSuccess(res);
    res.error && handleGetInstanceTokenError(res);
  };
  const getSettings = async () => {
    const res = await ZestyAPI.getSettings();
    !res.error && handleGetSettingsSucc(res);
    res.error && handleGetSettingsErr(res);
  };

  const getInstanceRoles = async () => {
    const res = await ZestyAPI.getInstanceRoles(zuid);
    !res.error && handleGetInstanceRolesSuccess(res);
    res.error && handleGetInstanceRolesErr(res);
  };

  const getInstanceUserWithRoles = async () => {
    const res = await ZestyAPI.getInstanceUsersWithRoles(zuid);
    !res.error && handleGetInstanceUserWithRolesSucc(res);
    res.error && handleGetInstanceUserWithRolesErr(res);
  };

  const createToken = async (data) => {
    const { roleZUID, name } = data;
    const res = await ZestyAPI.createToken(roleZUID, name);
    !res.error && handleCreateTokenSucc(res);
    res.error && handleCreateTokenErr(res);
    await getPageData();
  };

  const deleteToken = async (data) => {
    const { tokenZUID } = data;
    const res = await ZestyAPI.deleteToken(tokenZUID);
    !res.error && handleDeleteTokenSucc(res);
    res.error && handleDeleteTokenErr(res);
    await getPageData();
  };

  const updateToken = async (data) => {
    const { tokenZUID } = data;
    const action = `renew`;
    const res = await ZestyAPI.updateToken(tokenZUID, action);
    !res.error && handleUpdateTokenSucc(res);
    res.error && handleUpdateTokenErr(res);
    await getPageData();
  };
  const isInstanceOwner = helpers.isInstanceOwner(
    instanceUserWithRoles,
    userInfo,
  );
  const getPageData = async () => {
    await setloading(true);
    await Promise.all([
      getInstanceTokens(),
      getInstanceRoles(),
      getInstanceUserWithRoles(),
      getSettings(),
    ]);
    await setloading(false);
  };
  React.useEffect(() => {
    if (router.isReady) {
      getPageData();
    }
  }, [router.isReady]);

  const data = tokens.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const updateSetting = async (data) => {
    const res = await ZestyAPI.updateSetting(data.ZUID, data);
    !res.error && handleUpdateSettingSucc(res);
    res.error && handleUpdateSettingErr(res);
  };

  const filteredTokens = data.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()),
  );

  const ApisProps = {
    tokens: filteredTokens,
    instanceRoles,
    isInstanceOwner,
    createToken,
    deleteToken,
    updateToken,
    loading,
    settings,
    arrToSubmit,
    setarrToSubmit,
    updateSetting,
    search,
    setsearch,
  };
  return <Apis {...ApisProps} />;
}

ApisPage.data = {
  container: 'InstanceContainer',
};
