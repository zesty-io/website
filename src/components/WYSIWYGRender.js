import React from 'react';
import {Box} from '@mui/material';

export default function WYSIWYGRender({rich_text, customClass=''}) {
    if(rich_text.match('ICON_')){
        rich_text = rich_text.replace(/ICON_([a-z_]+)( |&nbsp;)/gsi, '<div class="icon-box"><span class="material-icons">$1</span></div>')
    }

  return (
    <Box
        className={`wysiwyg ${customClass}`}
        dangerouslySetInnerHTML={{ __html: rich_text }}
    ></Box>
  );
}
