import { Button } from '@mui/material';
import { getCookie } from 'cookies-next';
import React from 'react';

const ExtensionsIntaller = ({
  instance,
  extensionName,
  githubUrl,
  ...props
}) => {
  const install = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        extentionName: extensionName,
        instanceZUID: instance?.ZUID,
        authToken: getCookie('APP_SID'),
        githubUrl: githubUrl,
      }),
    };
    try {
      let response = await fetch(
        'https://us-central1-zesty-dev.cloudfunctions.net/installExtension',
        requestOptions,
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <Button {...props} onClick={() => install()}>
      Install {extensionName}
    </Button>
  );
};

export default ExtensionsIntaller;
