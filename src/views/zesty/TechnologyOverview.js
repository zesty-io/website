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
 * View  /solutions/headless-cms
 */

// MUI Imports
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Components Imports
import SimpleHeroWithImageAndCtaButtons from 'blocks/zesty/Hero/SimpleHeroWithImageAndCtaButtons';
import UseCase from '../../components/marketing/TechnologyOverview/UseCase';
import AlternateColumns from 'blocks/zesty/PageLayouts/AlternateColumns';
import Features from 'blocks/zesty/PageLayouts/Features';
import CenteredContents from 'blocks/contentBlocks/CenteredContents';
import CaseStudyCards from 'blocks/zesty/Cards/CaseStudyCards';
import SimpleVerticalBlogCards from 'blocks/blog/SimpleVerticalBlogCards/SimpleVerticalBlogCards';
import TechStack from '../../blocks/integrations/TechStack';
import Growth from 'blocks/zesty/Growth/Growth';
import SimpleCardLogo from 'blocks/zesty/LogoGrid/SimpleCardLogo';
import ImageWithContentsCta from 'blocks/zesty/Cta/ImageWithContentsCta';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';
import Bottom from 'blocks/zesty/Bottom/Bottom';

function TechnologyOverview({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  const pageData = {
    theme,
    isMobile,
    isDarkMode,
    content,
    FillerContent,
  };

  const heroProps = {
    mainTitle: content.header_eyebrow,
    title: content.title,
    description: content.header_description,
    image: content.header_image?.data && content.header_image?.data[0]?.url,
    cta_right: content.cta_right_text,
    cta_right_url: content.cta_right_url?.data[0]?.meta?.web?.url,
    backgroundColor: theme.palette.zesty.zestyBackgroundBlueGradient,
  };

  const timelineData = {
    header_content: content.how_it_works_header,
    column_data: [
      {
        content: content.step_1_description,
        image: content.step_1_image?.data[0].url,
      },
      {
        content: content.step_2_description,
        image: content.step_2_image?.data[0].url,
      },
      {
        content: content.step_3_description,
        image: content.step_3_image?.data[0].url,
      },
      {
        content: content.step_4_description,
        image: content.step_4_image?.data[0].url,
      },
    ],
  };

  const techStackData = {
    text_content: content.integrations_description,
    logos: content.integrations_logos?.data,
    cta_text: content.integrations_button,
    cta_link: content.integration_link.data[0].meta.web.uri,
  };

  const growthData = {
    titleAndDescription:
      content.growth_title_and_description || FillerContent.rich_text,
    cards: content?.growth_cards?.data,
  };

  const headlessApiProps = {
    header: content.headless_apis,
    primaryCtaText: content.headless_api_cta_text,
    mainImage: content.headless_apis_graphic?.data[0]?.url,
    mainImageWidth: 1000,
  };

  const getStartedProps = {
    mainImage: content.get_started_graphic.data[0].url,
    header: content.get_started_header,
    primaryCtaText: content.bottom_cta_primary,
    secondaryCtaText: content.bottom_cta_secondary,
    isSCurveBackground: true,
  };

  const caseStudiesProps = {
    header: content.case_study_header,
    g2BadgesData: content.g2_badges?.data,
    caseStudiesData: content.case_studies?.data,
  };

  const bottomData = {
    graphic: content?.bottom_cta_graphic?.data[0].url || '',
    titleAndDescription:
      content.bottom_cta_title_and_description || FillerContent.rich_text,
    cta_text: content.bottom_cta_text || FillerContent.cta,
    secondary_cta_text: content.bottom_secondary_cta_text || FillerContent.cta,
    secondary_cta_link: content.bottom_secondary_cta_link || FillerContent.href,
  };

  const feature_data =
    content.features_tiles?.data.reduce((acc, item) => {
      acc.push({
        icon_image: item.icon_image?.data[0].url,
        feature_name: item.feature_name,
        content: item.content,
      });

      return acc;
    }, []) || [];

  return (
    <Box>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <Container sx={{ pb: 15 }}>
        <SimpleCardLogo
          variant="outlined"
          logoItems={content?.logos?.data || []}
        />
      </Container>
      <UseCase {...pageData} />
      <AlternateColumns {...timelineData} />
      <Box sx={{ py: 5 }}>
        <Growth {...growthData} />
      </Box>
      <ImageWithContentsCta {...getStartedProps} sx={{ pb: 20 }} />
      <Features
        data={feature_data}
        features_header={
          content.custom_headless_description || FillerContent.description
        }
      />
      <CenteredContents {...headlessApiProps} />
      <Box sx={{ pt: 10 }}>
        <TechStack
          background={
            isDarkMode
              ? theme.palette.zesty.zestyDarkBlue
              : theme.palette.common.white
          }
          {...techStackData}
          {...pageData}
        />
      </Box>
      <CaseStudyCards {...caseStudiesProps} />
      <Bottom {...bottomData} />
      <Box sx={{ mt: 7 }}>
        <SimpleVerticalBlogCards
          cards={content.articles?.data}
          title={content.articles_header}
          isCtaButton={false}
          gridMd={4}
        />
      </Box>
    </Box>
  );
}

export default TechnologyOverview;
