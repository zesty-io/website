import React from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { useZestyStore } from 'store';
import { LoadingButton } from '@mui/lab';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Stack } from '@mui/material';
import { AccountsComboBox, SuccessMsg } from 'components/accounts';
import { useTheme } from '@emotion/react';
import { isProd } from 'utils';
const MySwal = withReactContent(Swal);

export const AppInstallerComp = ({ data }) => {
  const [selectInstance, setselectInstance] = React.useState(false);
  const theme = useTheme();
  const { setworkingInstance } = useZestyStore((state) => state);
  const [installedApps, setinstalledApps] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const appSID = isProd ? getCookie('APP_SID') : getCookie('DEV_APP_SID');
  const [instances, setinstances] = React.useState([]);
  const appZUID = data?.app_zuid;
  const instanceName = instances?.data?.find(
    (e) => e.ZUID === instanceZUID,
  )?.name;

  let ZestyAPI = useZestyStore((state) => state.ZestyAPI);
  const installAppSuccess = async () => {
    setloading(false);
    SuccessMsg({ title: 'App successfully installed' });
    await getAllInstalledApps();
  };
  const installAppError = async () => {
    setloading(false);
    await getAllInstalledApps();
  };
  const getInstalledAppSuccess = (res) => {
    setloading(false);
    if (res && Object.keys(res).length !== 0) {
      setinstalledApps(res);
    }
  };
  const getInstalledAppError = () => {};

  const getAllInstalledApps = async () => {
    setloading(true);
    const res = await ZestyAPI.getAllInstalledApps(instanceZUID);
    !res.message && getInstalledAppSuccess(res.data);
    res.message && getInstalledAppError(res);
  };

  const getInstances = async () => {
    const res = await ZestyAPI.getInstances();
    !res.error && setinstances(res);
    res.error && setinstances([]);
  };

  const handleComboxClick = (zuid) => {
    setselectInstance(true);
    setCookie('ZESTY_WORKING_INSTANCE', zuid);
    setworkingInstance(zuid);
    window.location.reload();
  };

  const InstanceForm = () => {
    return (
      <Stack
        paddingY={4}
        justifyContent="center"
        justifyItems={'center'}
        alignItems="center"
      >
        <AccountsComboBox
          instances={instances?.data}
          setCookies={handleComboxClick}
          instanceZUID={instanceZUID}
        />
      </Stack>
    );
  };
  const SelectInstanceModal = () => {
    MySwal.fire({
      title: 'Select an Instance to Continue',
      html: <InstanceForm />,
      showConfirmButton: true,
      confirmButtonColor: theme?.palette?.zesty?.zestyOrange,
    });
  };
  const InstallApp = async () => {
    if (!appSID) {
      window.location.href = '/login/';
    } else if (!instanceZUID) {
      SelectInstanceModal();
    } else if (instanceZUID && appZUID) {
      setloading(true);
      const res = await ZestyAPI.installApp(instanceZUID, appZUID);
      res.status === 201 && installAppSuccess(res);
      !res.status !== 201 && installAppError(res.error);
    }
  };

  const isInstalled = installedApps?.find((e) => e?.appZUID === appZUID)?.ZUID;
  const disabledBtn = !isInstalled || loading ? false : true;

  // handling the ZESTYAPI null value
  React.useEffect(() => {
    if (ZestyAPI) {
      getAllInstalledApps();
    }
  }, [ZestyAPI]);

  React.useEffect(() => {
    getInstances();
  }, []);

  return (
    <Stack>
      <LoadingButton
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        fullWidth
        onClick={InstallApp}
        disabled={disabledBtn}
        loading={loading || (isInstalled && selectInstance) || !instanceName}
      >
        {!appSID
          ? 'Please Login to continue'
          : !instanceZUID
          ? 'Select an Instance to continue'
          : isInstalled && !selectInstance
          ? `App Installed in ${instanceName}`
          : `Install  ${data?.name} in ${instanceName}`}
      </LoadingButton>
      {isInstalled && (
        <LoadingButton
          variant="contained"
          color="secondary"
          sx={{ mt: 2 }}
          fullWidth
          onClick={SelectInstanceModal}
          loading={loading}
        >
          Switch Instance
        </LoadingButton>
      )}
    </Stack>
  );
};
