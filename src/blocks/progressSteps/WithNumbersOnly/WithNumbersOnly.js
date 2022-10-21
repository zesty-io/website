import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Publish the ad',
    description: `Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  },
];

const WithNumbersOnly = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Container>
      <Box width={1}>
        <Stepper
          activeStep={activeStep}
          sx={{
            '& .MuiStepConnector-line': {
              borderTopWidth: theme.spacing(1),
              borderColor: theme.palette.alternate.dark,
            },
          }}
        >
          {steps.map((step, index) => (
            <Step
              key={step.label}
              completed={completed[index]}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 0,
                '& .MuiStepLabel-iconContainer': {
                  padding: 0,
                },
                '& .MuiSvgIcon-root': {
                  width: theme.spacing(5),
                  height: theme.spacing(5),
                },
              }}
            >
              <StepButton onClick={handleStep(index)} />
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                  color="primary"
                  variant={'outlined'}
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box sx={{ mt: 2, mb: 1, p: 2 }}>
                <Typography>{steps[activeStep].description}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="primary"
                  variant={'outlined'}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                  variant={'contained'}
                  onClick={handleNext}
                  sx={{ mr: 1 }}
                >
                  Next
                </Button>
                {activeStep !== steps.length && (
                  <Button onClick={handleComplete} sx={{ fontWeight: 700 }}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete step'}
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </Container>
  );
};

export default WithNumbersOnly;
