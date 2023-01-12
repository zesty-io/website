import { Stack } from '@mui/material';
import { accounts } from 'components/accounts/constants';
import React from 'react';
import { SSOBtn } from './SSOBtn';

const Index = () => {
  return (
    <Stack
      direction={'column'}
      alignItems={'center'}
      justifyContent="space-evenly"
      gap={1}
      width={1}
    >
      <SSOBtn
        image={accounts.sso.google.logo}
        title="Sign in with Google"
        href={accounts.sso.google.url}
        bodyColor="#4584F8"
        textColor="#fff"
        borderColor="#4584F8"
      />
      <SSOBtn
        image={accounts.sso.github.logo}
        title="Sign in with Github"
        href={accounts.sso.github.url}
        bodyColor="#23282C"
        logoColor="#23282C"
        borderColor="#23282C"
        textColor="#fff"
      />

      <SSOBtn
        image={accounts.sso.microsoft.logo}
        title="Sign in with Microsoft"
        href={accounts.sso.microsoft.url}
      />
    </Stack>
  );
};

export const SSOGroupBtns = React.memo(Index);
