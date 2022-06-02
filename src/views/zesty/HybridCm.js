/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Hybrid CMS 
 * Name: hybrid_cms 
 * Model ZUID: 6-dece98fde3-4vzxq8
 * File Created On: Thu May 26 2022 19:53:01 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_eyebrow (text)
 * hero_title (text)
 * hero_description (text)
 * hero_cta_primary (text)
 * hero_cta_secondary (text)
 * hero_graphic (images)
 * about_hybrid_cms (wysiwyg_basic)
 * about_hybrid_cms_graphic (images)
 * hybrid_interface (wysiwyg_basic)
 * hybrid_interface_graphic (images)
 * hybrid_cms_features_header (wysiwyg_basic)
 * hybrid_cms_feature_1 (wysiwyg_basic)
 * hybrid_cms_feature_1_image (images)
 * hybrid_cms_feature_2 (wysiwyg_basic)
 * hybrid_cms_feature_2_image (images)
 * hybrid_cms_feature_3 (wysiwyg_basic)
 * hybrid_cms_feature_3_image (images)
 * hybrid_cms_feature_4 (wysiwyg_basic)
 * hybrid_cms_feature_4_image (images)
 * hybrid_cms_feature_5 (wysiwyg_basic)
 * hybrid_cms_feature_5_image (images)
 * hybrid_cms_feature_6 (wysiwyg_basic)
 * hybrid_cms_feature_6_image (images)
 * case_study_title (text)
 * case_studies (one_to_many)
 * bottom_cta_header (text)
 * bottom_cta_graphic (images)
 * bottom_cta_primary (text)
 * bottom_cta_secondary (text)
 * related_content_header (text)
 * related_content_articles (one_to_many)
 * related_content_cta_button (text)
 * related_content_button_link (internal_link)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-dece98fde3-4vzxq8
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FillerContent from 'components/FillerContent';
import ZestySvg from '../../../public/assets/images/zesty Logo.png';
import featuresBg1 from '../../../public/assets/images/dxp_features_bg1.svg';
import featuresBg2 from '../../../public/assets/images/dxp_features_bg2.svg';
import headlessCmsBg from '../../../public/assets/images/dxp_headless_bg.svg';
import bottomBg from '../../../public/assets/images/dxp_bottom_bg.svg';
import dxpCurve from '../../../public/assets/images/dxp_curve.svg';
import dxpLine from '../../../public/assets/images/dxp_line.svg';
import { fontSize } from '@mui/system';
import * as helper from 'utils';

const Section1Hero = ({
  eyebrow = FillerContent.header,
  header = FillerContent.header,
  subHeader = FillerContent.header,
  mainImage,
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
        textAlign: 'center',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          gap: '3rem',
          flexDirection: isMobile ? 'column' : 'column',
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
            sx={{
              color: theme.palette.zesty.zestyOrange,
              fontWeight: 'bold',
              fontSize: '32px',
            }}
          >
            {eyebrow}
          </Typography>
          <Typography
            component={'h1'}
            variant={'p'}
            sx={{
              color: theme.palette.zesty.zestyZambezi,
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
              color: theme.palette.zesty.zestyZambezi,
              fontWeight: 500,
              fontSize: '20px',
            }}
          >
            {subHeader}
          </Typography>
          <Box
            sx={{
              display: isMobile ? 'block' : 'flex',
              width: '100%',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <Button
              href={''}
              component={Button}
              variant="contained"
              color="secondary"
              fullWidth={isMobile ? true : false}
              sx={{
                padding: '.6rem 4rem',
                whiteSpace: 'nowrap',
                fontSize: '16px',
              }}
            >
              {primaryCta}
            </Button>
            <Button
              href={''}
              variant="text"
              color="secondary"
              fullWidth={isMobile ? true : false}
              sx={{
                display: secondaryCta ? 'flex' : 'none',
                padding: '.6rem 4rem',
                fontSize: '16px',
                whiteSpace: 'nowrap',
                alignItems: 'center',
                textDecoration: 'underline',
                gap: '.5rem',
              }}
            >
              {secondaryCta}
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Box>

        {mainImage && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <img src={mainImage} width={isMobile ? 350 : 900} />
          </Box>
        )}
      </Container>
    </Box>
  );
};
const Section2About = ({ text, img, isMobile, theme }) => {
  return (
    <Box paddingY={isMobile ? 0 : 0} sx={{ position: 'relative' }}>
      {/* <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          right: 0,
          bottom: 0,
          display: isMobile ? 'none' : 'flex',
        }}
      >
        <img src={bottomBg.src} alt="bg" />
      </Box> */}
      <Container>
        <Box
          paddingY={isMobile ? 2 : 8}
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '1rem' : '4rem',
          }}
        >
          <div data-aos="fade-left">
            <Box sx={{ position: 'relative' }}>
              <Typography
                component={'h2'}
                variant={'p'}
                sx={{
                  fontSize: isMobile ? '.9rem' : '1.3rem',
                  color: theme.palette.secondary.darkCharcoal,
                  textAlign: isMobile ? 'center' : 'left',
                }}
                dangerouslySetInnerHTML={{
                  __html: helper.strColorChanger(
                    text,
                    'Hybrid CMS',
                    theme.palette.zesty.zestyOrange,
                  ),
                }}
              />
            </Box>
          </div>
          <div data-aos="fade-right">
            <Box paddingY={isMobile ? 15 : 0}>
              <img src={img} width={isMobile ? 350 : 600} />
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
};
function HybridCm({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(content, 1111);
  const Section1Props = {
    eyebrow: content.hero_eyebrow,
    header: content.hero_title,
    subHeader: content.hero_description,
    mainImage: content.hero_graphic?.data[0]?.url,
    bgImage: ZestySvg.src,
    primaryCta: content.hero_cta_primary,
    secondaryCta: content.hero_cta_secondary,
    gradientBg: theme.palette.common.white,
    isMobile,
    theme,
  };
  const Section2Props = {
    text: content.about_hybrid_cms,
    img: content.about_hybrid_cms_graphic.data[0].url,
    isMobile,
    theme,
  };
  React.useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);
  return (
    <>
      <Section1Hero {...Section1Props} />
      <Section2About {...Section2Props} />
    </>
  );
}

export default HybridCm;
