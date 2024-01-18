import React from 'react';
import remarkGfm from 'remark-gfm';

import dynamic from 'next/dynamic';
import { Table, Typography, useTheme } from '@mui/material';

const ReactMarkdown = dynamic(() => import('react-markdown'));
const MDBlockquote = dynamic(() =>
  import('./components').then((e) => e.MDBlockquote),
);
const MDCodeBlock = dynamic(() =>
  import('./components').then((e) => e.MDCodeBlock),
);
const MDH1 = dynamic(() => import('./components').then((e) => e.MDH1));
const MDH2 = dynamic(() => import('./components').then((e) => e.MDH2));
const MDH3 = dynamic(() => import('./components').then((e) => e.MDH3));
const MDH4 = dynamic(() => import('./components').then((e) => e.MDH4));
const MDImage = dynamic(() => import('./components').then((e) => e.MDImage));
const MDParagraph = dynamic(() =>
  import('./components').then((e) => e.MDParagraph),
);

// Main //
export const ZestyMarkdownParser = ({
  markdown,
  mainKeywords,
  productGlossary,
  isDocs = false,
}) => {
  const theme = useTheme();
  const styles = {
    p(props) {
      const { ...rest } = props;
      return (
        <Typography
          {...rest}
          sx={(theme) => ({
            '& > code': {
              backgroundColor:
                theme.palette.mode === 'dark' ? 'darkblue' : '#F5F7F9',
            },
          })}
        />
      );
    },

    table(props) {
      const { ...rest } = props;
      return (
        <Table
          {...rest}
          sx={(theme) => ({
            overflowX: 'auto',
            display: 'block',
            height: 'auto !important',
            width: '100% !important',
            mt: '20px',
            '& img, span': {
              mt: '0px !important',
              objectFit: 'contain',
              height: '240px',
            },
            '& span': {
              mt: '0px !important',
              maxWidth: 'auto !important',
            },
            '& p': {
              width: 'auto',
            },
            '& tr': {
              bgcolor: 'transparent !important',
            },
            '& td': {
              color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
            },
          })}
        />
      );
    },
    code(props) {
      const { ...rest } = props;
      return (
        <code
          {...rest}
          style={{
            backgroundColor:
              theme.palette.mode === 'dark' ? 'darkblue' : '#F5F7F9',
          }}
        />
      );
    },
    blockquote(props) {
      const { ...rest } = props;
      return (
        <blockquote
          {...rest}
          style={{
            backgroundColor:
              theme.palette.mode === 'dark' ? 'darkblue' : '#F5F7F9',
          }}
        />
      );
    },
  };

  const docsComponents = {
    img: (props) => <MDImage {...props} floatRight={false} isDocs={true} />,
    h1: MDH1,
    h2: MDH2,
    h3: MDH3,
    h4: MDH4,
    pre: MDCodeBlock,
    ...styles,
  };

  const components = {
    p: (props) => (
      <MDParagraph
        {...props}
        mainKeywords={mainKeywords}
        productGlossary={productGlossary}
      />
    ),
    img: MDImage,
    blockquote: MDBlockquote,
    h1: MDH1,
    h2: MDH2,
    h3: MDH3,
    pre: MDCodeBlock,
    ...styles,
  };

  return (
    <ReactMarkdown
      className="markdown-body"
      remarkPlugins={[remarkGfm]}
      components={isDocs ? docsComponents : components}
    >
      {markdown}
    </ReactMarkdown>
  );
};
