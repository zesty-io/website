import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { AccountsComboBox } from 'components/accounts';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import React from 'react';
import { useZestyStore } from 'store';
import { AlgoSearch } from 'views/Docs/AlgoSearch';
import { DocsComboBox } from 'views/Docs/DocsComboBox';
import { DocsTabs } from 'views/Docs/DocsTabs';
import { SearchModal } from 'views/Docs/SearchModal';

const tabs = [
  { label: 'Api', value: 'api' },
  { label: 'Support', value: 'support' },
  { label: 'Reference', value: 'reference' },
  { label: 'Resources', value: 'resources' },
];

export const DocsAppbar = React.memo(() => {
  const { instances, setworkingInstance, workingInstance } = useZestyStore();
  const isLoggedIn = useIsLoggedIn();
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE') || workingInstance;
  const [currentTab, setcurrentTab] = React.useState('api');
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { mainData } = useZestyStore((state) => state);

  const onChangeDropdown = (data) => {
    window.scrollTo(0, 0);
    if (data?.value) {
      router.push(`/docs` + data.value.parent);
    } else {
      router.push(`/docs` + '/instances');
    }
  };

  const DOCS_DATA_DROPDOWN = (data) => {
    const res = data.map((e) => {
      return { label: e.info.name, value: e };
    });
    return res;
  };
  const handleComboBox = (instanceZUID) => {
    setCookie('ZESTY_WORKING_INSTANCE', instanceZUID);
    setworkingInstance(instanceZUID);
  };
  return (
    <Stack
      direction={'row'}
      alignItems="center"
      justifyContent={'space-between'}
      sx={{
        px: 2,
        py: 1,
        alignItems: isMobile ? 'left' : 'center',
        borderTop: `1px solid ${grey[200]}`,
        bgcolor: '#fff',
      }}
    >
      <Stack pt={1} direction="row" spacing={2}>
        <DocsComboBox
          width={'20rem'}
          onChange={onChangeDropdown}
          options={DOCS_DATA_DROPDOWN(mainData)}
        />
        <DocsTabs setvalue={setcurrentTab} value={currentTab} tabs={tabs} />
      </Stack>

      <Stack direction={'row'} spacing={2}>
        {isLoggedIn && (
          <AccountsComboBox
            instances={instances.data}
            setCookies={handleComboBox}
            instanceZUID={instanceZUID}
            placeholder={
              instances?.data?.find((e) => e.ZUID === instanceZUID)?.name
            }
          />
        )}
        <SearchModal>
          <AlgoSearch />
        </SearchModal>
      </Stack>
    </Stack>
  );
});
