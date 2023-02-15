import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

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
  p: {
    component: 'p',
    props: {
      style: { fontSize: '5px' },
    },
  },
  img: {
    component: 'img',
    props: {
      style: { width: '80%', margin: '10px 10%' },
    },
  },
};
const CodeBlock = dynamic(() =>
  import('./CodeBlock', { loading: () => <>loading </> }).then(
    (mod) => mod.CodeBlock,
  ),
);

const iconMethod = (method) => {
  let bgcolor = '#61affe';
  switch (method) {
    case 'GET':
      bgcolor = '#61affe';
      break;
    case 'POST':
      bgcolor = '#49CC90';
      break;
    case 'PUT':
      bgcolor = '#FCA130';
      break;
    case 'DELETE':
      bgcolor = '#F93E3E';
      break;
    case 'PATCH':
      bgcolor = '#57E3C3';
      break;

    default:
      bgcolor = '#61affe';
      break;
  }

  return (
    <Stack
      sx={{
        bgcolor,
        color: '#fff',
        fontSize: '14px',
        borderRadius: '3px',
      }}
      px={1}
      py={0.5}
      mr={1}
    >
      <Typography variant="p">{method}</Typography>
    </Stack>
  );
};

const Main = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  console.log(data, 7777);
  const result =
    Array.isArray(data.item) &&
    data.item.map((e) => {
      if (Array.isArray(e.item)) {
        return (
          <Stack py={4}>
            <Typography variant="h4" fontWeight={'800'} id={e.name} pb={2}>
              {e.name}
            </Typography>
            <MuiMarkdown
              inlineCodeColor="dodgerblue"
              overrides={muiContentOverrides}
            >
              {e?.description || ''}
            </MuiMarkdown>
            <b>{<DocsPages data={e.item} />}</b>
          </Stack>
        );
      } else {
        return (
          <Grid container direction="row" py={2} minHeight={'55vh'}>
            <Grid item xs={6} width={1}>
              <Stack direction={'row'} alignItems="center">
                {iconMethod(e.request.method)}
                <Typography variant="h5" id={e.name}>
                  {e.name}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} width={1}>
              {inView && <CodeBlock title={e.name} data={e} />}
            </Grid>
          </Grid>
        );
      }
    });
  return (
    <Stack ref={ref} bgcolor="#fff">
      <Typography variant="h4" id={data.name}>
        {data.name}
      </Typography>
      <MuiMarkdown inlineCodeColor="dodgerblue" overrides={muiContentOverrides}>
        {data?.description || ''}
      </MuiMarkdown>
      {result}
    </Stack>
  );
};
export const DocsPages = React.memo(Main);
