// MDH3.test.js

import React from 'react';
import { render } from '@testing-library/react';
import {
  MDH3,
  MDH1,
  MDH2,
  MDParagraph,
  MDCodeBlock,
  MDImage,
  MDBlockquote,
  MDStrong,
  MDItalic,
} from '../../../../src/components/markdown-styling/components';

describe('MDH3', () => {
  it('should render the MDH3 component with correct props', () => {
    // Sample node data for testing
    const node = {
      children: [
        {
          type: 'text',
          value: 'Heading 3 Text',
        },
      ],
    };

    // Render the MDH3 component with the sample node data
    const { getByText, getByRole, getByTestId } = render(<MDH3 node={node} />);

    const item = getByTestId('mdh3-container');
    expect(item).toBeDefined();
    expect(item).toMatchSnapshot();
    // Expect the Typography component to be rendered with the correct variant and component
    const typographyElement = getByText('Heading 3 Text');
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement.tagName.toLowerCase()).toBe('h3');
    expect(typographyElement).toHaveClass('MuiTypography-h6');

    // Expect the Typography component to have the correct id attribute
    const expectedId = 'heading-3-text';
    expect(typographyElement).toHaveAttribute('id', expectedId);
  });
});

describe('MDH1', () => {
  it('should render the MDH1 component with correct props and styling', () => {
    // Sample node data for testing
    const node = {
      children: [
        {
          type: 'text',
          value: 'Heading 1 Text',
        },
      ],
    };

    const { getByText, getByRole, getByTestId } = render(<MDH1 node={node} />);

    const boxElement = getByTestId('box-container');
    const item = getByTestId('box-container');
    expect(item).toBeDefined();
    expect(item).toMatchSnapshot();
    expect(boxElement).toBeInTheDocument();
    expect(boxElement).toMatchSnapshot();
    const typographyElement = getByText('Heading 1 Text');
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement.tagName.toLowerCase()).toBe('h1');
    const linkElement = getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '#heading-1-text');
  });
});

describe('MDH2', () => {
  it('should render the MDH2 component with correct props and styling', () => {
    // Sample node data for testing
    const node = {
      children: [
        {
          type: 'text',
          value: 'Heading 2 Text',
        },
      ],
    };

    // Render the MDH2 component with the sample node data
    const { getByText, getByRole, getByTestId } = render(<MDH2 node={node} />);
    const item = getByTestId('mdh2-container');
    expect(item).toBeDefined();
    expect(item).toMatchSnapshot();

    // Expect the Box component to be rendered with the correct styling
    const boxElement = getByRole('heading', { level: 2 });
    expect(boxElement).toBeInTheDocument();

    // Expect the Typography component to be rendered with the correct content, props, and styling
    const typographyElement = getByText('Heading 2 Text');
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement.tagName.toLowerCase()).toBe('h2');

    // Expect the Link component to be rendered with the correct props and styling
    const linkElement = getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '#heading-2-text');
  });
});

describe('MDParagraph', () => {
  it('should render the MDParagraph component with correct content and links', () => {
    // Sample node data for testing
    const node = {
      children: [
        {
          type: 'text',
          value: 'This is a paragraph with a ',
        },
        {
          type: 'a',
          props: {
            href: 'https://example.com',
            children: [
              {
                type: 'text',
                value: 'link',
              },
            ],
          },
        },
        {
          type: 'text',
          value: ' and some keywords like Apple and Banana.',
        },
      ],
    };

    // Sample mainKeywords and productGlossary for testing
    const mainKeywords = ['apple', 'banana'];
    const productGlossary = [
      {
        target_words: ['apple'],
        url: 'https://apple-url.com',
        description: 'This is an apple.',
      },
      {
        target_words: ['banana'],
        url: 'https://banana-url.com',
        description: 'This is a banana.',
      },
    ];

    const children = [
      'By using URL parameters, businesses can craft dyna… possibilities for enhancing the user experience.',
    ];
    // Render the MDParagraph component with the sample node data and props
    const { container, getByTestId } = render(
      <MDParagraph
        node={node}
        mainKeywords={mainKeywords}
        productGlossary={productGlossary}
        children={children}
      />,
    );

    const item = getByTestId('box-container');
    expect(item).toBeDefined();
    expect(item).toMatchSnapshot();
    // Expect the rendered output to contain the correct content and links
    expect(container.innerHTML).toContain(
      `<p data-testid=\"box-container\">By using URL parameters, businesses can craft dyna… possibilities for enhancing the user experience.</p>`,
    );
  });

  // Add more test cases as needed to cover other scenarios and edge cases.
});

