// MUI Imports
import { Box, useMediaQuery } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';

// Components Import
import ContactUs from './ContactUs';

const ContactUsForm = ({ theme, content, formContent }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background: `url(${
          (content.form_background_image?.data &&
            content.form_background_image?.data[0]?.url) ||
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
          title={content.contact_form_h3 || FillerContent.header}
          description={
            content.contact_form_description || FillerContent.description
          }
          content={content}
          formContent={formContent}
        />
      </Box>
    </Box>
  );
};

export default ContactUsForm;
