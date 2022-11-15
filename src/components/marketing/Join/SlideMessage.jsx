import React from 'react';
import { Container, Stack, Button, Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export const SlideMessage = ({
  message = 'What team are you from?',
  buttonText,
  answerCallBack,
  hoverAnimation,
  image = '',
  exitButtonText = '',
  exitButtonAction = {},
}) => {
  const theme = useTheme();

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item lg={12} md={12} xs={12}>
        <Container sx={{ padding: '1em' }}>
          <Grid container paddingX={4}>
            <Grid item lg={6} md={6} xs={12}>
              {message}
              <Box paddingY={2} sx={{ textAlign: 'center' }}>
                <Stack
                  direction="row"
                  alignItems="left"
                  spacing={2}
                  justifyContent="left"
                >
                  <Button
                    size="large"
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: '400',
                      padding: '10px 30px',
                    }}
                    color="secondary"
                    variant="contained"
                    onMouseOver={() => hoverAnimation('still')}
                    onClick={() => answerCallBack()}
                    startIcon={<DoubleArrowIcon />}
                  >
                    {buttonText}
                  </Button>
                  {exitButtonText !== '' && (
                    <Button
                      size="large"
                      sx={{
                        color: theme.palette.common.grey,
                        fontSize: '2rem',
                      }}
                      variant="text"
                      onClick={() => exitButtonAction()}
                      onMouseOver={() => hoverAnimation('no')}
                    >
                      {exitButtonText}
                    </Button>
                  )}
                </Stack>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              {image !== '' && (
                <img
                  src={`${image}?width=600`}
                  width="100%"
                  alt={`Try Zesty.io Free`}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};
