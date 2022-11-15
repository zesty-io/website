/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Ungated Demo Video for Ads 
 * Name: ungated_demo_video_for_ads 
 * Model ZUID: 6-c2eba38af5-6mqf7n
 * File Created On: Thu Sep 01 2022 00:10:37 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_title_and_description (wysiwyg_basic)
 * video_link (link)
 * request_demo_text (wysiwyg_basic)
 * logos_title (text)
 * client_logos (one_to_many)
 * video_snippets (wysiwyg_basic)
 * form_zoho_url (link)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-c2eba38af5-6mqf7n
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import { HeroWithLogoGridAndDesktopScreenshot } from 'blocks/heroes';
import { CtaWithIllustration } from 'blocks/cta';
import { LogoGridSimpleCentered } from 'blocks/logoGrid';
import FillerContent from 'components/globals/FillerContent';

function UngatedDemoVideoForAd({ content }) {
  return (
    <>
      <HeroWithLogoGridAndDesktopScreenshot {...content} />
      <CtaWithIllustration isDemoPage={true} {...content} />
      <LogoGridSimpleCentered
        title={content.logos_title || FillerContent.header}
        imageCollection={content.client_logos?.data || [FillerContent.image]}
      />
    </>
  );
}

export default UngatedDemoVideoForAd;
