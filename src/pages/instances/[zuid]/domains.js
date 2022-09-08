import React, { useEffect, useState } from 'react';
// import { Box, Grid } from '@mui/material';
// import { Container } from '@mui/system';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
// import DomainPaper from 'components/accounts/domains/DomainPaper';
import DomainListings from 'components/accounts/domains/DomainListings';
import DomainSettings from 'components/accounts/domains/DomainSettings';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function Domains() {
  const [instanceDomains, setinstanceDomains] = useState([]);
  const [devDomains, setdevDomains] = useState([]);
  const [liveDomains, setliveDomains] = useState([]);
  const [settings, setsettings] = useState([]);
  const [domain, setdomain] = useState('');
  const [branch, setbranch] = useState('');
  const { ZestyAPI } = useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  const getInstanceDomains = async () => {
    try {
      const res = await ZestyAPI.getAllDomain(zuid);
      console.log(
        '🚀 ~ file: domains.js ~ line 30 ~ getInstanceDomains ~ res',
        res,
      );
      const live =
        res?.data?.filter((domain) => domain.branch === 'live') || [];
      const preview =
        res?.data?.filter((domain) => domain.branch === 'dev') || [];
      setinstanceDomains(res.data);
      setliveDomains(live);
      setdevDomains(preview);
    } catch (error) {
      console.log(
        '🚀 ~ file: domains.js ~ line 37 ~ getInstanceDomains ~ error',
        error,
      );
    }
  };

  const createDomain = async () => {
    // fetchwrapper needs update to accept an object with domain and branch
    // OR accept a third parameter for branch
    try {
      const res = await ZestyAPI.createDomain(zuid, domain);
      console.log('🚀 ~ file: domains.js ~ line 45 ~ createDomain ~ res', res);
    } catch (error) {
      console.log(
        '🚀 ~ file: domains.js ~ line 47 ~ createDomain ~ error',
        error,
      );
    }
  };

  // pass domainZUID through on click
  const deleteDomain = async (domainZUID) => {
    try {
      const res = await ZestyAPI.deleteDomain(zuid, domainZUID);
      console.log('🚀 ~ file: domains.js ~ line 55 ~ deleteDomain ~ res', res);
    } catch (error) {
      console.log(
        '🚀 ~ file: domains.js ~ line 57 ~ deleteDomain ~ error',
        error,
      );
    }
  };

  const getSettings = async () => {
    // currently receives bad request return -
    // looks like it has to do with fetchwrapper formatted url possibly not receiving zuid
    // Bad Request: dial tcp :3306: connect: connection refused'
    // undefined in url: https://undefined.api.zesty.io/v1/env/settings
    try {
      const res = await ZestyAPI.getSettings();
      console.log('🚀 ~ file: domains.js ~ line 69 ~ getSettings ~ res', res);
    } catch (error) {
      console.log(
        '🚀 ~ file: domains.js ~ line 71 ~ getSettings ~ error',
        error,
      );
    }
  };

  const updateSetting = async (settingZUID) => {
    // will need to get a single setting by zuid to have the accurate body to pass for update:
    // GET single setting not in fetchwarpper: https://instances-api.zesty.org/#e728c7a2-eb7d-476f-b493-232eb7ef2ef3
    // can use the getSettings endpoint but will need to filter our the needed body to process
    const body = null;
    try {
      // get settings body object, destructure object and update value key with new value
      const res = await ZestyAPI.updateSetting(settingZUID, body);
      console.log('🚀 ~ file: domains.js ~ line 82 ~ updateSetting ~ res', res);
    } catch (error) {
      console.log(
        '🚀 ~ file: domains.js ~ line 84 ~ updateSetting ~ error',
        error,
      );
    }
  };

  // tested - working
  const handleDeleteDomain = (domainZUID) => {
    deleteDomain(domainZUID);
    const filtered = instanceDomains.filter((dom) => dom.ZUID !== domainZUID);
    setinstanceDomains(filtered);
  };

  useEffect(() => {
    // access necessary endpoints
    if (router.isReady) {
      getInstanceDomains();
      getSettings();
    }
  }, [instanceDomains.length, router.isReady]);

  return (
    <>
      {/* <Container> */}
      <DomainListings />
      <DomainSettings />
      {/* </Container> */}
    </>
  );
}

Domains.data = {
  container: 'InstanceContainer',
};
