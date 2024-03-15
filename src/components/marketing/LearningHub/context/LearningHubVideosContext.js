import React, { useEffect, useState } from 'react';

export const LearningHubVideosContext = React.createContext();

const LearningHubVideosProvider = ({ inititalEntities, children }) => {
  const [entities, setEntities] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setEntities(inititalEntities || []);
  }, []);

  return (
    <LearningHubVideosContext.Provider
      value={{
        entities,
        setEntities,
        isSearching,
        setIsSearching,
        searchKey,
        setSearchKey,
      }}
    >
      {children}
    </LearningHubVideosContext.Provider>
  );
};

export default LearningHubVideosProvider;
