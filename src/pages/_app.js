import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Page from '../components/Page';
import Script from 'next/script';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import '../../public/styles/custom.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Script
        type="text/javascript"
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/gh/darwin808/comp-library-ts-react-webpack@0.0.3/build/bundle.js"
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
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
