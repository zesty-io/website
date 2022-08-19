import React from 'react'
import { Container, Stack, Button, Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export const SlideMessage = ({
    message = 'What team are you from?', 
    buttonText,
    answerCallBack,
    hoverAnimation,
    exitButtonText='',
    exitButtonAction={},

  }) => {
    const theme = useTheme();

  return (
    
      <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">  
                 
                    <Grid item lg={6} md={6} xs={12}>
                        <Container sx={{padding: '1em'}}>
                          {message}
                          
                          <Box paddingY={2  } sx={{textAlign: 'center'}}>
                            <Stack direction="row" alignItems="center" spacing={2} justifyContent="center">
                              <Button size="large" color="secondary" variant="contained" onMouseOver={() => hoverAnimation('still')} onClick={() => answerCallBack()}>
                                  {buttonText}
                              </Button>
                              {exitButtonText !== '' &&
                                <Button size="large" sx={{color: theme.palette.common.grey}} variant="text" onClick={() => exitButtonAction()} onMouseOver={() => hoverAnimation('no')}>
                                  {exitButtonText}
                                </Button>
                              }
                            </Stack>
                          </Box>
        
                        </Container>
                      </Grid>
                </Grid>
  )
}
