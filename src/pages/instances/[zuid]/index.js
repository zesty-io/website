import React from 'react';
import { useZestyStore, getZestyAPI } from 'store';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';

export default function Instance() {
  const { setZestyAPI } = useZestyStore((state) => state);
  const router = useRouter();
  const { zuid } = router.query;

  React.useEffect(() => {
    setZestyAPI(getZestyAPI(zuid));
  }, []);

  return (
    <>
      <Typography variant="h2">Overview!</Typography>
    </>
  );
}

Instance.data = {
  container: 'InstanceContainer',
};
