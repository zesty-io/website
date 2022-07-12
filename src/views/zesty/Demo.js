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
import { React, useEffect, useState } from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { getCookie, setCookies } from 'cookies-next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Typography from '@mui/material/Typography';

import FillerContent from 'components/globals/FillerContent';
import Container from 'components/wrappers/FullWidthContainer';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';

const Demo = ({ content }) => {
  let demoFormEmbedLink = `https://forms.zohopublic.com/zestyio/form/SalesSignupform/formperma/634ov0T9TZdP8vJsI1KBz8WyPgltGy_IJ5xGiMKdH5Q?a=b`;

  const [formURL, setFormURL] = useState(demoFormEmbedLink);

// code to adjust the iframe embed of the zoho form
  useEffect(() => {
    let gclid = getCookie('gclid');
    let utm_campaign = getCookie('utm_campaign');
    let utm_term = getCookie('utm_term');
    let utm_medium = getCookie('utm_medium');
    let utm_source = getCookie('utm_source');

    // if(gclid){
    //   demoFormEmbedLink += '&gclid=' + gclid;
    // }
    // if(utm_campaign){
    //   demoFormEmbedLink += '&utm_campaign=' + utm_campaign;
    // }
    // if(utm_source){
    //   demoFormEmbedLink += '&utm_source=' + utm_source;
    // }
    // if(utm_source){
    //   demoFormEmbedLink += '&referrername=' + utm_source;
    // }
    // if(utm_medium){
    //   demoFormEmbedLink += '&utm_medium=' + utm_medium;
    // }
    // if(utm_term){
    //   demoFormEmbedLink += '&utm_term=' + utm_term;
    // }


     
    // setFormURL(demoFormEmbedLink )

    // function resizeIFrameToFitContent( iFrame ) {
    //     iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    //     iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
    // }
    // window.addEventListener('DOMContentLoaded', function(e) {

    //     var iFrame = document.getElementById( 'leadframe' );
    //     resizeIFrameToFitContent( iFrame );

    //     // or, to resize all iframes:
    //     var iframes = document.querySelectorAll("iframe");
    //     for( var i = 0; i < iframes.length; i++) {
    //         resizeIFrameToFitContent( iframes[i] );
    //     }
    // } );
    function ZFAdvLead(){
    }
    ZFAdvLead.utmPValObj = ZFAdvLead.utmPValObj || {};
    ZFAdvLead.utmPNameArr = new Array('utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid');ZFAdvLead.utmcustPNameArr = new Array('gclid');ZFAdvLead.isSameDomian = false;
    ZFAdvLead.prototype.zfautm_sC = function( paramName,path,domain,secure ){
      var value = ZFAdvLead.utmPValObj[paramName];
      if ( typeof value !== "undefined" && value !== null ){
        var cookieStr = paramName + "=" + encodeURIComponent( value );
        var exdate=new Date();
        exdate.setDate(exdate.getDate()+7);
        cookieStr += "; expires=" + exdate.toGMTString();
        cookieStr += "; path=/";
        if ( domain ) {
          cookieStr += "; domain=" + encodeURIComponent( domain );
        }
        if ( secure ) {
          cookieStr += "; secure";
        }
        document.cookie = cookieStr;
      }
    };
    ZFAdvLead.prototype.zfautm_ini = function (){
      this.zfautm_bscPCap();
      var url_search = document.location.search;
      for (var i = 0; i < ZFAdvLead.utmcustPNameArr.length ; i ++){
        var zf_pN = ZFAdvLead.utmcustPNameArr[i];
        var zf_pV;
        if ( zf_pN == 'referrername' ) {
          zf_pV = ( document.location.href || '' ).slice( 0, 1500 );
        } else {
          zf_pV = this.zfautm_gP(url_search, zf_pN);
          if (zf_pV == undefined || zf_pV == ''){
              zf_pV = this.zfautm_gC(zf_pN);
          }
        }
        if ( typeof zf_pV !== "undefined" && zf_pV !== null & zf_pV != "" ) {
          ZFAdvLead.utmPValObj[ zf_pN ] = zf_pV;
        }
      }
      for (var pkey in ZFAdvLead.utmPValObj) {
        this.zfautm_sC(pkey);
      }
    };
    ZFAdvLead.prototype.zfautm_bscPCap = function () {
      var trafSrc = this.zfautm_calcTrafSrc();
      if ( trafSrc.source != "" ) {
        ZFAdvLead.utmPValObj.utm_source = trafSrc.source;
      }
      if ( trafSrc.medium != "" ) {
        ZFAdvLead.utmPValObj.utm_medium = trafSrc.medium;
      }
      if ( trafSrc.campaign != "" ) {
        ZFAdvLead.utmPValObj.utm_campaign = trafSrc.campaign;
      }
      if ( trafSrc.term != "" ) {
        ZFAdvLead.utmPValObj.utm_term = trafSrc.term;
      }
      if ( trafSrc.content != "" ) {
        ZFAdvLead.utmPValObj.utm_content = trafSrc.content;
      }
    }
    ZFAdvLead.prototype.zfautm_calcTrafSrc = function() {
      var u1='', u2='', u3='', u4='', u5='';
      var search_engines = [['bing', 'q'], ['google', 'q'], ['yahoo', 'q'], ['baidu', 'q'], ['yandex', 'q'], ['ask', 'q']]; //List of search engines
      var ref = document.referrer;
      ref = ref.substr(ref.indexOf('//')+2);
      var ref_domain = ref;
      var ref_path = '/';
      var ref_search = '';
      // Checks for campaign parameters
      var url_search = document.location.search;
      if(url_search.indexOf('utm_source') > -1 || url_search.indexOf('utm_medium') > -1 || url_search.indexOf('utm_campaign') > -1 || url_search.indexOf('utm_term') > -1 || url_search.indexOf('utm_content') > -1) {
        u1 = this.zfautm_gP(url_search, 'utm_source');
        u2 = this.zfautm_gP(url_search, 'utm_medium');
        u3 = this.zfautm_gP(url_search, 'utm_campaign');
        u4 = this.zfautm_gP(url_search, 'utm_term');
        u5 = this.zfautm_gP(url_search, 'utm_content');
      } else if ( this.zfautm_gP(url_search, 'gclid')) {
        u1 = 'Google Ads';
        u2 = 'cpc';
        u3 = '(not set)';
        if ( !ZFAdvLead.utmcustPNameArr.includes('gclid') ) {
          ZFAdvLead.utmcustPNameArr.push('gclid');
        }
      } else if(ref) {
        var r_u1 = this.zfautm_gC('utm_source');
        var r_u2 = this.zfautm_gC('utm_medium');
        var r_u3 = this.zfautm_gC('utm_campaign');
        var r_u4 = this.zfautm_gC('utm_term');
        var r_u5 = this.zfautm_gC('utm_content');
        if ( typeof r_u1 === "undefined" && typeof r_u2 === "undefined" && typeof r_u3 === "undefined" && typeof r_u4 === "undefined" && typeof r_u5 === "undefined") {
          // separate domain, path and query parameters
          if (ref.indexOf('/') > -1) {
            ref_domain = ref.substr(0,ref.indexOf('/'));
            ref_path = ref.substr(ref.indexOf('/'));
            if (ref_path.indexOf('?') > -1) {
              ref_search = ref_path.substr(ref_path.indexOf('?'));
              ref_path = ref_path.substr(0, ref_path.indexOf('?'));
            }
          }
          u2 = 'referral';
          u1 = ref_domain;
        // Extract term for organic source
          for (var i=0; i<search_engines.length; i++){
            if(ref_domain.indexOf(search_engines[i][0]) > -1){
              u2 = 'organic';
              u1 = search_engines[i][0];
              u4 = this.zfautm_gP(ref_search, search_engines[i][1]) || '(not provided)';
              break;
            }
          }
        } else {
          if ( typeof r_u1 !== "undefined" ) {
            u1 = r_u1;
          }
          if ( typeof r_u2 !== "undefined" ) {
              u2 = r_u2;
          }
          if ( typeof r_u3 !== "undefined" ) {
            u3 = r_u3;
          }
          if ( typeof r_u4 !== "undefined" ) {
            u4 = r_u4;
          }
          if ( typeof r_u5 !== "undefined" ) {
            u5 = r_u5;
          }
        }
      } else {
        var r_u1 = this.zfautm_gC('utm_source');
        var r_u2 = this.zfautm_gC('utm_medium');
        var r_u3 = this.zfautm_gC('utm_campaign');
        var r_u4 = this.zfautm_gC('utm_term');
        var r_u5 = this.zfautm_gC('utm_content');
        if ( typeof r_u1 === "undefined" && typeof r_u2 === "undefined" && typeof r_u3 === "undefined" && typeof r_u4 === "undefined" && typeof r_u5 === "undefined") {
          var locRef = document.location.href;
          locRef = locRef.substr(locRef.indexOf('//')+2);
          if (locRef.indexOf('/') > -1) {
            locRef = locRef.substr(0,locRef.indexOf('/'));
          }
          u1 = locRef;
          u2 = 'referral';
        } else {
          if ( typeof r_u1 !== "undefined" ) {
            u1 = r_u1;
          }
          if ( typeof r_u2 !== "undefined" ) {
            u2 = r_u2;
          }
          if ( typeof r_u3 !== "undefined" ) {
            u3 = r_u3;
          }
          if ( typeof r_u4 !== "undefined" ) {
            u4 = r_u4;
          }
          if ( typeof r_u5 !== "undefined" ) {
            u5 = r_u5;
          }
        }
      }
      return {
        'source'  : u1,
        'medium'  : u2,
        'campaign': u3,
        'term'    : u4,
        'content' : u5
      };
    }
    ZFAdvLead.prototype.zfautm_gP = function(s, q) {
      try{
          var match = s.match('[?&]' + q + '=([^&]+)');
          return match ? decodeURIComponent(match[1]) : '';
      } catch(e){
        return '';
      }
    }
    ZFAdvLead.prototype.zfautm_gC = function( cookieName ){
      var cookieArr = document.cookie.split('; ');
      for ( var i = 0 ; i < cookieArr.length ; i ++ ){
        var cookieVals = cookieArr[i].split('=');
          if ( cookieVals[0] === cookieName && cookieVals[1] ) {
            return decodeURIComponent(cookieVals[1]);
          }
      }
    };
    ZFAdvLead.prototype.zfautm_gC_enc = function( cookieName ){
      var cookieArr = document.cookie.split('; ');
      for ( var i = 0 ; i < cookieArr.length ; i ++ ){
        var cookieVals = cookieArr[i].split('=');
          if ( cookieVals[0] === cookieName && cookieVals[1] ) {
            return cookieVals[1];
          }
      }
    };
    ZFAdvLead.prototype.zfautm_iframeSprt = function () {
      var zf_frame = document.getElementsByTagName("iframe");
      for(var i = 0; i < zf_frame.length; ++i){
        if((zf_frame[i].src).indexOf('formperma') > 0 ){
          var zf_src = zf_frame[i].src;
          for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
            var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
            utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
            var utmVal = this.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
            if ( typeof utmVal !== "undefined" ) {
              if ( utmVal != "" ){
                if(zf_src.indexOf('?') > 0){
                  zf_src = zf_src+'&'+utmPm+'='+ utmVal;
                }else{
                  zf_src = zf_src+'?'+utmPm+'='+ utmVal;
                }
              }
            }
          }
          if ( zf_frame[i].src.length < zf_src.length ) {
            zf_frame[i].src = zf_src;
          }
        }
      }
    };
    ZFAdvLead.prototype.zfautm_DHtmlSprt = function () {
      var zf_formsArr = document.forms;
      for ( var frmInd = 0 ; frmInd < zf_formsArr.length ; frmInd ++ ) {
        var zf_form_act = zf_formsArr[frmInd].action;
          if ( zf_form_act && zf_form_act.indexOf('formperma') > 0 ){
            for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
              var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
              var utmVal = this.zfautm_gC( ZFAdvLead.utmPNameArr[ prmIdx ] );
              if ( typeof utmVal !== "undefined" ) {
                if ( utmVal != "" ) {
                  var fieldObj = zf_formsArr[frmInd][utmPm];
                if ( fieldObj ) {
                  fieldObj.value = utmVal;
                }
              }
            }
          }
        }
      }
    };
    ZFAdvLead.prototype.zfautm_jsEmbedSprt = function ( id ) {
      document.getElementById('zforms_iframe_id').removeAttribute("onload");
      var jsEmbdFrm = document.getElementById("zforms_iframe_id");
      var embdSrc = jsEmbdFrm.src;
      for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
        var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
        utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
        var utmVal = this.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
        if ( typeof utmVal !== "undefined" ) {
          if ( utmVal != "" ) {
            if(embdSrc.indexOf('?') > 0){
                        embdSrc = embdSrc+'&'+utmPm+'='+utmVal;
            }else{
                embdSrc = embdSrc+'?'+utmPm+'='+utmVal;
            }
          }
        }
      }
      jsEmbdFrm.src = embdSrc;
    };
    var zfutm_zfAdvLead = new ZFAdvLead();
    zfutm_zfAdvLead.zfautm_ini();
    if( document.readyState == "complete" ){
        zfutm_zfAdvLead.zfautm_iframeSprt();
        zfutm_zfAdvLead.zfautm_DHtmlSprt();
    } else {
      window.addEventListener('load', function (){
            zfutm_zfAdvLead.zfautm_iframeSprt();
            zfutm_zfAdvLead.zfautm_DHtmlSprt();
      }, false);
    }
  })
  
  const theme = useTheme();
  return (
    <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        position={'relative'}
      >
        <Box
          width={1}
          order={{ xs: 2, md: 1 }}
          display={'flex'}
          alignItems={'center'}
        >
          <Container>
            <Box marginBottom={4}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                gutterBottom
                color={'text.secondary'}
              >
                {content.header_title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                }}
              >
                {content.callout_title}
              </Typography>
              <Typography color="text.secondary">
                {content.header_description}
              </Typography>
            </Box>
            {/* <Form
              eyebrow={content.header_title}
                title={content.callout_title}
                subtitle={content.header_description}
                ctaButtonText={content.callout_button_text}
              /> */}
            {/* 
            removed in place to 
            
            <StandardFormWithSelect
              leadDetail="Demo Sign Up"
              selectedValue={2}
              hideSelect={true}
              modalTitle="Thank you for submitting your request."
              modalMessage="Our team will be in touch soon to schedule a demo with you."
              phoneNumber={true}
            /> */}
            <iframe
             width="100%" 
             border="0"
             id="leadframe"
             src={formURL}
             style={{border: 0, height: '600px'}}
             >

             </iframe>
          </Container>
        </Box>
        <Box
          sx={{
            flex: { xs: '0 0 100%', md: '0 0 50%' },
            position: 'relative',
            maxWidth: { xs: '100%', md: '50%' },
            order: { xs: 1, md: 2 },
            minHeight: { xs: 'auto', md: 'calc(100vh - 58px)' },
          }}
        >
          <Box
            sx={{
              width: { xs: 1, md: '50vw' },
              height: '100%',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  overflow: 'hidden',
                  left: '0%',
                  width: 1,
                  height: 1,
                  position: { xs: 'relative', md: 'absolute' },
                  clipPath: {
                    xs: 'none',
                    md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                  },
                  shapeOutside: {
                    xs: 'none',
                    md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: { xs: 'auto', md: 1 },
                    '& img': {
                      objectFit: 'cover',
                    },
                    '& .lazy-load-image-loaded': {
                      height: 1,
                      width: 1,
                    },
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    effect="blur"
                    src={
                      content.callout_image.data[0]?.url || FillerContent.image
                    }
                    height={{ xs: 'auto', md: 1 }}
                    maxHeight={{ xs: 300, md: 1 }}
                    width={1}
                    maxWidth={1}
                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.7)'
                          : 'none',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Demo;
