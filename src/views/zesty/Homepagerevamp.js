/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: HomepageRevamp 
 * Name: homepagerevamp 
 * Model ZUID: 6-8ac4d493f1-b9thsq
 * File Created On: Mon Mar 27 2023 21:27:41 GMT+0800 (Taipei Standard Time)
 * 
 * Model Fields:
 * 
  * lh_title (text)
 * lh_header (text)
 * lh_subtitle (text)
 * lh_primarybtn (text)
 * lh_primarybtnlink (text)
 * lh_secondarybtn (text)
 * lh_secondarybtnlink (text)
 * lh_subtitle2 (text)
 * ts_header (text)
 * gf_overline (text)
 * gf_heading (text)
 * gf_supportingtext (text)
 * st_witness (images)
 * st_name (text)
 * st_role (text)
 * st_logo (images)
 * st_header (text)
 * st_quote (textarea)
 * stats_title (text)
 * stats_header (text)
 * stats_subheading (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-8ac4d493f1-b9thsq
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import { Stack, ThemeProvider } from '@mui/material';
import React from 'react';
import EnterpriseGrowth from 'revamp/ui/EnterpriseGrowth';
import FeatureBulletWithTestimonials from 'revamp/ui/FeatureBulletWithTestimonials';
import GridFeature from 'revamp/ui/GridFeature';
import Hero from 'revamp/ui/Hero';
import SingleTestimonial from 'revamp/ui/SingleTestimonial';
import Stats from 'revamp/ui/Stats';
import TabsSection from 'revamp/ui/TabsSection';
import revampTheme from 'theme/revampTheme';

function Homepagerevamp({ content }) {
  console.log({ content });
  return (
    <ThemeProvider theme={() => revampTheme('light')}>
      <Stack>
        <Hero header={content.lh_header} />
        {/* <BlackHero /> */}
        <TabsSection />
        <GridFeature />
        <SingleTestimonial />
        <Stats />
        <EnterpriseGrowth />
        <FeatureBulletWithTestimonials />
      </Stack>
    </ThemeProvider>
  );
}

export default Homepagerevamp;
