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

// Local Assets Imports
import headless_digital from '../../../public/assets/images/headless-cms/headless-digital.svg';
import headless_commerce from '../../../public/assets/images/headless-cms/headless-commerce.svg';
import headless_enterprise from '../../../public/assets/images/headless-cms/headless-enterprise.svg';
import headless_blog_editorial from '../../../public/assets/images/headless-cms/headless-blogs-editorial.svg';

// Components Imports
import Hero from '../../components/zesty/TechnologyOverview/Hero';
import UseCase from '../../components/zesty/TechnologyOverview/UseCase';
import TimeLine from '../../components/zesty/TechnologyOverview/TimeLine';
import GetStarted from '../../components/zesty/TechnologyOverview/GetStarted';
import Features from '../../components/zesty/TechnologyOverview/Features';
import HeadlessApi from '../../components/zesty/TechnologyOverview/HeadlessApi';
import TopBrands from '../../components/zesty/TechnologyOverview/TopBrands';
import Articles from '../../components/zesty/TechnologyOverview/Articles';
import TechStack from '../../components/zesty/TechnologyOverview/TechStack';

function TechnologyOverview({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  const pageData = {
    theme,
    isMobile,
    isDarkMode,
    content,
  };

  const useCase = [
    {
      logo: headless_digital,
      description: 'Headless digital asset management',
    },
    {
      logo: headless_commerce,
      description: 'Headless commerce',
    },
    {
      logo: headless_enterprise,
      description: 'Headless enterprise',
    },
    {
      logo: headless_blog_editorial,
      description: 'Blogs & editorial',
    },
  ];

  return (
    <Box>
      <Hero {...pageData} />
      <UseCase useCaseData={useCase} {...pageData} />
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
