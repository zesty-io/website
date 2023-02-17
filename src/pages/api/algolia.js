import INSTANCE_DATA from '../../views/Docs/instance.data.json';
import ACCOUNTS_DATA from '../../views/Docs/accounts.data.json';
import AUTH_DATA from '../../views/Docs/auth.data.json';

import algoliasearch from 'algoliasearch';
import { transFormMainData } from 'views/Docs/helper';

const APPID = process.env.ALGOLIA_APPID;
const APIKEY = process.env.ALGOLIA_APIKEY;
const INDEX = process.env.ALGOLIA_INDEX;
const addToAlgolia = async () => {
  const client = algoliasearch(APPID, APIKEY);
  const index = client.initIndex(INDEX);

  const mainCollection = [INSTANCE_DATA, ACCOUNTS_DATA, AUTH_DATA];
  const mainData = transFormMainData(mainCollection);

  let arr1 = [];
  const refactorCollection = (data) => {
    (data?.item || data)?.forEach((e) => {
      if (e.item || e.name) {
        arr1.push({ name: e.name, description: e.description, url: e.url });
        return refactorCollection(e.item);
      } else if (e.name) {
        return arr1.push({
          name: e.name,
          description: e.description,
          url: e.url,
        });
      }
    });

    return arr1;
  };

  const objects = refactorCollection(mainData);

  index
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
