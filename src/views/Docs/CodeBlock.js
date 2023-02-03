import React from 'react';
import { Stack, Typography } from '@mui/material';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Main = ({ title = 'no title', children, lang = 'JavaScript' }) => {
  return (
    <Stack
      className=""
      data-prismjs-copy-timeout="500"
      bgcolor="#282A36"
      sx={{ borderRadius: '20px', overflow: 'clip', height: 'auto' }}
    >
      <Stack
        color={'#fff'}
        px={4}
        pt={2}
        width={1}
        direction="row"
        justifyContent={'space-between'}
        alignItems="center"
      >
        <Typography>{title}</Typography>
        <Typography>{lang}</Typography>
      </Stack>

      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={vscDarkPlus}
      >
        {`
  ${children}
          `}
      </SyntaxHighlighter>
    </Stack>
  );
};
export const CodeBlock = React.memo(Main);
