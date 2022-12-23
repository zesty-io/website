import { getCookie } from 'cookies-next';
import { LoadingButton } from '@mui/lab';
import { useZestyStore } from 'store';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const CustomSwal = withReactContent(Swal);

const ExtensionsIntaller = ({ extensionName, githubUrl }) => {
  const [loading, setLoading] = React.useState(false);
  const [finishInstall, setFinishInstall] = React.useState(false);
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  let ZestyAPI = useZestyStore((state) => state.ZestyAPI);
  const url = 'https://installer-xytrmaqk4a-uc.a.run.app';

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
    res.data.forEach((item) => {
      obj[item.ZUID] = item.label;
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
  const install = async () => {
    try {
      const { value: zuid } = await selectParent();
      if (zuid) {
        setLoading(true);
        var requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getCookie('APP_SID')}`,
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
      {loading && !finishInstall
        ? `Installing ${extensionName}`
        : !loading && finishInstall
        ? `${extensionName} has been Installed`
        : `Install ${extensionName}`}
    </LoadingButton>
  );
};

export default ExtensionsIntaller;
