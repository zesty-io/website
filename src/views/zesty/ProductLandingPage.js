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
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, ThemeProvider } from '@mui/material';
import {
  Container,
  Grid,
  Stack,
  Typography,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import AppBar from 'components/console/AppBar';
import React from 'react';
import { parseMarkdownFile } from 'utils/docs';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { SearchModal } from 'views/Docs/SearchModal';
import { AlgoSearch } from 'views/Docs/AlgoSearch';
import { useZestyStore } from 'store';
import GetDemoSection from 'revamp/ui/GetDemoSection';
import { ZestyMarkdownParser } from 'components/markdown-styling/ZestyMarkdownParser';
import FillerContent from 'components/globals/FillerContent';
import { TreeNavigation } from 'components/globals/TreeNavigation';
import { TableOfContent } from 'components/globals/TableOfContent';

// main file
const ProductLandingPage = (props) => {
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
    <Stack data-testid="product-landing">
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
            <TreeNavigation
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
                <TreeNavigation data={navigationData} />
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
                <Stack width={1} height={1}>
                  {/* Component that render the markdown file */}
                  {props.isAuthSuccess ? (
                    <Stack textAlign="center">
                      <Typography variant="h5">
                        You are now authenticated with the Zesty CLI
                      </Typography>
                      <Typography component="p">
                        You may now close this window.
                      </Typography>
                    </Stack>
                  ) : (
                    <ZestyMarkdownParser
                      markdown={content.body}
                      mainKeywords={mainKeywords}
                      productGlossary={productGlossary}
                    />
                  )}
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
                <TableOfContent data={navData} />
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

export default ProductLandingPage;
