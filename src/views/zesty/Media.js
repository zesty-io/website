/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Media 
 * Name: media 
 * Model ZUID: 6-d4b1d6e8bf-1rr32k
 * File Created On: Thu May 04 2023 15:46:02 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
 
 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-d4b1d6e8bf-1rr32k
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import { Stack, ThemeProvider, useTheme } from '@mui/material';
import React from 'react';
import ContentSectionOnlyText from 'revamp/ui/ContentSectionOnlyText';
import EnterpriseGrowth from 'revamp/ui/EnterpriseGrowth';
import FeatureBulletWithTestimonials from 'revamp/ui/FeatureBulletWithTestimonials';
import FeatureSectionTopTextBottomImage from 'revamp/ui/FeatureSectionTopTextBottomImage';
import FeatureStatistics from 'revamp/ui/FeatureStatistics';
import FeatureTestimonial from 'revamp/ui/FeatureTestimonial';
import GetDemoSection from 'revamp/ui/GetDemoSection';
import Hero from 'revamp/ui/Hero';
import ImageTransition from 'revamp/ui/ImageTransition';
import SingleTestimonial from 'revamp/ui/SingleTestimonial';
import Stats from 'revamp/ui/Stats';
import revampTheme from 'theme/revampTheme';

const person =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/giseleRTL.svg',
  mediaContent1 =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/MediaContent.svg',
  mediaContent2 =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/MediaContent2.svg',
  mediaContent3 =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/MediaContent3.svg',
  mediaContent4 =
    'https://storage.googleapis.com/assets.zesty.io/website/images/assets/MediaContent4.svg';

function Media() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <Stack>
        <Hero
          header="Digital Asset Management made easy"
          subtitle="Manage and distribute all your assets and understand how they’re performing all from one place."
        />
        <FeatureBulletWithTestimonials
          overline="NO TRAINING REQUIRED"
          heading="An intuitive way for users to find what they need, when they need it."
          supportingText="Your team wastes dozens of hours a week finding assets. Zesty makes it easy for users to access assets from an intuitive, cloud based single source of truth."
          testimonial="“Zesty has increased our efficiency because of the usability and ease of use. With a quick and simple search, our marketers and developers can find exactly what they need, when they want it.”"
          image={mediaContent1}
        />
        <FeatureStatistics
          overline="NO FILE SIZE LIMIT UPLOADS"
          heading="An uploading experience that ensures you follow SEO & accessibility best practices"
          supportingText="With Zesty’s Media experience, you can enter file descriptions to be used as alt text as soon as you upload an image. Thus ensuring your images are more accessible."
          testimonial="“Zesty has increased our efficiency because of the usability and ease of use. With a quick and simple search, our marketers and developers can find exactly what they need, when they want it.”"
          image={mediaContent2}
        />
        <FeatureTestimonial
          overline="ADVANCED INSIGHTS"
          heading="Understand how your assets are performing with Media Insights"
          supportingText="Your team wastes dozens of hours a week finding assets. Zesty makes it easy for users to access assets from an intuitive, cloud based single source of truth."
          testimonial="“Media insights show us what assets are being requested the most and help inform what content we need to focus on and invest in improving”"
          image={mediaContent3}
        />
        <FeatureSectionTopTextBottomImage
          overline="ADVANCED INSIGHTS"
          heading="Understand how your assets are performing with Media Insights"
          supportingText="Your team wastes dozens of hours a week finding assets. Zesty makes it easy for users to access assets from an intuitive, cloud based single source of truth."
          heroImage={mediaContent4}
        />

        <ContentSectionOnlyText
          overline="BEST API FOR IMAGE PROCESSING"
          heading="Endless image transformations at your service"
          supportingText="Zesty offers best in class API for image processing and image CDN thanks to the seamless partnership with Fastly. Optimize, resize, crop, rotate, and desaturate images on the fly by adding custom parameters to the URL of your image."
        />
        <ImageTransition />

        <FeatureSectionTopTextBottomImage
          overline="FAST IMAGE PREVIEWS"
          heading="Start of the art technology for fast image loading"
          supportingText="Serving optimized images is incredibly hard but with our content API you can implement lazy loaded, responsive images in one line of code. Avoid any layout jumping, offer instant previews of images while they load. It’s like magic."
        />
        <SingleTestimonial />
        <Stats header="Start saving and delivering files faster with our best in class DAM" />
        <EnterpriseGrowth />
        <FeatureBulletWithTestimonials image={person} />
        <GetDemoSection isLong={false} />
      </Stack>
    </ThemeProvider>
  );
}

export default Media;
