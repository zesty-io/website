/** * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Product
 * Name: product
 * Model ZUID: 6-001018-0xvfj9
 * File Created On: Mon Feb 21 2022 07:38:12 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-001018-0xvfj9
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */
import revampTheme from 'theme/revampTheme';
import ModalImage from 'react-modal-image';

import { v4 as uuidv4 } from 'uuid';

import FileOpenIcon from '@mui/icons-material/FileOpen';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

import { Box, Button, ThemeProvider } from '@mui/material';
import {
  Link,
  Container,
  Grid,
  Stack,
  Typography,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import NextLink from 'next/link';
import AppBar from 'components/console/AppBar';
import React, { useEffect, useState } from 'react';
import { parseMarkdownFile } from 'utils/docs';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { TreeItem, TreeView } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';
import { SearchModal } from 'views/Docs/SearchModal';
import { AlgoSearch } from 'views/Docs/AlgoSearch';
import { useZestyStore } from 'store';
import GetDemoSection from 'revamp/ui/GetDemoSection';

const GetTree = ({ data = [] }) => {
  return data.map((e) => {
    if (e.children.length !== 0 && Array.isArray(e.children)) {
      return (
        <TreeItem
          nodeId={e.uri}
          sx={{
            my: 0.5,
            color: '#6B7280',
          }}
          label={
            <NextLink
              href={e.uri}
              variant="p"
              color={'inherit'}
              sx={{
                textDecoration: 'none',
              }}
            >
              <Typography variant="body1" py={0.5} title={e.title}>
                {e.title}
              </Typography>
            </NextLink>
          }
        >
          <GetTree data={e.children} />
        </TreeItem>
      );
    } else {
      return (
        <TreeItem
          nodeId={e.uri}
          sx={{
            my: 0.5,
            color: '#6B7280',
          }}
          label={
            <NextLink
              href={e.uri}
              variant="p"
              color={'inherit'}
              sx={{
                textDecoration: 'none',
                my: 0.1,
              }}
            >
              <Typography variant="body1" py={0.5} title={e.title}>
                {e.title}
              </Typography>
            </NextLink>
          }
        ></TreeItem>
      );
    }
  });
};

const TreeNav = ({ data = [] }) => {
  const router = useRouter();
  const url = `${router?.asPath}`;
  const parts = url.split('/');
  parts.splice(3, 1);
  const expanded = [parts.join('/')];
  const theme = useTheme();
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        width: 1,
        overflowY: 'auto',

        '& .MuiTreeItem-content.Mui-focused, & .MuiTreeItem-content.Mui-selected, & .MuiTreeItem-content.Mui-selected.Mui-focused':
          {
            bgcolor: '#FFD6C4',
            color: theme.palette.zesty.zestyOrange,
            fontWeight: 'bold !important',
            borderRadius: '5px',
          },
        '& .MuiTreeItem-content:hover': {
          bgcolor: '#F2F2F2',
          color: '#333333',
          fontWeight: '800 !important',
          borderRadius: '5px',
        },
      }}
      multiSelect
      selected={url}
      defaultSelected={url}
      defaultExpanded={expanded}
    >
      <GetTree data={data} />
    </TreeView>
  );
};

