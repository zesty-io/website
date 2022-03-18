/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Agency Partners
 * Name: agency_partners
 * Model ZUID: 6-dcddf2b6b7-hdsjv3
 * File Created On: Thu Mar 03 2022 11:27:11 GMT-0800 (Pacific Standard Time)
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
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-dcddf2b6b7-hdsjv3
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import HeroNotTyped from '../../blocks/heroes/HeroNotTyped';
import Partners from '../../blocks/logoGrid/Partners';
import Main from '../../blocks/portfolioGrid/Main/Main';
import ContactEmail from '../../blocks/formLayouts/ContactEmail';
import CtaSimpleCentered from 'blocks/cta/CtaSimpleCentered/CtaSimpleCentered'
import FillerContent from 'components/FillerContent';


import Container from 'components/Container';


function AgencyPartner({ content }) {

  const theme = useTheme();


  return (
    <>
      <Container>
        <HeroNotTyped
          title={content.title || FillerContent.header}
          description={content.header_description || FillerContent.description}
        />
      </Container>
      <Container paddingY={'0 !important'}>
        <Partners logoPartners={content.header_logos.data} />
      </Container>

      <CtaSimpleCentered
        ctaTitle={content.cta_header_title || FillerContent.header}
        description={
          content.cta_header_description || FillerContent.description
        }
        ctaLeft={content.cta_header_left || FillerContent.cta}
        ctaRight={content.cta_header_right || FillerContent.cta}
      />

      <Container>
        <Main partnerCards={content.agency_partners_cards.data || FillerContent.missingDataArray} />
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
          <ContactEmail
            title={content.cta_footer_title || FillerContent.title}
            description={content.cta_footer_description || FillerContent.description}
            ctaBtn={content.cta_footer_cta ||  FillerContent.cta}
          />
        </Container>
      </Box>

      <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>

    </>
  );
}

export default AgencyPartner;
