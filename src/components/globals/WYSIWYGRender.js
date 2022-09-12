import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function WYSIWYGRender({ rich_text, customClass = '' }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // this dyanmically replaces text for icons like ICON_check with the material markup
  if (rich_text !== null && String(rich_text).match('ICON_')) {
    rich_text = rich_text.replace(
      /ICON_([a-z_]+)( |&nbsp;)/gis,
      '<div class="icon-box"><span class="material-icons">$1</span></div>',
    );
  }

  let inlineStyles = `
        p iframe {
          width: 100%;
          maxWidth: 900px;
          height: 400px;
        }
        .wysiwyg ul {
            padding-left: 0px;
            margin-left: 0px;
        }
        .wysiwyg li {
            list-style: none;
            margin-bottom: 16px;
            margin-left: 0px;
            padding-left: 0px;
            display:block;
            clear:both;
            color: ${theme.palette.text.secondary};
        }
        .wysiwyg , .wysiwyg  p {
          color: ${theme.palette.text.secondary};
          font-size: 1.1rem;
          line-height: 150%;
        }
        .wysiwyg , .wysiwyg  h1 {
          color: ${theme.palette.text.secondary};
          font-size: 1rem;
          line-height: 120%;
        }
        .wysiwyg , .wysiwyg  h2 {
          color: ${theme.palette.text.secondary};
          font-size: 1.4rem;
          line-height: 120%;
        }
        .wysiwyg strong, .wysiwyg h1, .wysiwyg h2, .wysiwyg h3,.wysiwyg h4,.wysiwyg h5,.wysiwyg h6 {
          color: ${theme.palette.text.primary} !important;
        }

        @media only screen and (max-width: 600px) {
          .wysiwyg .icon-box {
            margin-bottom: 1rem;
          }
           .hybridList {
             display: block !important;
             align-items: center !important;
           }
           .hybridList > span {
             margin-bottom: 0;
           }
          .keyFeatures_list > div {
             margin-bottom: 5rem !important;
           }
          .wysiwyg.solutionBox > p:first-child {
             color: ${
               isDarkMode
                 ? theme.palette.zesty.zestyWhite
                 : theme.palette.common.black
             };
            font-weight: 700;
            font-size: 40px;
          }
          .wysiwyg.solutionBox > p:nth-child(3),
          .wysiwyg.solutionBox > p:nth-child(4),
          .wysiwyg.solutionBox > p:nth-child(5) {
            color: ${theme.palette.text.secondary};
            font-weight: 400;
            font-size: 20px;
           }

         }
        @media (min-width:601px) and (max-width: 4096px) {
          .wysiwyg .icon-box {
            margin-bottom: 28px;
          }
           .hybridList {
             display: flex !important;
             align-items: center !important;
           }
           .hybridList > span {
             margin-bottom: 0.5rem;
           }
          .keyFeatures_list > div {
             margin-bottom: 0rem;
           }
          .wysiwyg.solutionBox > p:first-child {
             color: ${
               isDarkMode
                 ? theme.palette.zesty.zestyWhite
                 : theme.palette.common.black
             };
            font-weight: 700;
            font-size: 40px;
          }
          .wysiwyg.solutionBox > p:nth-child(3),
          .wysiwyg.solutionBox > p:nth-child(4),
          .wysiwyg.solutionBox > p:nth-child(5) {
            color: ${theme.palette.text.secondary};
            font-weight: 400;
            font-size: 28px;
           }

          }

        .wysiwyg .icon-box {
            float:left;
            background: ${theme.palette.zesty.zestyWhiteBlue};
            display: flex;
            border-radius: 5px;
            margin-right: 16px;
            margin-bottom: 1rem;
            margin-top: 5px;
            align-items:center;
            padding:.7rem;
            color: ${theme.palette.zesty.zestyBlue};
        }

        .wysiwyg.circle-icons li .icon-box {
            background-color: ${
              isDarkMode
                ? theme.palette.zesty.zestyBlue
                : theme.palette.zesty.zestyOrange
            };
            border-radius: 50%;
            padding: 5px 5px 5px 5px;
            margin-top: 0;
            display:flex;
            align-items:center;
        }
        .wysiwyg.circle-icons li .icon-box span.material-icons{
            font-weight: bold;
            color: white ;
            font-size: 16px;
        }
        
        /*
        * Ignore style on safari
        */ 
        @media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
          .wysiwyg img{
            max-width: 100%;
            height: 100%;
          }
      }
        .wysiwyg  a{
          color: ${theme.palette.zesty.zestyBlue};
          font-weight: 700;
        }


        @media only screen and (max-width: 600px) {
          .wysiwyg table tr{
              display: flex;
              flex-direction: column;
              align-items: center;
          }
        }

       .wysiwyg.normal-bullets ul li{
            list-style-type: disc;
            list-style-position: outside;
            display: list-item !important;
            margin-left: 2rem;

        `;
  return (
    <>
      <style>{inlineStyles}</style>
      <Box
        className={`wysiwyg ${customClass}`}
        dangerouslySetInnerHTML={{ __html: rich_text }}
      ></Box>
    </>
  );
}
