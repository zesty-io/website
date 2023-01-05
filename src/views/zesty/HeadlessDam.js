/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless DAM 
 * Name: headless_dam 
 * Model ZUID: 6-ee91eab1ca-157tc5
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_h1 (text)
 * hero_description (wysiwyg_basic)
 * hero_graphic (images)
 * section_1_description (wysiwyg_basic)
 * why_zesty_header (wysiwyg_basic)
 * features (one_to_many)
 * how_it_works (wysiwyg_basic)
 * how_it_works_graphic (images)
 * logos_header (textarea)
 * logos (one_to_many)
 * integrate (wysiwyg_basic)
 * integrate_logos (images)
 * get_started (wysiwyg_basic)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-ee91eab1ca-157tc5
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * MUI Imports
 */
import { useTheme } from '@mui/material/styles';

/**
 * Components Imports
 */
// import Hero from 'components/marketing/Homepage/Hero';
import SimpleHeroWithImageAndCtaButtons from 'blocks/zesty/Hero/SimpleHeroWithImageAndCtaButtons';
import AlternateColumns from 'blocks/zesty/PageLayouts/AlternateColumns';
import CardsInContainer from 'blocks/zesty/Cards/CardsInContainer';
import CenteredContents from 'blocks/contentBlocks/CenteredContents';
import SimpleCardLogo from 'blocks/zesty/LogoGrid/SimpleCardLogo';
import TechStack from 'blocks/integrations/TechStack';
import Bottom from 'blocks/zesty/Bottom/Bottom';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';

function HeadlessDam({ content }) {
  const theme = useTheme();

  const heroProps = {
    mainTitle: content.hero_h1,
    title: content.hero_description,
    image:
      (content.hero_graphic?.data && content.hero_graphic?.data[0]?.url) ||
      FillerContent.image,
    cta_left: content.hero_primary_cta_text,
    cta_right: content.hero_secondary_cta?.data[0]?.button_text,
    cta_right_url:
      content.hero_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    backgroundColor: theme.palette.zesty.zestyBackgroundBlueGradient,
  };

  const COLORS = [
    {
      backgroundColor: theme.palette.zesty.pureWhite,
      textColor: theme.palette.zesty.zestyZambezi,
    },
    {
      backgroundColor: theme.palette.zesty.pureWhite,
      textColor: theme.palette.zesty.zestyZambezi,
    },
  ];

  const splitParagraph = (p, start, deleteCount) => {
    var paragraph;
    if (p) {
      paragraph = (
        p.split('</p>').splice(start, deleteCount).join('</p>') + '</p>'
      ).replace(/\<\/p> *\<\/p>/g, '</p>');
    }
    return paragraph;
  };

  const integrateProps = [
    {
      content: splitParagraph(content.section_1_description, 0, 1),
      image: content.section_1_description_graphic?.data[0]?.url,
    },
    {
      content: splitParagraph(content.section_1_description, 1, 1),
      image: content.section_1_description_graphic?.data[1]?.url,
    },
  ];

  const getData = (dataArray) => {
    return (
      dataArray?.data?.reduce((acc, item) => {
        acc.push({
          icon_image: item.icon_image?.data[0].url,
          title: item.feature_name,
          content: item.content,
        });

        return acc;
      }, []) || []
    );
  };

  const whyIntegrateProps = {
    title: content.why_zesty_header,
    data: getData(content.features),
    imageWidth: 115,
    imageHeight: 115,
    marginTop: 0,
  };

  const howItWorksProps = {
    header: content.how_it_works,
    mainImage: content.how_it_works_graphic?.data[0]?.url,
    backgroundColor: theme.palette.zesty.zestyOrangeRadialGradient,
  };

  const integrationLogosProps = {
    text_content: content.integrate,
    cta_text: content.integrations_cta?.data[0]?.button_text,
    cta_link: content.integrations_cta?.data[0]?.external_link,
    logos: content.integrations_logo?.data,
  };

  const bottomData = {
    graphic: content?.get_started_graphic?.data[0]?.url || '',
    titleAndDescription: content.get_started,
    cta_text: content.get_started_cta?.data[0]?.button_text,
    cta_button_link: content.get_started_cta?.data[0]?.external_link,
    secondary_cta_text: content.get_started_secondary_cta?.data[0]?.button_text,
    secondary_cta_link:
      content.get_started_secondary_cta?.data[0]?.internal_link?.data[0]?.meta
        ?.web?.url,
    graphicBottom: 3,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <AlternateColumns
        header_content={content.section_1_header}
        column_data={integrateProps}
        alternateColors={COLORS.slice(0, 2)}
      />
      <CardsInContainer {...whyIntegrateProps} />
      <CenteredContents {...howItWorksProps} />
      <SimpleCardLogo
        heading_text={content?.logos_header}
        logoItems={content?.logos?.data}
      />
      <TechStack {...integrationLogosProps} />
      <Bottom {...bottomData} />
    </>
  );
}

export default HeadlessDam;
