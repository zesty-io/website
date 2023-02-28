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
const addToAlgolia = async () => {
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
};
export default async function handler(req, res) {
  if (req.method === 'GET') {
    await addToAlgolia();
    return res.status(200).json({ name: req.method });
  } else {
    return res.status(403).json({ name: req.method });
  }
}
