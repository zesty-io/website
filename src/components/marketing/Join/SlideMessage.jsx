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
    <Container>
        
        <Box sx={{textAlign: 'center'}}>{message}</Box>
        
        <Box paddingY={3} sx={{textAlign: 'center'}}>
          <Stack direction="row" spacing={2}>
            <Button size="large" color="secondary" variant="contained" onMouseOver={() => hoverAnimation('bouncing')} onClick={() => answerCallBack()}>
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
  )
}
