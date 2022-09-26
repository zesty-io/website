import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const NavigationStart = ({
  theme,
  handlePrev,
  currentStep,
  steps,
  title,
  description,
}) => {
  return (
    <Grid
      item
      xs={0}
      md={3}
      sx={{ background: theme.palette.zesty.zestyDarkBlue }}
      px={6}
      pt={10}
    >
      <Grid container>
        <Grid item xs={12} alignItems="center">
          <Box
            display="flex"
            justifyContent={'space-between'}
            alignItems="center"
          >
            <img
              height={40}
              width={40}
              src="https://brand.zesty.io/zesty-io-logo.svg"
              alt="Zesty.io Logo"
            />
            <Button onClick={handlePrev}>
              <ChevronLeftIcon fontSize="large" color="secondary" />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {currentStep !== 5 ? (
            <Box display={'flex'} pt={10} pb={4} gap={1}>
              <Typography
                variant="h6"
                sx={{ color: theme.palette.zesty.zestyWhite }}
              >
                {currentStep}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: theme.palette.zesty.zestyWhite }}
              >
                of
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: theme.palette.zesty.zestyWhite }}
              >
                {steps}
              </Typography>
            </Box>
          ) : (
            <Box display={'flex'} pt={10} pb={4} gap={1}>
              <Typography
                variant="h6"
                sx={{ color: theme.palette.zesty.zestyWhite }}
              >
                Great Progress
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
      <Box>
        <Typography
          variant="h3"
          pb={4}
          sx={{ color: theme.palette.zesty.zestyWhite }}
        >
          {title}
        </Typography>
        <Typography
          variant="body"
          sx={{ color: theme.palette.zesty.zestyWhite }}
        >
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};
