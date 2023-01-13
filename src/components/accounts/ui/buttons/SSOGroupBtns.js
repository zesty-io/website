import { Stack } from '@mui/material';
import { accounts } from 'components/accounts/constants';
import React from 'react';
import { SSOBtn } from './SSOBtn';

const Index = ({ content = {} }) => {
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
        href={content?.zesty?.sso?.googleUrl}
        bodyColor="#4584F8"
        textColor="#fff"
        borderColor="#4584F8"
      />
      <SSOBtn
        image={accounts.sso.github.logo}
        title="Sign in with Github"
        href={content?.zesty?.sso?.githubUrl}
        bodyColor="#23282C"
        logoColor="#23282C"
        borderColor="#23282C"
        textColor="#fff"
      />

      <SSOBtn
        image={accounts.sso.microsoft.logo}
        href={content?.zesty?.sso?.msUrl}
        title="Sign in with Microsoft"
      />
    </Stack>
  );
};

export const SSOGroupBtns = React.memo(Index);
