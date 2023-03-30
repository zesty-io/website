/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: BlogTest 
 * Name: blogtest 
 * Model ZUID: 6-c6c8869acf-gpdw9j
 * File Created On: Wed Mar 29 2023 12:58:00 GMT+0800 (Taipei Standard Time)
 * 
 * Model Fields:
 * 
  * article (wysiwyg_basic)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-c6c8869acf-gpdw9j
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import { Stack } from '@mui/material';
import React from 'react';
import BlogHero from 'revamp/ui/BlogHero';

function Blogtest({ content }) {
  return (
    <Stack>
      <BlogHero />
      <Stack
        sx={(theme) => ({
          [theme.breakpoints.up('lg')]: {
            width: '800',
            mx: 'auto',
          },
        })}
      ></Stack>
      <div dangerouslySetInnerHTML={{ __html: content.article }} />
    </Stack>
  );
}

export default Blogtest;
