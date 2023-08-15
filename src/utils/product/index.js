// use to generate id for link text
export function transformText(inputText) {
  // Remove leading/trailing spaces and convert to lowercase
  const trimmedText = inputText?.trim()?.toLowerCase()?.replace('.', '');

  // Replace spaces with dashes
  const dashedText = trimmedText
    ?.replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/ /g, '-');

  // Remove parentheses and their contents
  const transformedText = dashedText?.replace(/\([^()]*\)/g, '');

  return transformedText;
}
