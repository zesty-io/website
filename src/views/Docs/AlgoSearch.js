import {
  Box,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
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
} from 'react-instantsearch-dom';
import { useZestyStore } from 'store';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

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
        <Configure clickAnalytics hitsPerPage={8} />
        <Box sx={{ my: 2 }}>
          <Typography
            sx={{ color: (theme) => theme.palette.zesty.zestyZambezi, px: 2 }}
            variant="caption"
          >
            Search Results
          </Typography>
        </Box>
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </Stack>
  );
};
const Hit = (props) => {
  const { hit } = props;

  return (
    <Stack divider direction={'row'} spacingY={4}>
      <Link
        sx={{ textDecoration: 'none', width: '100%' }}
        variant="text"
        href={`/docs/${hit.url}`}
      >
        <Box
          sx={{
            px: 2,
            display: 'flex',
            justifyContent: 'space-between',
            color: (theme) => theme.palette.zesty.zestyZambezi,
            py: 1,
            my: 1,
            borderRadius: 2,
            '&:hover': {
              background: (theme) => theme.palette.zesty.zestyLightOrange,
            },
          }}
        >
          <Typography
            sx={{ color: (theme) => theme.palette.zesty.zestyZambezi }}
          >
            {hit.name}
          </Typography>

          <ArrowOutwardIcon />
        </Box>
      </Link>
    </Stack>
  );
};
