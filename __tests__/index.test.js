import '@testing-library/jest-dom';
import 'isomorphic-fetch';

const env = 'prod';
const prodURL = 'https://www.zesty.io';
const stageURL = 'https://kfg6bckb-dev.webengine.zesty.io';
const routingPath = '/-/headless/routing.json';

const getTestingRoutes = async () => {
  let routingEndpoints =
    env == 'prod' ? prodURL + routingPath : stageURL + routingPath;

  const res = await fetch(routingEndpoints);
  const json = await res.json();

  return json;
};

describe('ZESTY WEBSITE', () => {
  test('***FETCH ALL ROUTES***', async () => {
    const routes = await getTestingRoutes();
    const newroutes = routes.slice(0, 10);
    const list = [];
    const url = env == 'prod' ? prodURL : stageURL;

    for await (const element of newroutes) {
      const response = await fetch(url + element.uri, {
        method: 'GET',
        redirect: 'manual',
        follow: 0,
      });
      list.push({ route: url + element.uri, status: response.status });
      expect(response.status).not.toBe(2200);
    }

    console.table(list);
  }, 30000);
});
