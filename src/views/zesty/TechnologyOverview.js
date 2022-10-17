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
import Hero from '../../components/marketing/TechnologyOverview/Hero';
import UseCase from '../../components/marketing/TechnologyOverview/UseCase';
import TimeLine from '../../blocks/Timeline/TimeLine';
import GetStarted from '../../components/marketing/TechnologyOverview/GetStarted';
import Features from '../../components/marketing/TechnologyOverview/Features';
import HeadlessApi from '../../components/marketing/TechnologyOverview/HeadlessApi';
import TopBrands from '../../blocks/caseStudies/TopBrands';
import Articles from '../../blocks/blog/Articles/Articles';
import TechStack from '../../blocks/integrations/TechStack';
import Growth from 'blocks/zesty/Growth/Growth';
import SimpleCardLogo from 'blocks/logoGrid/SimpleCardLogo/SimpleCardLogo';

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

  const timelineData = {
    header: content.how_it_works_header || FillerContent.description,
    data: [
      {
        description: content.step_1_description || FillerContent.description,
        image: content.step_1_image?.data[0].url || FillerContent.photos[0].src,
      },
      {
        description: content.step_2_description || FillerContent.description,
        image: content.step_2_image?.data[0].url || FillerContent.photos[0].src,
      },
      {
        description: content.step_3_description || FillerContent.description,
        image: content.step_3_image?.data[0].url || FillerContent.photos[0].src,
      },
      {
        description: content.step_4_description || FillerContent.description,
        image: content.step_4_image?.data[0].url || FillerContent.photos[0].src,
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

  const bottomData = {
    graphic: content?.bottom_cta_graphic?.data[0].url || '',
    titleAndDescription:
      content.bottom_cta_title_and_description || FillerContent.rich_text,
    cta_text: content.bottom_cta_text || FillerContent.cta,
    secondary_cta_text: content.bottom_secondary_cta_text || FillerContent.cta,
    secondary_cta_link: content.bottom_secondary_cta_link || FillerContent.href,
  };

  return (
    <Box>
      <Hero {...pageData} />
      <Container sx={{ pb: 15 }}>
        <SimpleCardLogo
          variant="outlined"
          logoItems={content?.logos?.data || []}
        />
      </Container>
      <UseCase {...pageData} />
      <TimeLine timelineData={timelineData} {...pageData} />
      <Box sx={{ py: 5 }}>
        <Growth {...growthData} />s
      </Box>
      <GetStarted {...pageData} />
      <Features {...pageData} />
      <HeadlessApi {...pageData} />
      <Box sx={{ pt: 10 }}>
        <TechStack
          background={theme.palette.common.white}
          {...techStackData}
          {...pageData}
        />
      </Box>
      <TopBrands
        backgroundColor={theme.palette.common.white}
        title={content.case_study_header}
        {...pageData}
      />
      <Bottom {...bottomData} />
      <Articles
        title={content.articles_header}
        articles={content.articles?.data}
        {...pageData}
      />
    </Box>
  );
}

export default TechnologyOverview;
