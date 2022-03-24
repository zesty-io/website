/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Sales People
 * Name: sales_people
 * Model ZUID: 6-80f500-gqgvqb
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)
 * page_header_content (text)
 * embed_code (textarea)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-80f500-gqgvqb
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React, { useEffect, useState } from 'react';
// mui imports
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
// container
import Container from 'components/Container';
// page specific
import { CardsInSlider } from 'blocks/cards';
import { SimpleHeader } from 'blocks/banners';
// Filler content
import FillerContent from 'components/FillerContent';
import useFetch from 'components/hooks/useFetch';

function SalesPeople({ content }) {
  const theme = useTheme();

  const { data: clientCards } = useFetch(`/-/clientcards.json`);

  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container>
            <SimpleHeader
              title={content.title || FillerContent.header}
              description={
                content.page_header_content || FillerContent.description
              }
            />
          </Container>
        </Box>
        <Container paddingBottom={'0 !important'}>
          <Box dangerouslySetInnerHTML={{ __html: content.embed_code }} />
        </Container>
        <Container>
          <Divider />
        </Container>
        <Container paddingTop={'0 !important'}>
          <CardsInSlider
            title={content.client_title || FillerContent.header}
            eyebrow={content.client_eyebrow || FillerContent.header}
            array={clientCards}
          />
        </Container>
      </Box>
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      {/* <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div> */}
      {/* End of Zesty.io output example */}
    </>
  );
}

export default SalesPeople;
