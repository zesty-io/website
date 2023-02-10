import { fetchPage } from 'lib/api';

export async function docsLookup(ctx) {
  // default data object
  let data = {};
  // setup default path
  let markdownFilePath = 'homepage.md';
  // some file structures have a README.md as the index, this will be use to check that
  let markdownFilePathREADME = 'README.md';
  // split url
  data.urlPath = ctx.resolvedUrl;

  if (data.urlPath !== '/old-docs/') {
    // remove /docs/, the trailing foward slash, and  and make new string with .md reference
    markdownFilePath = data.urlPath.replace('/docs/', '').replace(/\/$/, '.md');
    markdownFilePathREADME = data.urlPath
      .replace('/docs/', '')
      .replace(/\/$/, 'README.md');
  }

  console.log(markdownFilePathREADME);
  // table of contents
  try {
    let url =
      'https://raw.githubusercontent.com/zesty-io/zesty-org/master/TableOfContents.md';
    let res = await fetch(url);

    data.toc = await res.text();
  } catch (err) {
    data.error = err;
  }

  try {
    // docs data
    let url = `https://raw.githubusercontent.com/zesty-io/zesty-org/master/${markdownFilePath}`;
    let res = await fetch(url);
    data.markdown = await res.text();
  } catch (err) {
    data.error = err;
  }

  // generate a status 404 page
  if (data.error) return { notFound: true };
  //this leverages the zesty to JSON call to get the master instances navigation
  data.navigationCustom = (await fetchPage('/')).navigationCustom;
  // Pass data to the page via props
  return { props: data };
}
