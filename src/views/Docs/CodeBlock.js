import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Main = ({ title = 'no title', children, lang = 'JavaScript' }) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const copyToClipboard = (text) => {
    navigator?.clipboard?.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 300);
  };

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

        <Stack direction={'row'} spacing={2} title="Click to copy">
          <Typography>{lang}</Typography>
          <Stack
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              copyToClipboard(children);
            }}
          >
            {isCopied ? (
              <CheckCircleOutlineIcon color="inherit" />
            ) : (
              <ContentCopyIcon color="inherit" />
            )}
          </Stack>
        </Stack>
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
