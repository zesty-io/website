import { Stack } from '@mui/material';
import React from 'react';

const CustomIFrame = ({
  src = 'https://zesty.zohobookings.com/portal-embed#/customer/intro',
  ...props
}) => {
  return (
    <Stack
      sx={(theme) => ({
        [theme.breakpoints.up('xs')]: {
          py: 4,
          px: 2,
          maxWidth: theme.maxWidth,
          mx: 'auto',
        },
        [theme.breakpoints.up('tablet')]: {
          py: 6,
          px: 4,
          gap: 10,
        },
        [theme.breakpoints.up('lg')]: {
          py: 10,
          px: 14,
        },
      })}
    >
      <iframe
        width="100%"
        height="750px"
        src={src}
        frameBorder="0"
        allowfullscreen=""
        {...props}
      ></iframe>
    </Stack>
  );
};

export default CustomIFrame;
