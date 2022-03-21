/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import FillerContent from 'components/FillerContent';
import WYSIWYGRender from 'components/WYSIWYGRender';
import { useMediaQuery } from '@mui/material';

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
          isMobile ? 'column-reverse' : index !== 1 ? 'row' : 'row-reverse'
        }
        container
        spacing={4}
      >
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                {header}
              </Typography>
            </Box>
            <Grid container>
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
            backgroundColor: 'transparent',
            backgroundImage: '',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box
            component={'img'}
            src={
              image
                ? image
                : theme.palette.mode === 'light'
                ? FillerContent.mobileImage.light
                : FillerContent.mobileImage.dark
            }
            alt={header || FillerContent.header}
            width={1}
            height={1}
            sx={{
              marginBottom: '2.5rem',
              objectFit: 'contain',
              borderRadius: '2.5rem',
              transform: isMobile ? 'scale(.60)' : 'scale(.85)',
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturesWithMobileScreenshot;
