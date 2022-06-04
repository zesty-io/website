import { Button } from '@mui/material';
import React from 'react';

export const ResourceLinkComp = ({ data, theme }) => {
  const openInNewTab = () => {
    window.open(data?.resource_link, '_blank').focus();
  };
  return (
    <Button
      onClick={openInNewTab}
      variant="contained"
      color="secondary"
      sx={{ mt: 2 }}
      fullWidth
    >
      {data?.name}
    </Button>
  );
};
