/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: A/B Landing Page 
 * Name: a_b_landing_page 
 * Model ZUID: 6-beb393cb89-4dl2n5
 * File Created On: Thu Oct 27 2022 02:20:23 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * title (text)
 * description (wysiwyg_basic)
 * header_image (images)
 * cta_button_text (text)
 * logo_bar_title (text)
 * logo_bar (one_to_many)
 * benefits_title (text)
 * benefits_sections (one_to_many)
 * features_title (text)
 * features (one_to_many)
 * testimonial_title (text)
 * testimonial (one_to_one)
 * bottom_cta (wysiwyg_basic)
 * middle_cta_button (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-beb393cb89-4dl2n5
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';
import Features from 'blocks/features/Features/Features';
import SimpleCardLogo from 'blocks/logoGrid/SimpleCardLogo/SimpleCardLogo';
import AlternateColumns from 'blocks/pageLayouts/ColumnLayouts/AlternateColumns';
import DarkBlueCta from 'blocks/zesty/Cta/DarkBlueCta';
import TwoColumnHeroWithImage from 'blocks/zesty/Hero/TwoColumnHeroWithImage';
import FillerContent from 'components/globals/FillerContent';
import { WithCompanyLogo } from 'blocks/testimonials';
import { useRouter } from 'next/router';

function ABLandingPage({ content }) {
  const theme = useTheme();
  const router = useRouter();
  const [heroContent, setHeroContent] = useState({
    title: content?.title || FillerContent.header,
    description: content?.description || FillerContent.rich_text,
    image: content?.header_image?.data[0].url || FillerContent.photos[0].src,
    primaryCta: content?.cta_button_text || '',
    secondaryCta: content?.cta_secondary_text || '',
  });
  const [featureData, setFeatureData] = useState({
    data:
      content.features?.data.reduce((acc, item) => {
        acc.push({
          icon_image: item?.icon_image?.data[0].url,
          feature_name: item?.feature_name,
          content: item?.content,
        });

        return acc;
      }, []) || [],
    header: content?.features_title || FillerContent.header,
    card_name_color: theme.palette.zesty.zestyZambezi,
  });
  const [testimonialData, setTestimonialData] = useState({
    header: content?.testimonial_title || FillerContent.description,
    content: content?.testimonial?.data[0]?.review || FillerContent.description,
    name:
      content?.testimonial?.data[0]?.reviewer_name || FillerContent.description,
    title:
      content?.testimonial?.data[0]?.reviewer_title ||
      FillerContent.description,
  });

  useEffect(() => {
    const filteredContent = content.datasets.data.filter(
      (item) => item.UTM_campaign === router.query.unique_identifier,
    )[0];

    /**********************************************
     * Set Dynamic hero content if set on cms
     ***********************************************/
    if (!!filteredContent) {
      setHeroContent({
        title: filteredContent?.title || content?.title || FillerContent.header,
        description:
          filteredContent?.description ||
          content?.description ||
          FillerContent?.rich_text,
        image:
          filteredContent?.header_image?.data[0].url ||
          content?.header_image?.data[0].url ||
          FillerContent.photos[0].src,
        primaryCta:
          filteredContent?.cta_button_text || content.cta_button_text || '',
        secondaryCta:
          filteredContent?.cta_secondary_text ||
          content.cta_secondary_text ||
          '',
      });

      /**********************************************
       * Set FeatureData  content if set on cms
       ***********************************************/
      setFeatureData({
        data:
          filteredContent.features?.data?.reduce((acc, item) => {
            acc.push({
              icon_image: item?.icon_image?.data[0].url,
              feature_name: item?.feature_name,
              content: item?.content,
            });

            return acc;
          }, []) ||
          featureData.data ||
          [],
        header:
          filteredContent.features_title ||
          featureData.header ||
          FillerContent.header,
        card_name_color: theme.palette.zesty.zestyZambezi,
      });

      setTestimonialData({
        header:
          filteredContent?.testimonial_title ||
          testimonialData.header ||
          FillerContent.description,
        content:
          filteredContent?.testimonial?.data[0]?.review ||
          testimonialData.content ||
          FillerContent.description,
        name:
          filteredContent?.testimonial?.data[0]?.reviewer_name ||
          testimonialData.name ||
          FillerContent.description,
        title:
          filteredContent?.testimonial?.data[0]?.reviewer_title ||
          testimonialData.title ||
          FillerContent.description,
      });
    }
  });

  const alternateColumnsData = content.benefits_sections?.data?.map((item) => {
    return {
      header: item.header,
      content: item.benefit_content,
      image: item.benefit_image.data[0].url,
    };
  });

  return (
    <Stack>
      <TwoColumnHeroWithImage {...heroContent} />
      <SimpleCardLogo
        invertLogo={false}
        heading_text={content?.logo_bar_title}
        logoItems={content?.logo_bar.data}
        variant={'outlined'}
        maxWidth={1280}
      />
      <AlternateColumns
        column_data={alternateColumnsData}
        header_content={content?.benefits_title}
        cta_link={content?.middle_cta_button_link?.data[0].meta.web.uri}
        cta_text={content?.middle_cta_button_text}
      />
      <DarkBlueCta
        sx={{ mt: 15, py: 10 }}
        cta_text={content?.middle_cta_button || FillerContent.cta}
        header_content={content?.middle_cta_text || FillerContent.header}
      />
      <Features
        header_size={48}
        data={featureData.data}
        features_header={featureData.header}
        card_name_color={featureData.card_name_color}
      />

      <WithCompanyLogo
        header={testimonialData.header}
        content={testimonialData.content}
        name={testimonialData.name}
        title={testimonialData.title}
      />

      <DarkBlueCta
        sx={{ my: 15, py: 10 }}
        cta_text={content?.middle_cta_button || FillerContent.cta}
        header_content={content?.bottom_cta || FillerContent.description}
      />
    </Stack>
  );
}

export default ABLandingPage;
