import { getCookie } from 'cookies-next';
import { LoadingButton } from '@mui/lab';
import React from 'react';

const ExtensionsIntaller = ({
  extensionName,
  githubUrl
}) => {
  const [loading, setLoading] = React.useState(false);
  const [finishInstall, setFinishInstall] = React.useState(false);
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const install = async () => {
    setLoading(true);
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('APP_SID')}`,
      },
      body: JSON.stringify({
        instance_zuid: instanceZUID,
        repository: githubUrl,
        // extentionName: extensionName,
        // instanceZUID: instance?.ZUID,
        // authToken: getCookie('APP_SID'),
        // githubUrl: githubUrl,
      }),
    };
    try {
      let response = await fetch(
        // 'https://us-central1-zesty-dev.cloudfunctions.net/installExtension',
        'https://installer-xytrmaqk4a-uc.a.run.app/install/model',
        requestOptions,
      );
      await response.json();
      setLoading(false);
      setFinishInstall(true);
    } catch (error) {
      setLoading(false);
      console.error('There was an error!', error);
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
