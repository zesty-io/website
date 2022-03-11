/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Demos 
 * Name: demos 
 * Model ZUID: 6-ccf3cd8a82-16sw3z
 * File Created On: Thu Mar 10 2022 10:14:31 GMT-0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
  * header_title (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-ccf3cd8a82-16sw3z
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */
import React from 'react';
import HeroWithPrimaryBackgroundAndDesktopScreenshot from '../../blocks/heroes/HeroWithPrimaryBackgroundAndDesktopScreenshot';
import BlogWithLargeImage from '../../blocks/blog/BlogWithLargeImage';
import CtaSimpleCentered from '../../blocks/cta/CtaSimpleCentered';

const MockHeader = {
  title: 'Learn how to leverage Zesty.io',
  description:
    'From developing your first site to creating omnichannel content, these videos will show you how to succeed with Zesty.io.',
};

const MockDemos1 = [
  {
    title: 'How to get started on Zesty.io in 5 easy steps',
    description:
      'From setting up your first instance to creating scalable pages, here are the five steps you need to take to start building with Zesty.io.',
    cta: 'Try Zesty.io now',
    image: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '04 Aug',
  },
  {
    title: 'How to manage omnichannel content with Zesty.io',
    description:
      'Place your content across websites, digital signage, IoT devices, apps and more with Zesty.io – see how in this quick tutorial.',
    cta: 'Learn more about omnichannel experiences ',
    image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Jhon Anderson',
      avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    },
    date: '12 Sep',
  },
];
const MockDemos2 = [
  {
    title: 'How to use hybrid headless CMS technology to your advantage',
    description:
      'Learn how Zesty.io’s hybrid headless offering provides you with limitless control over your content.',
    cta: 'Learn the difference between headless and hybrid CMS  ',
    image: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '04 Aug',
  },
  {
    title: 'How to manage omnichannel content with Zesty.io',
    description:
      'Place your content across websites, digital signage, IoT devices, apps and more with Zesty.io – see how in this quick tutorial.',
    cta: 'Learn more about omnichannel experiences ',
    image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Jhon Anderson',
      avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    },
    date: '12 Sep',
  },
];
const MockCta = {
  title: 'Ready to get started with Zesty.io?',
  description: 'Sign up free and discover more of what Zesty.io has to offer.',
  CTA_left: 'Try Zesty free',
  CTA_right: 'Contact Us',
};
function Demo({ content }) {
  return (
    <>
      <HeroWithPrimaryBackgroundAndDesktopScreenshot
        title={MockHeader.title}
        description={MockHeader.description}
      />
      <BlogWithLargeImage DemoData={MockDemos1} />
      <BlogWithLargeImage DemoData={MockDemos2} />
      <CtaSimpleCentered
        title={MockCta.title}
        description={MockCta.description}
        ctaLeft={MockCta.CTA_left}
        ctaRight={MockCta.CTA_right}
      />
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      {/* <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div>
      <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div> */}
      {/* End of Zesty.io output example */}
    </>
  );
}

export default Demo;
