import React from 'react'
import { Container, Stack, Button, Box, Grid, Typography } from '@mui/material';

function random_boolean(seed){

 return seed < 0.5;
}

export const SlideQuestions = ({
    question = 'What team are you from?', 
    answers,
    answerCallBack,
    hoverAnimation,
    storeValue=false
  }) => {

  return (
    <Container>
        
        <Typography>{question}</Typography>
        <Stack direction="row" spacing={2}>
            {answers.sort((a,b) => (a.value < b.value)).map(response => 
            <Button key={`${response.value.slice(0,3)}${Math.random()}`} variant="contained" onMouseOver={() => hoverAnimation(random_boolean(Math.random()) ? 'shake' : 'sway')} onClick={() => answerCallBack(question,response.value,storeValue)}>
                {response.answer}
            </Button>
            )}
        </Stack>
    </Container>
  )
}
