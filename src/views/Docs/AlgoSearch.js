import { Link, Stack } from '@mui/material';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  Hits,
  SearchBox,
  // Pagination,
  // Highlight,
  // ClearRefinements,
  // RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import { useZestyStore } from 'store';

export const AlgoSearch = () => {
  const {
    algoliaApiKey: apiKey,
    algoliaAppId: appId,
    algoliaIndex: index,
  } = useZestyStore((e) => e);
  const searchClient = algoliasearch(appId, apiKey);
  return (
    <Stack>
      <InstantSearch indexName={index} searchClient={searchClient}>
        <SearchBox placeholder="search here" />
        <Configure hitsPerPage={8} />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </Stack>
  );
};
const Hit = (props) => {
  return (
    <Stack>
      <Link href={'/docs/' + props.hit.url}>{props.hit.name}</Link>
      {/* <Stack className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </Stack> */}
      {/* <Stack className="hit-description">
        <Highlight attribute="url" hit={props.hit} />
      </Stack> */}
    </Stack>
  );
};
