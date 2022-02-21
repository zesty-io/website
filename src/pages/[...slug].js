import React from 'react'
import * as ZestyModels from '../components/zesty-models'
//import { useRouter } from 'next/router'
import NotFoundCover from 'views/NotFoundCover'
import Head from 'next/head'

const ZestyLoader = (content) => {
    // const router = useRouter()
    // const slug = router.query.slug || []
    
    // check for a 404 page, this response triggers if zesty failed to hydrate
    if(undefined !== content.error && content.error){
        // returning 404, but alternatively you could load your default app component
        return (<NotFoundCover/>)
    }

    // console.log(content) // uncomment to see content outpu
    
    // get model name
    const modelName = prepareModelName(content.meta.model_name)

    // dynamically set the zesty model
    const ZestyModel = ZestyModels[modelName]

    // default render output dynamically resolves the model component from components/models
    // build your page body here, but keep <Model>
    return (
        <html>
            {/* head may also be customizing in the zesty component */}
            <Head>
                <title>{content.meta.web.seo_meta_title}</title>
                <meta property="og:title" content={content.meta.web.seo_meta_title}/>            
                <meta name="description" value={content.meta.web.seo_meta_description}/>     
                <meta property="og:description" content={content.meta.web.seo_meta_description}/>                   
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="https://kfg6bckb.media.zestyio.com/favicon.png" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://assets.maccarianagency.com/screenshots/the-front/social.png" />
                <meta property="og:url" content="https://thefront.maccarianagency.com/" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
            </Head>
            <body>
                {/* insert header or nav component here */}
                <ZestyModel content={content}></ZestyModel>
                {/* insert footer component here */}
            </body>
        </html>
    );
    
}

export default ZestyLoader

// converts a model's name to match Zesty GQL name conversion
// this a port of a function in Webengine to match the graphql naming convention
// view files are automatically generated: they take the content model title, capitalize first letter, remove plural endings, and removing spaces and underscores
function prepareModelName(name) {
    let zestyAppendName = 'ZestyModel';
    if(name.substring(-3,3) == 'ies') {
        name = name.substring(0,-3) + 'y';
    }
    name = name.replace('_',' ');
    name = name.charAt(0).toUpperCase() + name.slice(1);
    name = name.replace(' ','');
    return name.replace(/s$/,'')+zestyAppendName; // removes plural and adds append name
}


// This gets called on every request
export async function getServerSideProps(context) {

    let url = context.resolvedUrl;
    // url is missing ending forward slash, add it (zesty expects one)
    if(url.substr(-1) !== '/') {
        url = url + '/';
    }
    // remove first forward slash
    url = url.replace(/^\//, '');

    // build relative zesty toJSON url to fetch JSON 
    // TODO: WebEngine update to ignore cloud app if ?toJSON is passed
    // TODO: this will need to account for additional query parameters and append it to ?toJSON
    let zestyURL = `${process.env.zesty.stage}`
    zestyURL = zestyURL.replace(/\/$/,'') + '/' + url + '?toJSON'
    // console.log('here',zestyURL)

    // Fetch data from Zesty.io toJSON API
    const res = await fetch(zestyURL)

    // set error to 404 page as default
    let data = {error: true} 

    // otherwise set response to data
    if(res.status == 200){
        data = await res.json()
    } 

    // Pass data to the page via props
    return { props: data }
    
  }
  