import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

async function fetchData() {
  try {
    const response = await fetch(
      'https://kfg6bckb-dev.webengine.zesty.io/-/dynamic-contact-page.json',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dynamic content:', error);
    return null;
  }
}

export default function useGetDynamicData() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { type } = router.query;

  console.log(type);
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();

      if (fetchedData) {
        if (type) {
          setData(fetchedData.filter((item) => item.page_type === type)?.[0]);
          return;
        } else {
          setData(
            fetchedData.filter((item) => item.page_type === 'default')?.[0],
          );
        }
      }
    };

    getData();
  }, []);

  return { data };
}
