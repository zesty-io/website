/* eslint-disable no-undef */
// fetchRedirects, get the list of all redirects set in the content manager, loads into next.config.js

const fetchZestyRedirects = async () => {
  // Adding Stage and Prod links here. NextConfig variables are not accessible from here.
  const stage = 'https://kfg6bckb-dev.webengine.zesty.io';
  const production = 'https://www.zesty.io';
  let zestyURL = '';

  let productionMode = process.env.PRODUCTION === 'true' ? true : false;

  zestyURL = productionMode ? production : stage;
  zestyURL = zestyURL.replace(/\/$/, '');

  // access the headless url map
  let redirectsAPIURL = zestyURL + '/-/headless/redirects.json?zpw=';
  try {
    const req = await fetch(redirectsAPIURL);
    let redirects = await req.json();
    let redirectsForNext = [];
    redirects.forEach((r) => {
      // Check if source path starts slash otherwise ignore to avoid crash on buildtime
      if (r.path.startsWith('/')) {
        redirectsForNext.push({
          source: r.path,
          destination: r.target,
          permanent: r.code == 301 ? true : false,
        });
      } else {
        // Show invalid redirect url in logs during build time
        console.warn('Invalid redirect source path check on cms SEO\n\n', r);
      }
    });
    return redirectsForNext;
  } catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = { fetchZestyRedirects };
