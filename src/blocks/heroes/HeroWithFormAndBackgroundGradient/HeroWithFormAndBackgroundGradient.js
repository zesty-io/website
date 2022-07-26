import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import { Headline } from './components';
import { Card, Typography, useMediaQuery } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';
import StandardFormWithSelect from 'components/cta/StandardFormWithSelect';
import { useRouter } from 'next/router';
import ZohoFormEmbed from 'components/cta/ZohoFormEmbed';

// Wrapper for the standardformwithselect component
const FormCustom = ({ title, content }) => {
  const theme = useTheme();
  const titleStyle = {
    fontWeight: 700,
    fontSize: '1.7rem',
    color: theme.palette.common.black,
    paddingBottom: '1.5rem',
  };
  return (
    <Box padding={{ xs: 3, sm: 6 }} width={1} component={Card} boxShadow={1}>
      <Typography
        variant={'p'}
        component={'h2'}
        textAlign={'center'}
        gutterBottom
        sx={titleStyle}
      >
        {title || FillerContent.header}
      </Typography>
      <StandardFormWithSelect {...content} />
    </Box>
  );
};

const Hero = ({
  headelineTitle,
  description,
  imageCollection,
  backgroundImage,
  form_title,
  formContent,
}) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const images = imageCollection?.map(
    (e) => e?.url || (e.customer_logo?.data && e.customer_logo?.data[0]?.url),
  );

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
          backgroundColor: router.asPath.includes(
            '/ppc/content-management-system/',
          )
            ? theme.palette.zesty.zesyDarkBlue
            : theme.palette.primary.main,
          backgroundImage: router.asPath.includes(
            '/ppc/content-management-system/',
          )
            ? 'tranparent'
            : `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 74%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Grid paddingY={6} container spacing={4}>
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
              {formContent.zohoFormLink ? (
                <ZohoFormEmbed
                  formURL={formContent.zohoFormLink}
                  height="400px"
                />
              ) : (
                <FormCustom title={form_title} content={formContent} />
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
