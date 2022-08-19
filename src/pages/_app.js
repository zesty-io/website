import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Page from '../components/wrappers/Page';
import Script from 'next/script';
import ZestyHead from 'components/globals/ZestyHead';
import { getCookie, setCookies } from 'cookies-next';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import '../../public/styles/custom.css';


if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search.toLowerCase()), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
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

  return (
    <React.Fragment>
      {pageProps?.meta?.web &&
        <ZestyHead content={pageProps} />
      }
      <Page>
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
