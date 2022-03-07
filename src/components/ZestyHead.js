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
      <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MSPH3C8');`}}/>
    </Head>
  );
}
