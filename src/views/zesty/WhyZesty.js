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
import FeaturesWithMobileScreenshot from 'blocks/features/FeaturesWithMobileScreenshot/FeaturesWithMobileScreenshot.js';
import { Box } from '@mui/system';
import FillerContent from 'components/globals/FillerContent';
import { useTheme } from '@mui/material/styles';
//import SingleRowHero from 'blocks/zesty/Hero/SingleRowHero';
import SimpleCardLogo from 'blocks/logoGrid/SimpleCardLogo/SimpleCardLogo';
import OverviewProcessComp from 'components/marketing/WhyZesty/OverviewProcessComp';
import DarkBlueCta from 'blocks/zesty/Cta/DarkBlueCta';
import Features from 'blocks/features/Features/Features';
import { WithHighlightedCard } from 'blocks/testimonials';
import Bottom from 'blocks/zesty/Bottom/Bottom';
import Container from 'components/Container';

/* ------------------------------------------------------------------- */

function WhyZesty({ content }) {
  const theme = useTheme();

  const COLORS = [
    theme.palette.zesty.zestyWhite,
    theme.palette.common.white,
    theme.palette.zesty.zestyBlue,
    theme.palette.zesty.zestyWhite,
  ];

  const feature_data =
    content.key_features?.data.reduce((acc, item) => {
      acc.push({
        icon_image: item.icon_image?.data[0].url,
        feature_name: item.feature_name,
        content: item.content,
      });

      return acc;
    }, []) || [];

  const testimonialsData = {
    title: content.testimonial_title,
    data: content.testimonials?.data,
  };

  const bottomData = {
    graphic: content?.bottom_cta_image?.data[0].url || '',
    titleAndDescription: content.bottom_cta_text || FillerContent.rich_text,
    cta_text: content.bottom_cta_primary || FillerContent.cta,
    secondary_cta_text: content.bottom_cta_secondary || FillerContent.cta,
    secondary_cta_link:
      content.bottom_cta_secondary_link?.data[0].meta.web.uri ||
      FillerContent.href,
  };

  const headerProps = {
    mainTitle: content.header_title_main || FillerContent.header,
    title: content.header_title || FillerContent.header,
    image:
      (content.header_image?.data && content.header_image?.data[0]?.url) ||
      FillerContent.image,
    description: content.header_description || FillerContent.description,
    cta_left:
      (content.cta_left.data && content.cta_left?.data[0]?.button_text) ||
      FillerContent.cta,
    cta_right:
      (content.cta_right?.data && content.cta_right?.data[0]?.button_text) ||
      FillerContent.cta,
    cta_left_url:
      (content.cta_left?.data &&
        content.cta_left?.data[0]?.internal_link?.data[0]?.meta?.web?.url) ||
      FillerContent.href,
    cta_right_url:
      (content.cta_right.data &&
        content.cta_right?.data[0]?.internal_link?.data[0]?.meta?.web?.url) ||
      FillerContent.href,
  };

  return (
    <>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <SimpleHeroWithImageAndCtaButtonsPage {...headerProps} />
      </Box>

      {/* <SingleRowHero
        eyebrow={content.header_title_main}
        header={content.header_title}
        description={content.header_description}
        cta_left={content.cta_left.data[0].button_text}
        cta_left_link={content.cta_left.data[0].external_link}
        cta_right={content.cta_right.data[0].button_text}
        cta_right_link={content.cta_right.data[0].external_link}
        image={content.header_image.data[0].url}
      /> */}

      <OverviewProcessComp
        image={
          (content.overview_of_process_image.data &&
            content.overview_of_process_image.data[0].url) ||
          ''
        }
        content={content.overview_of_process_text || FillerContent.rich_text}
      />
      {/* Benefits */}
      <Box sx={{ mt: 15 }}>
        {content.benefits?.data?.slice(0, 2).map((e, i) => {
          return (
            <FeaturesWithMobileScreenshot
              background_color={COLORS[i]}
              index={i}
              content={e.benefit_content || FillerContent.rich_text}
              header={e.header || FillerContent.header}
              image={
                (e.benefit_image?.data && e.benefit_image?.data[0]?.url) ||
                FillerContent.image
              }
            />
          );
        })}
        <Container paddingY={0}>
          <DarkBlueCta
            sx={{ py: 15 }}
            header_content={content.middle_cta}
            cta_text={content.middle_cta_primary}
            cta_secondary_text={content.middle_cta_secondary}
            cta_secondary_link={
              content.middle_cta_secondary_link.data[0].meta.web.uri
            }
          />
        </Container>
        {/* Benefits */}
        <Box sx={{ mt: 10 }}>
          {content.benefits?.data?.slice(2, 4).map((e, i) => {
            return (
              <FeaturesWithMobileScreenshot
                text_color={i === 0 ? theme.palette.common.white : ''}
                background_color={COLORS[2 + i]}
                index={i}
                content={e.benefit_content || FillerContent.rich_text}
                header={e.header || FillerContent.header}
                image={
                  (e.benefit_image?.data && e.benefit_image?.data[0]?.url) ||
                  FillerContent.image
                }
              />
            );
          })}
        </Box>
      </Box>
      {/* Missing Case Study
      ==========================
      ==========================  */}
      <Box>
        <Features
          background_color={theme.palette.zesty.zestyBackgroundBlue}
          header_size={48}
          textHighlight={'Workflow management'}
          data={feature_data}
          features_header={content.key_features_text}
          card_name_color={theme.palette.zesty.zestyZambezi}
        />
      </Box>
      <Box sx={{ my: 10 }}>
        <WithHighlightedCard {...testimonialsData} />
      </Box>

      <Box sx={{ pb: 15 }}>
        <SimpleCardLogo
          logoItems={content?.client_logos.data}
          heading_text={content.logos_h2}
          maxWidth={1300}
          variant="outlined"
        />
      </Box>

      <Bottom {...bottomData} />
    </>
  );
}

export default WhyZesty;
