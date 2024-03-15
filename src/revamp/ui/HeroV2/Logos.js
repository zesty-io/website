import { Stack } from '@mui/material';
import React from 'react';

const Logos = ({ logos }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      sx={(theme) => ({
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      })}
      rowGap="24px"
      columnGap="20px"
    >
      {logos.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          loading="eager"
          width={image.width}
          height={image.height}
        />
      ))}
    </Stack>
  );
};

export default Logos;
