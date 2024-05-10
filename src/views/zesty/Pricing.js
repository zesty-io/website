/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Pricing
 * Name: pricing
 * Model ZUID: 6-ef1038-d9tb16
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)
 * content (wysiwyg_advanced)
 * fine_print (wysiwyg_basic)
 * volume_discount_image (images)
 * enterprise_image (images)
 * volume_pricing (text)
 * volume_discount_description (wysiwyg_advanced)
 * instance_definition (textarea)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-ef1038-d9tb16
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

// Mui Imports
import React from 'react';

// Components Import
import PricingHero from '../../blocks/pricing/revamp/PricingHero';
import useFetch from 'components/hooks/useFetch';
import FillerContent from 'components/globals/FillerContent';
import { PricingTierCards } from 'blocks/pricing/revamp/PricingTierCards';
import PricingTable from 'blocks/pricing/revamp/PricingTable';
import AdditionalFeatures from 'blocks/pricing/revamp/AdditionalFeatures';
import Testimonial from 'blocks/pricing/revamp/Testimonial';
import FAQs from 'blocks/pricing/revamp/FAQs';
import Brands from 'blocks/pricing/revamp/Brands';

const filterAdditionalFeatures = (features) => {
  return features.filter((feature) => feature.classification[0] === "Add-on's");
};

function Pricing({ content }) {
  const { data: levers } = useFetch(
    `/-/pricing-levers-revamp.json`,
    content.zestyProductionMode,
  );

  const { data: leverClassification } = useFetch(
    `/-/pricing-levers-classification.json`,
    content.zestyProductionMode,
  );

  const heroProps = {
    title: content.title,
    subtitle: content.instance_definition,
    tiers: content.tiers.data,
  };

  const faqsProps = {
    faqs: content?.related_faqs?.data,
    title: content?.faqs_title,
    subtitle: content?.faqs_subtitle,
  };

  const additionalFeaturesProps = {
    features: filterAdditionalFeatures(levers),
    title: content.additional_features_title,
  };

  const pricingTableProps = {
    levers: levers,
    classification: leverClassification,
    tiers: content.pricing_tiers_revamp.data,
  };

  const testimonialProps = {
    testimonials: content.testimonials.data,
    title: content.testimonial_title,
  };

  return (
    <>
      <PricingHero {...heroProps} />
      <PricingTierCards pricingTiers={content.pricing_tiers_revamp.data} />
      <Brands
        heading_text={
          content.logos_header || FillerContent.rich_text_sub_heading
        }
        variant=""
        logoItems={content.logos?.data}
        maxWidth={1400}
        marginTop={10}
      />
      <Testimonial {...testimonialProps} />
      <PricingTable {...pricingTableProps} />
      <AdditionalFeatures {...additionalFeaturesProps} />
      <FAQs {...faqsProps} />
    </>
  );
}

export default Pricing;
