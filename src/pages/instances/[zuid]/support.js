import React from 'react';
import { useZestyStore } from 'store';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

export { default as getServerSideProps } from 'lib/protectedRouteGetServerSideProps';

export default function Support() {
  const { userInfo, workingInstance } = useZestyStore((state) => state);

  const router = useRouter();

  const { zuid } = router.query;

  return (
    <Box>
      <Typography variant="h3">Coming Soon</Typography>
    </Box>
  );
}

Support.data = {
  container: 'InstanceContainer',
};
