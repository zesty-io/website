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
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Components Imports
import Hero from '../../components/marketing/TechnologyOverview/Hero';
import UseCase from '../../components/marketing/TechnologyOverview/UseCase';
import TimeLine from '../../components/marketing/TechnologyOverview/TimeLine';
import GetStarted from '../../components/marketing/TechnologyOverview/GetStarted';
import Features from '../../components/marketing/TechnologyOverview/Features';
import HeadlessApi from '../../components/marketing/TechnologyOverview/HeadlessApi';
import TopBrands from '../../components/marketing/TechnologyOverview/TopBrands';
import Articles from '../../components/marketing/TechnologyOverview/Articles';
import TechStack from '../../blocks/integrations/TechStack';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';

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
  console.log(FillerContent);

  return (
    <Box>
      <Hero {...pageData} />
      <UseCase {...pageData} />
      <TimeLine {...pageData} />
      <GetStarted {...pageData} />
      <Features {...pageData} />
      <HeadlessApi {...pageData} />
      <TopBrands {...pageData} />
      <Articles {...pageData} />
      <TechStack {...pageData} />
    </Box>
  );
}

export default TechnologyOverview;
