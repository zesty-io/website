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

import React, { useEffect, useState } from 'react';
import HeroWithDashboardScreenshotAndCta from 'blocks/heroes/HeroWithDashboardScreenshotAndCta/HeroWithDashboardScreenshotAndCta';
import FeatureListWithDesktopAppScreenshot from 'blocks/features/FeatureListWithDesktopAppScreenshot/FeatureListWithDesktopAppScreenshot.js';
import SimpleCentered from 'blocks/features/SimpleCentered/SimpleCentered.js';
import FeaturesWithCardRepresentation from 'blocks/features/FeaturesWithCardRepresentation/FeaturesWithCardRepresentation.js';
import FeaturesWithMobileScreenshot from 'blocks/features/FeaturesWithMobileScreenshot/FeaturesWithMobileScreenshot.js';
import WithCompanyLogo from 'blocks/testimonials/WithCompanyLogo/WithCompanyLogo.js';
import VerticallyAlignedBlogCardsWithShapedImage from 'blocks/blog/VerticallyAlignedBlogCardsWithShapedImage/VerticallyAlignedBlogCardsWithShapedImage.js';
import CtaWithInputField from 'blocks/cta/CtaWithInputField/CtaWithInputField.js';
import { Box } from '@mui/material';
import { useTheme } from '@mui/system';
import CircularProgressWithLabel from '@mui/material/CircularProgress';
import FillerContent from 'components/FillerContent';

function TechnologyOverview({ content }) {
  const theme = useTheme();
  const [isLoaded, setIsLoaded] = useState(true);
  const [allArticles, setAllArticles] = useState([]);
  let zestyURL =
    (undefined === process.env.PRODUCTION) == 'true' || process.env.PRODUCTION
      ? process.env.zesty.production
      : process.env.zesty.stage;

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsLoaded(true);
        const uri = `${zestyURL}/-/all-articles-hydrated.json?limit=3`;

        const response = await fetch(uri);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const articles = await response.json();

        setAllArticles(articles);
      };

      fetchData();
    } catch (error) {
      console.error(`Could Not Find Results: ${error}`);
    } finally {
      setIsLoaded(false);
    }
  }, []);

  const headerProps = {
    title: content.title || FillerContent.header,
    subtitle: content.sub_title || FillerContent.description,
    description: content.header_description || FillerContent.description,
    image:
      (content.header_image?.data && content.header_image?.data[0]?.url) ||
      FillerContent.image,
    cta_left:
      (content.cta_left?.data && content.cta_left?.data[0]?.button_text) ||
      FillerContent.cta,
    cta_right:
      (content.cta_right?.data && content.cta_right?.data[0]?.button_text) ||
      FillerContent.cta,
    cta_left_url:
      (content.cta_left?.data &&
        content.cta_left?.data[0]?.internal_link.data[0]?.meta?.web?.url) ||
      FillerContent.cta,
    cta_right_url:
      (content.cta_right.data &&
        content.cta_right?.data[0]?.internal_link.data[0]?.meta?.web?.url) ||
      FillerContent.cta,
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
        header={content.key_features_header || FillerContent.header}
        image={
          (content.key_features_image?.data &&
            content.key_features_image?.data[0]?.url) ||
          FillerContent.image
        }
        content={content.key_features_content || FillerContent.rich_text}
      />

      {/* Benefits  */}
      <SimpleCentered
        header={content.benefits_header}
        description={null}
        cards={content.technology_benefits.data}
      />

      {/* Feature List  */}
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <FeaturesWithMobileScreenshot
          header={''}
          content={content.feature_list_content || FillerContent.rich_text}
          image={
            (content.featured_image?.data &&
              content.featured_image?.data[0]?.url) ||
            FillerContent.image
          }
          feature_list_h1={content.feature_list_h1 || FillerContent.header}
        />
      </Box>

      {/* Tech Icons */}
      <FeaturesWithCardRepresentation
        cta={content.cta || FillerContent.cta}
        cards={content.tech_features_tiles?.data || FillerContent.featuresCards}
      />

      {/* Social Proof */}
      <WithCompanyLogo
        header={content.testimonials_h1 || FillerContent.header}
        logo={
          (content.testimonials_logo?.data &&
            content.testimonials_logo?.data[0]?.url) ||
          FillerContent.image
        }
        content={content?.social_proof || FillerContent.rich_text}
      />

      {/* Industry Insights > Latest Blogs articles */}
      {isLoaded ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgressWithLabel />
        </Box>
      ) : (
        <VerticallyAlignedBlogCardsWithShapedImage
          title={'Industry Insights'}
          description={
            'Stay up-to-date with the latest in digital experience, content management and more.'
          }
          popularArticles={allArticles}
          ctaBtn="Read more"
          ctaUrl={/mindshare/}
        />
      )}

      {/* Final Cta  */}
      <CtaWithInputField
        title={'Subscribe to the zestiest newsletter in the industry'}
        description={
          'Get the latest from the Zesty team, from whitepapers to product updates.'
        }
        cta={'Subscribe'}
      />
    </>
  );
}

export default TechnologyOverview;
