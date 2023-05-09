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
  Index,
} from 'react-instantsearch-dom';
import { useZestyStore } from 'store';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const SearchBoxMui = ({ currentRefinement, _isSearchStalled, refine }) => (
  <form noValidate action="" role="search">
    <TextField
      autoFocus
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

        <Stack maxHeight={'50vh'} overflow={'auto'}>
          <Index indexName={index}>
            <Box sx={{ px: 2, py: 2 }}>
              <Typography
                variant="body1"
                sx={{ color: (theme) => theme.palette.zesty.zestyOrange }}
                component="h2"
              >
                Docs
              </Typography>
            </Box>

            <Configure hitsPerPage={8} />
            <Hits hitComponent={Hit} />
          </Index>

          <Index indexName="parsley-tour">
            <Box sx={{ px: 2, py: 2 }}>
              <Typography
                variant="body1"
                sx={{ color: (theme) => theme.palette.zesty.zestyOrange }}
                component="h2"
              >
                Parsley Tour
              </Typography>
            </Box>

            <Configure hitsPerPage={8} />
            <Hits hitComponent={Hit} />
          </Index>
          <Index indexName="parsley-glossary">
            <Box sx={{ px: 2, py: 2 }}>
              <Typography
                variant="body1"
                sx={{ color: (theme) => theme.palette.zesty.zestyOrange }}
                component="h2"
              >
                Parsley Glossary
              </Typography>
            </Box>

            <Configure hitsPerPage={8} />
            <Hits hitComponent={Hit} />
          </Index>
          <Index indexName="parsley-guides">
            <Box sx={{ px: 2, py: 2 }}>
              <Typography
                variant="body1"
                sx={{ color: (theme) => theme.palette.zesty.zestyOrange }}
                component="h2"
              >
                Parsley Guides
              </Typography>
            </Box>

            <Configure hitsPerPage={8} />
            <Hits hitComponent={Hit} />
          </Index>
        </Stack>
      </InstantSearch>
    </Stack>
  );
};
const Hit = (props) => {
  const { hit } = props;

  return (
    <Stack divider direction={'row'} spacingY={4}>
      <Link
        component={'a'}
        elevation={0}
        sx={{
          textDecoration: 'none',
          borderRadius: 2,
          width: '100%',
          my: 0.2,
          '&:hover': {
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          },
        }}
        variant="outlined"
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
          }}
        >
          <Typography
            sx={{ color: (theme) => theme.palette.zesty.zestyZambezi }}
          >
            {hit.name}
          </Typography>

          <ArrowOutwardIcon
            sx={{ color: (theme) => theme.palette.zesty.zestyOrange }}
          />
        </Box>
      </Link>
    </Stack>
  );
};
