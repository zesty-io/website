import React from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import {
  MDBlockquote,
  MDCodeBlock,
  MDH1,
  MDH2,
  MDH3,
  MDH4,
  MDImage,
  MDParagraph,
} from './components';

// Main //
export const ZestyMarkdownParser = ({
  markdown,
  mainKeywords,
  productGlossary,
  isDocs = false,
}) => {
  const docsComponents = {
    img: (props) => <MDImage {...props} floatRight={false} isDocs={true} />,
    blockquote: MDBlockquote,
    h1: MDH1,
    h2: MDH2,
    h3: MDH3,
    h4: MDH4,
    pre: MDCodeBlock,
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
    // strong: MDStrong,
    // em: MDItalic,
  };
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={isDocs ? docsComponents : components}
    >
      {markdown}
    </ReactMarkdown>
  );
};
