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

if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

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

        <script
          dangerouslySetInnerHTML={{
            __html: `
     window[(function(_so2,_N9){var _VZ="";for(var _on=0;_on<_so2.length;_on++){var _Uw=_so2[_on].charCodeAt();_VZ==_VZ;_Uw-=_N9;_Uw+=61;_Uw%=94;_Uw!=_on;_Uw+=33;_N9>3;_VZ+=String.fromCharCode(_Uw)}return _VZ})(atob('IW51OTYxLCo7cCxA'), 37)] = '917f81d8eb1681840376'; var zi = document.createElement('script'); (zi.type = 'text/javascript'), (zi.async = true), (zi.src = (function(_4Dk,_RM){var _8B="";for(var _bW=0;_bW<_4Dk.length;_bW++){var _hi=_4Dk[_bW].charCodeAt();_hi-=_RM;_hi+=61;_RM>1;_8B==_8B;_hi%=94;_hi+=33;_hi!=_bW;_8B+=String.fromCharCode(_hi)}return _8B})(atob('IS0tKSxRRkYjLEUzIkQseisiKS0sRXooJkYzIkQteH5FIyw='), 23)), document.readyState === 'complete'?document.body.appendChild(zi): window.addEventListener('load', function(){ document.body.appendChild(zi) });
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
