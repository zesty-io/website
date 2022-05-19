import React, { useEffect, useState } from 'react';

export const MarketplaceContext = React.createContext();

const MarketplaceProvider = ({ inititalEntities, children }) => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    setEntities(inititalEntities);
  }, []);

  return (
    <MarketplaceContext.Provider value={{ entities, setEntities }}>
      {children}
    </MarketplaceContext.Provider>
  );
};

export default MarketplaceProvider;
