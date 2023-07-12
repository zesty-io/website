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
import { SnackbarProvider } from 'notistack';
import Head from 'next/head';
import AuthProvider from 'components/context/AuthProvider';

import '/public/styles/app.css';
import '/public/styles/docs.css';
import { useRouter } from 'next/router';

if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // store the previous url in session storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('prevUrl', window.document.referrer);
    }
  }, [router.asPath]);

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

  const isAuthenticatedFromProps =
    pageProps?.zesty?.isAuthenticated ||
    (pageProps?.zesty?.isAuthenticated === undefined && true);
  let gtm = process.env.GTM_ID
    ? process.env.GTM_ID
    : process.env.NEXT_PUBLIC_GTM_ID;

  // const GTM_ID = !isAuthenticatedFromProps ? gtm : undefined;
  const GTM_ID = gtm; // remove this to always run, we need ot setup rules in GTM to ignore accounts sales popsup

  return (
    <AuthProvider value={pageProps?.zesty}>
      {pageProps?.meta?.web && <ZestyHead content={pageProps} />}
      <Head>
        {GTM_ID && (
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
        )}
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
          <Component {...pageProps} />
        </Page>
      </SnackbarProvider>
    </AuthProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
