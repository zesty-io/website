import useDebounce from 'components/hooks/useDebounce';
import React, { useEffect, useState } from 'react';

export const LearningHubVideosContext = React.createContext();

const LearningHubVideosProvider = ({ inititalEntities, children }) => {
  const [entities, setEntities] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [selectedTags, setSelectedTags] = useState('');

  useEffect(() => {
    setEntities(inititalEntities);
  }, [inititalEntities]);

  const values = useDebounce(searchKey, handleSearch);

  function handleSearch() {
    setEntities(
      inititalEntities.filter((value) => {
        if (searchKey === '') return value;

        if (value.title.toLowerCase().includes(values.toLowerCase()))
          return value;
      }),
    );
  }

  return (
    <LearningHubVideosContext.Provider
      value={{
        entities,
        setEntities,
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
