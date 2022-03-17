/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Technology Overview
 * Name: technology_overview
 * Model ZUID: 6-bea29b8bc7-163xd7
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-bea29b8bc7-163xd7
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import HeroWithDashboardScreenshotAndCta from 'blocks/heroes/HeroWithDashboardScreenshotAndCta/HeroWithDashboardScreenshotAndCta';
import FeatureListWithDesktopAppScreenshot from 'blocks/features/FeatureListWithDesktopAppScreenshot/FeatureListWithDesktopAppScreenshot.js';
import SimpleCentered from 'blocks/features/SimpleCentered/SimpleCentered.js';
import FeaturesWithCardRepresentation from 'blocks/features/FeaturesWithCardRepresentation/FeaturesWithCardRepresentation.js';
import FeaturesWithMobileScreenshot from 'blocks/features/FeaturesWithMobileScreenshot/FeaturesWithMobileScreenshot.js';
import WithCompanyLogo from 'blocks/testimonials/WithCompanyLogo/WithCompanyLogo.js';
import VerticallyAlignedBlogCardsWithShapedImage from 'blocks/blog/VerticallyAlignedBlogCardsWithShapedImage/VerticallyAlignedBlogCardsWithShapedImage.js';
import CtaWithInputField from 'blocks/cta/CtaWithInputField/CtaWithInputField.js';
import Container from 'components/Container';
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';

function TechnologyOverview({ content }) {

  const theme = useTheme();
  const headerProps = {
    title: content?.title,
    description: content?.header_description,
    image: content?.header_image?.data && content?.header_image?.data[0]?.url,
    cta_left: content?.cta_left.data && content?.cta_left?.data[0]?.button_text,
    cta_right:
      content?.cta_right?.data && content?.cta_right?.data[0]?.button_text,
    cta_left_url:
      content?.cta_left?.data &&
      content?.cta_left?.data[0]?.internal_link.data[0]?.meta?.web?.url,
    cta_right_url:
      content?.cta_right.data &&
      content?.cta_right?.data[0]?.internal_link.data[0]?.meta?.web?.url,
  };
  return (
    <>
      {/* Headers */}
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <HeroWithDashboardScreenshotAndCta {...headerProps} />
      </Box>

      {/* Key Features  */}
      <FeatureListWithDesktopAppScreenshot
        header={content?.key_features_header}
        image={content?.key_features_image}
        content={content?.key_features_content}
      />

      {/* Benefits  */}
      <SimpleCentered header={null} cards={null} description={null} />
      {/* Feature List  */}
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <FeaturesWithMobileScreenshot
          header={''}
          content={content?.feature_list_content}
          image={content?.featured_image}
        />
      </Box>

      {/* Tech Icons */}
      <FeaturesWithCardRepresentation
        cta={content?.cta}
        cards={content?.tech_features_tiles?.data}
      />

      {/* Social Proof */}
      <WithCompanyLogo content={content?.social_proof} />

      {/* LINK TO BLOG */}
      <VerticallyAlignedBlogCardsWithShapedImage
        title={'Industry Insights'}
        description={
          ' Stay up-to-date with the latest in digital experience, content management, and more.'
        }
      />

      {/* Final Cta  */}
      <CtaWithInputField
        title={'Subscribe to the zestiest newsletter in the industry'}
        description={
          'Get the latest from the Zesty team, from whitepapers to product updates.'
        }
        cta={'Subscribe'}
      />

      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      {/* <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div>
      <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div> */}
      {/* End of Zesty.io output example */}
    </>
  );
}

export default TechnologyOverview;
