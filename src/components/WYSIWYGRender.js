import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function WYSIWYGRender({ rich_text, customClass = '' }) {
  const theme = useTheme();
  // this dyanmically replaces text for icons like ICON_check with the material markup
  if (rich_text !== null && rich_text.match('ICON_')) {
    rich_text = rich_text.replace(
      /ICON_([a-z_]+)( |&nbsp;)/gis,
      '<div class="icon-box"><span class="material-icons">$1</span></div>',
    );
  }
  let inlineStyles = `
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
             margin-bottom: 3rem;
           }
          .keyFeatures_list > div {
             margin-bottom: 0rem;
           }
        }
        .wysiwyg .icon-box {
            float:left;
            background: ${theme.palette.zesty.zestyWhiteBlue};
            display: flex;
            border-radius: 5px;
            margin-right: 16px;
            margin-bottom: 56px;
            margin-top: 5px;
            align-items:center;
            padding:.7rem;
            color: ${theme.palette.zesty.zestyBlue};
        }

        .wysiwyg.circle-icons li .icon-box {
            background-color: ${theme.palette.zesty.zestyOrange};
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
