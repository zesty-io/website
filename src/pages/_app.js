import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Page from '../components/wrappers/Page';
import ZestyHead from 'components/globals/ZestyHead';
import { getCookie, setCookie } from 'cookies-next';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import '../../public/styles/custom.css';
import { useZestyStore } from 'store';
import { getUserAppSID } from 'utils';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';
import { SnackbarProvider } from 'notistack';
import InstanceContainer from 'components/accounts/instances/InstanceContainer';
import usePeriodicVerify from 'components/hooks/usePeriodicVerify';
import Head from 'next/head';
import CookiesProvider from 'components/hooks/CookiesProvider';

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
    if (undefined == refCookie) setCookie('referrer', document.referrer);

    // utm query params
    if (params.utm_campaign) setCookie('utm_campaign', params.utm_campaign);
    if (params.utm_term) setCookie('utm_term', params.utm_term);
    if (params.utm_source) setCookie('utm_source', params.utm_source);
    if (params.utm_medium) setCookie('utm_medium', params.utm_medium);
    //google click id  https://support.google.com/searchads/answer/7342044?hl=en
    if (params.gclid) setCookie('gclid', params.gclid);

    // persona
    if (params.persona) setCookie('persona', params.persona);
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

  const isAuthenticatedFromProps =
    pageProps?.zesty?.isAuthenticated ||
    (pageProps?.zesty?.isAuthenticated === undefined && true);
  const GTM_ID = !isAuthenticatedFromProps
    ? process.env.NEXT_PUBLIC_GTM_ID
    : undefined;

  // this will run to if the user is logged in to keep the session alive!
  usePeriodicVerify();

  React.useEffect(() => {
    setverifySuccess(verifySuccess);
    setInstances(instances);
    setuserInfo(userInfo.data);
    setloading(loading);
  }, [verifySuccess, instances, userInfo, loading]);

  return (
    <CookiesProvider value={pageProps?.cookies}>
      {pageProps?.meta?.web && <ZestyHead content={pageProps} />}

      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
          `,
          }}
        />
      </Head>

      <SnackbarProvider autoHideDuration={2500} preventDuplicate maxSnack={3}>
        <Page>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>

          {/* Zoominfo */}
          {!isAuthenticatedFromProps && (
            <noscript>
              <img
                src="https://ws.zoominfo.com/pixel/62cc55bc7b3465008f482d68"
                width="1"
                height="1"
                style={{ display: 'none' }}
                alt="websights"
              />
            </noscript>
          )}
          {Layout === undefined ? (
            <Component {...pageProps} />
          ) : (
            <Layout {...Component.data.props}>
              <Component {...pageProps} />
            </Layout>
          )}
        </Page>
      </SnackbarProvider>
    </CookiesProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