const ToCComponent = ({ data }) => {
  const overview = { label: 'Overview', name: 'Overview', href: '#overview' };
  const newData = [overview, ...data];
  const [currentHash, setcurrentHash] = useState('#overview');
  const handleHashChange = () => {
    setcurrentHash(window.location.hash);
  };
  const theme = useTheme();

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <Stack height={1} width={1}>
      <Typography variant="button" color={'black'} fontWeight={700} pl={'20px'}>
        On this Page
      </Typography>
      <Stack px={0}>
        {newData.map((e) => {
          const active = currentHash === e.href ? true : false;
          return (
            <Link
              href={e.href}
              sx={{
                borderLeft: `3px solid ${
                  active ? theme.palette.zesty.zestyOrange : '#ffd5c1'
                }`,
                fontWeight: active ? '600' : '400',
                fontSize: '8px',
                textDecoration: active ? 'none !important' : 'none',
                backgroundColor: active ? '#ffd6c4' : 'white',
                color: active
                  ? `${theme.palette.zesty.zestyOrange} !important`
                  : '#6b7280',
                borderRadius: '0 5px 5px 0',
                pl: '20px',
                pr: '5px',
                py: '5px',
                '&:hover': {
                  color: '#333333',
                  textDecoration: 'underline #333333',
                  borderLeft: `3px solid ${theme.palette.zesty.zestyOrange}`,
                  // bgcolor: '#F2F2F2',
                },
              }}
            >
              <Typography variant="button" whiteSpace={'normal'}>
                {e.name}
              </Typography>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
};

function splitStringByImageTag(inputString) {
  var imgTagRegex = /<img\b[^>]*>/gi; // Regular expression to match img tags

  // Use the regex to find all img tags in the input string
  var imgTags = inputString.match(imgTagRegex);

  // If no img tags are found, return the input string as is
  if (!imgTags) {
    return [inputString];
  }

  // Split the input string using the img tags and extract src, title, and alt attributes
  const splitStrings = inputString.split(imgTagRegex);
  const imgAttributes = imgTags.map(function (tag) {
    const srcRegex = /src=['"]([^'"]+)['"]/i; // Regular expression to extract src attribute
    const titleRegex = /title=['"]([^'"]+)['"]/i; // Regular expression to extract title attribute
    const altRegex = /alt=['"]([^'"]+)['"]/i; // Regular expression to extract alt attribute
    const matchSrc = tag.match(srcRegex);
    const matchTitle = tag.match(titleRegex);
    const matchAlt = tag.match(altRegex);

    return {
      src: matchSrc ? matchSrc[1] : '',
      title: matchTitle ? matchTitle[1] : '',
      alt: matchAlt ? matchAlt[1] : '',
    };
  });

  // Merge the split strings with the corresponding img attributes
  var result = [];
  for (var i = 0; i < splitStrings.length; i++) {
    result.push(splitStrings[i]);
    if (i < imgAttributes.length) {
      result.push(imgAttributes[i]);
    }
  }

  return result;
}
// main file
const Product = (props) => {
  const theme = useTheme();
  const content = props.content;
  const productsData = content.zesty.products;
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex } = useZestyStore(
    (e) => e,
  );

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 5,
  });
  const isLoggedIn = useIsLoggedIn();
  const { navData } = parseMarkdownFile({
    markdown: content.body,
    tags: ['h2', 'h3', 'h4', 'h1', 'h5'],
    parentURL: '',
    title: '',
    // for the product page not showing description
    isDocsPage: false,
  });

  const prodNav = productsData.map((e) => {
    return { ...e, name: e.uri.replace(/^\/product/, '') };
  });
  const makeTree = (data) => {
    const base = { children: [] };

    for (const node of data) {
      const path = node.name.match(/\/[^\/]+/g);
      let curr = base;

      path.forEach((e, i) => {
        const currPath = path.slice(0, i + 1).join('');
        const child = curr.children.find((e) => e.name === currPath);

        if (child) {
          curr = child;
        } else {
          curr.children.push({
            ...node,
            id: uuidv4(),
            name: currPath,
            children: [],
            url: currPath,
          });
          curr = curr.children[curr.children.length - 1];
        }
      });
    }

    return base.children;
  };
  const navigationData = makeTree(prodNav).sort(
    (a, b) => Number(a?.sort_order) - Number(b?.sort_order),
  );

  const result = [];
  const groupByUri = (data = []) => {
    data.forEach((element) => {
      const parentMain = element.uri.split('/')[2];
      const childMain = element.uri.split('/')[3];

      data.forEach((item) => {
        const parentChild = item.uri.split('/')[2];
        const childChild = item.uri.split('/')[3];

        if (
          parentChild === parentMain &&
          childChild &&
          childChild !== childMain
        ) {
          const res = { ...element, children: [item] };
          result.push(res);
        }
      });
      // filtering out redundant 1st tier item
      // this will add only 1st tier that dont have children
      const res1 = result.find((q) => q.children);
      if (res1.uri !== element.uri && !childMain) {
        result.push(element);
      }
    });
  };
  groupByUri(productsData);

  // group the
  const productGlossary = content.zesty.productGlossary.map((e) => {
    const res = e.keywords.split(',').map((item) => item.toLowerCase());
    return { ...e, target_words: res };
  });
  const mainKeywords = productGlossary.flatMap((obj) => obj.target_words);

  React.useEffect(() => {
    setalgoliaApiKey(props.content.algolia.apiKey);
    setalgoliaAppId(props.content.algolia.appId);
    setalgoliaIndex(props.content.algolia.index);
  }, []);

  return (
    <Stack>
      <Container
        sx={() => ({
          maxWidth: '1440px !important',
          paddingBottom: '0 !important',
        })}
      >
        {/* // headers */}
        <Stack
          py={2}
          direction={'row'}
          width={1}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{
            display: { xs: '', md: 'flex' },
          }}
        >
          <AppBar />

          <SearchModal
            sx={{
              width: true ? 300 : 500,
              display: { xs: 'none', md: 'block' },
            }}
          >
            <AlgoSearch />
          </SearchModal>
        </Stack>

        {/* Navigation mobile */}
        <Stack
          direction={'row'}
          width={1}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{
            display: { xs: '', md: 'none' },
          }}
        >
          <Box>
            <TreeNav
              data={[{ title: 'Products', children: navigationData, uri: '#' }]}
            />
          </Box>
        </Stack>

        {/* // body */}
        <Stack>
          <Grid container spacing={2} minHeight={'80vh'}>
            <Grid item md={3} lg={2}>
              {/* // navigation tree */}
              <Stack
                height={1}
                width={1}
                sx={{
                  display: { xs: 'none', md: 'block' },
                }}
              >
                <TreeNav data={navigationData} />
              </Stack>
            </Grid>
            <Grid item md={6} lg={8}>
              {/* // main body */}
              <Stack
                height={1}
                justifyItems={'center'}
                alignItems={'center'}
                alignContent={'center'}
              >
                <Stack width={1} textAlign={'left'}>
                  <Typography variant="h3" fontWeight={'bold'} id="overview">
                    {content?.title}
                  </Typography>
                </Stack>
                {/* <Stack width={1}>Tags Tags Tags</Stack> */}
                <Stack width={1} height={1}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p({ node, children }) {
                        const keywords = mainKeywords;
                        const keywordRegex = new RegExp(
                          `\\b(${keywords.join('|')})\\b`,
                          'gi',
                        );

                        const res = children.map((e) => {
                          // inside the p tag this will
                          // render the a tag in MD as it is
                          if (e.type === 'a') {
                            const linkHtml = `<a href="${e.props.href}" title="${e.props.children[0]}">${e.props.children[0]}</a>`;

                            return linkHtml;
                          }
                          // inside the p tag
                          // this will find and replace the keywords to a link tag
                          if (typeof e === 'string') {
                            return e.replace(keywordRegex, (match) => {
                              const obj = productGlossary.find((x) =>
                                x.target_words.includes(match.toLowerCase()),
                              );
                              return `<a href="${obj?.url}" class="zesty-tooltip" title="${obj?.description}" >${match}</a>`;
                            });
                          }
                        });

                        // render link tags thats outside of p tags
                        if (
                          node.children.length === 1 &&
                          node.children[0].tagName === 'a'
                        ) {
                          return (
                            <Link
                              sx={{ textDecoration: 'none' }}
                              href={node.children[0].properties.href}
                              title={node.children[0].children[0].value}
                            >
                              <Box
                                p={3}
                                my={1}
                                mb={3}
                                sx={{
                                  border: `1px solid #ccc`,
                                  borderRadius: '4px',
                                  display: 'flex',
                                  '&:hover': {
                                    background: '#ccc',
                                  },
                                }}
                              >
                                <Stack
                                  direction={'row'}
                                  width={1}
                                  alignItems={'stretch'}
                                  justifyContent={'space-between'}
                                >
                                  <Stack direction={'row'} gap={2}>
                                    <FileOpenIcon
                                      sx={{
                                        transform: 'scaleX(-1)',
                                      }}
                                    />
                                    <Typography color="black">
                                      {node.children[0].children[0].value}
                                    </Typography>
                                  </Stack>
                                  <ArrowForwardIosIcon sx={{ color: 'grey' }} />
                                </Stack>
                              </Box>
                            </Link>
                          );
                        }

                        return (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: res.join(''),
                            }}
                          />
                        );
                      },
                      img({ node }) {
                        if (node.properties.title) {
                          return (
                            <Box px={5}>
                              <ModalImage
                                small={node.properties.src}
                                large={node.properties.src}
                                alt={node.properties.alt}
                                title={node.properties.title}
                              />
                            </Box>
                          );
                        }
                        return (
                          <Box
                            ml={3}
                            mr={2}
                            maxWidth={'200px'}
                            sx={{
                              float: 'right',
                            }}
                          >
                            <ModalImage
                              small={node.properties.src}
                              large={node.properties.src}
                              alt={node.properties.alt}
                              title={node.properties.title}
                            />
                          </Box>
                        );
                      },
                      blockquote({ node }) {
                        return (
                          <Box
                            sx={{
                              mx: 5,
                              background: '#e7e7e7',
                              p: 2,
                              borderLeft: '2px #ccc solid',
                              mb: 3,
                            }}
                          >
                            <Typography>
                              {node.children[1].children[0].value}
                            </Typography>
                          </Box>
                        );
                      },
                      h1({ node }) {
                        return (
                          <Box sx={{}}>
                            <Typography
                              mt={2}
                              fontWeight={800}
                              variant="h4"
                              component={'h1'}
                              id={node.children[0].value
                                ?.replace(/[^\w\s]/gi, '')
                                ?.replace(/\s+/g, '-')
                                ?.toLowerCase()}
                            >
                              {node.children[0].value}
                            </Typography>
                          </Box>
                        );
                      },
                      h2({ node }) {
                        return (
                          <Box sx={{}}>
                            <Typography
                              variant="h5"
                              component={'h2'}
                              id={node.children[0].value
                                ?.replace(/[^\w\s]/gi, '')
                                ?.replace(/\s+/g, '-')
                                ?.toLowerCase()}
                            >
                              {node.children[0].value}
                            </Typography>
                          </Box>
                        );
                      },
                      h3({ node }) {
                        return (
                          <Box sx={{}}>
                            <Typography
                              variant="h6"
                              component={'h3'}
                              id={node.children[0].value
                                ?.replace(/[^\w\s]/gi, '')
                                ?.replace(/\s+/g, '-')
                                ?.toLowerCase()}
                            >
                              {node.children[0].value}
                            </Typography>
                          </Box>
                        );
                      },
                    }}
                  >
                    {content.body}
                  </ReactMarkdown>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={3} lg={2}>
              {/* // table of contents */}
              <Stack
                position={'sticky'}
                top={trigger ? '10%' : '25%'}
                sx={{
                  display: { xs: 'none', md: 'block' },
                }}
              >
                <ToCComponent data={navData} />
                {!isLoggedIn && (
                  <Stack
                    sx={{
                      py: 2,
                      px: 3,
                      bgcolor: theme.palette.zesty.zestyDarkBlue,
                      borderRadius: '5px',
                      mt: 2,
                      pb: 3,
                    }}
                  >
                    <Typography variant="h4" color="#fff" fontWeight={'bold'}>
                      Start Here
                    </Typography>
                    <Typography variant="body1" color="#fff">
                      We will listen to your needs and walk you through how
                      Zesty can help your team.
                    </Typography>
                    <Box mt={2} width={1}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        href={`#cta`}
                      >
                        Contact Us
                      </Button>
                    </Box>
                  </Stack>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      {!isLoggedIn && (
        <Box pt={4} id={'cta'}>
          <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
            <GetDemoSection />
          </ThemeProvider>
        </Box>
      )}
    </Stack>
  );
};

export default Product;
