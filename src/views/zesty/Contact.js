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
import { ThemeProvider, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';

// component imports
// import Container from 'components/Container';

// blocks
// import { ContactFormWithSidebarMap } from 'blocks/formLayouts';
// import { ContactDetails } from 'blocks/contentBlocks';
// import FillerContent from 'components/globals/FillerContent';
import revampTheme from 'theme/revampTheme';
import GetDemoSection from 'revamp/ui/GetDemoSection';

function Contact() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <GetDemoSection isContact redirect="/ppc/thank-you/" />
    </ThemeProvider>
    //     <Box>
    //       <ContactFormWithSidebarMap
    //         title={content.header_title || FillerContent.header}
    //         description={content.description || FillerContent.description}
    //         image={content.image?.data[0].url || FillerContent.image}
    //       />
    //       <Box position={'relative'} bgcolor={'alternate.main'}>
    //         <Container>
    //           <ContactDetails
    //             title={content.details_title || FillerContent.header}
    //             subtitle={content.details_subtitle || FillerContent.description}
    //             phone={content.phone || FillerContent.missingDataArray[0]}
    //             email={content.email || FillerContent.missingDataArray[1]}
    //             address={content.address || FillerContent.missingDataArray[2]}
    //           />
    //         </Container>
    //         <Box
    //           component={'svg'}
    //           preserveAspectRatio="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //           x="0px"
    //           y="0px"
    //           viewBox="0 0 1920 100.1"
    //           sx={{
    //             width: '100%',
    //             marginBottom: theme.spacing(-1),
    //           }}
    //         >
    //           <path
    //             fill={theme.palette.background.paper}
    //             d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
    //           ></path>
    //         </Box>
    //       </Box>
    //       {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
    //       {/* <div style={{background: '#eee', border: '1px #000 solid', margin: '10px', padding: '20px'}}>
    //     <h2>Accessible Zesty.io JSON Object</h2>
    //     <pre>{JSON.stringify(content, null, 2)}</pre>
    //     </div>
    // {/* End of Zesty.io output example */}
    //     </Box>
  );
}

export default Contact;
