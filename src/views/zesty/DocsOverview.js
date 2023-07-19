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
import { v4 as uuidv4 } from 'uuid';
import {
  Link,
  Stack,
  Typography,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import { parseMarkdownFile } from 'utils/docs';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { TreeItem, TreeView } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import FillerContent from 'components/globals/FillerContent';
import { DocsHomePage } from 'components/docs/DocsHomePage';

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
const DocsOverViewLanding = (props) => {
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
    markdown: content?.body || FillerContent.header,
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

  React.useEffect(() => {
    setalgoliaApiKey(props.content.algolia.apiKey);
    setalgoliaAppId(props.content.algolia.appId);
    setalgoliaIndex(props.content.algolia.index);
  }, []);

  const algolia = {
    apiKey: props.content.algolia.apiKey,
    appId: props.content.algolia.appId,
    index: props.content.algolia.index,
  };

  return <DocsHomePage algolia={algolia} />;
};

export default DocsOverViewLanding;