import { Box, Paper, Stack, Typography } from '@mui/material';
import TextTransition from 'react-text-transition';
import React, { useEffect, useState } from 'react';

//
const ImageTransition = ({
  image = 'https://storage.googleapis.com/assets.zesty.io/website/images/assets/cross%20roads.jpeg',
}) => {
  const styling = [
    'original',
    'crop',
    'crop2',
    'circle',
    'saturation',
    'blur',
    'sepia',
  ];

  const stylingText = [
    '',
    '?w=600&h=448',
    '?w=700&h=600',
    '?w=350&h=350&borderRadius=50%',
    '?w=350&h=350&filter=saturate(4)',
    '?w=350&h=350&borderRadius=50%&filter=blur(4px)',
    '?w=350&h=350&filter=sepia(1)',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === styling.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1500);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <Stack
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      position="relative"
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          py: 4,
          px: 2,
          height: '500px',
        },
        [theme.breakpoints.up('tablet')]: {
          py: 6,
          px: 4,
          height: '700px',
        },
        [theme.breakpoints.up('lg')]: {
          py: 8,
          px: 14,
        },
      })}
    >
      <Box
        sx={[
          {
            transition: 'all 0.5s ease',
          },
          styling[currentIndex] === 'original' && {
            width: '700px',
            height: '700px',
          },

          styling[currentIndex] === 'crop' && {
            width: '350px',
            height: '350px',
          },
          styling[currentIndex] === 'crop2' && {
            width: '700px',
            height: '600px',
          },

          styling[currentIndex] === 'circle' && {
            width: '350px',
            height: '350px',
            borderRadius: '50%',
          },
          styling[currentIndex] === 'saturation' && {
            width: '350px',
            height: '350px',
            filter: 'saturate(4)',
          },
          styling[currentIndex] === 'blur' && {
            width: '350px',
            height: '350px',
            filter: 'blur(4px)',
            borderRadius: '50%',
          },
          styling[currentIndex] === 'sepia' && {
            width: '350px',
            height: '350px',
            filter: 'sepia(1)',
          },
        ]}
        component="img"
        src={image}
      />
      <Stack
        component={Paper}
        elevation={5}
        p={1}
        position="absolute"
        top="65%"
      >
        <Typography
          variant="h6"
          color="text.secondary"
          letterSpacing="2px"
          display="flex"
        >
          https://zesty.io/image.jpeg
          {`${stylingText[currentIndex]}`.split('').map((txt, i) => (
            <TextTransition
              key={i}
              delay={i * 2}
              inline
              style={{ fontWeight: 'bold' }}
              text={txt}
            />
          ))}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ImageTransition;
