import { MarketplaceContext } from 'components/marketplace/MarketplaceContext';
import MarketplaceEntities from 'components/marketplace/MarketplaceEntities';
import React, { useContext } from 'react';

const EntityType = () => {
  const { entities } = useContext(MarketplaceContext);

  return (
    <>
      <MarketplaceEntities entities={entities} isIndex={false} />
    </>
  );
};

export default EntityType;
