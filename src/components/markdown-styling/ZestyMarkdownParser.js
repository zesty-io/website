import React from 'react';
import remarkGfm from 'remark-gfm';

import dynamic from 'next/dynamic';

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
  const docsComponents = {
    img: (props) => <MDImage {...props} floatRight={false} isDocs={true} />,
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
