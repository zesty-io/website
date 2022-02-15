import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const mock = [
  'UX',
  'Design',
  'Themes',
  'Photography',
  'MUI',
  'Frontend',
  'JS',
  'NextJS',
  'NodeJS',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'HTML5',
  'CSS3',
  'Modern',
  'Good',
  'Beautiful design',
  'Material design',
  'UI',
];

const Tags = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        align={'center'}
        sx={{
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        Tag cloud
      </Typography>
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
        {mock.map((item) => (
          <Chip
            key={item}
            component={'a'}
            href={''}
            label={item}
            clickable
            sx={{ margin: 0.5 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Tags;
