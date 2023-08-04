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
import MuiMarkdown from 'markdown-to-jsx';

// Experimental

import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import DescriptionIcon from '@mui/icons-material/Description';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
const SearchBoxMui = ({ currentRefinement, _isSearchStalled, refine }) => (
  <form noValidate action="" role="search">
    <TextField
      data-testid="algolia-search"
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

  const indices = [
    {
      title: 'zesty_docs',
      name: 'Docs',
    },
    {
      title: 'products',
      name: 'Products',
    },
    {
      title: 'parsley',
      name: 'Parsley',
    },
  ];

  return (
    <Stack data-testid="algolia-search-container">
      <InstantSearch indexName={index} searchClient={searchClient}>
        <CustomSearchBox />

        <Stack sx={{ mt: 2 }} maxHeight={'50vh'} overflow={'auto'}>
          {indices.map((item) => {
            return (
              <Index indexName={item.title}>
                <Box sx={{ px: 2, py: 2 }}>
                  <Typography
                    data-testid={`${item.title}-index`}
                    variant="body1"
                    sx={{
                      color: (theme) => theme.palette.zesty.zestyOrange,
                      fontWeight: 'bold',
                    }}
                    component="h2"
                  >
                    {item.name}
                  </Typography>
                </Box>

                <Configure hitsPerPage={8} />
                <Hits hitComponent={Hit} />
              </Index>
            );
          })}
        </Stack>
      </InstantSearch>
    </Stack>
  );
};

const Hit = (props) => {
  const [hovered, setHovered] = React.useState(false);
  const { hit } = props;

  console.log(props);

  return (
    <Stack divider direction={'row'} spacingY={4} paddingX={1}>
      <Link
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-testid={`${hit.name}-algolia-links`}
        component={'a'}
        elevation={0}
        sx={{
          textDecoration: 'none',
          borderRadius: 2,
          width: '100%',
          my: 0.2,
          '&:hover': {
            boxShadow: 'rgba(149, 157, 165, 0.4) 0px 8px 24px',
          },
        }}
        variant="outlined"
        href={hit.uri || `/docs/${hit.url}`}
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
            position: 'relative',
          }}
        >
          <Box>
            <CustomizedTreeView hit={hit} />
          </Box>

          {hovered && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                gap: 1,
                top: 10,
                right: 16,
              }}
            >
              <svg
                color="#FF3E13"
                className="DocSearch-Hit-Select-Icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <g
                  stroke="currentColor"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 3v4c0 2-2 4-4 4H2"></path>
                  <path d="M8 17l-6-6 6-6"></path>
                </g>
              </svg>
              <Typography
                sx={{
                  color: (theme) => theme.palette.zesty.zestyOrange,
                  fontWeight: 'bold',
                }}
                variant="caption"
              >
                Go to Page
              </Typography>
            </Box>
          )}
        </Box>
      </Link>
    </Stack>
  );
};

const StyledTreeItem = styled((props) => <TreeItem {...props} />)(
  ({ theme }) => ({
    [`& .${treeItemClasses.iconContainer}`]: {
      '& .close': {
        opacity: 0.3,
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 15,
      paddingLeft: 30,
      borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.2)}`,
    },
  }),
);

const CustomizedTreeView = ({ hit }) => {
  return (
    <TreeView
      aria-label="customized"
      defaultExpanded={['1', '2']}
      defaultCollapseIcon={<DescriptionIcon />}
      defaultEndIcon={<SubdirectoryArrowRightIcon fontSize={'small'} />}
      sx={{ flexGrow: 1, overflowY: 'auto' }}
    >
      <StyledTreeItem
        nodeId="1"
        label={
          <>
            <Typography
              sx={{ color: (theme) => theme.palette.zesty.zestyZambezi, pr: 4 }}
            >
              {hit.name}
            </Typography>
          </>
        }
      >
        {hit.description && (
          <Box sx={{ display: 'flex' }}>
            {/* <SubdirectoryArrowRightIcon fontSize={'small'} sx={{ ml: 2 }} /> */}
            <Box sx={{ ml: -3 }}>
              <StyledTreeItem
                nodeId="2"
                label={
                  <MuiMarkdown
                    options={{
                      overrides: {
                        p: {
                          component: Typography,
                          props: {
                            variant: 'caption',
                          },
                        },
                        a: {
                          component: Typography,
                          props: {
                            variant: 'caption',
                          },
                        },
                        span: {
                          component: Typography,
                          props: {
                            variant: 'caption',
                          },
                        },
                      },
                    }}
                  >
                    {hit?.description}
                  </MuiMarkdown>
                }
              ></StyledTreeItem>

              {/* <StyledTreeItem
                nodeId="3"
                label={
                  <Typography variant="caption">
                    {hit.uri?.replace(/^\/|\/$/g, '').replace(/\//g, ' > ')}
                  </Typography>
                }
              /> */}
            </Box>
          </Box>
        )}
      </StyledTreeItem>
    </TreeView>
  );
};
