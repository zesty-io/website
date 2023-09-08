import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import algoliasearch from 'algoliasearch';
import SearchIcon from '@mui/icons-material/Search';
import {
  connectSearchBox,
  InstantSearch,
  Hits,
  Configure,
  Index,
} from 'react-instantsearch-dom';
import { useZestyStore } from 'store';
import MuiMarkdown from 'markdown-to-jsx';

import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import DescriptionIcon from '@mui/icons-material/Description';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { ArrowBack, ArrowUpward } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getCookie } from 'cookies-next';
import { hashMD5 } from 'utils/Md5Hash';

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
  const theme = useTheme();
  const [isAiActive, setisAiActive] = React.useState(false);
  const {
    algoliaApiKey: apiKey,
    algoliaAppId: appId,
    algoliaIndex: index,
  } = useZestyStore((e) => e);

  const email = getCookie('APP_USER_EMAIL').replace(/%40/g, '@');

  const md5Hash = hashMD5(email.toLowerCase());
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

  const [chatHistory, setChatHistory] = React.useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hi, How can I help you?',
    },
  ]);
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const askAiHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setQuery('');
    setChatHistory([
      ...chatHistory,
      {
        id: chatHistory.length + 1,
        type: 'user',
        message: query.replaceAll('\n', '<br/>'),
      },
    ]);
    try {
      const resp = await fetch(
        'https://us-central1-zesty-dev.cloudfunctions.net/aiSearch/query/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: `${query} respond in ${language}` }),
        },
      );

      const data = await resp.json();

      if (data) {
        setLoading(false);
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          {
            id: prevChatHistory.length + 2,
            type: 'bot',
            message: data.response.text.replaceAll('\n', '<br/>'),
            sourceDocuments: data.response.sourceDocuments,
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatUrlSources = (url) => {
    const match = url.match(/\/([^/]+)\/?(\?.*)?$/);
    if (match) {
      const lastPath = match[1];

      // Replace hyphens with spaces and capitalize each word
      const formattedText = lastPath
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return formattedText;
    }
  };

  const [language, setLanguage] = React.useState('english');
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <Stack data-testid="algolia-search-container">
      <InstantSearch indexName={index} searchClient={searchClient}>
        {isAiActive ? (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                startIcon={<ArrowBack />}
                onClick={() => setisAiActive(false)}
                sx={{ height: 40 }}
                color="secondary"
                variant="contained"
              >
                Back
              </Button>

              <Box
                sx={{ width: 150 }}
                component={'img'}
                src="https://kfg6bckb.media.zestyio.com/content.one-hortizonal-logo.png"
              />
            </Box>

            <Stack sx={{ mt: 4, maxHeight: 500, overflow: 'auto', pb: 2 }}>
              <Box>
                {chatHistory.map((item) => {
                  const message = item.type === 'bot' ? item.message : '';
                  const lines = message.split('\n');
                  const indentation = '  ';

                  const indentedResponseText = lines
                    .map((line) => {
                      if (line.trim() === '') {
                        return '';
                      }

                      return `${indentation}${line}`;
                    })
                    .join('\n');

                  return (
                    <>
                      {item.type === 'bot' ? (
                        <>
                          <Box
                            key={item.id}
                            sx={{
                              display: 'flex',
                              gap: 1.5,
                              mt: 2,
                            }}
                          >
                            <Box>
                              <Box
                                component={'img'}
                                src="https://kfg6bckb.media.zestyio.com/content.one-logo.png"
                                sx={{
                                  width: 40,
                                  height: 35,
                                  borderRadius: 1,
                                  display: 'flex',
                                }}
                              />
                            </Box>

                            <Box sx={{ pr: 2 }}>
                              <MuiMarkdown
                                options={{
                                  overrides: {
                                    code: {
                                      component: SyntaxHighlighter,
                                      props: {
                                        style: dracula,
                                        language: 'html',
                                        wrapLongLines: true,
                                      },
                                    },
                                  },
                                }}
                              >
                                {message}
                              </MuiMarkdown>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              ml: 4,
                              mt: 1,
                            }}
                          >
                            {item.sourceDocuments && (
                              <>
                                <Typography
                                  sx={{
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 100,
                                    color: theme.palette.zesty.zestyZambezi,
                                  }}
                                  variant="caption"
                                >
                                  Sources:
                                </Typography>
                                <Box
                                  sx={{
                                    mt: 1,
                                    display: 'flex',
                                    gap: 1,
                                    flexWrap: 'wrap',
                                  }}
                                >
                                  {item?.sourceDocuments?.map((item) => {
                                    return (
                                      <Box>
                                        <Box
                                          component="a"
                                          href={item.metadata.source}
                                          target="_blank"
                                          sx={{
                                            background: `${theme.palette.zesty.zestyOrange}`,
                                            borderRadius: 100,
                                            px: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            textDecoration: 'none',
                                          }}
                                        >
                                          <Typography
                                            sx={{
                                              color: '#fff',
                                            }}
                                            variant="caption"
                                          >
                                            {formatUrlSources(
                                              item.metadata.source,
                                            )}
                                          </Typography>
                                        </Box>
                                      </Box>
                                    );
                                  })}
                                </Box>
                              </>
                            )}
                          </Box>
                        </>
                      ) : (
                        <>
                          <Box
                            key={item.id}
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              mt: 2,
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                gap: 2,
                                pl: 5,
                              }}
                            >
                              <Box sx={{ mt: 0.5 }}>
                                <MuiMarkdown options={{ wrapper: 'p' }}>
                                  {item.message.replaceAll(/\n/g, '<br/>')}
                                </MuiMarkdown>
                              </Box>

                              <Box
                                component={'img'}
                                src={`https://www.gravatar.com/avatar/${md5Hash}?s=200&d=mm`}
                                sx={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: 1,
                                  display: 'block',
                                }}
                              />
                            </Box>
                          </Box>
                        </>
                      )}
                    </>
                  );
                })}
              </Box>
            </Stack>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 4,
              }}
            >
              {loading && (
                <Typography
                  variant="caption"
                  sx={{ color: theme.palette.zesty.zestyZambezi }}
                >
                  Searching documentation. This may take a second!
                </Typography>
              )}
            </Box>

            <Box
              sx={{ display: 'flex', gap: 1, mt: 1 }}
              component="form"
              onSubmit={askAiHandler}
            >
              <TextField
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ flex: 1 }}
              ></TextField>
              <Button
                type="submit"
                startIcon={<ArrowUpward />}
                variant="contained"
                color="secondary"
              >
                Ask
              </Button>

              <Box sx={{ width: 80 }}>
                <FormControl fullWidth>
                  <InputLabel>Lang</InputLabel>
                  <Select
                    value={language}
                    label="Select Language"
                    onChange={handleLanguageChange}
                  >
                    <MenuItem value={'english'}>EN</MenuItem>
                    <MenuItem value={'spanish'}>ES</MenuItem>
                    <MenuItem value={'tagalog'}>TL</MenuItem>
                    <MenuItem value={'hindi'}>HI</MenuItem>
                    <MenuItem value={'italian'}>IT</MenuItem>
                    <MenuItem value={'french'}>FR</MenuItem>
                    <MenuItem value={'german'}>DE</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Typography
              sx={{ textAlign: 'center', mt: 1, color: '#ccc' }}
              variant="caption"
            >
              Content.one AI Chatbot powered by ChatGPT may produce inaccurate
              Parsley code.
            </Typography>
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <CustomSearchBox />
              </Box>
              <Button
                onClick={() => setisAiActive(true)}
                sx={{ height: 40, backgroundColor: '#000' }}
                variant="contained"
              >
                <Box
                  component={'img'}
                  sx={{ width: 30, height: 25, mr: 0.1 }}
                  src="https://kfg6bckb.media.zestyio.com/content.one-logo-removebg-preview.png"
                ></Box>
                Ask AI
              </Button>
            </Box>
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
          </>
        )}
      </InstantSearch>
    </Stack>
  );
};

const Hit = (props) => {
  const [hovered, setHovered] = React.useState(false);
  const { hit } = props;

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
              />
            </Box>
          </Box>
        )}
        <Box></Box>
      </StyledTreeItem>
    </TreeView>
  );
};
