/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Why Zesty
 * Name: why_zesty
 * Model ZUID: 6-8eb7dc85be-bjf80f
 * File Created On: Wed Feb 23 2022 14:50:40 GMT+0100 (Central European Standard Time)
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
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-8eb7dc85be-bjf80f
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import SimpleHeroWithImageAndCtaButtonsPage from 'blocks/heroes/SimpleHeroWithImageAndCtaButtons/SimpleHeroWithImageAndCtaButtons.js';
import FeaturesWithIllustration from 'blocks/features/FeaturesWithIllustration';
import FeaturesWithMobileScreenshot from 'blocks/features/FeaturesWithMobileScreenshot/FeaturesWithMobileScreenshot.js';
import WithBorderedCardsAndBrandColor from 'blocks/stats/WithBorderedCardsAndBrandColor/WithBorderedCardsAndBrandColor.js';
import CtaWithCoverImage from 'blocks/cta/CtaWithCoverImage/CtaWithCoverImage.js';
import VerticallyAlignedBlogCardsWithShapedImage from 'blocks/blog/VerticallyAlignedBlogCardsWithShapedImage/VerticallyAlignedBlogCardsWithShapedImage.js';
import CtaWithInputField from 'blocks/cta/CtaWithInputField/CtaWithInputField.js';
import CtaWithIllustration from 'blocks/cta/CtaWithIllustration';

function WhyZesty({ content }) {
  console.log(content, '123123');
  let overview_text =
    undefined !== content.hybrid_vs_headless_content
      ? content.hybrid_vs_headless_content
      : 'Failed to load content.';
  let image_url =
    undefined !== content.hybrid_vs_headless_image
      ? content.hybrid_vs_headless_image
      : 'https://pzcvtc6b.media.zestyio.com/content-management.png';

  const SimpleHeroWithImageAndCtaButtonsPageProps = {
    title: content?.header_title,
    description: content?.header_description,
    cta_left: content?.cta_left.data && content?.cta_left?.data[0]?.button_text,
    cta_right:
      content?.cta_right.data && content?.cta_right?.data[0]?.button_text,
    cta_left_url:
      content?.cta_left.data &&
      content?.cta_left?.data[0]?.internal_link.data[0]?.meta?.web?.url,
    cta_right_url:
      content?.cta_right.data &&
      content?.cta_right?.data[0]?.internal_link.data[0]?.meta?.web?.url,
  };

  return (
    <>
      {/* Header */}
      <SimpleHeroWithImageAndCtaButtonsPage
        {...SimpleHeroWithImageAndCtaButtonsPageProps}
      />

      {/* Benefits */}
      {content?.benefits?.data?.map((e) => {
        return (
          <FeaturesWithMobileScreenshot
            content={e.benefit_content}
            header={e.header}
            image={e.benefit_image}
          />
        );
      })}

      {/* HYBRID VS HEADLESS */}
      <FeaturesWithIllustration
        rich_text={overview_text}
        image_url={image_url}
      />

      {/* PROOF POINTS */}
      <WithBorderedCardsAndBrandColor
        cards={content.proof_points.data}
        content={content.proof_points_content}
      />

      {/* CASE STUDY */}
      {content?.case_study?.data?.map((e) => (
        <CtaWithCoverImage
          title={e.title}
          summary={e.summary}
          cta={e.cta}
          cta_url={e.link}
          image={e.image.data[0].url}
        />
      ))}

      {/* LINK TO PRODUCT PAGE */}
      <CtaWithIllustration
        title={'See how Zesty.io does CMS better'}
        description={'All the features and functions without the headache.'}
        cta={'Learn More'}
        cta_url={''}
        image={''}
      />

      {/* LINK TO BLOG */}
      <VerticallyAlignedBlogCardsWithShapedImage
        title={'Industry Insights'}
        description={
          'Stay up-to-date with the latest in digital experience, content management and more.'
        }
      />

      {/* FINAL CTA */}
      <CtaWithInputField
        title={'Subscribe to the zestiest newsletter in the industry'}
        description={
          'Get the latest from the Zesty team, from whitepapers to product updates.'
        }
        cta={'Subscribe'}
      />
      {/*
            <div style={{background: '#eee', border: '1px #000 solid', margin: '10px', padding: '20px', whiteSpace: 'pre-wrap', overflow: 'hidden'}}>
                <h2>Accessible Zesty.io JSON Object</h2>
                <pre>{JSON.stringify(content, null, 2)}</pre>
            </div>
            */}
    </>
  );
}

export default WhyZesty;
