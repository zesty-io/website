import React from 'react'
import { Container, Stack, Button, Box, Grid, Typography } from '@mui/material';

export const SlideMessage = ({
    message = 'What team are you from?', 
    buttonText,
    answerCallBack,
    hoverAnimation

  }) => {
  return (
    <Container>
        
        <Typography>{message}</Typography>
        <Stack direction="row" spacing={2}>
            
            <Button variant="contained" onMouseOver={() => hoverAnimation('bouncing')} onClick={() => answerCallBack()}>
                {buttonText}
            </Button>
            
        </Stack>
    </Container>
  )
}
