/**
 * Component to inject a ZOHO form via an iframe
 * Work with the sales team to get a custom URL and to play with the height
 */

import { React, useEffect } from 'react';
import { getCookie } from 'cookies-next';

export default function ZohoFormEmbed({formURL='',height='600px'}){
    let demoFormEmbedLink = formURL == '' ? `https://forms.zohopublic.com/zestyio/form/SalesSignupform/formperma/634ov0T9TZdP8vJsI1KBz8WyPgltGy_IJ5xGiMKdH5Q` : formURL;
    demoFormEmbedLink += '?a=b'; // added to start param chain
    // code to adjust the iframe embed of the zoho form
    useEffect(() => {
        let gclid = getCookie('gclid');
        let utm_campaign = getCookie('utm_campaign');
        let utm_term = getCookie('utm_term');
        let utm_medium = getCookie('utm_medium');
        let utm_source = getCookie('utm_source');

        if(gclid){
            demoFormEmbedLink += '&gclid=' + gclid;
        }
        if(utm_campaign){
            demoFormEmbedLink += '&utm_campaign=' + utm_campaign;
        }
        if(utm_source){
            demoFormEmbedLink += '&utm_source=' + utm_source;
        }
        if(utm_source){
            demoFormEmbedLink += '&referrername=' + utm_source;
        }
        if(utm_medium){
            demoFormEmbedLink += '&utm_medium=' + utm_medium;
        }
        if(utm_term){
            demoFormEmbedLink += '&utm_term=' + utm_term;
        }

    })
    return (
        <iframe
            width="100%" 
            border="0"
            id="leadframe"
            src={demoFormEmbedLink}
            style={{
                border: 0, 
                height: height
            }}
        >
        </iframe>
    );

}