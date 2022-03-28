import React from 'react';
import Head from 'next/head';
import { EventNote } from '@mui/icons-material';

export default function ZestyHead(props) {

  // default OG image
  let ogimage = 'https://kfg6bckb.media.zestyio.com/zesty-share-image-generic.png?width=1200'
  // determine if there is a custom og image
  if(props.content?.og_image){
    ogimage = props.content.og_image.data[0].url + '?width=1200'
  // if custom og not set, find the first fiedl with image in the name and set that
  } else if (Object.keys(props.content).find(name => name.includes('image'))){
    let imageKey = Object.keys(props.content).find(name => name.includes('image'))
    ogimage = props.content[imageKey]?.data ? props.content[imageKey].data[0].url + '?width=1200' : ogimage
  }
  return (
    <Head>
      

      <title>{props.content.meta.web.seo_meta_title}</title>
      <link rel="icon" href="/favicon.png" type="image/png" />
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
      {}
      <meta 
        property="og:image"
        content={ogimage}
        />

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      {props.content.zestyProduction &&
      <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MSPH3C8');`}}/>}
    </Head>
  );
}
