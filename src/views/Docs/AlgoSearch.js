import { InputAdornment, Link, Stack, TextField } from '@mui/material';
import algoliasearch from 'algoliasearch';
import SearchIcon from '@mui/icons-material/Search';
import {
  connectSearchBox,
  InstantSearch,
  Hits,
  // SearchBox,
  // Pagination,
  // Highlight,
  // ClearRefinements,
  // RefinementList,
  Configure,
  Index,
} from 'react-instantsearch-dom';
import { useZestyStore } from 'store';

const SearchBoxMui = ({ currentRefinement, _isSearchStalled, refine }) => (
  <form noValidate action="" role="search">
    <TextField
      placeholder="Search..."
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
      size="small"
      color="secondary"
      fullWidth
      sx={{ cursor: 'text' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBoxMui);

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
        <CustomSearchBox />

        <Index indexName={index}>
          <h2>index: Docs</h2>

          <Configure hitsPerPage={8} />
          <Hits hitComponent={Hit} />
        </Index>

        <Index indexName="zesty-org">
          <h2>index: zesty-org</h2>
          <Configure hitsPerPage={8} />
          <Hits hitComponent={Hit} />
        </Index>
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