describe('MDCodeBlock', () => {
  it('should render the MDCodeBlock component with correct value and styles', () => {
    // Sample node data for testing
    const node = {
      children: [
        {
          type: 'code',
          children: [
            {
              type: 'text',
              value:
                "const greeting = 'Hello, world!';\nconsole.log(greeting);",
            },
          ],
        },
      ],
    };

    // Render the MDCodeBlock component with the sample node data
    const { getByText, getByTestId } = render(<MDCodeBlock node={node} />);

    const item = getByTestId('code-block-box');
    expect(item).toBeDefined();
    expect(item).toMatchSnapshot();
    // Expect the CodeMirror component to receive the correct value prop
    const codeMirror = getByTestId('code-mirror');
    expect(codeMirror).toBeInTheDocument();

    // Expect the Box component to be rendered with the correct padding
    const boxElement = getByTestId('code-block-box');
    expect(boxElement).toBeInTheDocument();
    expect(boxElement).toHaveStyle({
      padding: '16px',
    });
  });
});

describe('MDImage', () => {
  it('should render MDLargeImage if node has title', () => {
    const node = {
      properties: {
        src: 'image-large.jpg',
        alt: 'Large Image',
        title: 'Large Image Title',
      },
    };

    const { getByTestId } = render(<MDImage node={node} />);
    const largeImage = getByTestId('md-large-image');

    expect(largeImage).toBeInTheDocument();
  });

  it('should render MDSmallImage if node does not have title', () => {
    const node = {
      properties: {
        src: 'image-small.jpg',
        alt: 'Small Image',
      },
    };

    const { getByTestId } = render(<MDImage node={node} />);
    const smallImage = getByTestId('md-small-image');

    expect(smallImage).toBeInTheDocument();

    expect(smallImage).toMatchSnapshot();
  });
});

describe('MDBlockquote', () => {
  it('should render the MDBlockquote component with correct content and styles', () => {
    // Sample node data for testing
    const node = {
      children: [
        {
          type: 'blockquote',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'This is a blockquote text.',
                },
              ],
            },
          ],
        },
      ],
    };

    // Render the MDBlockquote component with the sample node data
    const { getByText, getByTestId } = render(<MDBlockquote node={node} />);

    // Expect the Box component to be rendered with the correct styling
    const boxElement = getByTestId('blockquote-box');
    expect(boxElement).toBeInTheDocument();

    expect(boxElement).toMatchSnapshot();
  });
});

describe('MDStrong', () => {
  it('renders the text with the correct fontWeight', () => {
    const mockNode = {
      children: [
        {
          children: [
            {
              value: 'Hello, World!',
            },
          ],
        },
      ],
    };
    const { getByText, getByTestId } = render(<MDStrong node={mockNode} />);
    const strongText = getByText('Hello, World!');
    expect(strongText).toBeInTheDocument();
    expect(strongText).toHaveStyle('font-weight: 700');

    const boxelement = getByTestId('MDStrong-component');
    expect(boxelement).toBeInTheDocument();

    expect(boxelement).toMatchSnapshot();
  });
});

describe('MDItalic', () => {
  it('renders the text with the correct fontStyle and fontWeight', () => {
    const mockNode = {
      children: [
        {
          children: [
            {
              value: 'Hello, World!',
            },
          ],
        },
      ],
    };
    const { getByText, getByTestId } = render(<MDItalic node={mockNode} />);
    const italicText = getByText('Hello, World!');
    expect(italicText).toBeInTheDocument();
    expect(italicText).toHaveStyle('font-style: italic');
    expect(italicText).toHaveStyle('font-weight: 400');

    const boxelement = getByTestId('MDItalic-component');
    expect(boxelement).toBeInTheDocument();

    expect(boxelement).toMatchSnapshot();
  });
});
