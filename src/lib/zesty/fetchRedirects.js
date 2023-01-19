/* eslint-disable no-undef */
// fetchRedirects, get the list of all redirects set in the content manager, loads into next.config.js
async function fetchZestyRedirects(zestyConfig) {
  let zestyURL = '';
  try {
    let productionMode =
      undefined === process.env.PRODUCTION || process.env.PRODUCTION === 'true'
        ? true
        : false;

    zestyURL = productionMode ? zestyConfig.production : zestyConfig.stage;
    zestyURL = zestyURL.replace(/\/$/, '');
  } catch (err) {
    console.log(
      'missing next.config.js env values for zesty.stage, zesty.production',
    );
    return [];
  }

  // access the headless url map
  let redirectsAPIURL =
    zestyURL + '/-/headless/redirects.json?zpw=' + zestyConfig.stage_password;
  try {
    const req = await fetch(redirectsAPIURL);
    let redirects = await req.json();
    let redirectsForNext = [];
    redirects.forEach((r) => {
      redirectsForNext.push({
        source: r.path,
        destination: r.target,
        permanent: r.code == 301 ? true : false,
      });
    });
    return redirectsForNext;
  } catch (err) {
    console.log(err);
    return [];
  }
}

module.exports = { fetchZestyRedirects };
