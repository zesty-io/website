import React from 'react';
import Head from 'next/head';

export default function ZestyHead({ content }) {
  // default OG image
  let ogimage =
    'https://kfg6bckb.media.zestyio.com/zesty-share-image-generic.png?width=1200';
  // determine if there is a custom og image
  if (content?.og_image) {
    ogimage = content.og_image.data[0].url + '?width=1200';
    // if custom og not set, find the first fiedl with image in the name and set that
  } else if (Object.keys(content).find((name) => name.includes('image'))) {
    let imageKey = Object.keys(content).find((name) => name.includes('image'));
    ogimage = content[imageKey]?.data
      ? content[imageKey].data[0].url + '?width=1200'
      : ogimage;
  }
  return (
    <Head>
      <title>{content.meta.web.seo_meta_title}</title>
      <link
        rel="icon"
        href="https://brand.zesty.io/favicon.png"
        type="image/png"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:title" content={content.meta.web.seo_meta_title} />
      <meta name="description" value={content.meta.web.seo_meta_description} />
      <meta
        property="og:description"
        content={content.meta.web.seo_meta_description}
      />
      <meta property="og:image" content={ogimage} />

      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Mulish"
      />
    </Head>
  );
}
