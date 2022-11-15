/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Quiz Landing Pages 
 * Name: quiz_landing_pages 
 * Model ZUID: 6-c28bb1c3f9-z3mt69
 * File Created On: Thu Oct 27 2022 02:20:23 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * quiz_name (text)
 * link (link)
 * embed_code (textarea)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-c28bb1c3f9-z3mt69
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import { Box, CardMedia } from '@mui/material';

function QuizLandingPage({ content }) {
  return (
    <>
      <Box>
        <CardMedia
          sx={{ height: 1000, width: '100%' }}
          src={content.link || ''}
          component={'iframe'}
        />
      </Box>
    </>
  );
}

export default QuizLandingPage;
