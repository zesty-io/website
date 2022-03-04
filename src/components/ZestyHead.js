import React from 'react';
import Head from 'next/head';

export default function ZestyHead(props) {
  return (
    <Head>
      <title>{props.content.meta.web.seo_meta_title}</title>
      <meta
        property="og:title"
        content={props.content.meta.web.seo_meta_title}
      />
      <meta
        name="description"
        value={props.content.meta.web.seo_meta_description}
      />
      <meta
        property="og:description"
        content={props.content.meta.web.seo_meta_description}
      />
    </Head>
  );
}
