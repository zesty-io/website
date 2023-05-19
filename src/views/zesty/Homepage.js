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
import { useEffect, useState } from 'react';
import revampTheme from 'theme/revampTheme';
import { ThemeProvider, useTheme } from '@mui/material';
import Hero from 'revamp/ui/Hero';
import BlackHero from 'revamp/ui/BlackHero';
import dynamic from 'next/dynamic';

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

function Homepage() {
  const [isDark, setIsDark] = useState(true);
  const { palette } = useTheme();

  useEffect(() => {
    if (new Date().getTime() % 2 === 0) setIsDark(false);
    else setIsDark(true);
  }, []);

  return (
    <>
      <ThemeProvider theme={() => revampTheme(palette.mode)}>
        {!isDark ? <Hero /> : <BlackHero />}
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
