import { Stack } from '@mui/material';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  Hits,
  SearchBox,
  // Pagination,
  Highlight,
  // ClearRefinements,
  // RefinementList,
  // Configure,
} from 'react-instantsearch-dom';

export const AlgoSearch = ({ algoliaCreds }) => {
  const { apiKey, appId, index } = algoliaCreds;
  const searchClient = algoliasearch(appId, apiKey);
  return (
    <Stack>
      <InstantSearch indexName={index} searchClient={searchClient}>
        <SearchBox placeholder="search here" />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </Stack>
  );
};
function Hit(props) {
  return (
    <div>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">${props.hit.price}</div>
    </div>
  );
}
