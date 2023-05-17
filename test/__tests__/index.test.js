import '@testing-library/jest-dom';
import 'isomorphic-fetch';
// cache all navigationtree data

// this only access github env , for clientside use NEXT_PUBLIC
const isDev = process.env.PRODUCTION === 'false' ? true : false;

const prodURL = 'https://www.zesty.io';
const stageURL = 'https://kfg6bckb-dev.webengine.zesty.io';
const routingPath = '/-/headless/routing.json';

const getTestingRoutes = async () => {
  let routingEndpoints = !isDev
    ? prodURL + routingPath
    : stageURL + routingPath;

  const res = await fetch(routingEndpoints);
  const json = await res.json();

  return json;
};

describe('ZESTY WEBSITE', () => {
  test('***FETCH ALL ROUTES***', async () => {
    const routes = await getTestingRoutes();
    const newroutes = routes.slice(0, 1);
    const successRoutes = [];
    const errorRoutes = [];
    const url = !isDev ? prodURL : stageURL;
    // const url = stageURL;

    const promises = newroutes.map(async (element) => {
      const response = await fetch(url + element.uri, {
        method: 'GET',
        redirect: 'manual',
        follow: 0,
      });

      if (response.status === 200 || response.status === 201) {
        successRoutes.push({
          Route: url + element.uri,
          Status: response.status,
        });
      } else {
        errorRoutes.push({
          Route: url + element.uri,
          Status: response.status,
        });
      }

      expect(response.status).not.toBe(2200);
    });

    await Promise.all(promises);

    console.table('✅✅✅ SUCCESS ROUTES ✅✅✅');
    console.table(successRoutes);
    console.table('❌❌❌ ERROR ROUTES ❌❌❌');
    console.table(errorRoutes);
  }, 300000);
});
