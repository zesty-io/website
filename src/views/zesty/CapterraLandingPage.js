/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Capterra Landing Page 
 * Name: capterra_landing_page 
 * Model ZUID: 6-b4f1d99bec-bx5qm6
 * File Created On: Tue Apr 19 2022 13:15:47 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_h1 (text)
 * hero_description (wysiwyg_basic)
 * hero_background_image (images)
 * form_title (text)
 * companies_title (text)
 * company_logos (one_to_many)
 * hero_logo_images (images)
 * benefits_title (text)
 * benefits_cards (one_to_many)
 * reviews_title (text)
 * reviews_description (text)
 * reviews (one_to_many)
 * bottom_form_title (text)
 * bottom_form_description (text)
 * background_image_bottom (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b4f1d99bec-bx5qm6
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import FillerContent from 'components/FillerContent';
import { useTheme } from '@mui/material/styles';
import { LogoGridSimpleCentered } from 'blocks/logoGrid';
import {
  alpha,
  Avatar,
  Box,
  Container,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ReviewsWithSimpleBoxes } from 'blocks/testimonials';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';
import { HeroWithFormAndBackgroundGradient } from 'blocks/heroes';

const ContactUsForm = ({ theme, content, formContent }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background: `url(${
          (content.background_image_bottom?.data &&
            content.background_image_bottom?.data[0]?.url) ||
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
          padding: isMobile ? '5rem 0' : '10rem 0',
          zIndex: 2,
        }}
      >
        <ContactUs
          title={content.bottom_form_title || FillerContent.header}
          description={
            content.bottom_form_description || FillerContent.description
          }
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
          variant={'h3'}
          sx={{
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
      <Box paddingBottom={6} textAlign="center">
        <StandardFormWithSelect {...formContent} />
      </Box>
    </Box>
  );
};
const SimpleCentered = ({ header, description, cards = [] }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Box marginBottom={2}>
            <Typography
              variant={'p'}
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: isMobile ? '24px' : '35px',
                color: theme.palette.common.white,
                textAlign: 'center',
              }}
            >
              {header || FillerContent.header}
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={isMobile ? 4 : 8}>
          {cards?.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box width={1} height={1}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  marginTop={4}
                >
                  <Box
                    component={Avatar}
                    width={60}
                    height={60}
                    marginBottom={2}
                    bgcolor={alpha(theme.palette.primary.main, 0.4)}
                    color={theme.palette.primary.main}
                  >
                    <Icon>{item.icon_name}</Icon>
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500, marginTop: '1rem' }}
                    align={'center'}
                    color={theme.palette.zesty.white}
                  >
                    {item.benefit_title || FillerContent.header}
                  </Typography>
                  <Typography
                    align={'center'}
                    color={theme.palette.zesty.white}
                  >
                    {item.benefit_content || FillerContent.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

function CapterraLandingPage({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const formContent = {
    leadDetail: 'CMSW-email',
    businessType: 'Direct',
    leadSource: 'CMS Wire',
    selectedValue: 2,
    hideSelect: true,
    hideMessage: true,
    ctaText: FillerContent.cta,
    modalTitle: `Thank you for downloading the DXP buyer's guide and RFP template. `,
    modalMessage: `Find more information about digital experiences at Zesty.io/mindshare.`,
    displayMsgUnderButton: ' ',
    additionalTextfield: { company: true, jobTitle: true },
    buttonFullWidth: true,
    hidePrivacySection: true,
    messageLabel: 'Is there anything you would like to cover in the demo?',
    downloadLink:
      'https://github.com/zesty-io/nextjs-website/files/8653256/Zesty.Scorecard.-TEST.pdf',
  };

  const reviesHeader = `<h1 dir="ltr" style="text-align: center;">${content.reviews_title}</h1> <p style="text-align: center;">${content.reviews_description}</p>`;

  return (
    <>
      {/* Hero with form  */}
      <HeroWithFormAndBackgroundGradient
        headelineTitle={content.hero_h1 || FillerContent.header}
        description={content.hero_description || FillerContent.description}
        imageCollection={
          content.hero_logo_images?.data || [FillerContent.image]
        }
        backgroundImage={
          content?.hero_background_image?.data &&
          content?.hero_background_image?.data[0]?.url
        }
        form_title={content.form_title || FillerContent.header}
        formContent={formContent}
      />

      {/* Logo section  */}
      <Box paddingY={4}>
        <LogoGridSimpleCentered
          title={content.companies_title || FillerContent.header}
          imageCollection={content.company_logos?.data || [FillerContent.image]}
        />
      </Box>

      {/* Benefits section */}
      <Box
        sx={{
          background: theme.palette.zesty.zestyDarkBlue,
          padding: isMobile ? '7rem 0' : '5rem 0',
        }}
      >
        <SimpleCentered
          header={content.benefits_title || FillerContent.header}
          cards={content.benefits_cards?.data || []}
        />
      </Box>

      {/* Testimonial section */}
      <Box bgcolor={'alternate.main'} paddingY={8}>
        <ReviewsWithSimpleBoxes
          header={reviesHeader || FillerContent.header}
          list={content.reviews?.data || []}
        />
      </Box>

      {/* Form */}
      <ContactUsForm
        theme={theme}
        content={content}
        formContent={formContent}
      />
    </>
  );
}

export default CapterraLandingPage;
