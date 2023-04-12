import algoliasearch from 'algoliasearch';
import axios from 'axios';
import { transFormMainData } from 'views/Docs/helper';

const POSTMAN_JSON_DATA = [
  'https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/instances-api.json',
  'https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/auth-api.json',
  'https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/accounts-api.json',
  // 'https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/media-api.json',
];

const APPID = process.env.ALGOLIA_APPID;
const APIKEY = process.env.ALGOLIA_APIKEY;
const INDEX = process.env.ALGOLIA_INDEX;
const addToAlgolia = async ({ data = [] }) => {
  const client = algoliasearch(APPID, APIKEY);
  const index = client.initIndex(INDEX);

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

  const finalObject = [...objects, ...data];
  await index
    .replaceAllObjects(finalObject, {
      autoGenerateObjectIDIfNotExist: true,
    })
    .then(({ objectIDs }) => {
      console.log(objectIDs);
    })
    .catch((err) => {
      console.log(err);
    });
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
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const parsleyData = await getParsleyTourData();
    await addToAlgolia({ data: parsleyData });
    return res.status(200).json({ ok: true });
  } else {
    return res.status(403).json({ name: req.method });
  }
}
