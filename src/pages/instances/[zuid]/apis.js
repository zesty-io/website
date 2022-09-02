import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Apis } from 'views/accounts';
import { ErrorMsg, SuccessMsg, TokenPrompt } from 'components/accounts';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import * as helpers from 'utils';

const MySwal = withReactContent(Swal);

export default function ApisPage() {
  const [tokens, settokens] = React.useState([]);
  const [instanceRoles, setInstanceRoles] = React.useState([]);
  const [instanceUserWithRoles, setInstanceUserWithRoles] = React.useState([]);
  const { ZestyAPI, userInfo } = useZestyStore((state) => state);

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

  const getInstanceTokens = async () => {
    const res = await ZestyAPI.getInstanceToken(zuid);
    !res.error && handleGetInstanceTokenSuccess(res);
    res.error && handleGetInstanceTokenError(res);
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
    await getInstanceTokens();
  };

  const deleteToken = async (data) => {
    const { tokenZUID } = data;
    const res = await ZestyAPI.deleteToken(tokenZUID);
    !res.error && handleDeleteTokenSucc(res);
    res.error && handleDeleteTokenErr(res);
    await getInstanceTokens();
  };

  const updateToken = async (data) => {
    const { tokenZUID } = data;
    const action = `renew`;
    const res = await ZestyAPI.updateToken(tokenZUID, action);
    !res.error && handleUpdateTokenSucc(res);
    res.error && handleUpdateTokenErr(res);
    await getInstanceTokens();
  };
  const isInstanceOwner = helpers.isInstanceOwner(
    instanceUserWithRoles,
    userInfo,
  );
  React.useEffect(() => {
    if (router.isReady) {
      getInstanceTokens();
      getInstanceRoles();
      getInstanceUserWithRoles();
    }
  }, [router.isReady]);

  const data = tokens.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <Apis
      tokens={data}
      instanceRoles={instanceRoles}
      isInstanceOwner={isInstanceOwner}
      createToken={createToken}
      deleteToken={deleteToken}
      updateToken={updateToken}
    />
  );
}

ApisPage.data = {
  container: 'InstanceContainer',
};
