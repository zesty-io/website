import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

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

  const result =
    Array.isArray(data) &&
    data.map((e) => {
      if (Array.isArray(e.item)) {
        return (
          <Stack py={4}>
            <Typography variant="h4" fontWeight={'800'} id={e.name} pb={2}>
              {e.name}
            </Typography>

            <Typography variant="body1" fontWeight={'400'}>
              {e?.description}
            </Typography>
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
      {result}
    </Stack>
  );
};
export const DocsPages = React.memo(Main);
