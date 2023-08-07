import React from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import {
  MDBlockquote,
  MDCodeBlock,
  MDH1,
  MDH2,
  MDH3,
  MDImage,
  MDItalic,
  MDParagraph,
  MDStrong,
} from './components';

// Main //
export const ZestyMarkdownParser = ({
  markdown,
  mainKeywords,
  productGlossary,
}) => {
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
    strong: MDStrong,
    em: MDItalic,
  };
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {markdown}
    </ReactMarkdown>
  );
};
