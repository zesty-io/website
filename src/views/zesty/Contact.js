/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Contact 
 * Name: contact 
 * Model ZUID: 6-e2bbe081f2-8lr9x8
 * File Created On: Fri Mar 04 2022 14:20:19 GMT+0100 (Central European Standard Time)
 * 
 * Model Fields:
 * 
  * title (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-e2bbe081f2-8lr9x8
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// component imports
import Container from 'components/Container';

// blocks
import { ContactFormWithSidebarMap } from 'blocks/formLayouts';
import { ContactDetails } from 'blocks/contentBlocks';

const Contact = () => {

  const theme = useTheme();
  return (
    <Box>
      <ContactFormWithSidebarMap />
      <Container>
        <Box position={'relative'} bgcolor={'alternate.main'}>
          <ContactDetails />
        </Box>
      </Container>
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
{/* <div style={{background: '#eee', border: '1px #000 solid', margin: '10px', padding: '20px'}}>
    <h2>Accessible Zesty.io JSON Object</h2>
    <pre>{JSON.stringify(content, null, 2)}</pre>
    </div>
{/* End of Zesty.io output example */
}
    </Box>
  );
}



export default Contact;
