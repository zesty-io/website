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
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays, * images are objects {content.image_name.data[0].url} * * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-001018-0xvfj9
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */
import revampTheme from 'theme/revampTheme';
import { Box, Button, ThemeProvider } from '@mui/material';
import {
  Container,
  Grid,
  Stack,
  Typography,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import React, { useMemo } from 'react';
import { parseMarkdownFile } from 'utils/docs';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { useRouter } from 'next/router';
import { useZestyStore } from 'store';
import GetDemoSection from 'revamp/ui/GetDemoSection';
import { ZestyMarkdownParser } from 'components/markdown-styling/ZestyMarkdownParser';
import { DocsHomePage } from 'components/docs/DocsHomePage';
import { TreeNavigation } from 'components/globals/TreeNavigation';
import { TableOfContent } from 'components/globals/TableOfContent';
import { DocsAppbar } from 'components/console/DocsAppbar';
import { setCookie } from 'cookies-next';

// main file
const ZestyDoc = (props) => {
  const router = useRouter();
  const isDocsHomePage = router.asPath === '/docs/';
  const theme = useTheme();
  const content = props.content;
  const productsData = content.zesty.docs;
  const {
    setalgoliaApiKey,
    setalgoliaAppId,
    setalgoliaIndex,
    selectedDocsCategory,
  } = useZestyStore((e) => e);

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

  const prodNav = useMemo(() =>
    productsData.map((e) => {
      return { ...e, name: e.uri.replace(/^\/product/, '') };
    }, []),
  );

  const filteredArray = prodNav.reduce((acc, item) => {
    const res = item.uri.split('/').filter((e) => e);

    if (res[1] === selectedDocsCategory?.toLowerCase()) {
      acc.push(item);
    }

    return acc;
  }, []);

  const tree = createTree(filteredArray, 3).map((e) => {
    const res = createTree(e.children, 4);
    return { ...e, children: res };
  });

  const productGlossary = content.zesty.productGlossary.map((e) => {
    const res = e.keywords.split(',').map((item) => item.toLowerCase());
    return { ...e, target_words: res };
  });
  const mainKeywords = productGlossary.flatMap((obj) => obj.target_words);

  const algolia = {
    apiKey: props.content.algolia.apiKey,
    appId: props.content.algolia.appId,
    index: props.content.algolia.index,
  };

  const contentBody = content?.body?.replaceAll('Error hydrating', '');

  React.useEffect(() => {
    setalgoliaApiKey(algolia.apiKey);
    setalgoliaAppId(algolia.appId);
    setalgoliaIndex(algolia.index);
  }, []);

  React.useEffect(() => {
    const route = router.asPath.split('/').filter((e) => e);
    if (route[0] === 'docs') {
      setCookie('docsCategory', route[1]);
    }
  }, [router.asPath]);

  const inlineStyles = `
  
  blockquote {
  background-color: #e7e7e7;
  padding: 10px 20px;
  border-left: 4px solid #ccc;
  margin:0;
}
  
  `;
  // redirecto to docs landing page if url = /docs/
  if (isDocsHomePage) {
    return <DocsHomePage algolia={algolia} />;
  }
  return (
    <Stack data-testid="docs-slug">
      <style>{inlineStyles}</style>
      <Container
        sx={() => ({
          // maxWidth: '1440px !important',
          // paddingBottom: '0 !important',
        })}
      >
        {!isLoggedIn && <DocsAppbar />}
        {/* // headers */}

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
            <TreeNavigation
              data={[
                {
                  title: 'Products',
                  children: tree,
                  uri: '#',
                },
              ]}
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
                <TreeNavigation data={tree} />
              </Stack>
            </Grid>
            <Grid item md={6} lg={8}>
              {/* // main body */}
              <Stack
                height={1}
                justifyItems={'center'}
                alignItems={'center'}
                alignContent={'center'}
                sx={{
                  px: { xs: 2, md: 0 },
                }}
              >
                <Stack width={1} textAlign={'left'} pt={2}>

                  <Typography
                    variant="h3"
                    fontWeight={'bold'}
                    id={content?.title}
                  >
                    {content?.title}
                  </Typography>
                </Stack>
                <Stack width={1} textAlign={'left'} pb={4} pt={2}>
                  <Typography
                    variant="p"
                    component={'p'}
                    fontWeight={'400'}
                    id="description"
                    color={'gray'}
                  >
                    {content?.description}
                  </Typography>
                </Stack>
                <Stack width={1} height={1}>
                  {/* Component that render the markdown file */}
                  <ZestyMarkdownParser
                    isDocs={true}

                    mainKeywords={mainKeywords}
                    productGlossary={productGlossary}
                  />
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
                <TableOfContent data={navData} title={content?.title} />
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

export default ZestyDoc;

const createTree = (data, depth = 3) => {
  // find all items that has depth part url
  const parents = data.filter((e) => {
    const res = e.uri.split('/').filter((e) => e);
    return res.length === depth;
  });

  // find all items that has depth or more part url and add them to the parent as children
  const children = data.filter((e) => {
    const res = e.uri.split('/').filter((e) => e);
    return res.length > depth;
  });

  const parentWithChildren = parents.map((e) => {
    const res = children.filter((item) => {
      const parentUri = e.uri.split('/').filter((e) => e);
      const childUri = item.uri.split('/').filter((e) => e);
      return parentUri[depth - 1] === childUri[depth - 1];
    });
    return { ...e, children: res };
  });

  return parentWithChildren;
};
