/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Homepage
 * Name: homepage
 * Model ZUID: 6-31079c-vdg69q
 * File Created On: Mon Feb 21 2022 07:38:12 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)
 * content (wysiwyg_advanced)
 * image (images)
 * customer_logo_heading (text)
 * main_headline (text)
 * main_description (wysiwyg_advanced)
 * og_image (images)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-31079c-vdg69q
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * MUI Imports
 */
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Components Imports
 */
import revampTheme from 'theme/revampTheme';
import { ThemeProvider, useTheme } from '@mui/material';
import Hero from 'revamp/ui/Hero';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { deleteCookie, getCookie } from 'cookies-next';
import * as helpers from 'utils';

const TabsSection = dynamic(() => import('revamp/ui/TabsSection'), {
  loading: () => <p>Loading...</p>,
});
const GridFeature = dynamic(() => import('revamp/ui/GridFeature'), {
  loading: () => <p>Loading...</p>,
});
const SingleTestimonial = dynamic(() => import('revamp/ui/SingleTestimonial'), {
  loading: () => <p>Loading...</p>,
});
const Stats = dynamic(() => import('revamp/ui/Stats'), {
  loading: () => <p>Loading...</p>,
});
const EnterpriseGrowth = dynamic(() => import('revamp/ui/EnterpriseGrowth'), {
  loading: () => <p>Loading...</p>,
});
const FeatureBulletWithTestimonials = dynamic(
  () => import('revamp/ui/FeatureBulletWithTestimonials'),
  {
    loading: () => <p>Loading...</p>,
  },
);
const SecurityFeature = dynamic(() => import('revamp/ui/SecurityFeature'), {
  loading: () => <p>Loading...</p>,
});
const GetDemoSection = dynamic(() => import('revamp/ui/GetDemoSection'), {
  loading: () => <p>Loading...</p>,
});

const verifyUser = async (callback, token) => {
  const verifyUrl = 'https://auth.api.zesty.io/verify';
  const handleLogout = () => {
    deleteCookie(helpers.isProd ? 'APP_SID' : 'DEV_APP_SID', {
      domain: '.zesty.io',
    });
    deleteCookie('isAuthenticated');
    deleteCookie('ZESTY_WORKING_INSTANCE', {});
    callback(false);
  };

  const response = await fetch(verifyUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data?.code === 200 ? callback(true) : handleLogout();
};

function Homepage({ content }) {
  const { palette } = useTheme();
  const [isLoggined, setisLoggined] = useState(false);
  const token = getCookie('APP_SID');

  useEffect(() => {
    if (content.zesty.isAuthenticated || isLoggined) {
      window.location.href = '/dashboard/';
    }
  }, [content.zesty.isAuthenticated, isLoggined]);

  useEffect(() => {
    verifyUser(setisLoggined, token);
  }, [token]);

  return (
    <>
      <ThemeProvider theme={() => revampTheme(palette.mode)}>
        <Hero />
      </ThemeProvider>
      <ThemeProvider theme={() => revampTheme(palette.mode)}>
        <TabsSection />
        <GridFeature />
        <SingleTestimonial />
        <Stats />
        <SecurityFeature />
        <EnterpriseGrowth />
        <FeatureBulletWithTestimonials />
        <GetDemoSection />
      </ThemeProvider>
    </>
  );
}

export default Homepage;
