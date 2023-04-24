import algoliasearch from 'algoliasearch';
import axios from 'axios';
import { fetchMarkdownFile, parseMarkdownFile } from 'utils/docs';
import { PARSLEY } from 'utils/docs/constants';
import { transFormMainData } from 'views/Docs/helper';

const POSTMAN_JSON_DATA = [
  'https://raw.githubusercontent.com/zesty-io/zesty-docs/main/Postman%20Collections/instances-api.json',
  'https://raw.githubusercontent.com/zesty-io/zesty-docs/main/Postman%20Collections/auth-api.json',
  'https://raw.githubusercontent.com/zesty-io/zesty-docs/main/Postman%20Collections/accounts-api.json',
  // 'https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/media-api.json',
];

const APPID = process.env.ALGOLIA_APPID;
const APIKEY = process.env.ALGOLIA_APIKEY;
const INDEX = process.env.ALGOLIA_INDEX;

const getDocsData = async () => {
  const mainCollection = [];
  const getPostmanData = async () => {
    for (const url of POSTMAN_JSON_DATA) {
      await axios.get(url).then((e) => {
        mainCollection.push(e.data);
      });
    }
  };

  await getPostmanData();
  const mainData = await transFormMainData(mainCollection);

  let arr1 = [];
  const refactorCollection = (data) => {
    (data?.item || data)?.forEach((e) => {
      if (e.item || e.name) {
        arr1.push({
          name: e.name,
          description: e.description,
          url: e.url,
          category: e?.url?.split('/')?.filter((e) => e)[0],
        });
        return refactorCollection(e.item);
      } else if (e.name) {
        return arr1.push({
          name: e.name,
          description: e.description,
          url: e.url,
          category: e?.url?.split('/')?.filter((e) => e)[0],
        });
      }
    });

    return arr1;
  };

  const objects = await refactorCollection(mainData);

  return objects;
};

const parselyTourEndpoint =
  'https://parsleydev-dev.webengine.zesty.io/-/instant/6-c9c624-14bzxf.json';
const getParsleyTourData = async () => {
  const res = await axios.get(parselyTourEndpoint).then((e) => {
    const result = e.data.data
      .map((e) => {
        return {
          label: `${e.content.lesson_number}. ${e.content.title}`,
          value: e.content.path_full,
          url: `/parsley/tour/${e.content.path_full}`,
          name: e.content.title,
          description: e.content.explanation,
          lesson_number: e.content.lesson_number,
        };
      })
      .sort((a, b) => {
        return Number(a?.lesson_number) - Number(b?.lesson_number);
      });

    return result;
  });

  return res;
};

const algoliaFunc = async ({ data, index }) => {
  const client = algoliasearch(APPID, APIKEY);
  const newIndex = client.initIndex(index);

  await newIndex
    .replaceAllObjects(data, {
      autoGenerateObjectIDIfNotExist: true,
    })
    .then(({ objectIDs }) => {
      console.log(objectIDs);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getParsleyOverviewData = async () => {
  const markdown = await fetchMarkdownFile({ mdUrl: PARSLEY[0].githubURL });
  const { navData } = await parseMarkdownFile({
    markdown,
    tags: PARSLEY[0].tags,
    parentURL: PARSLEY[0].parentURL,
    title: PARSLEY[0].title,
  });

  return navData;
};

const getParsleyIndexData = async () => {
  const markdown = await fetchMarkdownFile({ mdUrl: PARSLEY[1].githubURL });
  const { navData } = await parseMarkdownFile({
    markdown,
    tags: PARSLEY[1].tags,
    parentURL: PARSLEY[1].parentURL,
    title: PARSLEY[1].title,
  });

  return navData;
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const parsleyData = await getParsleyTourData();
    const docsData = await getDocsData();
    const parsleyIndexData = await getParsleyIndexData();
    const parsleyOverviewData = await getParsleyOverviewData();

    await algoliaFunc({ data: parsleyData, index: 'parsley-tour' });
    await algoliaFunc({ data: docsData, index: 'docs' });
    await algoliaFunc({ data: parsleyIndexData, index: 'parsley-glossary' });
    await algoliaFunc({ data: parsleyOverviewData, index: 'parsley-overview' });

    return res.status(200).json({ ok: true });
  } else {
    return res.status(403).json({ name: req.method });
  }
}
