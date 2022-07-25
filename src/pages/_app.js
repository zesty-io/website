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
import { useZestyStore } from 'store';
import { getCookie } from 'cookies-next';
import { canUseDOM, getUserAppSID } from 'utils';
import { useFetchWrapper } from 'components/hooks/useFetchWrapper';

if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

export default function App({ Component, pageProps }) {
  if (!canUseDOM()) {
    return null;
  }
  let instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const userAppSID = getUserAppSID();
  const { setverifySuccess, setinstances, setuserInfo, setloading } =
    useZestyStore((state) => state);

  const { verifySuccess, instances, userInfo, loading } = useFetchWrapper(
    userAppSID,
    instanceZUID,
  );

  React.useEffect(() => {
    setverifySuccess(verifySuccess);
    setinstances(instances);
    setuserInfo(userInfo);
    setloading(loading);
  }, [verifySuccess, instances, userInfo, loading]);

  return (
    <React.Fragment>
      {pageProps?.meta?.web && <ZestyHead content={pageProps} />}
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
