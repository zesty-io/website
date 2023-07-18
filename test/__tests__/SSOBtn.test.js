import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SSOBtn } from '../../src/components/accounts/ui/buttons/SSOBtn.js';

describe('SSO btn tests', () => {
  const title = 'Sign in with Google';
  const href = 'https://example.com';
  const image = 'path/to/image.png';
  const bodyColor = '#FFFFFF';
  const borderColor = '#CCCCCC';
  beforeEach(() => {
    render(
      <SSOBtn
        borderColor={borderColor}
        bodyColor={bodyColor}
        title={title}
        href={href}
        image={image}
      />,
    );
  });

  test('renders SSOBtn component', () => {
    const ssoBtnElement = screen.getByTestId('sso-btn');
    expect(ssoBtnElement).toBeInTheDocument();
  });
  test('renders title correctly', () => {
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });
  test('displays image correctly', () => {
    const imageElement = screen.getByAltText('Sign in with Google');
    expect(imageElement).toHaveAttribute('src', image);
  });
  test('applies correct background color', () => {
    const ssoBtnElement = screen.getByTestId('sso-btn');
    expect(ssoBtnElement).toHaveStyle(`background: ${bodyColor}`);
  });
  test('applies correct border color', () => {
    const ssoBtnElement = screen.getByTestId('sso-btn');
    expect(ssoBtnElement).toHaveStyle(`border: 1px solid ${borderColor}`);
  });
});
