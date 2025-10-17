import React from 'react';
import { useTheme } from '@emotion/react';
import {
  Typography,
  Box,
  useMediaQuery,
  MobileStepper,
  Button,
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import FeatureCard from './FeatureCard';

const AdditionalFeatures = ({ features, title }) => {
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

  const [activeStep, setActiveStep] = React.useState(0);

  const featuresPerPage = isLargeScreen ? 3 : isMediumScreen ? 2 : 1;
  const maxSteps = Math.ceil(features.length / featuresPerPage);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const startIndex = Math.max(
    0,
    activeStep * featuresPerPage - (featuresPerPage - 1),
  );
  const endIndex = Math.min(features.length, startIndex + featuresPerPage);
  const currentFeatures = features.slice(startIndex, endIndex);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        pt: 10,
        margin: 0,
        maxWidth: '100%',
        '!important': '',
      }}
    >
      <Typography
        sx={{
          maxWidth: { sm: '640px', xs: '360px' },
          fontSize: { sm: '44px', xs: '36px' },
          fontWeight: 'bold',
          color: theme.palette.zesty.zestyDarkText,
          textAlign: 'center',
          lineHeight: '1.2',
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          my: 5,
          width: '100%',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
        }}
      >
        {currentFeatures.map((feature) => (
          <FeatureCard feature={feature} />
        ))}
      </Box>

      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          backgroundColor: 'transparent',
          '.MuiMobileStepper-dotActive': {
            backgroundColor: theme.palette.zesty.zestyOrange,
          },
        }}
        nextButton={
          <Button
            color="secondary"
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            color="secondary"
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
};

export default AdditionalFeatures;
