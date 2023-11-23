export function formatUrlSources(url) {
  const match = url.match(/\/([^/]+)\/?(\?.*)?$/);
  if (match) {
    const lastPath = match[1];
    const formattedText = lastPath
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return formattedText;
  }
}
