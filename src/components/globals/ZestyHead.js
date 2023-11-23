import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const HOST = 'https://www.zesty.io';
export default function ZestyHead({ content }) {
  const router = useRouter();

  const site = content.zestyProductionMode
    ? 'https://www.zesty.io'
    : 'https://kfg6bckb-dev.webengine.zesty.io';

  const canonicalURL = site + router.asPath;
  const isPPCPage = router?.asPath?.split('/')?.filter((e) => e)[0] === 'ppc';

  // default OG image
  let ogimage =
    'https://kfg6bckb.media.zesty.site/zesty-share-image-generic.png?width=1200';
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
  const isBlog = router.asPath.includes('mindshare') ? true : false;
  const title = content.meta?.web?.seo_meta_title;
  const description = content.meta?.web.seo_meta_description;

  const preview = ogimage.replace(
    'kfg6bckb.media.zestyio.com',
    'kfg6bckb.media.zesty.site',
  );
  const type = isBlog ? 'article' : 'website';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Twitter */}
      <meta name="twitter:card" content={'summary_large_image'} />
      {/* https://twitter.com/MUI_hq */}
      <meta name="twitter:site" content="@zestyio" />
      {/* #major-version-switch */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={preview} />
      {/* Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      {/* #major-version-switch */}
      <meta property="og:url" content={`${HOST}${router.asPath}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={preview} />
      <meta property="og:ttl" content="604800" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {isPPCPage && <meta name="robots" content="noindex"></meta>}
      <link rel="canonical" href={canonicalURL} />
    </Head>
  );
}
