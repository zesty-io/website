// step 1 user select template
// step 2 user names their template
// step 3 zesty generates new account with a name and selects blank plate(blueprint)
// step 4 once instance is completed generated , post instance zuid ,github url ,token
// step 5 after response complete , open new tab manager url and web engine url

import FileSaver from 'file-saver';

import React from 'react';
import axios from 'axios';
import { useZestyStore } from 'store';
import { getCookie } from 'cookies-next';
import { ErrorMsg, SuccessMsg } from 'components/accounts';
import { Launch } from 'views/accounts';
import Main from '../layouts/Main';

const instance = '8-ae9e8f9b98-140ttp';
const repo = 'https://github.com/allenpigar/blog_template_acme';
const baseUrl = `https://installer-m3rbwjxm5q-uc.a.run.app`;

const LaunchPage = () => {
  const [domain, setdomain] = React.useState('');
  const { ZestyAPI } = useZestyStore((state) => state);
  const [name, setname] = React.useState('');
  const [ecoZUID, setecoZUID] = React.useState('');
  const [instance_zuid, setinstance_zuid] = React.useState('');
  const [token, settoken] = React.useState('');
  const [repository, setrepository] = React.useState(repo);
  const [github_key, setgithub_key] = React.useState('');
  const APP_SID = getCookie('APP_SID');

  const handleSuccessCreate = (res) => {
    SuccessMsg({ title: 'Instance Created' });
    setinstance_zuid(res.data.ZUID);
    setdomain(res.data.domain);
    settoken(APP_SID);
  };

  const opentTabs = () => {
    window.open(`https://${instance_zuid}.manager.zesty.io/`, '_blank');
    window.open(`https://${domain}`, '_blank');
  };
  const handleErrCreate = (res) => {
    ErrorMsg({ title: res.error });
  };

  const handleCreateInstance = async (e) => {
    e.preventDefault();
    const res = await ZestyAPI.createInstance(name, ecoZUID);
    !res.error && handleSuccessCreate(res);
    res.error && handleErrCreate(res);
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const handleInstall = async (e) => {
    e.preventDefault();
    const url = `${baseUrl}/install`;
    const body = {
      repository,
      github_key,
      instance_zuid,
      token,
    };

    try {
      await axios
        .post(url, body, {
          headers,
        })
        .then((response) => {
          SuccessMsg({
            title: 'Install Ok',
            action: opentTabs,
          });

          console.log(response.data, 44444);
        })
        .catch((error) => {
          console.log(error);
          ErrorMsg({
            title: error.message,
            text: error?.response.data?.message,
          });
        });
    } catch (error) {
      ErrorMsg({
        title: error.message,
        text: error?.response.data?.message,
      });
    }
  };

  const handleDownload = async (e) => {
    e.preventDefault();

    const body = {
      zuid: instance_zuid,
      token,
    };
    const url = `${baseUrl}/download`;

    try {
      await axios
        .post(url, body, {
          responseType: 'arraybuffer',
          headers,
        })
        .then((response) => {
          const blob = new Blob([response.data], { type: 'application/zip' });
          FileSaver.saveAs(blob, `${instance_zuid}`);
        })
        .catch((error) => {
          console.log(error);
          ErrorMsg({
            title: error.message,
            text: error?.response.data?.message,
          });
        });
    } catch (error) {
      ErrorMsg({
        title: error.message,
        text: error?.response.data?.message,
      });
    }
  };

  const LaunchProps = {
    handleCreateInstance,
    setname,
    ecoZUID,
    setecoZUID,
    token,
    settoken,
    instance_zuid,
    setinstance_zuid,
    github_key,
    setgithub_key,
    repository,
    setrepository,
    handleDownload,
    handleInstall,
  };
  return (
    <Main customRouting={[]}>
      <Launch {...LaunchProps} />
    </Main>
  );
};

export default LaunchPage;

export async function getServerSideProps({ res }) {
  // does not display with npm run dev
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );
  let data = {
    production:
      process.env.PRODUCTION == 'true' || process.env.PRODUCTION === true
        ? true
        : false,
  };

  // Pass data to the page via props
  return { props: data };
}
