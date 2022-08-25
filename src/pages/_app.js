import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Page from '../components/wrappers/Page';
import ZestyHead from 'components/globals/ZestyHead';
import { getCookie, setCookies } from 'cookies-next';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import '../../public/styles/custom.css';
import { useZestyStore } from 'store';
import { getCookie } from 'cookies-next';
import { getUserAppSID } from 'utils';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import { SnackbarProvider } from 'notistack';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import usePeriodicVerify from 'components/hooks/usePeriodicVerify';

if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

// add your layout component here as an object, then on your specific pages
// set an object of data with a container object to automatically set your layout
const layouts = {
  InstanceContainer,
};

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const params = new Proxy(
      new URLSearchParams(window.location.search.toLowerCase()),
      {
        get: (searchParams, prop) => searchParams.get(prop),
      },
    );
    // referrer, stored in a cookie so its not lost as a user browses
    let refCookie = getCookie('referrer');
    if (undefined == refCookie) setCookies('referrer', document.referrer);

    // utm query params
    if (params.utm_campaign) setCookies('utm_campaign', params.utm_campaign);
    if (params.utm_term) setCookies('utm_term', params.utm_term);
    if (params.utm_source) setCookies('utm_source', params.utm_source);
    if (params.utm_medium) setCookies('utm_medium', params.utm_medium);
    //google click id  https://support.google.com/searchads/answer/7342044?hl=en
    if (params.gclid) setCookies('gclid', params.gclid);

    // persona
    if (params.persona) setCookies('persona', params.persona);
  }, []);

  let instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const userAppSID = getUserAppSID();
  const { setverifySuccess, setInstances, setuserInfo, setloading } =
    useZestyStore((state) => state);

  const { verifySuccess, instances, userInfo, loading } = useFetchWrapper(
    userAppSID,
    instanceZUID,
  );

  const Layout = layouts[Component.data?.container];

  // this will run to if the user is logged in to keep the session alive!
  usePeriodicVerify();

  React.useEffect(() => {
    setverifySuccess(verifySuccess);
    setInstances(instances);
    setuserInfo(userInfo.data);
    setloading(loading);
  }, [verifySuccess, instances, userInfo, loading]);

  return (
    <React.Fragment>
      {pageProps?.meta?.web && <ZestyHead content={pageProps} />}
      <SnackbarProvider autoHideDuration={2500} preventDuplicate maxSnack={3}>
        <Page>
          {Layout === undefined ? (
            <Component {...pageProps} />
          ) : (
            <Layout {...Component.data.props}>
              <Component {...pageProps} />
            </Layout>
          )}
        </Page>
      </SnackbarProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
