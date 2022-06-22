// MUI Imports
import { useTheme } from '@mui/material/styles';
import FillerContent from 'components/globals/FillerContent';
import { Box, useMediaQuery } from '@mui/material';
// Components Imports

import HeroWithFormAndBackgroundGradient from 'blocks/heroes/HeroWithFormAndBackgroundGradient';

const PpcShortForm = ({ content }) => {
  const theme = useTheme();

  const formContent = {
    leadDetail: 'Adwords',
    businessType: 'Direct',
    leadSource: 'Advertisement',
    selectedValue: 2,
    hideSelect: true,
    hideMessage: true,
    ctaText: FillerContent.cta,
    modalTitle: 'Thank you for submitting your information.',
    modalMessage: 'Our team will be in touch soon to discuss next steps.',
    displayMsgUnderButton: ' ',
    additionalTextfield: { company: true, jobTitle: true },
    buttonFullWidth: true,
    hidePrivacySection: true,
    messageLabel: 'Is there anything you would like to cover in the demo?',
    phoneNumber: true,
  };
  return (
    <Box id="contact-us">
      <HeroWithFormAndBackgroundGradient
        headelineTitle={content.contact_form_h3 || FillerContent.header}
        description={
          content.request_demo_description || FillerContent.description
        }
        imageCollection={
          content.logos?.data?.slice(0, 3) || [FillerContent.image]
        }
        backgroundImage={content.form_background_image.data[0].url}
        form_title={content.form_title || FillerContent.header}
        formContent={formContent}
      />
    </Box>
  );
};

export default PpcShortForm;
