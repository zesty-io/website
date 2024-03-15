import React, { useEffect, useState } from 'react';

export const LearningHubVideosContext = React.createContext();

const LearningHubVideosProvider = ({ inititalEntities, children }) => {
  const [entities, setEntities] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedTags, setSelectedTags] = useState('');

  useEffect(() => {
    setEntities(inititalEntities || []);
  }, [inititalEntities]);

  return (
    <LearningHubVideosContext.Provider
      value={{
        entities,
        setEntities,
        isSearching,
        setIsSearching,
        searchKey,
        setSearchKey,
        selectedTags,
        setSelectedTags,
      }}
    >
      {children}
    </LearningHubVideosContext.Provider>
  );
};

export default LearningHubVideosProvider;
