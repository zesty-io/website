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

import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import HeroWithIllustrationAndCta from 'blocks/heroes/HeroWithIllustrationAndCta/HeroWithIllustrationAndCta';
import WithSwiperAndBrandBackgroundColor from 'blocks/logoGrid/WithSwiperAndBrandBackgroundColor';
import FeaturesWithIllustration from 'blocks/features/FeaturesWithIllustration';
import ReviewsWithSimpleBoxes from 'blocks/testimonials/ReviewsWithSimpleBoxes';
import VerticallyAlignedBlogCardsWithShapedImage from 'blocks/blog/VerticallyAlignedBlogCardsWithShapedImage';
import CtaWithInputField from 'blocks/cta/CtaWithInputField';
import Stories from 'blocks/portfolioGrid/Stories/Stories';
import Container from 'components/Container';
import FillerContent from 'components/globals/FillerContent';
import useFetch from 'components/hooks/useFetch';
import Dashboard from 'components/accounts/dashboard';
import { useZestyStore } from 'store';

function Homepage({ content }) {
  const { isAuthenticated, isUser } = useZestyStore((state) => state);
  const theme = useTheme();

  // dashboard need to verify the session

  //  const { data: reviewsData, isPending: reviewPending  } = useFetch(`/-/reviews.json`);
  const {
    data: allArticles,
    isPending: articlesPending,
    error,
  } = useFetch(
    `/-/all-articles-hydrated.json?limit=3`,
    content.zestyProductionMode,
  );

  let image_url = content?.zesty_benefits_image
    ? content.zesty_benefits_image.data[0].url
    : 'https://pzcvtc6b.media.zestyio.com/content-management.png';
  const heroProps = {
    title: content.title,
    description: content.content || '',
    subtitle: content.simple_intro_text,
    image: content.main_image?.data[0].url || FillerContent.image,
    button_left_text: content.hero_button_left || FillerContent.header,

    button_left_link:
      content.hero_hero_button_left_link?.data[0]?.url || FillerContent.header,
    hero_button_right: content.hero_button_right || FillerContent.header,
    button_right_link:
      content.hero_hero_button_left_link?.data[0]?.url || FillerContent.header,
  };

  // if the visitor is zesty user we output homepage
  if (isUser) {
    return <Dashboard />;
  }
  // marketing homepage
  return (
    <>
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      <HeroWithIllustrationAndCta {...heroProps} />
      <WithSwiperAndBrandBackgroundColor logos={content.homepage_logos?.data} />
      <FeaturesWithIllustration
        rich_text={content.zesty_benefits}
        image_url={image_url}
        wysiwyig_type=""
      />
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Stories
            eyeBrow={content.case_studies_eyebrow || FillerContent.header}
            clientTitle={content.case_studies_header || FillerContent.header}
            clientInfo={content.case_study_cards?.data || []}
          />
        </Container>
        <ReviewsWithSimpleBoxes
          header={content.testimonials_content}
          list={content.testimonials?.data || []}
        />
      </Box>
      {/* Latest Articles */}
      <Box sx={{ pt: 4 }}>
        <VerticallyAlignedBlogCardsWithShapedImage
          title={'Industry Insights'}
          description={
            'Stay up-to-date with the latest in digital experience, content management and more.'
          }
          ctaBtn={'View More' || FillerContent.cta}
          ctaUrl="/mindshare/"
          popularArticles={allArticles || FillerContent.missingDataArray}
        />
      </Box>
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

export default Homepage;
