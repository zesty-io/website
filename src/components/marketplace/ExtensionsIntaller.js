import { getCookie, setCookie } from 'cookies-next';
import { LoadingButton } from '@mui/lab';
import { useZestyStore } from 'store';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { isProd } from 'utils';
const CustomSwal = withReactContent(Swal);
const InstanceSwal = withReactContent(Swal);

const ExtensionsIntaller = ({ extensionName, githubUrl }) => {
  const [loading, setLoading] = React.useState(false);
  const [finishInstall, setFinishInstall] = React.useState(false);
  const { setworkingInstance } = useZestyStore((state) => state);
  const [instances, setinstances] = React.useState([]);
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const instanceName = instances?.data?.find(
    (e) => e.ZUID === instanceZUID,
  )?.name;
  let ZestyAPI = useZestyStore((state) => state.ZestyAPI);
  const url = isProd
    ? 'https://installer-xytrmaqk4a-uc.a.run.app'
    : 'https://installer-m3rbwjxm5q-uc.a.run.app';
  const appSID = isProd ? getCookie('APP_SID') : getCookie('DEV_APP_SID');

  const getInstanceRaw = async () => {
    const res = await ZestyAPI.getInstances();
    !res.error && setinstances(res);
    res.error && setinstances([]);
  };

  React.useState(() => {
    getInstanceRaw();
  }, []);

  const getModuleSchema = async () => {
    const response = await fetch(`${url}/schema`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ repository: githubUrl }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message);
    return result.map((item) => item.name);
  };

  const getInstanceSchema = async () => {
    const res = await ZestyAPI.getModels();
    var obj = { 0: 'Root' };
    !res.error &&
      res.data.forEach((item) => {
        obj[item.ZUID] = item.label;
      });
    return obj;
  };
  const getInstances = async () => {
    var obj = {};
    instances.data.forEach((instance) => {
      obj[instance.ZUID] = instance.name;
    });
    return obj;
  };

  const selectParent = async () => {
    const parent = await getModuleSchema();
    const instanceModels = await getInstanceSchema();
    return CustomSwal.fire({
      title: `Are you sure you want to install ${extensionName} module?`,
      text: `This will install ${parent.join(', ')} content models.`,
      input: 'select',
      inputOptions: instanceModels,
      inputPlaceholder: 'Select a parent.',
      showCancelButton: true,
      confirmButtonText: 'Install',
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve();
          } else {
            resolve('You need to select parent model.');
          }
        });
      },
    });
  };
  const selectInstance = async () => {
    const instances = await getInstances();
    return InstanceSwal.fire({
      title: `Select your instance.`,
      input: 'select',
      inputOptions: instances,
      showCancelButton: true,
      confirmButtonText: 'Select',
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve();
          } else {
            resolve('You need to select instance');
          }
        });
      },
    });
  };
  const install = async () => {
    try {
      if (!appSID) {
        window.location.href = '/login/';
        return;
      }
      if (!instanceZUID) {
        const { value: zuid } = await selectInstance();
        if (zuid) {
          setCookie('ZESTY_WORKING_INSTANCE', zuid);
          setworkingInstance(zuid);
          window.location.reload();
        }
        return;
      }
      const { value: zuid } = await selectParent();
      if (zuid) {
        setLoading(true);
        var requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${appSID}`,
          },
          body: JSON.stringify({
            instance_zuid: instanceZUID,
            repository: githubUrl,
            parent_zuid: zuid,
          }),
        };
        let response = await fetch(`${url}/install/model`, requestOptions);
        let result = await response.json();
        if (!response.ok) throw new Error(result.message);
        setLoading(false);
        setFinishInstall(true);
        setCookie('ZESTY_WORKING_INSTANCE', null);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      CustomSwal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: 'Installation is cancelled.',
      });
    }
  };

  return (
    <LoadingButton
      variant="contained"
      color="secondary"
      sx={{ mt: 2 }}
      fullWidth
      onClick={install}
      disabled={finishInstall}
      loading={loading}
    >
      {!appSID
        ? 'Please Login To Continue'
        : !instanceZUID
        ? `Select Instance to continue`
        : loading && !finishInstall
        ? `Installing ${extensionName}`
        : !loading && finishInstall
        ? `${extensionName} has been Installed`
        : `Install ${extensionName} to ${instanceName}`}
    </LoadingButton>
  );
};

export default ExtensionsIntaller;
