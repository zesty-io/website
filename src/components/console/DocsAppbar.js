import {
  Breadcrumbs,
  Button,
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
import React, { useEffect } from 'react';
import { useZestyStore } from 'store';
import { DocsComboBox } from 'views/Docs/DocsComboBox';
import { DocsPopover } from 'views/Docs/DocsPopover';
import { SearchModal } from 'views/Docs/SearchModal';
import { AlgoSearch } from 'views/Docs/AlgoSearch';

const allowedSections = [
  'docs/media',
  'docs/instances',
  'docs/authentication',
  'docs/accounts',
];

const tabs = [
  { label: 'API Reference', value: '/docs/parsley/api-reference/' },
  { label: 'Tour', value: '/docs/parsley/tour/' },
  { label: 'Guides', value: '/docs/parsley/guides/' },
];

export const DocsAppbar = React.memo(() => {
  const router = useRouter();

  // setting of active tabs
  const getInitialTab = () => {
    if (router.asPath.includes(tabs[0].value)) {
      return tabs[0].value;
    } else if (router.asPath.includes(tabs[1].value)) {
      return tabs[1].value;
    } else if (router.asPath.includes(tabs[2].value)) {
      return tabs[2].value;
    } else {
      return '';
    }
  };

  const currentPath = router?.asPath?.split('/')?.filter((e) => e)[1] || '';

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
    selectedDocsCategory,
    setSelectedDocsCategory,
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
    selectedDocsCategory: e.selectedDocsCategory,
    setSelectedDocsCategory: e.setSelectedDocsCategory,
  }));

  const {
    algoliaApiKey: apiKey,
    algoliaAppId: appId,
    algoliaIndex: index,
  } = useZestyStore((e) => e);

  const isLoggedIn = useIsLoggedIn();
  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE') || workingInstance;
  // const [currentTab, setcurrentTab] = React.useState(getInitialTab());
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  const onChangeDropdown = (data) => {
    let category = data.label;
    setCookie('docsCategory', category);
    window.scrollTo(0, 0);
    if (data?.value) {
      window.location.pathname = data.value.parent;
    } else {
      router.push(`/docs` + '/instances/api-reference');
    }
  };

  const docsCategory = getCookie('docsCategory');
  const DOCS_DATA_DROPDOWN = () => {
    const res = [
      { label: 'Getting Started', value: { parent: '/docs/getting-started' } },
      { label: 'Webengine', value: { parent: '/docs/webengine' } },
      { label: 'Instances', value: { parent: '/docs/instances' } },

      {
        label: 'Authentication',
        value: { parent: '/docs/authentication/' },
      },
      { label: 'Accounts', value: { parent: '/docs/accounts/' } },
      { label: 'Parsley', value: { parent: '/docs/parsley/' } },
      { label: 'Media', value: { parent: '/docs/media/' } },
      {
        label: 'Tools & Resources',
        value: { parent: '/docs/tools-and-resources/' },
      },
    ];
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

  const currentURL = router.asPath;

  const isTourTabVisible = currentURL.includes('/docs/parsley');

  React.useEffect(async () => {
    const res = await ZestyAPI.getModels(instanceZUID);
    if (res.status === 200) {
      setcontentModels(res.data);
    } else {
      setcontentModels([]);
    }
  }, [workingInstance]);

  const isDocs = router.asPath.includes('/docs');
  const isApiReference = router.asPath.includes('api-reference');

  const showApiReferenceBtn = allowedSections.some((path) =>
    router.asPath.includes(path),
  );

  const isTour = router.asPath.includes('/tour');
  const isGuides = !isApiReference && !isTour;

  useEffect(() => {
    const routeCategory = router.asPath.split('/').filter((e) => e)[1];
    setSelectedDocsCategory(docsCategory || routeCategory);
  }, [docsCategory, router.asPath]);


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
      <Stack pt={1} direction={isMobile ? 'column' : 'row'} spacing={2}>
        <DocsComboBox
          value={selectedDocsCategory}

          width={isMobile ? 330 : 400}
          onChange={onChangeDropdown}
          options={DOCS_DATA_DROPDOWN()}
        />
        <Stack
          display={'flex'}
          justifyContent={'center'}
          justifyItems={'center'}
          width={1}
        >

          <Breadcrumbs
            sx={{
              width: '60%',
            }}
          >
            <Link color="GrayText" underline="hover" href="/docs">
              Docs
            </Link>
            <Typography color="GrayText">

              {currentPath?.charAt(0).toUpperCase() +
                currentPath?.slice(1).replaceAll('-', ' ')}
            </Typography>
          </Breadcrumbs>
        </Stack>
        <Stack
          direction={'row'}
          bgcolor={'#fff'}
          display={isMobile ? 'none' : 'flex'}
        >

          <Button
            variant="text"
            color="secondary"
            href={`/docs/${selectedDocsCategory}`}
            style={{
              color: isGuides ? '#FF5D0A' : 'GrayText',
              borderBottom: `2px solid ${isGuides ? '#FF5D0A' : 'transparent'}`,
              borderRadius: '0',
            }}
          >
            <Typography whiteSpace={'nowrap'}>Guides</Typography>
          </Button>
          <Button

            data-testid="api-reference-link"

            fullWidth
            variant="text"
            color="secondary"
            href={`/docs/${selectedDocsCategory}/api-reference`}
            style={{

              display: showApiReferenceBtn ? 'block' : 'none',

              color: isApiReference ? '#FF5D0A' : 'GrayText',
              borderBottom: `2px solid ${
                isApiReference ? '#FF5D0A' : 'transparent'
              }`,
              borderRadius: '0',
            }}
          >
            <Typography whiteSpace={'nowrap'}>API Reference</Typography>
          </Button>
          {isTourTabVisible && (
            <Button
              variant="text"
              color="secondary"
              href="/docs/parsley/tour/"
              style={{
                color: isTour ? '#FF5D0A' : 'GrayText',
                borderBottom: `2px solid ${isTour ? '#FF5D0A' : 'transparent'}`,
                borderRadius: '0',
              }}
            >
              <Typography whiteSpace={'nowrap'}>Tour</Typography>
            </Button>
          )}
        </Stack>
      </Stack>
      <Stack direction={'row'} spacing={2}>

        {isApiReference && !isMobile && (

          <Stack direction={'row'} spacing={1} alignItems="center">
            <Typography color={'black'}>Language:</Typography>{' '}
            <DocsPopover
              value={language}
              setvalue={setlanguage}
              items={[
                { label: 'Javascript', value: 'Javascript' },
                // { label: 'Golang', value: 'Golang' },
              ]}
            />
          </Stack>
        )}

        {!isMobile &&
          isApiReference &&
          isLoggedIn &&
          contentModels?.length !== 0 && (
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
        {!isMobile && isApiReference && isLoggedIn && (
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
        {!isMobile && (
          <SearchModal sx={{ width: 200 }}>
            <AlgoSearch />
          </SearchModal>
        )}
      </Stack>
    </Stack>
  );
});
