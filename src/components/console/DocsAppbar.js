import {
  Breadcrumbs,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { AccountsComboBox } from 'components/accounts';
import useIsLoggedIn from 'components/hooks/useIsLoggedIn';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import React from 'react';
import { useZestyStore } from 'store';
import { AlgoSearch } from 'views/Docs/AlgoSearch';
import { DocsComboBox } from 'views/Docs/DocsComboBox';
import { DocsPopover } from 'views/Docs/DocsPopover';
import { DocsTabs } from 'views/Docs/DocsTabs';
import { SearchModal } from 'views/Docs/SearchModal';

const tabs = [
  { label: 'API Reference', value: 'api-reference' },
  // { label: 'Resources', value: 'resources' },
  // { label: 'Services', value: 'services' },
];

export const DocsAppbar = React.memo(() => {
  const router = useRouter();
  const initialTab = router.asPath.split('/').filter((e) => e)[2];
  const currentPath = router.asPath.split('/').filter((e) => e)[1];
  const {
    instances,
    setworkingInstance,
    workingInstance,
    language,
    setlanguage,
    ZestyAPI,
    contentModels,
    setcontentModels,
    contentModel,
    setcontentModel,
  } = useZestyStore((e) => ({
    instances: e.instances,
    setworkingInstance: e.setworkingInstance,
    workingInstance: e.workingInstance,
    language: e.language,
    setlanguage: e.setlanguage,
    ZestyAPI: e.ZestyAPI,
    contentModels: e.contentModels,
    setcontentModels: e.setcontentModels,
    contentModel: e.contentModel,
    setcontentModel: e.setcontentModel,
  }));
  const isLoggedIn = useIsLoggedIn();
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE') || workingInstance;
  const [currentTab, setcurrentTab] = React.useState(initialTab);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { mainData } = useZestyStore((state) => state);
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  const onChangeDropdown = (data) => {
    window.scrollTo(0, 0);
    if (data?.value) {
      router.push(`/docs` + data.value.parent);
    } else {
      // fallback data when user click x
      router.push(`/docs` + '/instances/api-reference');
    }
  };

  const DOCS_DATA_DROPDOWN = () => {
    const res = [
      { label: 'Instances API', value: { parent: '/instances/api-reference' } },
      {
        label: 'Authentication API',
        value: { parent: '/authentication/api-reference' },
      },
      { label: 'Accounts API', value: { parent: '/accounts/api-reference' } },
      { label: 'Parsley Tour', value: { parent: '/parsley/tour/hello-world' } },
    ];
    // const res = data.map((e) => {
    //   return { label: e.info.name, value: e };
    // });
    // console.log(res, 4444);
    return res;
  };
  const selectInstance = async (instanceZUID) => {
    setCookie('ZESTY_WORKING_INSTANCE', instanceZUID);
    setworkingInstance(instanceZUID);
    window.location.reload();
  };

  const selectContentModel = (id) => {
    setcontentModel(id);
  };
  const handleTabs = (e) => {
    console.log(router?.query.slug);
    const firstChildUrl = router?.query.slug ? router?.query?.slug[0] : '';
    const url = `/docs/${firstChildUrl}/${e}`;

    setcurrentTab(e);
    router.push(url);
  };
  React.useEffect(async () => {
    const res = await ZestyAPI.getModels(instanceZUID);
    if (res.status === 200) {
      setcontentModels(res.data);
    } else {
      setcontentModels([]);
    }
  }, [workingInstance]);

  return (
    <Stack
      direction={'row'}
      alignItems="center"
      justifyContent={'space-between'}
      sx={{
        px: 2,
        py: 1,
        alignItems: isMobile ? 'left' : 'center',
        borderTop: isDarkMode ? ' ' : `1px solid ${grey[200]}`,
        bgcolor: '#fff',
        background: isDarkMode ? theme.palette.zesty.zestyDarkBlue : 'white',
      }}
    >
      <Stack pt={1} direction="row" spacing={2}>
        <DocsComboBox
          width={'24.5rem'}
          onChange={onChangeDropdown}
          options={DOCS_DATA_DROPDOWN()}
        />

        {isXl && (
          <Breadcrumbs
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '60%',
            }}
          >
            <Link color="GrayText" underline="hover" href="/docs">
              Docs
            </Link>
            <Typography color="GrayText">
              {currentPath.charAt(0).toUpperCase() +
                currentPath.slice(1) +
                ' API'}
            </Typography>
          </Breadcrumbs>
        )}

        <DocsTabs setvalue={handleTabs} value={currentTab} tabs={tabs} />
      </Stack>

      <Stack direction={'row'} spacing={2}>
        {isXl && (
          <Stack direction={'row'} spacing={1} alignItems="center">
            <Typography color={'black'}>Language:</Typography>{' '}
            <DocsPopover
              value={language}
              setvalue={setlanguage}
              items={[
                { label: 'Javascript', value: 'Javascript' },
                { label: 'Golang', value: 'Golang' },
              ]}
            />
          </Stack>
        )}

        {isLoggedIn && contentModels?.length !== 0 && (
          <AccountsComboBox
            width={200}
            instances={contentModels}
            setCookies={selectContentModel}
            instanceZUID={contentModel}
            placeholder={
              contentModels?.find((e) => e.ZUID === instanceZUID)?.name ||
              'Select Content Model'
            }
          />
        )}
        {isLoggedIn && (
          <AccountsComboBox
            width={240}
            instances={instances.data}
            setCookies={selectInstance}
            instanceZUID={instanceZUID}
            placeholder={
              instances?.data?.find((e) => e.ZUID === instanceZUID)?.name
            }
          />
        )}

        <SearchModal sx={{ width: 200 }}>
          <AlgoSearch />
        </SearchModal>
      </Stack>
    </Stack>
  );
});
