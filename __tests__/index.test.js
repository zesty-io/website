import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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

describe('Home', () => {
  console.log(process.env.PRODUCTION);
  it('***FETCH ALL ROUTES***', async () => {
    const routes = await getTestingRoutes();
    const newroutes = routes;

    for await (const element of newroutes) {
      const response = await fetch(prodURL + element.uri, {
        method: 'GET',
        redirect: 'manual',
        follow: 0,
      });
      console.log(prodURL + element.uri);
      expect(response.status).toBe(200);
    }

    // test
    //  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    //  expect(res.status).toBe(200);
  });
});
