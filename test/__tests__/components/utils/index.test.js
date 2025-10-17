import { transformText } from '../../../../src/utils/product/index';

describe('transformText', () => {
  it('transforms text as expected', () => {
    const inputText = 'Hello, (World)! This is a Test.?';
    const expectedResult = 'hello-world-this-is-a-test';

    const result = transformText(inputText);

    expect(result).toBe(expectedResult);
  });

  it('handles empty input', () => {
    const inputText = '';
    const expectedResult = '';

    const result = transformText(inputText);

    expect(result).toBe(expectedResult);
  });

  it('handles input with parentheses', () => {
    const inputText = 'Hello (with parentheses)';
    const expectedResult = `hello-with-parentheses`;

    const result = transformText(inputText);

    expect(result).toBe(expectedResult);
  });
});
