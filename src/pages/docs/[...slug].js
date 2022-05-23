import React from 'react';
import MuiMarkdown from 'mui-markdown';
import Main from 'layouts/Main';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { docsLookup } from 'components/docs/docsLookup';

import { useTheme } from '@mui/material/styles';
import AppBar from 'components/console/AppBar';
import Head from 'next/head';

// design changes for the main body of content
const muiContentOverrides = {
  h1: {
    component: 'h1',
    props: {
      style: { fontSize: '2em' },
    },
  },
  h2: {
    component: 'h2',
    props: {
      style: { fontSize: '1.5em' },
    },
  },
  img: {
    component: 'img',
    props: {
      style: { width: '80%', margin: '10px 10%' },
    },
  },
};
// design change to mui for the table of contents
const muiTOCOverrides = {
  h1: {
    component: 'h1',
    props: {
      style: { fontSize: '1em', marginLeft: '10px' },
    },
  },
  h2: {
    component: 'h2',
    props: {
      style: { fontSize: '1em', marginLeft: '10px' },
    },
  },
  li: {
    component: 'li',
    props: {
      style: { listStyle: 'none', paddingLeft: '0px', marginLeft: '0px' },
    },
  },
};

// extractMetaFromMarkdown
function extractMetaFromMarkdown(gitbookMarkdown) {
  var matches = gitbookMarkdown.match(/---(.*?)---/is);
  if (matches) {
    return matches[1];
  }
  return '';
}
// stripGitbookMeta
const stripGitbookMeta = (gitbookMarkdown) =>
  gitbookMarkdown.replace(/---(.*?)---/is, '');
// replaceImages with raw github reference, and handle some of the oddities that gitbook puts in place around the file naming
const replaceImages = (gitbookMarkdown) =>
  gitbookMarkdown
    .replaceAll(
      '../.gitbook/',
      'https://raw.githubusercontent.com/zesty-io/zesty-org/master/.gitbook/',
    )
    .replaceAll('(<', '(')
    .replaceAll('>)', ')')
    .replaceAll(/ \(([0-9]+)\)/g, '%20%28$1%29');
// fix urls with .md references
const cleanMarkdownURLS = (tocMarkdown) =>
  tocMarkdown.replaceAll('.md', '/').replaceAll('](', '](/docs/');

// width of drawer
const drawerWidth = 240;

export default function Docs(props) {
  const theme = useTheme();

  //get table of contents
  let toc = props.toc;
  // get meta
  let meta = extractMetaFromMarkdown(props.markdown);

  // getting the title and description
  const titleRegexMeta = /(?<=title: ).+?(\n)/;
  const titleRegexMd = /(?<=# ).+/;
  const titleMeta = meta?.match(titleRegexMeta);
  const titleMd = props.markdown.match(titleRegexMd);
  const title = (titleMeta || titleMd)[0];
  const descRegex = /(?<=description: >-).+/is;
  const description = meta.match(descRegex)[0];

  // replace image references to work without gitbook
  let markdown = replaceImages(props.markdown);
  // string gitbook meta
  markdown = stripGitbookMeta(markdown);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Main customRouting={props.navigationCustom}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" value={description} />
        <meta property="og:description" content={description} />
      </Head>
      <AppBar></AppBar>
      <Container>
        <Box sx={{ display: 'flex' }}>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <MuiMarkdown overrides={muiTOCOverrides}>
              {cleanMarkdownURLS(toc)}
            </MuiMarkdown>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <MuiMarkdown
              inlineCodeColor="dodgerblue"
              overrides={muiContentOverrides}
            >
              {markdown}
            </MuiMarkdown>
          </Box>
        </Box>
      </Container>
    </Main>
  );
}

// This gets called on every request
export async function getServerSideProps(ctx) {
  return docsLookup(ctx);
}
