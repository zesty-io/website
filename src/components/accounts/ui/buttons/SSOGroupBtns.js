import { Stack } from '@mui/material';
import { accounts } from 'components/accounts/constants';
import React from 'react';
import dynamic from 'next/dynamic';

const SSOBtn = dynamic(() => import('./SSOBtn').then((e) => e.SSOBtn));

function Index({ content = {} }) {
  return (
    <Stack
      direction={'column'}
      alignItems={'center'}
      justifyContent="space-between"
      width={1}
    >
      <SSOBtn
        image={accounts.sso.google.logo}
        title="Continue with Google"
        href={content?.zesty?.sso?.googleUrl}
        bodyColor="#fff"
        textColor="#333333"
        borderColor="#F2F4F7"
      />

      <SSOBtn
        image={accounts.sso.microsoft.logo}
        href={content?.zesty?.sso?.msUrl}
        title="Continue with Microsoft"
        bodyColor="#fff"
        textColor="#333333"
        borderColor="#F2F4F7"
      />
      <SSOBtn
        image={accounts.sso.github.logo}
        title="Continue with Github"
        href={content?.zesty?.sso?.githubUrl}
        bodyColor="#fff"
        textColor="#333333"
        borderColor="#F2F4F7"
      />
    </Stack>
  );
}

export const SSOGroupBtns = React.memo(Index);
