import { Typography } from '@mui/material';
import { MarketplaceContext } from 'components/marketplace/MarketplaceContext';
import MarketplaceEntities from 'components/marketplace/MarketplaceEntities';
import React, { useContext } from 'react';

const Tag = () => {
  const { entities } = useContext(MarketplaceContext);

  return (
    <>
      <Typography variant="h4" mt={2}>
        Tag
      </Typography>
      <MarketplaceEntities entities={entities} isIndex={false} />
    </>
  );
};

export default Tag;
