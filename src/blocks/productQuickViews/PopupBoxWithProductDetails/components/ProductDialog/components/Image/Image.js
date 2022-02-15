import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const mock = [
  {
    title: '',
    src: 'https://assets.maccarianagency.com/backgrounds/img54.jpg',
  },
  {
    title: '',
    src: 'https://assets.maccarianagency.com/backgrounds/img53.jpg',
  },
  {
    title: '',
    src: 'https://assets.maccarianagency.com/backgrounds/img55.jpg',
  },
];

const Image = () => {
  const [current, setCurrent] = useState(mock[0]);
  return (
    <Box>
      {current && (
        <Box
          sx={{
            marginBottom: 2,
            width: 1,
            height: 'auto',
            '& img': {
              width: 1,
              height: 1,
              objectFit: 'cover',
              borderRadius: 2,
            },
          }}
        >
          <img src={current.src} alt={current.title} />
        </Box>
      )}
      <Stack
        direction={'row'}
        spacing={2}
        alignItems={'center'}
        flexWrap={'wrap'}
      >
        {mock.map((item, i) => (
          <Box
            key={i}
            onClick={() => setCurrent(item)}
            sx={{
              width: 80,
              height: 'auto',
              cursor: 'pointer',
              '& img': {
                width: 1,
                height: 1,
                objectFit: 'cover',
                borderRadius: 2,
              },
            }}
          >
            <img src={item.src} alt={item.title} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Image;
