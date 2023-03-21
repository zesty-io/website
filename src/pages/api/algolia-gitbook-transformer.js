import algoliasearch from 'algoliasearch';
import axios from 'axios';

const APPID = process.env.ALGOLIA_APPID;
const APIKEY = process.env.ALGOLIA_APIKEY;
const INDEX = process.env.ALGOLIA_ZESTY_ORG_INDEX;

const addToAlgolia = async (req) => {
  const client = algoliasearch(APPID, APIKEY);
  const index = client.initIndex(INDEX);

  // only get gitbook pages if they are not in cache

  const gitBookPages = await getGitBookPages();

  const objects = flattenPages(gitBookPages.data.pages);

  // Only generate the index if the query param is set to true
  if (req.query.generate === 'true') {
    await index
      .replaceAllObjects(objects, {
        autoGenerateObjectIDIfNotExist: true,
      })
      .then(({ objectIDs }) => {
        console.log(objectIDs);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return generateNavigationTree(objects);
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      name: req.method,
      description: 'Docs services navigation tree',
      data: await addToAlgolia(req),
    });
  } else {
    return res.status(403).json({ name: req.method });
  }
}

const getGitBookPages = async () => {
  const resp = await axios
    .get('https://api.gitbook.com/v1/spaces/JxtEGD7RBfgH2ooihKIa/content', {
      headers: {
        Authorization: `Bearer ${process.env.GITBOOK_API_KEY}`,
      },
    })
    .then((data) => data);

  return resp;
};

/**
 * It takes a list of pages, and returns a list of pages with the category and service fields added
 * @param pages - The pages object from the API response.
 * @returns An array of objects.
 */
const flattenPages = (pages) => {
  let flattened = [];
  pages.forEach((page) => {
    const categoryMatcher = /^\/[^\/]+\/([^\/]+)\//;
    const serviceMatcher = /^\/([^\/]+)\/[^\/]+\//;

    const category = categoryMatcher.exec(`/${page.path}/`);
    const service = serviceMatcher.exec(`/${page.path}/`);
    flattened.push({
      objectId: page.id,
      name: page.title,
      url: `/${page.path}`,
      description: page.description,
      category: category ? category[1] : `${page.path}`,
      service: service ? service[1] : ``,
    });
    if (page.pages && page.pages.length > 0) {
      flattened.push(...flattenPages(page.pages));
    }
  });
  return flattened;
};

/**
@description this will generate the navigation tree structure that can be used to render the docs navigation
 */
const generateNavigationTree = (flattenedPages) => {
  return flattenedPages.reduce((acc, item) => {
    const { url, name, objectId } = item;
    const urlArr = url.split('/').filter((item) => item !== '');
    const urlArrLength = urlArr.length;
    let tempAcc = acc;
    urlArr.forEach((item, index) => {
      if (index === urlArrLength - 1) {
        tempAcc.push({
          name,
          url,
          objectId,
          item: [],
        });
      } else {
        const foundItem = tempAcc.find((item) => item.name === urlArr[index]);
        if (foundItem) {
          tempAcc = foundItem.item;
        } else {
          tempAcc.push({
            name: urlArr[index],
            url: `/${urlArr.slice(0, index + 1).join('/')}`,
            item: [],
          });
          tempAcc = tempAcc[tempAcc.length - 1].item;
        }
      }
    });
    return acc;
  }, []);
};
