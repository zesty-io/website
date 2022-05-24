import React from 'react';
import MuiMarkdown from 'mui-markdown';
import Main from 'layouts/Main';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { docsLookup } from 'components/docs/docsLookup';
import md2json from 'md-2-json';
import MarkdownIt from 'markdown-it';
import jsonmark from 'jsonmark';
import { jsonFromHTML } from 'jsonfromhtml';
import { parse } from 'himalaya';
import Markdown from 'markdown-to-jsx';

import { useTheme } from '@mui/material/styles';
import AppBar from 'components/console/AppBar';
import Head from 'next/head';
import { JSONFromTable } from 'jsonfromtable';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const zestyImage =
  'https://kfg6bckb.media.zestyio.com/zesty-share-image-generic.png?width=1200';
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

  // getting the title ,image and  description
  const titleRegexMeta = /(?<=title: ).+?(\n)/;
  const titleRegexMd = /(?<=# ).+/;
  const titleMeta = meta?.match(titleRegexMeta);
  const titleMd = props.markdown.match(titleRegexMd);
  const title = (titleMeta || titleMd)[0];
  const descRegex = /(?<=description: >-).+/is;
  const description = (meta.match(descRegex) || [])[0];
  const imageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/;
  const image = replaceImages(props.markdown)?.match(imageRegex);
  const ogimage = image ? image[0] : zestyImage;

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

  const md = new MarkdownIt();
  const htmlNav = md.render(cleanMarkdownURLS(toc));

  // const test = md2json.parse(props.toc);
  // const test = jsonmark.parse(cleanMarkdownURLS(toc));
  // const test2 =
  //   test?.content['Table of contents'] &&
  //   test?.content['Table of contents']?.body;
  // const serv = test?.content && test?.content?.Services?.body;
  // const body = jsonFromHTML(test3); // returns object
  // const json = JSON.stringify(body);
  // console.log(test2.split(/\r\n|\r|\n/), 1111);
  // console.log(test, 2222);
  // console.log(cleanMarkdownURLS(toc), 333);

  function removeEmptyNodes(nodes) {
    return nodes.filter((node) => {
      if (node.type === 'element') {
        node.children = removeEmptyNodes(node.children);
        return true;
      }
      return node.content.length;
    });
  }

  function stripWhitespace(nodes) {
    return nodes.map((node) => {
      if (node.type === 'element') {
        node.children = stripWhitespace(node.children);
      } else {
        node.content = node.content.trim();
      }
      return node;
    });
  }

  function removeWhitespace(nodes) {
    return removeEmptyNodes(stripWhitespace(nodes));
  }
  const jsonNav = removeWhitespace(parse(htmlNav));
  console.log(jsonNav, 77777);

  const newArr1 = (arr) => {
    const result = arr.children.map((item) => {
      const title = item.children[0].children[0].content;
      const titleHref = item.children[0].attributes[0].value;
      const test1 = item.children
        .filter((e) => e.tagName === 'ul')
        .map((e) => e.children);
      const children =
        test1 &&
        test1[0] &&
        test1[0]
          .map((r) => r.children)
          .map((x) => {
            console.log(x, 4444);
            return x;
          })
          .map((e) => {
            console.log(
              e
                ?.find((e) => e.tagName === 'ul')
                ?.children.map((e) => e.children)
                .map((e) => e && e[0])
                ?.map((e) => e.children[0].content),
              55555,
            );
            const href = e?.find((e) => e.tagName === 'a').attributes[0]?.value;
            const name = e?.find((e) => e.tagName === 'a').children[0]?.content;
            const children = e
              ?.find((e) => e.tagName === 'ul')
              ?.children.map((e) => e.children)
              .map((e) => e && e[0])
              ?.map((e) => {
                const href = e.attributes[0].value;
                const name = e.children[0].content;
                return { name, href };
              });

            return { name, href, children };
          });
      return { title, titleHref, children };
    });
    return result;
  };

  console.log(newArr1(jsonNav[1]), 123123);
  return (
    <Main customRouting={props.navigationCustom}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" value={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogimage} />
      </Head>
      <AppBar></AppBar>
      <Container>
        <Box sx={{ display: 'flex' }}>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Accordion allowZeroExpanded>
              {newArr1(jsonNav[1]).map((item) => (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.title}</AccordionItemButton>
                  </AccordionItemHeading>
                  {item.children && (
                    <AccordionItemPanel>
                      {item?.children?.map((e) => (
                        <div>
                          <div>
                            {!e.children && <a href={e.href}>{e.name}</a>}
                            {e.children && (
                              <details>
                                <summary>{e.name}</summary>
                                {e?.children?.map((x) => (
                                  <a href={x.href}>{x?.name}</a>
                                ))}
                              </details>
                            )}
                          </div>
                        </div>
                      ))}
                    </AccordionItemPanel>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
            <Box
              className={`newNavigation `}
              dangerouslySetInnerHTML={{ __html: htmlNav }}
            ></Box>
            {/* <Box dangerouslySetInnerHTML={{ __html: htmlNav }}></Box> */}
            {/* <MuiMarkdown overrides={muiTOCOverrides}>
              {cleanMarkdownURLS(toc)}
            </MuiMarkdown> */}
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
