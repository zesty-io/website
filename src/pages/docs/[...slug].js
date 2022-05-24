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
  const inlineStyles = `

  .newNavigation > h2{
    background: red
  }
 li:first-child > a  {
  color: aqua;
}
  
  
  `;
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
            {/* <Accordion allowZeroExpanded>
              {jsonNav.map((item) => {
                if (item.tagName === 'h1' || item.tagName === 'h2') {
                  return <h1>{item.children[0].content}</h1>;
                }
                if (item.tagName === 'ul') {
                  return item.children.map((child) => {
                    return child.children.map((li) =>
                      li.children.map((e) => {
                        return (
                          <div>
                            {li.tagName === 'a' && (
                              <h2 style={{ background: 'green' }}>
                                {e?.content}
                              </h2>
                            )}
                            {li.tagName === 'ul' && (
                              <div style={{ background: 'pink' }}>
                                {e?.children?.map((y) =>
                                  y.children.map((u) => (
                                    <a href={y?.attributes[0]?.value}>
                                      {u.content}
                                    </a>
                                  )),
                                )}
                              </div>
                            )}
                          </div>
                        );
                      }),
                    );
                  });
                  console.log(name, 2222);
                  // return (
                  //   <AccordionItem>
                  //     <AccordionItemHeading>
                  //       <AccordionItemButton>
                  //         {item.heading}
                  //       </AccordionItemButton>
                  //     </AccordionItemHeading>
                  //     <AccordionItemPanel>{item.content}</AccordionItemPanel>
                  //   </AccordionItem>
                  // );
                }
              })}
            </Accordion> */}

            <style>{inlineStyles}</style>
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
