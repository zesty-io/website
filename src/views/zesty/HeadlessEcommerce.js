/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless eCommerce 
 * Name: headless_ecommerce 
 * Model ZUID: 6-b69895e8cf-p4125x
 * File Created On: Thu Jun 02 2022 10:35:53 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_eyebrow (text)
 * header_h1 (text)
 * header_description (textarea)
 * header_cta_button_primary (text)
 * header_cta_button_secondary (text)
 * header_graphic (images)
 * headless_cms_benefit_description (wysiwyg_basic)
 * headless_cms_benefit_graphic (images)
 * traditional_v_headless_description (wysiwyg_basic)
 * traditional_v_headless_cta (text)
 * traditional_v_headless_link (internal_link)
 * traditional_description (wysiwyg_basic)
 * traditional_graphic (images)
 * headless_description (wysiwyg_basic)
 * headless_graphic (images)
 * headless_ecomm_benefits_header (text)
 * benefit_1 (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2 (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * ecomm_integrations_header (text)
 * ecomm_integrations_logos (one_to_many)
 * why_zesty_description (wysiwyg_basic)
 * why_zesty_ecomm_cards (one_to_many)
 * customers (text)
 * customer_logos (one_to_many)
 * bottom_cta_description (wysiwyg_basic)
 * bottom_cta_graphic (images)
 * bottom_cta_primary (text)
 * bottom_cta_secondary (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b69895e8cf-p4125x
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FillerContent from 'components/FillerContent';
import React from 'react';
import ZestySvg from '../../../public/assets/images/zesty Logo.png';

const Section1Hero = ({
  eyebrow = FillerContent.header,
  header = FillerContent.header,
  subHeader = FillerContent.header,
  mainImage = FillerContent.dashboard_image,
  bgImage = FillerContent.dashboard_image,
  primaryCta = 'Try Free',
  secondaryCta = 'Try Free',
  gradientBg,
  isMobile,
  theme,
}) => {
  return (
    <Box
      paddingTop={isMobile ? 4 : 15}
      paddingBottom={isMobile ? 4 : 25}
      sx={{
        position: 'relative',
        background: gradientBg,
      }}
    >
      <Container
        sx={{
          display: 'flex',

          gap: '1rem',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <Box
          sx={{
            background: '',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: '15rem',
              display: isMobile ? 'none' : 'flex',
            }}
          >
            <img src={bgImage} alt="" />
          </Box>
          <Typography
            component={'h2'}
            variant={'p'}
            fontWeight={600}
            sx={{
              color: theme.palette.common.white,
              fontWeight: 500,
            }}
          >
            {eyebrow}
          </Typography>
          <Typography
            component={'h1'}
            variant={'p'}
            sx={{
              color: theme.palette.common.white,
              fontWeight: 'bold',
              fontSize: isMobile ? '38px' : '48px',
            }}
          >
            {header}
          </Typography>
          <Typography
            paddingY={2}
            component={'h3'}
            variant={'p'}
            sx={{
              color: theme.palette.common.white,
              fontWeight: 500,
              fontSize: '20px',
            }}
          >
            {subHeader}
          </Typography>
          <Box sx={{ display: isMobile ? 'block' : 'flex' }}>
            <Button
              href={''}
              component={Button}
              variant="contained"
              fullWidth={isMobile ? true : false}
              sx={{
                backgroundColor: theme.palette.common.white,
                color: theme.palette.zesty.zestyOrange,
                padding: '.6rem 4rem',
                fontSize: '16px',
                whiteSpace: 'nowrap',
              }}
            >
              {primaryCta}
            </Button>
            <Button
              href={''}
              variant="text"
              color="inherit"
              fullWidth={isMobile ? true : false}
              sx={{
                display: secondaryCta ? 'block' : 'none',
                color: theme.palette.common.white,
                padding: '.6rem 4rem',
                fontSize: '16px',
                whiteSpace: 'nowrap',
              }}
            >
              {secondaryCta}
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <img src={mainImage} width={isMobile ? 350 : 700} />
        </Box>
      </Container>
    </Box>
  );
};

function HeadlessEcommerce({ content }) {
  console.log(content, 33333);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const Section1Props = {
    eyebrow: 'Headless CMS',
    header: content.header_eyebrow,
    subHeader: content.header_h1,
    mainImage: content.header_graphic?.data[0]?.url,
    bgImage: ZestySvg.src,
    primaryCta: content.header_cta_button_primary,
    secondaryCta: content.header_cta_button_secondary,
    gradientBg: theme.palette.zesty.zestyTealGradient,
    isMobile,
    theme,
  };
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Section1Hero {...Section1Props} />
    </Box>
  );
}

export default HeadlessEcommerce;
