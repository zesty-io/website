import React from 'react';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { getCookie } from 'cookies-next';

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
  const [showToken, setshowToken] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const result =
    Array.isArray(data.item) &&
    data.item.map((e) => {
      // Get data from postman collection
      const name = e?.name?.replaceAll(' ', '-');
      const hasBody = e?.request?.body?.mode === 'raw' ? true : false;
      const hasEndpoint =
        e?.request?.url || e?.request?.url?.raw ? true : false;
      const endpoint = e?.request?.url?.raw || e?.request?.url || '';
      const desc = e?.request?.description;
      const token = getCookie('APP_SID');

      if (Array.isArray(e.item)) {
        console.log(e);
        return (
          <Stack py={4}>
            <Typography
              sx={{ color: (theme) => theme.palette.zesty.zestyZambezi }}
              variant="h5"
              fontWeight={'600'}
              id={name}
            >
              {e?.name}
            </Typography>
            <Box sx={{ color: (theme) => theme.palette.zesty.zestyZambezi }}>
              <MuiMarkdown
                inlineCodeColor="dodgerblue"
                overrides={muiContentOverrides}
              >
                {e?.description || ''}
              </MuiMarkdown>
            </Box>
            <b>{<DocsPages data={e.item} />}</b>
          </Stack>
        );
      } else {
        return (
          <Grid container direction="row" minHeight={'50vh'} spacing={4}>
            <Grid
              sx={{ color: (theme) => theme.palette.zesty.zestyZambezi }}
              item
              xs={6}
              width={1}
            >
              <Stack direction={'column'}>
                <Stack direction={'row'} pb={2} alignItems="center">
                  {iconMethod(e.request.method)}
                  <Typography sx={{ fontWeight: '600' }} variant="h6" id={name}>
                    {e?.name}
                  </Typography>
                  <Link href={`#${name}`}>
                    <InsertLinkIcon
                      fontSize="medium"
                      sx={{ mt: 1, ml: 1 }}
                      color="secondary"
                    />
                  </Link>
                </Stack>

                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {desc}
                </ReactMarkdown>
              </Stack>
              <Stack>
                {hasEndpoint && (
                  <CodeBlocks header="URL Endpoint">{endpoint}</CodeBlocks>
                )}
                <CodeBlocks
                  header="Authentication Header"
                  endProps={
                    token && (
                      <Stack
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                          setshowToken(!showToken);
                        }}
                      >
                        {showToken ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </Stack>
                    )
                  }
                >
                  {`Bearer ${
                    showToken && token
                      ? getCookie('APP_SID')
                      : !showToken && token
                      ? '*******************************'
                      : 'YOUR_APP_SID'
                  } `}
                </CodeBlocks>
                {hasBody && (
                  <CodeBlocks header="Request Body">
                    {e?.request?.body?.raw}
                  </CodeBlocks>
                )}
              </Stack>
            </Grid>
            <Grid item xs={6} width={1}>
              {inView && <CodeBlock title={name} data={e} />}
            </Grid>
          </Grid>
        );
      }
    });
  return (
    <Stack ref={ref} bgcolor="#fff" pt={2}>
      <Grid container pb={4}>
        <Grid item xs={6}>
          <Typography
            sx={{ color: (theme) => theme.palette.zesty.zestyZambezi }}
            variant="h4"
            id={data.name}
          >
            {data.name}
          </Typography>
          <Box sx={{ color: (theme) => theme.palette.zesty.zestyZambezi }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {data?.description}
            </ReactMarkdown>
          </Box>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      {result}
    </Stack>
  );
};
export const DocsPages = React.memo(Main);

const CodeBlocks = React.memo(
  ({ children, header = '', endProps = undefined }) => {
    return (
      <Stack py={1}>
        <Typography variant="body1">{header}</Typography>
        <Stack position={'relative'}>
          <SyntaxHighlighter
            showLineNumbers={false}
            language="javascript"
            style={base16AteliersulphurpoolLight}
            wrapLongLines={false}
            customStyle={{
              fontSize: '13px',
              fontWeight: 400,
            }}
          >
            {children}
          </SyntaxHighlighter>
          {endProps && (
            <Stack
              position={'absolute'}
              sx={{ top: '50%', right: 5, transform: 'translate(0,-50%)' }}
            >
              {endProps}
            </Stack>
          )}
        </Stack>
      </Stack>
    );
  },
);

// create a function that return largest sum
