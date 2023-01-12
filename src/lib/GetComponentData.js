import { useEffect, useState } from 'react';

const GetComponentData = (zuid) => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(async () => {
    const resp = await getData(zuid);
    console.log('resp', resp);
    setData(resp);
    setIsLoading(false);
  }, [zuid]);

  return { data, loading };
};

const getData = async (zuid) => {
  // uses .env and .env local values to determine stage or production
  let productionMode =
    undefined === process.env.NEXT_PUBLIC_PRODUCTION ||
    process.env.NEXT_PUBLIC_PRODUCTION === 'true'
      ? true
      : false;
  let zestyURL = productionMode
    ? process.env.zesty.production
    : process.env.zesty.stage;
  zestyURL = zestyURL.replace(/\/$/, '');

  try {
    const resp = await fetch(`${zestyURL}/-/instant/${zuid}.json`);
    const content = await resp.json();
    console.log('content', content);
    return content;
  } catch (error) {
    throw error;
  }
};

export default GetComponentData;
