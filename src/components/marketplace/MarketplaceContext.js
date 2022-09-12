import React, { useEffect, useState } from 'react';

export const MarketplaceContext = React.createContext();

const MarketplaceProvider = ({ inititalEntities, children }) => {
  const [entities, setEntities] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setEntities(inititalEntities || []);
  }, []);

  return (
    <MarketplaceContext.Provider
      value={{ entities, setEntities, isSearching, setIsSearching }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
};

export default MarketplaceProvider;
