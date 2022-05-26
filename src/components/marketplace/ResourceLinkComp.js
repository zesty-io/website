import { Button } from '@mui/material';
import React from 'react';

export const ResourceLinkComp = ({ data, theme }) => {
  return (
    <Button
      href={data?.resource_link}
      variant="contained"
      color="secondary"
      sx={{ mt: 2 }}
      fullWidth
    >
      {data?.name}
    </Button>
  );
};
