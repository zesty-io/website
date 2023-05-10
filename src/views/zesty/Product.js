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

import {
  Link,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import AppBar from 'components/console/AppBar';
import React from 'react';
import { parseMarkdownFile } from 'utils/docs';
import MuiMarkdown from 'markdown-to-jsx';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';

const muiContentOverrides = {
  h1: {
    component: 'h1',
    props: {
      style: { fontSize: '24px' },
    },
  },
  h2: {
    component: 'h2',
    props: {
      style: { fontSize: '1.5em' },
    },
  },
  p: {
    component: 'p',
    props: {
      style: { fontSize: '24px' },
    },
  },

  img: {
    component: 'img',
    props: {
      style: { width: '80%', margin: '10px 10%' },
    },
  },
};

const Product = ({ content }) => {
  console.log(content);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 5,
  });
  const isLoggedIn = useIsLoggedIn();
  const { pageData, navData } = parseMarkdownFile({
    markdown: content.body,
    tags: ['h2', 'h3', 'h4', 'h1', 'h5'],
    parentURL: '',
    title: '',
  });

  return (
    <Container
      maxWidth={isLoggedIn ? false : ''}
      sx={() => ({
        maxWidth: '78vw',
      })}
    >
      {/* // headers */}
      <Stack
        py={2}
        display={'flex'}
        direction={'row'}
        width={1}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <AppBar />
        <TextField size="small" placeholder="Search..." color="secondary" />
      </Stack>
      {/* // body */}
      <Stack>
        <Grid container spacing={4} minHeight={'80vh'}>
          <Grid item xs={2}>
            {/* // navigation tree */}
            <Stack height={1} bgcolor={'red'}></Stack>
          </Grid>
          <Grid item xs={8}>
            {/* // main body */}
            <Stack
              height={1}
              justifyItems={'center'}
              alignItems={'center'}
              alignContent={'center'}
            >
              <Stack width={1} textAlign={'center'}>
                <Typography variant="h3" fontWeight={'bold'}>
                  {content?.title}
                </Typography>
              </Stack>
              <Stack width={1}>Tags Tags Tags</Stack>
              <Stack width={1} height={1}>
                <MuiMarkdown overrides={muiContentOverrides}>
                  {pageData}
                </MuiMarkdown>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            {/* // table of contents */}
            <Stack position={'sticky'} top={trigger ? '10%' : '25%'}>
              <ToCComponent data={navData} />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Product;

const ToCComponent = ({ data }) => {
  return (
    <Stack height={1} width={'13rem'}>
      <Typography variant="body1" color={'black'} fontWeight={500}>
        On this Page
      </Typography>
      <Stack px={2}>
        {data.map((e) => {
          return (
            <Link href={e.href} style={{ textDecoration: 'none' }}>
              <Typography
                variant="button"
                color={'GrayText'}
                whiteSpace={'normal'}
              >
                {e.name}
              </Typography>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  );
};
