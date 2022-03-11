/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Events and Webinars 
 * Name: events_and_webinars 
 * Model ZUID: 6-fc94dbd586-7b7n30
 * File Created On: Mon Mar 07 2022 18:56:13 GMT-0800 (Pacific Standard Time)
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
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-fc94dbd586-7b7n30
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
// mui
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
// container component
import Container from 'components/Container';
// blocks
import { SimpleHero } from 'blocks/heroes';
import { Result } from 'blocks/formLayouts';
import { Newsletter } from 'blocks/newsletters';
import { CtaWithIllustrationSingleCta } from 'blocks/cta';
// filler content
import FillerContent from 'components/FillerContent';

function EventsAndWebinar({ content }) {
  const theme = useTheme();

  // conditional rendering
  const ComingSoon = () => {
    return(
      <>
        <CtaWithIllustrationSingleCta
        title={'Coming Soon!'}
        description={'Check back again for new Events and Webinars!'}
        cta={'Home'}
        ctaHref={'/'} />
      </>
    )
  }
  return (
    <>
      <SimpleHero
      title={content.title || FillerContent.header}
      subtitle={content.subtitle || ''}
      description={content.header_description || FillerContent.description} />
      <Container>
        {content.events?.data ? <Result /> : <ComingSoon />}
        {/* <Result /> */}
      </Container>
      <Box
        position={'relative'}
        marginTop={{ xs: 4, md: 6 }}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 2,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
        <Container>
          <Newsletter
          title={content.cta_title || FillerContent.header}
          description={content.cta_description || FillerContent.description}
          ctaBtn={content.cta_button || FillerContent.cta} />
        </Container>
      </Box>
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}

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
    </>
  );
}

export default EventsAndWebinar;
