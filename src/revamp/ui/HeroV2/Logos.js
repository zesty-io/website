import { Stack } from '@mui/material';
import React from 'react';
import { generateAlt } from 'utils';

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
          src={image.src}
          alt={generateAlt()}
          loading="lazy"
          width={image.width}
          height={image.height}
        />
      ))}
    </Stack>
  );
};

export default Logos;
