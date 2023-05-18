import axios from 'axios';
import FillerContent from 'components/globals/FillerContent';

export async function fetchPage(
  url,
  getNavigation = true,
  customDomain = false,
) {
  let data = {
    error: true,
    production: true,
  };
  // grab the path without a query string
  url = url.split('?')[0];
  // if there is query string, get it
  let queryString = url.split('?').length > 1 ? url.split('?')[1] : '';

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
  let productionMode =
    undefined === process.env.PRODUCTION || process.env.PRODUCTION === 'true'
      ? true
      : false;
  let zestyURL = productionMode
    ? process.env.zesty.production
    : process.env.zesty.stage;
  // this is a override for using multiple instances in a single website
  zestyURL = customDomain ? customDomain : zestyURL;

  let zestyJSONURL =
    zestyURL.replace(/\/$/, '') + '/' + url + '?toJSON&' + queryString;
  // Fetch data from Zesty.io toJSON API
  const res = await fetch(zestyJSONURL);

  // otherwise set response to data
  if (res.status == 200) {
    data = await res.json();
  } else {
    data.status = res.status;
  }
  data.zestyProductionMode = productionMode;
  data.zestyInstanceZUID = process.env.zesty.instance_zuid;
  data.zestyBaseURL = zestyURL;

  // fetch the navigation and append the navigation to the data
  if (getNavigation == true) {
    // not using this tree
    data.navigationTree = await buildJSONTreeFromNavigation(zestyURL);
    // custom nav tree building
    data.navigationCustom = await customNavigation(zestyURL);
    data.flyoutNavigation = await newNavigationWithFlyout(zestyURL);
  }
  return data;
}

async function recursiveChildFinder(parent, routingArray) {
  // return all the items that match the parent
  let children = [];
  for (var i = 0; i < routingArray.length; i++) {
    let child = routingArray[i];
    if (child.parentZUID == parent) {
      child.children = await recursiveChildFinder(child.zuid, routingArray);
      children.push(child);
    }
  }
  // sort the array byt sort order
  children.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort));

  return children;
}

function findURLbyZUID(routingArray, zuid) {
  for (var i = 0; i < routingArray.length; i++) {
    if (routingArray[i].zuid == zuid) return routingArray[i].uri;
  }
}
const fetcher = async ({ url, timeout = 3000, fallback, method = 'get' }) => {
  try {
    let res = await axios({ method, url, timeout });
    if (res.status === 200) {
      return res.data;
    } else {
      console.log('error', res);
      return fallback;
    }
  } catch (error) {
    console.log(error);
    return fallback;
  }
};
// loops and builds tree
async function customNavigation(zestyURL) {
  // hit the routes endpoint /-/headless/routing.json
  // hit the endpoint /-/instant/6-f8ddabc3e2-dv5rt8.json
  // we need both endpoint to product url paths and parenting, this is custom using a headless content model with parenting
  let routingJSON = zestyURL + '/-/headless/routing.json';
  let navInstantJSON = zestyURL + '/-/instant/6-f8ddabc3e2-dv5rt8.json';
  let flattenedHydratedURLs = [];
  try {
    // fetching data
    // let res = await fetch(routingJSON);
    // let routingData = await res.json();

    // this is the 600+ array of objects
    let routingData = await fetcher({
      url: routingJSON,
      fallback: FillerContent.routingJSON,
    });

    // res = await fetch(navInstantJSON);
    // let instantData = await res.json();

    // this is the 20+ array of objects
    let instantData = await fetcher({
      url: navInstantJSON,
      fallback: FillerContent.navInstantJSON,
    });

    // looping through isntant api data to create an array of flattened objects
    instantData.data.forEach((item) => {
      let parent = item.content.parent?.data
        ? item.content.parent.data[0].zuid
        : null;
      let itemToStore = {
        external: false,
        parentZUID: parent,
        sort: item.content.sort_order,
      };
      // determine url structure, could be internal (if so lookup by zuid), external (string), or # for placeholders
      if (item.content.internal_link?.data) {
        itemToStore.url = findURLbyZUID(
          routingData,
          item.content.internal_link.data[0].zuid,
        );
      } else if (item.content.external_link) {
        itemToStore.url = item.content.external_link;
        itemToStore.external = true;
      } else {
        itemToStore.url = '#';
      }
      itemToStore.title = item.meta.title;
      itemToStore.zuid = item.meta.zuid;
      flattenedHydratedURLs.push(itemToStore);
    });
  } catch (err) {
    console.log(err);
    return [];
  }
  // use flattened array of object to build a navigation tree with recursion
  var contructedNav = [];
  let tempItem = {};
  for (var i = 0; i < flattenedHydratedURLs.length; i++) {
    tempItem = flattenedHydratedURLs[i];
    if (tempItem.parent == null) {
      tempItem.children = await recursiveChildFinder(
        tempItem.zuid,
        flattenedHydratedURLs,
      );
      contructedNav.push(tempItem);
    }
  }
  contructedNav.sort((a, b) => parseFloat(a.sort) - parseFloat(b.sort));
  return contructedNav;
}

async function buildJSONTreeFromNavigation(zestyURL) {
  // access the headless url map
  let navJSON = zestyURL + '/-/headless/routing.json';
  try {
    // const routes = await fetch(navJSON);
    // let routeData = await routes.json();
    let routeData = await fetcher({
      url: navJSON,
      fallback: FillerContent.routingJSON,
    });
    let reducedData = [];
    routeData.forEach(async (route) => {
      let tempRoute = {
        url: route.uri,
        title: route.title,
        zuid: route.zuid,
      };
      reducedData.push(tempRoute);
    });
    return reducedData;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function newNavigationWithFlyout(zestyURL) {
  const flyoutNavigationJSON = zestyURL + '/-/flyoutnavigation.json';

  try {
    // const resp = await fetch(flyoutNavigationJSON);
    // const flyoutNavigationData = await resp.json();
    const flyoutNavigationData = await fetcher({
      url: flyoutNavigationJSON,
      fallback: FillerContent.flyoutNavigationData,
    });

    return flyoutNavigationData;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const productsData = async () => {
  return await axios
    .get('https://www.zesty.io/-/gql/product.json?')
    .then((e) => {
      return e.data;
    });
};
