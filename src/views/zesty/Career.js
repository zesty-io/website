/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Careers 
 * Name: careers 
 * Model ZUID: 6-b8cedca7dc-0fn9z5
 * File Created On: Fri Mar 04 2022 06:48:01 GMT-0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
  * careers (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b8cedca7dc-0fn9z5
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

// component imports
import Container from 'components/Container';

// blocks
import { Hero } from 'blocks/heroes';
import { Jobs } from 'blocks/lists';
import { Newsletter } from 'blocks/newsletters';
import { About, CompanyValues } from 'blocks/contentBlocks';

function Career({ content }) {
  const theme = useTheme();
  return (
    <>
     {/* Needs margin top so it is no hidden under navbar mt={} */}
      {/* primary Box */}
      <Box mt={10}>
      <Hero />
        <Container>
          <CompanyValues />
        </Container>
        <Container>
          <Divider />
        </Container>
        <Container>
          <About />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container maxWidth={1000}>
          <Jobs />
        </Container>
        <Container paddingTop={'0 !important'}>
          <Newsletter />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>

        {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
        {/* <h1 dangerouslySetInnerHTML={{__html:content.meta.web.seo_meta_title}}></h1>
             <div>{content.meta.web.seo_meta_description}</div> */}
        <div
          style={{
            background: '#eee',
            border: '1px #000 solid',
            margin: '10px',
            padding: '20px',
          }}
        >
          <h2>Accessible Zesty.io JSON Object</h2>
          <pre>{JSON.stringify(content, null, 2)}</pre>
        </div>
        {/* End of Zesty.io output example */}
      </Box>
    </>
  );
}

export default Career;
