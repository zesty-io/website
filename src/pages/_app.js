import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/wrappers/Page';
import ZestyHead from 'components/globals/ZestyHead';

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
  let instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
  const userAppSID = getUserAppSID();
  const { setverifySuccess, setInstances, setuserInfo, setloading } =
    useZestyStore((state) => state);

  const { verifySuccess, instances, userInfo, loading } = useFetchWrapper(
    userAppSID,
    instanceZUID,
  );

  const Layout = layouts[Component.data?.container];

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
