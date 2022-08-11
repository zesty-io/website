/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Integrations-Individual Pages 
 * Name: integrations_individual_pages 
 * Model ZUID: 6-88e5918e85-tmg13p
 * File Created On: Thu Apr 07 2022 01:46:58 GMT+0800 (Philippine Standard Time)
 * * Model Fields:
 * 
  * hero_h1 (text)
 * hero_description (text)
 * cta_primary_text (text)
 * cta_secondary_text (text)
 * integration_benefits_h2 (text)
 * integration_benefits (one_to_many)
 * feature_description_1 (wysiwyg_basic)
 * feature_description_2 (wysiwyg_basic)
 * feature_description_3 (wysiwyg_basic)
 * testimonial (one_to_one)
 * logos_title (text)
 * logos (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-88e5918e85-tmg13p
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * MUI Imports
 */
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * Components Imports
 */
import Hero from 'components/marketing/IntegrationsIndividualPage/Hero';

/**
 * Fillers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import Resources from 'components/marketing/IntegrationsIndividualPage/Resources';
import TopCompanies from 'components/marketing/IntegrationsIndividualPage/TopCompanies';
import IntegrationBenefits from 'components/marketing/IntegrationsIndividualPage/IntegrationBenefits';
import Feature from 'components/marketing/IntegrationsIndividualPage/Feature';
import ResourcesCards from 'components/marketing/IntegrationsIndividualPage/ResourcesCards';

function IntegrationsIndividualPage({ content }) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isExtraLarge = useMediaQuery(theme.breakpoints.down('xl'));
  const isDarkMode = theme.palette.mode === 'dark';

  const pageData = {
    theme,
    isMedium,
    isLarge,
    isExtraLarge,
    isDarkMode,
    content,
    FillerContent,
  };

  console.log(content);

  return (
    <>
      <Hero {...pageData} />
      <Resources {...pageData} />
      <TopCompanies {...pageData} />
      <IntegrationBenefits {...pageData} />
      <Feature {...pageData} />
      <ResourcesCards {...pageData} />
    </>
  );
}

export default IntegrationsIndividualPage;
