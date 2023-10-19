// main.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TableOfContent } from '../../../../src/components/globals/TableOfContent';

const data = [
  {
    value: 'understanding-content-zestyio',
    label: 'Understanding Content Zesty.io',
    name: 'Understanding Content Zesty.io',
    url: '#understanding-content-zestyio',
    href: '#understanding-content-zestyio',
  },
  {
    value: 'content-editing',
    label: 'Content Editing',
    name: 'Content Editing',
    url: '#content-editing',
    href: '#content-editing',
  },
  {
    value: 'visual-layout',
    label: 'Visual Layout',
    name: 'Visual Layout',
    url: '#visual-layout',
    href: '#visual-layout',
  },
  {
    value: 'versioning',
    label: 'Versioning',
    name: 'Versioning',
    url: '#versioning',
    href: '#versioning',
  },
  {
    value: 'environment',
    label: 'Environment',
    name: 'Environment',
    url: '#environment',
    href: '#environment',
  },
  {
    value: 'publishing',
    label: 'Publishing',
    name: 'Publishing',
    url: '#publishing',
    href: '#publishing',
  },
  {
    value: 'workflow-requests',
    label: 'Workflow Requests',
    name: 'Workflow Requests',
    url: '#workflow-requests',
    href: '#workflow-requests',
  },
  {
    value: 'multilanguage-support',
    label: 'Multi-Language Support',
    name: 'Multi-Language Support',
    url: '#multilanguage-support',
    href: '#multi-language-support',
  },
  {
    value: 'api-access',
    label: 'API Access',
    name: 'API Access',
    url: '#api-access',
    href: '#api-access',
  },
];

describe('TableOfContent test', () => {
  test('toc test', () => {
    const { getByTestId } = render(<TableOfContent data={data} />);
    const item = getByTestId('table-of-contents');
    expect(item).toBeInTheDocument();

    expect(item).toMatchSnapshot();
  });
});
