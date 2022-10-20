import React from 'react';
import Head from 'next/head';

export const ZestyAccountsHead = ({
  title = 'Accounts',
  description = 'Accounts',
  ogimage = 'https://kfg6bckb.media.zestyio.com/zesty-share-image-generic.png?width=1200',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="icon"
        href="https://brand.zesty.io/favicon.png"
        type="image/png"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:title" content={title} />
      <meta name="description" value={description} />
      <meta property="og:description" content={description} />
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
};
