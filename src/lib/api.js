export async function fetchPage(url,getNavigation=true) {
  let data = {
    error: true,
  };
  // grab the path without a query string
  url = url.split('?')[0]
  // if there is query string, get it 
  let queryString = url.split('?').length > 1 ? url.split('?')[1] : ''

  // If the URL contains a file extension then error out
  // In the context of nextjs when fetching data for a page
  // it should be done via an absolute path
  if (url.split('.').length > 1) {
    return data;
  }

  // url is missing ending forward slash, add it (zesty expects one)
  if (url.substr(-1) !== '/') {
    url = url + '/';
  }

  // remove first forward slash
  url = url.replace(/^\//, '');

  // build relative zesty toJSON url to fetch JSON
  // uses .env and .env local values to determine stage or production 
  let zestyURL = (undefined === process.env.PRODUCTION || process.env.PRODUCTION == 'true') ? process.env.zesty.production : process.env.zesty.stage;
  let zestyJSONURL = zestyURL.replace(/\/$/, '') + '/' + url + '?toJSON&' + queryString ;

  // Fetch data from Zesty.io toJSON API
  const res = await fetch(zestyJSONURL);

  // otherwise set response to data
  if (res.status == 200) {
    data = await res.json();
  } else {
    data.status = res.status;
  }
 
  // fetch the navigation and append the navigation to the data
  if(getNavigation == true){
    data.navigationTree = await buildJSONTreeFromNavigation()
  }

  return data;
}


async function buildJSONTreeFromNavigation(zestyURL){
  //console.log(zestyURL)
  return {}
}
