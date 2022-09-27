import React from 'react';
import { Container, Stack, Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';

function random_boolean(seed) {
  return seed < 0.5;
}

function ActionAreaCard({
  question,
  title = '',
  asset = '',
  storeValue,
  animation,
  answer,
  callback,
  cardStyles = {},
  imageStyles = {},
  description,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        //onMouseOver={() => animation(random_boolean(Math.random()) ? 'shake' : 'sway')}
        onClick={() => callback(question, answer, storeValue)}
      >
        <Box
          sx={{
            ...cardStyles,
          }}
        >
          <Image
            alt={answer}
            src={asset}
            height={200}
            width={200}
            layout="responsive"
            quality={20}
            style={{
              ...imageStyles,
            }}
          />
          {/* <Box
            component="img"
            src={asset}
            alt={answer}
            sx={{
              ...imageStyles,
            }}
          /> */}
        </Box>

        <CardContent>
          <Typography variant="h5" component="div">
            {answer}
          </Typography>
          <Typography variant="body2" sx={{ height: '3rem' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export const SlideQuestions = ({
  question = 'What team are you from?',
  answers,
  why = '',
  answerCallBack,
  hoverAnimation,
  storeValue = false,
}) => {
  React.useEffect(() => {
    // setCurrentStep(1);
  }, []);

  return (
    <Container>
      <Box
        sx={{
          textAlign: 'left',
          height: '100vh',
          justifyContent: 'center',
          justifyItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box paddingY={4}>
          <Typography variant="h4">{question}</Typography>
          <Typography variant="body1" color="text.secondary">
            {why}
          </Typography>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          justifyContent="space-between"
        >
          {answers
            .sort((a, b) => a.value < b.value)
            .map((response) => (
              <ActionAreaCard
                key={`${response.answer.slice(0, 3)}${Math.random()}`}
                question={question}
                callback={answerCallBack}
                title={response.answer}
                asset={response.asset}
                answer={response.answer}
                animation={hoverAnimation}
                storeValue={storeValue}
                cardStyles={response.cardSX}
                imageStyles={response.imageSX}
                description={response.description}
              />
            ))}
        </Stack>
      </Box>
    </Container>
  );
};
