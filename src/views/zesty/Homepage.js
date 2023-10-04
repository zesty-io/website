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
import Hero from 'revamp/ui/HeroV2';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';

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

export const removeHTMLtags = (str) => {
  if (str == '' || str == null || str == undefined) return undefined;
  return str.replace(/<[^>]*>/g, '');
};

function Homepage({ content }) {
  const { palette } = useTheme();
  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    const prevUrl = sessionStorage.getItem('prevUrl');
    if (content.zesty.isAuthenticated || isLoggedIn) {
      // redirect the user to previous url from SSO
      if (prevUrl && !['', '/'].includes(prevUrl)) {
        window.location.href = prevUrl;
      } else {
        window.location.href = '/dashboard/';
      }
    }
  }, [content.zesty.isAuthenticated, isLoggedIn]);

  console.log(content);

  const heroProps = {
    HeroText: removeHTMLtags(content?.header_title_and_description)
      .replace('&amp;', '&')
      .split(','),
    primaryBtn: content?.primarybtn,
    primaryBtnLink: content?.primarybtnlink?.data?.[0].meta?.web?.uri,
    secondaryBtn: content?.secondarybtn,
    secondaryBtnLink: content?.secondarybtnlink?.data?.[0].meta?.web?.uri,
    subtitle2: content?.subtitle,
    heroImage: content?.header_graphic?.data?.[0]?.url,
  };

  const tabSectionProps = {
    header: removeHTMLtags(content?.features_title),
    tabs: content?.features_options,
  };

  const statsProps = {
    title: content?.stats_title,
    header: content?.stats_header,
    subHeading: content?.stats_subheading,
  };

  const enterpriseProps = {
    overline: content?.enterprise_overline,
    heading: content?.enterprise_heading,
    supportingText: content?.enterprise_supporting_text,
    primaryBtn: content?.enterprise_primary_btn_text,
    primaryBtnLink: content?.enterprise_primary_btn_link,
    secondaryBtn: content?.enterprise_secondary_btn_text,
    secondaryBtnLink: content?.enterprise_secondary_btn_link,
    caseStudiesList: content?.enterpise_case_study?.data?.map((item) => {
      return {
        mainImage: item?.main_image?.data?.[0]?.url,
        logo: item?.logo?.data?.[0]?.url,
        description: item?.description,
        link: item?.link?.data[0]?.meta?.web?.uri,
      };
    }),
  };

  const regex = /<li>(.*?)<\/li>/g;
  const featureTestimonialsList = [];

  // Use a loop to iterate through matches and extract the text content
  let match;
  while (
    (match = regex.exec(content?.feature_testimonial_list_items)) !== null
  ) {
    featureTestimonialsList.push(match[1]);
  }

  const featureTestimonialsProps = {
    overline: content?.feature_testimonial_overline,
    heading: content?.feature_testimonial_heading,
    supportingText: content?.feature_testimonial_supporting__text,
    image: content.feature_testimonial_image?.data?.[0]?.url,
    testimonial: content?.feature_testimonial_,
    testimonialLogo: content.feature_testimonial_logo?.data?.[0]?.url,
    lists: featureTestimonialsList,
  };

  const singleTestimonialProps = {
    witness: content?.singletestimonial_witness?.data?.[0]?.url,
    name: content?.singletestimonial_name,
    role: content?.singletestimonial_role,
    logo: content?.singletestimonial_logo?.data?.[0]?.url,
    header: content?.singletestimonial_header,
    quote: content?.singletestimonial_quote,
  };

  const gridFeatureProps = {
    overline: content?.grid_feature_overline,
    heading: content?.grid_feature_heading,
    supportingText: content?.grid_feature_supporting_text,
    featureLists: content?.grid_feature_list?.data?.map((item) => {
      return {
        image: item?.feature_image?.data?.[0]?.url,
        title: item?.feature_title,
        description: item?.feature_description,
      };
    }),
  };

  const securityFeatureProps = {
    overline: content?.security_feature_overline,
    heading: content?.security_feature_heding,
    supportingText: content?.security_feature_supporting_text,
    image: content?.security_feature_image?.data?.[0]?.url,
  };

  return (
    <>
      <ThemeProvider theme={() => revampTheme(palette.mode)}>
        <Hero {...heroProps} />
      </ThemeProvider>
      <ThemeProvider theme={() => revampTheme(palette.mode)}>
        <TabsSection {...tabSectionProps} />
        <Stats {...statsProps} />
        <EnterpriseGrowth {...enterpriseProps} />
        <FeatureBulletWithTestimonials {...featureTestimonialsProps} />
        <SingleTestimonial {...singleTestimonialProps} />
        <GridFeature {...gridFeatureProps} />
        <SecurityFeature {...securityFeatureProps} />
        <GetDemoSection />
      </ThemeProvider>
    </>
  );
}

export default Homepage;
