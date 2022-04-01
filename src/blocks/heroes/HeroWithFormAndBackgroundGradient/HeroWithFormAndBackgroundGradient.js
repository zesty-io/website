import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import * as yup from 'yup';
import { Headline } from './components';
import { Card, Typography, useMediaQuery } from '@mui/material';
import FillerContent from 'components/FillerContent';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';

const FormCustom = ({ title }) => {
  const theme = useTheme();

  return (
    <Box padding={{ xs: 3, sm: 6 }} width={1} component={Card} boxShadow={1}>
      <Typography
        variant={'p'}
        component={'h2'}
        textAlign={'center'}
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: '1.7rem',
          color: theme.palette.common.black,
          paddingBottom: '1.5rem',
        }}
      >
        {title || FillerContent.header}
      </Typography>
      <StandardFormWithSelect
        leadDetail="Agency Partner Sign Up"
        businessType="Partner"
        selectedValue={1}
        hideSelect={true}
        hideMessage={true}
        ctaText={FillerContent.cta}
        modalTitle="Thank you for submitting your agency information."
        modalMessage="Our team will be in touch soon to discuss next steps."
        displayMsgUnderButton=" "
        additionalTextfield={{ company: true, jobTitle: true }}
        buttonFullWidth={true}
        hidePrivacySection={true}
        messageLabel="Is there anything you would like to cover in the demo?"
      />
    </Box>
  );
};

const Hero = ({
  headelineTitle,
  description,
  imageCollection,
  backgroundImage,
  form_title,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const images = imageCollection?.map(
    (e) => e.customer_logo?.data && e.customer_logo?.data[0]?.url,
  );

  // old hero bg
  // https://assets.maccarianagency.com/backgrounds/img19.jpg

  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background: `url(${
          backgroundImage || FillerContent.image
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
      <Container position={'relative'} zIndex={2}>
        <Grid
          flexDirection={isMobile ? 'column-reverse' : 'initial'}
          paddingY={6}
          container
          spacing={4}
        >
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <Headline
                title={headelineTitle}
                description={description}
                images={images}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <FormCustom title={form_title} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
