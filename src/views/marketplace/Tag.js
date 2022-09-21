import { MarketplaceContext } from 'components/marketplace/MarketplaceContext';
import MarketplaceEntities from 'components/marketplace/MarketplaceEntities';
import React, { useContext } from 'react';

const Tag = () => {
  const { entities } = useContext(MarketplaceContext);

  return (
    <>
      <MarketplaceEntities entities={entities} isIndex={false} />
    </>
  );
};

export default Tag;
