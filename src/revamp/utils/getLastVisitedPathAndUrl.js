import { useEffect, useState } from 'react';

const getLastVisitedPathAndUrl = () => {
  const [lastVisitedURL, setLastVisitedURL] = useState('');
  const [lastVisitedPath, setLastVisitedPath] = useState('');

  useEffect(() => {
    const LastVPath =
      document.referrer !== '' ? new URL(document.referrer).pathname : '';
    const LastVUrl = document.referrer !== '' ? document.referrer : '';

    setLastVisitedPath(LastVPath);
    setLastVisitedURL(LastVUrl);
  }, []);

  return {
    lastVisitedPath,
    lastVisitedURL,
  };
};

export default getLastVisitedPathAndUrl;
