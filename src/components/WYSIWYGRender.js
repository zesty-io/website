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
        .wysiwyg .icon-box {
            float:left;
            background: ${theme.palette.zesty.zestyWhiteBlue};
            display: flex;
            border-radius: 5px;
            margin-right: 16px;
            margin-bottom: 28px;
            margin-top: 5px;
            align-items:center;
            padding:.7rem;
            color: ${theme.palette.zesty.zestyBlue};
        }

        .wysiwyg.circle-icons li .icon-box {
            background-color: ${theme.palette.zesty.zestyYellow};
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
