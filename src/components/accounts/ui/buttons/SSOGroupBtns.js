import { Skeleton, Stack, ThemeProvider } from '@mui/material';
import React from 'react';
import dynamic from 'next/dynamic';
import { ErrorMsg } from '../dialogs';
import { isProdClient } from 'utils';
import { theme } from '@zesty-io/material';

function Placeholder() {
  return (
    <Stack
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
    >
      <Skeleton width={'100%'} height={50} />
      <Skeleton width={'100%'} height={50} />
      <Skeleton width={'100%'} height={50} />
    </Stack>
  );
}
const SSOButton = dynamic(
  () => import('@zesty-io/material').then((e) => e.SSOButton),
  { ssr: false },
);
const SSOButtonGroup = dynamic(
  () => import('@zesty-io/material').then((e) => e.SSOButtonGroup),
  { ssr: false, loading: Placeholder },
);

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction={'column'} justifyContent="space-between" width={1}>
        <SSOButtonGroup
          authServiceUrl={
            isProdClient
              ? 'https://auth.api.zesty.io'
              : 'https://auth.api.dev.zesty.io'
          }
          onSuccess={() => {
            window.location.href = '/dashboard/';
          }}
          onError={(err) => {
            console.error(err, 'error');
            ErrorMsg({
              title: 'Login failed',
              text: JSON.stringify(err),
              timer: 10000,
              timerProgressBar: true,
            });
          }}
        >
          <SSOButton service="google" sx={{ bgcolor: '#fff' }} />
          <SSOButton service="azure" sx={{ bgcolor: '#fff' }} />
          <SSOButton service="github" sx={{ bgcolor: '#fff' }} />
        </SSOButtonGroup>
      </Stack>
    </ThemeProvider>
  );
}

export const SSOGroupBtns = React.memo(Main);
