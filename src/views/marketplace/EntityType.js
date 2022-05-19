import { Typography } from '@mui/material';
import { MarketplaceContext } from 'components/marketplace/MarketplaceContext';
import MarketplaceEntities from 'components/marketplace/MarketplaceEntities';
import React, { useContext } from 'react';

const EntityType = () => {
  const { entities } = useContext(MarketplaceContext);

  return (
    <>
      <Typography variant="h4" mt={2}>
        Entity Type
      </Typography>
      <MarketplaceEntities entities={entities} isIndex={false} />
    </>
  );
};

export default EntityType;
