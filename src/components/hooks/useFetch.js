import { useState, useEffect } from 'react';

const useFetch = (url, production = true) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  let zestyURL = production
    ? process.env.zesty.production
    : process.env.zesty.stage;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${zestyURL}${url}`);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const responseData = await response.json();

      setData(responseData);
    };

    try {
      fetchData();
    } catch (error) {
      console.error(`Could Not Find Results: ${error}`);
    } finally {
      setIsPending(false);
    }
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
