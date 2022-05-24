/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Gated Content Pages 
 * Name: gated_content_pages 
 * Model ZUID: 6-fe91d19b97-20jq6m
 * File Created On: Sun May 01 2022 13:45:46 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_h1 (text)
 * form_title (text)
 * hero_description_box (wysiwyg_basic)
 * section_1_h1 (text)
 * section_1_boxes (one_to_many)
 * section_2_content (wysiwyg_basic)
 * section_2_image (images)
 * section_3_content (wysiwyg_basic)
 * section_3_image (images)
 * bottom_form_title (text)
 * bottom_form_background_image (images)
 * hero_background_image (images)
 * additional_resources_boxes (one_to_many)
 * additional_resources_header (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-fe91d19b97-20jq6m
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { VerticallyAlignedBlogCardsWithShapedImage } from 'blocks/blog';
import { HeroWithFormAndBackgroundGradient } from 'blocks/heroes';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';
import FillerContent from 'components/FillerContent';
import useFetch from 'components/hooks/useFetch';
import WYSIWYGRender from 'components/WYSIWYGRender';
import React from 'react';
import CircularProgressWithLabel from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';

const FeaturesWithMobileScreenshot = ({
  header,
  content,
  image,
  index,
  feature_list_h1,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container>
      {feature_list_h1 && (
        <Typography
          variant="p"
          component="h2"
          color="text.primary"
          sx={{
            fontWeight: '700',
            textAlign: 'center',
            fontSize: '32px',
          }}
        >
          {feature_list_h1 || FillerContent.header}
        </Typography>
      )}
      <Grid
        display={'flex'}
        flexDirection={
          isMobile ? 'column' : index !== 1 ? 'row' : 'row-reverse'
        }
        container
        spacing={isMobile ? 0 : 4}
      >
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
          order={{ xs: 3, sm: 2 }}
        >
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                {header}
              </Typography>
            </Box>
            <Grid container order={{ sm: 2, md: 1 }}>
              <WYSIWYGRender
                customClass="circle-icons"
                rich_text={content || FillerContent.rich_text}
              ></WYSIWYGRender>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: 'none',
            backgroundImage: '',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            // alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'start',
            marginTop: isMobile ? '1rem' : '4rem',
          }}
          order={{ sm: 1, md: 2 }}
        >
          <img
            height={isMobile ? 200 : 320}
            src={
              image
                ? image
                : theme.palette.mode === 'light'
                ? FillerContent.mobileImage.light
                : FillerContent.mobileImage.dark
            }
            alt={header || FillerContent.header}
            sx={{
              marginBottom: isMobile ? '3rem' : '1rem',
              objectFit: 'contain',
              borderRadius: '2rem',
              transform: isMobile ? 'scale(.80)' : 'scale(.70)',
              filter: theme.palette.mode === 'dark' ? 'brightness(1)' : 'none',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const ContactUsForm = ({ theme, content, formContent }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const form_description = '   ';
  return (
    <Box
      marginTop={isMobile ? 4 : 14}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background: `url(${
          (content.bottom_form_background_image?.data &&
            content.bottom_form_background_image?.data[0]?.url) ||
          FillerContent.image
        }) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 74%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />

      <Box
        id="contact-us"
        sx={{
          position: 'relative',
          padding: isMobile ? '5rem 0' : '12rem 0',
          zIndex: 2,
        }}
      >
        <ContactUs
          title={content.bottom_form_title || FillerContent.header}
          description={form_description || FillerContent.description}
          content={content}
          formContent={formContent}
        />
      </Box>
    </Box>
  );
};

const ContactUs = ({ title, description, content, formContent }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.common.white,
        paddingTop: '3rem',
        paddingBottom: '1rem',
        borderRadius: '15px',
        paddingX: '3rem',
      }}
      maxWidth={600}
      margin={'0 auto'}
    >
      <Box marginBottom={4}>
        <Typography
          variant={'p'}
          component="h2"
          sx={{
            fontSize: '1.7rem',
            fontWeight: 700,
            color: theme.palette.common.black,
          }}
          align={'center'}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.common.black,
          }}
          align={'center'}
        >
          {description}
        </Typography>
      </Box>
      <Box paddingBottom={6} textAlign="left">
        <StandardFormWithSelect {...formContent} />
      </Box>
    </Box>
  );
};
function GatedContentPage({ content }) {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const formContent = {
    leadDetail: 'CMSW - Media',
    businessType: 'Direct',
    leadSource: 'CMS Wire',
    selectedValue: 2,
    hideSelect: true,
    hideMessage: true,
    ctaText: FillerContent.cta,

    modalTitle: `Thank you for downloading the DXP buyer's guide and RFP template. `,
    modalMessage:
      'Find more information about digital experiences at Zesty.io/mindshare.',
    displayMsgUnderButton: ' ',
    additionalTextfield: { company: true, jobTitle: true, phoneNumber: true },
    buttonFullWidth: true,
    hidePrivacySection: true,
    messageLabel: '',
    validationType: 'dxp',
    bottomCheckbox: true,
    bottomCheckboxLabel: 'Sign me up for Zesty newsletters insights',
    ctaButton: 'Download Now',
    downloadLink:
      content.contentdownload?.data && content.contentdownload?.data[0]?.url,
  };

  return (
    <>
      {/* Hero section */}
      <HeroWithFormAndBackgroundGradient
        headelineTitle={content.hero_h1 || FillerContent.header}
        description={content.hero_description_box || FillerContent.description}
        imageCollection={[]}
        backgroundImage={
          content?.hero_background_image?.data &&
          content?.hero_background_image?.data[0]?.url
        }
        form_title={content.form_title || FillerContent.header}
        formContent={formContent}
      />

      {/* section */}
      <Box id="content-management" paddingTop={6}>
        <FeaturesWithMobileScreenshot
          index={0}
          header={'   ' || FillerContent.header}
          content={content.section_2_content || FillerContent.rich_text}
          image={
            (content?.section_2_image?.data &&
              content?.section_2_image?.data[0]?.url) ||
            FillerContent.image
          }
        />
      </Box>

      {/* section */}
      <Box id="digital-asset-management" paddingTop={6}>
        <FeaturesWithMobileScreenshot
          index={1}
          header={'  ' || FillerContent.header}
          content={content.section_3_content || FillerContent.rich_text}
          image={
            (content?.section_3_image?.data &&
              content?.section_3_image?.data[0]?.url) ||
            FillerContent.image
          }
        />
      </Box>

      {/* form */}
      <ContactUsForm
        theme={theme}
        content={content}
        formContent={formContent}
      />

      {/* Industry Insights > Latest Blogs articles */}
      <Box paddingY={8}>
        <VerticallyAlignedBlogCardsWithShapedImage
          title={content.additional_resources_header || FillerContent.header}
          description={undefined}
          popularArticles={content.additional_resources_boxes.data}
          ctaBtn={undefined}
          ctaUrl={/mindshare/}
          titlePosition="center"
          titleVariant="h4"
        />
      </Box>
    </>
  );
}

export default GatedContentPage;
