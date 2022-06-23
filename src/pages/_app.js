import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Page from '../components/wrappers/Page';
import Script from 'next/script';
import ZestyHead from 'components/globals/ZestyHead';

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
