import React from 'react'
import { Container, Stack, Button, Box, Grid, Typography } from '@mui/material';

export const SlideQuestions = ({
    question = 'What team are you from?', 
    answers,
    answerCallBack}) => {
  return (
    <Container>
        
        <Typography>{question}</Typography>
        <Stack direction="row" spacing={2}>
            {answers.map(response => 
            <Button variant="contained" onClick={() => answerCallBack(response.value)}>
                {response.answer}
            </Button>
            )}
        </Stack>
    </Container>
  )
}
