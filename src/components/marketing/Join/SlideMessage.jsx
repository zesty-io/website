import React from 'react'
import { Container, Stack, Button, Box, Grid, Typography } from '@mui/material';

export const SlideMessage = ({
    message = 'What team are you from?', 
    buttonText,
    answerCallBack,
    hoverAnimation,
    exitButtonText='',
    exitButtonAction={},

  }) => {
  return (
    <Container>
        
        <div>{message}</div>
        
        <Box paddingY={5}>
          <Stack direction="row" spacing={2}>
            <Button size="large" variant="contained" onMouseOver={() => hoverAnimation('bouncing')} onClick={() => answerCallBack()}>
                {buttonText}
            </Button>
            {exitButtonText !== '' &&
              <Button size="large" variant="text" onClick={() => exitButtonAction()} onMouseOver={() => hoverAnimation('no')}>
                {exitButtonText}
              </Button>
            }
          </Stack>
        </Box>
        
    </Container>
  )
}
