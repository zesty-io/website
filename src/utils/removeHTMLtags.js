export const removeHTMLtags = (str) => {
  if (str == '' || str == null || str == undefined) return undefined;
  return str.replace(/<[^>]*>/g, '');
};
