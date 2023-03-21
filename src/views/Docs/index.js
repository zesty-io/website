import React, { useEffect, useState } from 'react';
import MainWrapper from 'layouts/Main';
import dynamic from 'next/dynamic';
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';
import { grey } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

const FolderTreeView = dynamic(() =>
  import('./FolderTreeView').then((mod) => mod.FolderTreeView),
);

const DocsPages = dynamic(() =>
  import('./DocsPages').then((mod) => mod.DocsPages),
);

const title = 'Docs page';
const description = 'Docs page';
const ogimage = 'Docs page';

const LeftNav = React.memo(({ trigger, newTreeData }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [filteredData, setFilteredData] = useState();
  const filterData = (e) => {
    const searchTerms = e.target.value;
    const filtered = newTreeData.filter((item) => {
      return (
        item.name?.toLowerCase().includes(searchTerms.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerms.toLowerCase())
      );
    });

    setFilteredData(filtered);
  };

  useEffect(() => {
    setFilteredData(newTreeData);
  }, [newTreeData]);

  console.log(trigger);

  return (
    <Stack
      sx={{
        position: 'sticky',
        top: trigger ? '11rem' : '11rem',
        bgcolor: '#fff',
        height: '100%',
        borderRight: isDarkMode ? '' : `1px solid ${grey[200]}`,
        background: isDarkMode ? theme.palette.zesty.zestyDarkBlue : 'white',
        height: '100vh',
        minWidth: 330,
      }}
    >
      <Box
        sx={{
          px: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          onChange={filterData}
          size="small"
          color="secondary"
          placeholder="Search"
          sx={{ my: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <FolderTreeView data={filteredData || newTreeData} />
    </Stack>
  );
});

const DocsView = React.memo(({ data = [] }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: 1920,
        px: 4,
        justifyContent: 'center ',
        background: isDarkMode ? 'theme.palette.zesty.zestyDarkBlue' : 'white',
      }}
    >
      <DocsPages data={data} />
    </Stack>
  );
});

const Main = ({ pageData = [], treeData }) => {
  const router = useRouter();

  const isServices = router.asPath.includes('services');
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 5,
  });

  const newTreeData = isServices ? serviceTree : treeData?.item;

  const pageHeaderProps = {
    title,
    description,
    ogimage,
  };
  const leftNavProps = {
    trigger,
    newTreeData,
  };

  const isHomeDocsRoute =
    router.asPath.split('/').filter((e) => e)?.length === 1 ? true : false;
  // prevent null data when user go to /docs
  React.useEffect(() => {
    if (isHomeDocsRoute) {
      router.replace('/docs/instances/api-reference');
    }
  }, [isHomeDocsRoute]);

  return (
    <MainWrapper customRouting={[]}>
      {/* page header  */}
      <ZestyAccountsHead {...pageHeaderProps} />
      <Stack direction={'row'}>
        {/* left navigation tree */}
        <LeftNav {...leftNavProps} />
        {/* main docs view page  */}
        <DocsView data={pageData} />
      </Stack>
    </MainWrapper>
  );
};

export const Docs = React.memo(Main);

const serviceTree = [
  {
    name: 'introduction',
    url: '/introduction',
    item: [
      {
        name: 'guides',
        url: '/introduction/guides',
        item: [
          {
            name: 'quick-start-guide',
            url: '/introduction/guides/quick-start-guide',
            item: [
              {
                name: 'Create a New Instance',
                url: '/introduction/guides/quick-start-guide/create-a-new-instance',
                objectId: '-Mdxd2CIRxG52zYvs0b1',
                item: [],
              },
              {
                name: 'Instance Settings',
                url: '/introduction/guides/quick-start-guide/instance-settings',
                objectId: '-Me_z4PqOAmWWxo-8FGw',
                item: [],
              },
              {
                name: 'Content Manager',
                url: '/introduction/guides/quick-start-guide/content-manager',
                objectId: '-Me1gbty79f88rXluU5B',
                item: [],
              },
              {
                name: 'Creating a Content Model',
                url: '/introduction/guides/quick-start-guide/creating-a-content-model',
                objectId: '-Me1ZtjwCXY9Lte31djC',
                item: [],
              },
              {
                name: 'Adding Content',
                url: '/introduction/guides/quick-start-guide/adding-content',
                objectId: '-Me1_W_3dHzVZjBOdTq7',
                item: [],
              },
              {
                name: 'Adding Media Items',
                url: '/introduction/guides/quick-start-guide/adding-media-items',
                objectId: '-Me1_gAKUo_XyhF17adC',
                item: [],
              },
              {
                name: 'Content Manager Settings',
                url: '/introduction/guides/quick-start-guide/content-manager-settings',
                objectId: '-Me1aHuk6bvppKXIHDQJ',
                item: [],
              },
              {
                name: 'Coding & Parsley',
                url: '/introduction/guides/quick-start-guide/coding-and-parsley',
                objectId: '-Me1aIgR6N5cfUskU1jE',
                item: [],
              },
              {
                name: 'Publishing',
                url: '/introduction/guides/quick-start-guide/publishing',
                objectId: '-MeQqf2QUsfbj-dlGfwi',
                item: [],
              },
              {
                name: 'troubleshooting',
                url: '/introduction/guides/quick-start-guide/troubleshooting',
                item: [
                  {
                    name: 'Duplicate Path Part',
                    url: '/introduction/guides/quick-start-guide/troubleshooting/duplicate-path-part',
                    objectId: 'RCSCpRuC3njZxBATXQEo',
                    item: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'Zesty APIs',
            url: '/introduction/guides/api-overview',
            objectId: '-M4tgaDi7E62MTyKXL-T',
            item: [],
          },
          {
            name: 'Glossary',
            url: '/introduction/guides/glossary',
            objectId: '-M6b7jS8ose00LFQMnc-',
            item: [],
          },
          {
            name: 'getting-started',
            url: '/introduction/guides/getting-started',
            item: [
              {
                name: 'Cloud Content Instance',
                url: '/introduction/guides/getting-started/cloud-content-instance',
                objectId: '-M6bMOk_jFyqZjvX3895',
                item: [],
              },
              {
                name: 'The Connection Between Schema, Content, and Code',
                url: '/introduction/guides/getting-started/the-connection-between-schema-content-and-code',
                objectId: '-M6b7jRehv3YyKgIcb3A',
                item: [],
              },
              {
                name: 'Environments & Publishing',
                url: '/introduction/guides/getting-started/environments-and-publishing',
                objectId: '-Li-LTC3jR7MVGhBer3J',
                item: [],
              },
              {
                name: 'Roles & Permissions',
                url: '/introduction/guides/getting-started/roles-and-permissions',
                objectId: '-Lmual8dtNiZ6Esd90T0',
                item: [],
              },
              {
                name: 'Locales / Multi-Lang Content',
                url: '/introduction/guides/getting-started/i18n-multi-language',
                objectId: '-M6ekDDCieBYqC0dAYd5',
                item: [],
              },
              {
                name: 'Publishing All Content',
                url: '/introduction/guides/getting-started/publishing-all-content',
                objectId: '-Logszv9JDzzfHJiQ-V-',
                item: [],
              },
              {
                name: 'ZUIDs',
                url: '/introduction/guides/getting-started/zuids',
                objectId: '-MBpTBBCwg24eIsPPIwu',
                item: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'authentication',
    url: '/authentication',
    item: [
      {
        name: 'guides',
        url: '/authentication/guides',
        item: [
          {
            name: 'Auth API',
            url: '/authentication/guides/auth-api',
            objectId: '-LoRo66jIKWikpGh_rLX',
            item: [],
          },
        ],
      },
    ],
  },
  {
    name: 'accounts',
    url: '/accounts',
    item: [
      {
        name: 'ui',
        url: '/accounts/ui',
        item: [
          {
            name: 'Blueprints',
            url: '/accounts/ui/blueprints',
            objectId: '-M5PrXRunxwmWakdZPzX',
            item: [],
          },
          {
            name: 'Instances',
            url: '/accounts/ui/instances',
            objectId: '-M54DDzGhHW0FyP7LdEv',
            item: [],
          },
          {
            name: 'Instance Settings Drawer',
            url: '/accounts/ui/instance-settings-drawer',
            objectId: '-M8TRF46BqSosWKdCYYR',
            item: [],
          },
          {
            name: 'Settings',
            url: '/accounts/ui/settings',
            objectId: '-M6b65bpXY0piyX58TVx',
            item: [],
          },
          {
            name: 'Inviting Users',
            url: '/accounts/ui/inviting-users',
            objectId: 'F5amNU39CbweytEyUd5h',
            item: [],
          },
          {
            name: 'Teams',
            url: '/accounts/ui/teams',
            objectId: '-M5PupnY5eJqQ2U4b_RG',
            item: [],
          },
        ],
      },
      {
        name: 'guides',
        url: '/accounts/guides',
        item: [
          {
            name: 'accounts-api',
            url: '/accounts/guides/accounts-api',
            item: [
              {
                name: 'Webhooks',
                url: '/accounts/guides/accounts-api/webhooks',
                objectId: '-M6fAqqu6nqeXxDr2pt_',
                item: [],
              },
            ],
          },
          {
            name: 'EcoSystems',
            url: '/accounts/guides/ecosystems',
            objectId: '-LM9ojwPn8lAHufDR4Lw',
            item: [],
          },
          {
            name: 'Setting Up Two-factor Authentication',
            url: '/accounts/guides/how-to-set-up-two-factor-authentication',
            objectId: '-LbZ3ezJqDRznDcCVRyU',
            item: [],
          },
          {
            name: 'Refreshing the Cache',
            url: '/accounts/guides/refreshing-the-cache',
            objectId: '-M1lz4ra4oVKeudx4JhU',
            item: [],
          },
        ],
      },
    ],
  },
  {
    name: 'instances',
    url: '/instances',
    item: [
      {
        name: 'guides',
        url: '/instances/guides',
        item: [
          {
            name: 'Instances API',
            url: '/instances/guides/instances-api',
            objectId: '-M6f5BoV09p9p2_wSXp7',
            item: [],
          },
          {
            name: 'how-tos',
            url: '/instances/guides/how-tos',
            item: [
              {
                name: 'Adding a Favicon',
                url: '/instances/guides/how-tos/adding-a-favicon',
                objectId: '-MW_NdeBvQm5nnMLEryu',
                item: [],
              },
              {
                name: 'Analytics',
                url: '/instances/guides/how-tos/analytics',
                objectId: '-LMiUvY_jAtdedVu9J6D',
                item: [],
              },
              {
                name: 'Adding Image Alt Text',
                url: '/instances/guides/how-tos/adding-image-alt-text',
                objectId: '-M8RaFSA3c525W2cySUA',
                item: [],
              },
              {
                name: 'Accepting an Invite to an Instance',
                url: '/instances/guides/how-tos/accepting-an-invite-to-an-instance',
                objectId: '-M7tUyhSE_h6lgnt7WkX',
                item: [],
              },
              {
                name: 'Accessing Basic API JSON Endpoints',
                url: '/instances/guides/how-tos/how-to-access-basic-api-json-endpoints',
                objectId: '-Lb5XEnqb1dyXgfZDxAs',
                item: [],
              },
              {
                name: 'Adding Instances to EcoSystems',
                url: '/instances/guides/how-tos/adding-instances-to-ecosystems',
                objectId: '-M6b7jRhP4CPEF0pCVwL',
                item: [],
              },
              {
                name: 'Bottom Loading JavaScript',
                url: '/instances/guides/how-tos/bottom-loading-javascript',
                objectId: '-M6kf7X6xV9O7PXtt412',
                item: [],
              },
              {
                name: 'Building the Schema and Selecting Fields',
                url: '/instances/guides/how-tos/building-the-schema-and-selecting-fields',
                objectId: '-LwZlNqPwUlYvmD7iqLu',
                item: [],
              },
              {
                name: 'Content Entry, Drafts, and Publishing',
                url: '/instances/guides/how-tos/content-entry-drafts-and-publishing',
                objectId: '-LwpLhVR91eDEl4EpzXd',
                item: [],
              },
              {
                name: 'Controlling and use of og:image',
                url: '/instances/guides/how-tos/how-to-control-and-use-og-image',
                objectId: '-Lb5WVuuDgvYHnLC-_Td',
                item: [],
              },
              {
                name: 'Creating a Customizable JSON Endpoint For Content',
                url: '/instances/guides/how-tos/how-to-create-a-customizable-json-endpoint-for-content',
                objectId: '-Lb5XoqYDg0ELCfMDtI_',
                item: [],
              },
              {
                name: 'Creating a feed',
                url: '/instances/guides/how-tos/creating-a-feed',
                objectId: '-M6qdgGgFCBEO5u1ri-y',
                item: [],
              },
              {
                name: 'Creating a Lead Form',
                url: '/instances/guides/how-tos/how-to-create-a-lead-form',
                objectId: '-LbPSshfcUydTPcPWGBM',
                item: [],
              },
              {
                name: 'Creating and Adding a Team',
                url: '/instances/guides/how-tos/adding-a-team',
                objectId: '-LvvzfRAP8TRG3cVIKI2',
                item: [],
              },
              {
                name: 'Create a Downloadable Image or Zip File',
                url: '/instances/guides/how-tos/create-a-downloadable-image-or-zip-file',
                objectId: 'mpVlBHLJTEU7sqZffOS5',
                item: [],
              },
              {
                name: 'Editor and Coding Basics',
                url: '/instances/guides/how-tos/editor-and-coding-basics',
                objectId: '-M37hmqkleNaaEP9F3FO',
                item: [],
              },
              {
                name: 'How Webpages are Assembled',
                url: '/instances/guides/how-tos/how-webpages-are-assembled',
                objectId: '-LbZ8qdj-LLd4aCgTc0d',
                item: [],
              },
              {
                name: 'How do Instance or Blueprint LESS Variables Work',
                url: '/instances/guides/how-tos/how-do-instance-or-blueprint-less-variables-work',
                objectId: '-Lb95DUdfP67tKSt1pPv',
                item: [],
              },
              {
                name: 'How to Create a one_to_many Relationship',
                url: '/instances/guides/how-tos/how-to-create-a-one_to_many-relationship',
                objectId: '-M6b7jRqKY-R1mPsBRlY',
                item: [],
              },
              {
                name: 'How to Create one_to_one Relationships',
                url: '/instances/guides/how-tos/how-to-create-one_to_one-relationships',
                objectId: '-Lb5ipz9HMAFKzpU2Ya3',
                item: [],
              },
              {
                name: 'Export Content Model to CSV',
                url: '/instances/guides/how-tos/export-content-model-to-csv',
                objectId: '-MAUBzTun3c03GC9E411',
                item: [],
              },
              {
                name: 'How to Create a Search Page',
                url: '/instances/guides/how-tos/how-to-create-a-search-page',
                objectId: '-Lb97iU3_kTGrRp-ZQK1',
                item: [],
              },
              {
                name: 'How to Deal With CORS',
                url: '/instances/guides/how-tos/how-to-deal-with-cors',
                objectId: '-ME9U4ytzhe2BWFPBpfo',
                item: [],
              },
              {
                name: 'How to Filter by Tags',
                url: '/instances/guides/how-tos/how-to-filter-by-tags',
                objectId: '-Lb5hQNXihYTDkQ2O5zt',
                item: [],
              },
              {
                name: 'integrations',
                url: '/instances/guides/how-tos/integrations',
                item: [
                  {
                    name: 'HubSpot CRM Form Integration',
                    url: '/instances/guides/how-tos/integrations/hubspot-crm-form-integration',
                    objectId: '-Lb04Wf1b5tJzt1tf2dC',
                    item: [],
                  },
                  {
                    name: 'Marketo: Custom Integration',
                    url: '/instances/guides/how-tos/integrations/marketo-custom-integration',
                    objectId: '-Lb07Q7MKUUAlleWsaaF',
                    item: [],
                  },
                  {
                    name: 'Marketo Realtime Personalization Integration (RTP Tag)',
                    url: '/instances/guides/how-tos/integrations/marketo-realtime-personalization-integration-rtp-tag',
                    objectId: '-Lb06lC-CAB88sqV1_9Z',
                    item: [],
                  },
                  {
                    name: 'Form Post to PHP with File Captured',
                    url: '/instances/guides/how-tos/integrations/form-post-to-php-with-file-captured',
                    objectId: '-Lb3wi6c5mvLtUuXVO7y',
                    item: [],
                  },
                  {
                    name: 'Stripe Checkout Integration',
                    url: '/instances/guides/how-tos/integrations/stripe-checkout-integration',
                    objectId: '-Lb05svhY7UQXUMrpg_y',
                    item: [],
                  },
                  {
                    name: 'Using ICS to create a Calendar Downloadd',
                    url: '/instances/guides/how-tos/integrations/using-ics-to-create-a-calendar-downloadd',
                    objectId: '-Lb0-e0iTZ9Dqg0sMDHy',
                    item: [],
                  },
                  {
                    name: 'Zesty.io Google Webmasters Integration',
                    url: '/instances/guides/how-tos/integrations/zesty.io-google-webmasters-integration',
                    objectId: '-Lb020ihLj77JCEHr5hn',
                    item: [],
                  },
                ],
              },
              {
                name: 'Forms and Form Webhooks',
                url: '/instances/guides/how-tos/forms-and-form-webhooks',
                objectId: '-LtHERPwHKHgh6TReeUF',
                item: [],
              },
              {
                name: 'How to Implement Simple Pagination',
                url: '/instances/guides/how-tos/how-to-implement-simple-pagination',
                objectId: '-Lb5k4eoYHhgHxV_r5jA',
                item: [],
              },
              {
                name: 'How to Launch an Instance',
                url: '/instances/guides/how-tos/how-to-launch-an-instance',
                objectId: '-M6b7jRxEqHG8-c8iHP6',
                item: [],
              },
              {
                name: 'How to Personalize User Experience by Accessing Geolocation',
                url: '/instances/guides/how-tos/how-to-personalize-user-experience-by-accessing-geolocation',
                objectId: '-LbYzRZNJRF40-e855PY',
                item: [],
              },
              {
                name: 'Personalize User Experience with JavaScript Cookies',
                url: '/instances/guides/how-tos/how-to-personalize-user-experience-with-javascript-cookies',
                objectId: '-LbZ-5D1xT1hDZZQPBus',
                item: [],
              },
              {
                name: 'How to Personalize User Experience with Session Variables',
                url: '/instances/guides/how-tos/how-to-personalize-user-experience-with-session-variables',
                objectId: '-LbZ-eyJ6g3KVRjhVFzG',
                item: [],
              },
              {
                name: 'How to Prevent Bots From Submitting Forms',
                url: '/instances/guides/how-tos/how-to-prevent-bots-from-submitting-your-form',
                objectId: '-Lb5JFTAhQfb1tab4eoG',
                item: [],
              },
              {
                name: 'How to Set Up Internationalization (i18n)',
                url: '/instances/guides/how-tos/how-to-set-up-internationalization-i18n',
                objectId: '-Lb5PqjyOV3_EGHllAaj',
                item: [],
              },
              {
                name: 'How to Use the Safe Email Send To Setting',
                url: '/instances/guides/how-tos/how-to-use-the-safe-email-send-to-setting',
                objectId: '-MVcA4xVUI8uYrt4ap7N',
                item: [],
              },
              {
                name: 'How to Create a Blueprint in Github',
                url: '/instances/guides/how-tos/how-to-create-a-blueprint-in-github',
                objectId: '-Lb94cFgkr72BLhEhEVl',
                item: [],
              },
              {
                name: 'JavaScript Component Libraries',
                url: '/instances/guides/how-tos/javascript-component-libraries',
                objectId: '-M7yMnWKbD2CRLt-LiQF',
                item: [],
              },
              {
                name: 'Building Related Single and Multi-page Content Models',
                url: '/instances/guides/how-tos/building-related-single-and-multi-page-content-models',
                objectId: '-MJmS-NEIWJ4kQ46qPNe',
                item: [],
              },
              {
                name: 'Microsoft Single Sign-On (SSO)',
                url: '/instances/guides/how-tos/microsoft-sso',
                objectId: '-MVcSFcAPTjdehQVRpst',
                item: [],
              },
              {
                name: 'Reordering Child Items in a Parsley Auto-generated Navigation Bar',
                url: '/instances/guides/how-tos/reordering-child-items-in-a-parsley-auto-generated-navigation-bar',
                objectId: '-MAhgSYRBWJGe0yWtqMe',
                item: [],
              },
              {
                name: 'Using Snippets',
                url: '/instances/guides/how-tos/using-snippets',
                objectId: '-MCPFfiA56fkThfhves2',
                item: [],
              },
              {
                name: 'Video Embedding or Streaming Capabilities',
                url: '/instances/guides/how-tos/video-embedding-or-streaming-capabilities',
                objectId: '-M5OF2xcz7i1gIaiu_hW',
                item: [],
              },
              {
                name: 'how-to-implement-cross-instance-content-sharing',
                url: '/instances/guides/how-tos/how-to-implement-cross-instance-content-sharing',
                item: [
                  {
                    name: 'Password Protect Web Engine Preview',
                    url: '/instances/guides/how-tos/how-to-implement-cross-instance-content-sharing/password-protect-web-engine-preview',
                    objectId: '-Ls3JQpaNYTCOPTlndUj',
                    item: [],
                  },
                ],
              },
              {
                name: 'Setting up the x-default hreflang header',
                url: '/instances/guides/how-tos/setting-up-the-x-default-hreflang-header',
                objectId: '-MQoK1wzryLVSZXepKS0',
                item: [],
              },
            ],
          },
        ],
      },
      {
        name: 'ui',
        url: '/instances/ui',
        item: [
          {
            name: 'Home Dashboard',
            url: '/instances/ui/home-dashboard',
            objectId: 'kl4vuovuyZNqSyB3lW2f',
            item: [],
          },
          {
            name: 'content',
            url: '/instances/ui/content',
            item: [
              {
                name: 'Adding and Managing Content',
                url: '/instances/ui/content/adding-and-managing-content',
                objectId: '-Lb43HYLUZ6Yc35jocpC',
                item: [],
              },
              {
                name: 'Assigning Publish and List Status',
                url: '/instances/ui/content/assigning-publish-and-list-status',
                objectId: '-Lb43t3FyC0CQf6MYI70',
                item: [],
              },
              {
                name: 'Canonical Tags',
                url: '/instances/ui/content/canonical-tags',
                objectId: '-Lb4AgHHPzmeoTbIVhGb',
                item: [],
              },
              {
                name: 'Content Version Control',
                url: '/instances/ui/content/content-version-control',
                objectId: '9gY3BR1fKXKrlQpBw9ib',
                item: [],
              },
              {
                name: 'CSV Import',
                url: '/instances/ui/content/csv-import',
                objectId: '-Lb44vg1eWDA0WfmRRY6',
                item: [],
              },
              {
                name: 'Editing Entry Details',
                url: '/instances/ui/content/editing-entry-details',
                objectId: '-Lb43a7g_s3Uu2qPnTLn',
                item: [],
              },
              {
                name: 'Globals',
                url: '/instances/ui/content/globals',
                objectId: '-Lb44c1EF026Q2mHwSQs',
                item: [],
              },
              {
                name: 'Publishing and Scheduling',
                url: '/instances/ui/content/publishing-and-scheduling',
                objectId: '-Lb4zPMf5179rUDs721_',
                item: [],
              },
              {
                name: 'Sitemap Priority',
                url: '/instances/ui/content/sitemap-priority',
                objectId: '-Lb48tiDrM9odeD96l1t',
                item: [],
              },
              {
                name: 'Meta Fields',
                url: '/instances/ui/content/meta-fields',
                objectId: '-Lb48d5x8uAihY2ut9es',
                item: [],
              },
              {
                name: 'Workflow Request',
                url: '/instances/ui/content/workflow-request',
                objectId: '4ACgPF7qKJrAVcPgwszy',
                item: [],
              },
            ],
          },
          {
            name: 'media',
            url: '/instances/ui/media',
            item: [
              {
                name: 'files',
                url: '/instances/ui/media/files',
                item: [
                  {
                    name: 'Upload Files',
                    url: '/instances/ui/media/files/upload-files',
                    objectId: 'fijnxfbWIz8JfjifZQcw',
                    item: [],
                  },
                  {
                    name: 'Preview File',
                    url: '/instances/ui/media/files/preview-file',
                    objectId: 'niR1lzP8cqRJPTuax9Mo',
                    item: [],
                  },
                  {
                    name: '"On-the-Fly" Editor',
                    url: '/instances/ui/media/files/on-the-fly-editor',
                    objectId: '1T5ZZHEgRVy233Kzpnmi',
                    item: [],
                  },
                  {
                    name: 'Get File URL',
                    url: '/instances/ui/media/files/get-file-url',
                    objectId: 'QdrspTNjUoy9pFE7bazv',
                    item: [],
                  },
                  {
                    name: 'Get File ZUID',
                    url: '/instances/ui/media/files/get-file-zuid',
                    objectId: 'xrELxvyjo678afBUOrqz',
                    item: [],
                  },
                  {
                    name: 'Rename File',
                    url: '/instances/ui/media/files/rename-file',
                    objectId: 'pwxe8PPMOZ4yuKFUoK8Q',
                    item: [],
                  },
                  {
                    name: 'Move File',
                    url: '/instances/ui/media/files/move-file',
                    objectId: 'Tza22LdB5ALVr2ekgJr0',
                    item: [],
                  },
                  {
                    name: 'Delete File',
                    url: '/instances/ui/media/files/delete-file',
                    objectId: 'K1r6almgLiwRhF3xOftj',
                    item: [],
                  },
                ],
              },
              {
                name: 'folders',
                url: '/instances/ui/media/folders',
                item: [
                  {
                    name: 'Create Folders',
                    url: '/instances/ui/media/folders/create-folders',
                    objectId: '8OgtT2BhW1pAmDPXr3pC',
                    item: [],
                  },
                  {
                    name: 'Create Sub-Folders',
                    url: '/instances/ui/media/folders/create-sub-folders',
                    objectId: '76SmlaZ2PfuRrW2oIB41',
                    item: [],
                  },
                  {
                    name: 'Find and View Folders',
                    url: '/instances/ui/media/folders/find-and-view-folders',
                    objectId: 'QUULAdiaTioE1nQ0r0zY',
                    item: [],
                  },
                  {
                    name: 'Rename Folders',
                    url: '/instances/ui/media/folders/rename-folders',
                    objectId: 'GcRMBkvamNaGvPkygVOn',
                    item: [],
                  },
                  {
                    name: 'Hide Folders',
                    url: '/instances/ui/media/folders/hide-folders',
                    objectId: 'lDqfRCv2whn85pNvPoBK',
                    item: [],
                  },
                ],
              },
              {
                name: 'Search Files & Folders',
                url: '/instances/ui/media/search-files-and-folders',
                objectId: 'ai306sBEBwWTbJH58kcN',
                item: [],
              },
            ],
          },
          {
            name: 'editor',
            url: '/instances/ui/editor',
            item: [
              {
                name: 'Versions',
                url: '/instances/ui/editor/versions',
                objectId: '-M6qOFp0UIFo-1cgrkXw',
                item: [],
              },
              {
                name: 'Environments',
                url: '/instances/ui/editor/environments',
                objectId: '-M6qOFp19qTCbPlCz8qV',
                item: [],
              },
              {
                name: 'Saving',
                url: '/instances/ui/editor/saving',
                objectId: '-M6qZdH4zedboY48JYZc',
                item: [],
              },
              {
                name: 'Publishing',
                url: '/instances/ui/editor/publishing',
                objectId: '-M6qZdH5Wi8WkF8Db-5l',
                item: [],
              },
              {
                name: 'Javascript',
                url: '/instances/ui/editor/javascript',
                objectId: '-Lb4PGZ7_EbsW_iOd0Jb',
                item: [],
              },
              {
                name: 'Style Sheets',
                url: '/instances/ui/editor/stylesheets',
                objectId: '-Lb4OqKMXs7yTMcNgyhf',
                item: [],
              },
              {
                name: 'Outputting Content',
                url: '/instances/ui/editor/outputting-content',
                objectId: '-Lb4ICvlL57LdVPC8JyS',
                item: [],
              },
              {
                name: 'String Modifiers',
                url: '/instances/ui/editor/string-modifiers',
                objectId: '-LbZ5p1M9Gm6njiy7AKs',
                item: [],
              },
              {
                name: 'Custom File Types / Endpoints',
                url: '/instances/ui/editor/custom-file-types-endpoints',
                objectId: '-MBpPa2Q3-r5DOOpYvfO',
                item: [],
              },
              {
                name: 'Importing Code and Styles',
                url: '/instances/ui/editor/importing-code-and-styles',
                objectId: '-LbZ0hHWY-n4rLol2JnL',
                item: [],
              },
            ],
          },
          {
            name: 'Leads',
            url: '/instances/ui/leads',
            objectId: '-LbZ7uVTM3TnfQAeHJrb',
            item: [],
          },
          {
            name: 'Analytics',
            url: '/instances/ui/analytics',
            objectId: '-M_b5JcUMpGKE4G-xZq3',
            item: [],
          },
          {
            name: 'schema',
            url: '/instances/ui/schema',
            item: [
              {
                name: 'Building a Content Structure',
                url: '/instances/ui/schema/building-a-content-structure',
                objectId: '-Lb5-eXvpdVFhPf7Ukbs',
                item: [],
              },
              {
                name: 'Content Models',
                url: '/instances/ui/schema/content-models',
                objectId: '-Lb4YXpv1FWeDnG7hx8-',
                item: [],
              },
              {
                name: 'Adding Fields',
                url: '/instances/ui/schema/adding-fields',
                objectId: '-Lb4VVv8YSFDgmWeaicG',
                item: [],
              },
              {
                name: 'Fields',
                url: '/instances/ui/schema/fields',
                objectId: '-Lb4WreEE71clxVS6T1A',
                item: [],
              },
            ],
          },
          {
            name: 'health',
            url: '/instances/ui/health',
            item: [
              {
                name: 'Redirects',
                url: '/instances/ui/health/redirects',
                objectId: '-Lb55NTupSQS06nqMcPt',
                item: [],
              },
            ],
          },
          {
            name: 'audit-trail',
            url: '/instances/ui/audit-trail',
            item: [
              {
                name: 'View Activity of a Resource',
                url: '/instances/ui/audit-trail/view-activity-of-a-resource',
                objectId: 'YGhm32YctjJOYhyYXfbc',
                item: [],
              },
              {
                name: 'View Activity of a User',
                url: '/instances/ui/audit-trail/view-activity-of-a-user',
                objectId: 'RJwwC5qccAxQq22MilKx',
                item: [],
              },
              {
                name: 'Download Audit Trail Report',
                url: '/instances/ui/audit-trail/download-audit-trail-report',
                objectId: 'JtWBeW4Xp0jB3qvPEMLK',
                item: [],
              },
              {
                name: 'View Instance Activity Insights',
                url: '/instances/ui/audit-trail/view-instance-activity-insights',
                objectId: 'YNJZxOBEIOmRDgZlv9uZ',
                item: [],
              },
              {
                name: 'View Instance Timeline',
                url: '/instances/ui/audit-trail/view-instance-timeline',
                objectId: 'OdV1DNR9pWojK0E6XDI5',
                item: [],
              },
            ],
          },
          {
            name: 'Tabs',
            url: '/instances/ui/tabs',
            objectId: 'dIGPG5BGxT7IzC0JjH5s',
            item: [],
          },
          {
            name: 'AI Content Assistant',
            url: '/instances/ui/ai-content-assistant',
            objectId: 'oTi47G1gCrIrwzJZcge9',
            item: [],
          },
          {
            name: 'settings',
            url: '/instances/ui/settings',
            item: [
              {
                name: 'Instance Settings',
                url: '/instances/ui/settings/instance-settings',
                objectId: '-LzJl2jib292AGru-jpY',
                item: [],
              },
              {
                name: 'Instance Meta Tags',
                url: '/instances/ui/settings/instance-meta-tags',
                objectId: '-M74xS3xPH2cUmSD_4jb',
                item: [],
              },
              {
                name: 'Instance Styles',
                url: '/instances/ui/settings/less-variables',
                objectId: '-M6b3WW0O3pSMXEmd6Ox',
                item: [],
              },
              {
                name: 'Instance Fonts',
                url: '/instances/ui/settings/fonts',
                objectId: '-M0UHtzKYABynNFcSeKS',
                item: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'media',
    url: '/media',
    item: [
      {
        name: 'guides',
        url: '/media/guides',
        item: [
          {
            name: 'media-storage-micro-dam',
            url: '/media/guides/media-storage-micro-dam',
            item: [
              {
                name: 'On-The-Fly Media Optimization and Dynamic Image Manipulation',
                url: '/media/guides/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation',
                objectId: '-McFoxnX33G3qdwHBwJI',
                item: [],
              },
              {
                name: 'Custom DAM Media Domains',
                url: '/media/guides/media-storage-micro-dam/micro-dam-domains',
                objectId: '-MXVTECpy5wVhvoF3OVz',
                item: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'webengine',
    url: '/webengine',
    item: [
      {
        name: 'guides',
        url: '/webengine/guides',
        item: [
          {
            name: 'web-engine',
            url: '/webengine/guides/web-engine',
            item: [
              {
                name: 'Modes',
                url: '/webengine/guides/web-engine/modes',
                objectId: '-MdJY3N2mwKgAqcY9NrX',
                item: [],
              },
              {
                name: 'Environment States & Caching Behaviors',
                url: '/webengine/guides/web-engine/environment-states-and-caching-behaviors',
                objectId: '-McQnvkMgFNe--aZjrRh',
                item: [],
              },
              {
                name: 'Resource Resolution',
                url: '/webengine/guides/web-engine/resource-resolution-order',
                objectId: '-MBwHtrUYQBItT9MCi_F',
                item: [],
              },
              {
                name: 'View Templating',
                url: '/webengine/guides/web-engine/view-templating',
                objectId: '-LLIzCf2gsSS5HWk1GkZ',
                item: [],
              },
              {
                name: 'introduction-to-parsley',
                url: '/webengine/guides/web-engine/introduction-to-parsley',
                item: [
                  {
                    name: 'Parsley Index',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/parsley-index',
                    objectId: '-Lav2Zva91iAW-Hq5b8j',
                    item: [],
                  },
                  {
                    name: 'Parsley AutoLayout',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/parsley-autolayout',
                    objectId: '-MXn0WGE7k9Q1arEp6Za',
                    item: [],
                  },
                  {
                    name: 'Accessing Multi-language in Ajax files',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/accessing-multi-language-in-ajax-files',
                    objectId: '-Lb5NMFzMm4dYPguMG9Z',
                    item: [],
                  },
                  {
                    name: 'Accessing Multi-language in Parsley',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/accessing-multi-language-in-parsley',
                    objectId: '-Lb5PDsFibL5HEBWopEa',
                    item: [],
                  },
                  {
                    name: 'Autogenerated Fields',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/autogenerated-fields',
                    objectId: '-Lb4S9b6mAvqZSCaueh8',
                    item: [],
                  },
                  {
                    name: 'Common Parsley Errors',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/common-parsley-errors',
                    objectId: '-LrKFwG44SSWs5D62HlQ',
                    item: [],
                  },
                  {
                    name: 'Each Loop',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/each-loop-deep-dive',
                    objectId: '-Lar8tU4FrJg9B_Bgr8I',
                    item: [],
                  },
                  {
                    name: 'If Conditionals',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/if-conditionals',
                    objectId: '-Lb4Sr_emxzTU5oJek3c',
                    item: [],
                  },
                  {
                    name: 'Image Modifiers',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/image-modifiers',
                    objectId: '-LbZ5SRmmz6l6apHfjoS',
                    item: [],
                  },
                  {
                    name: 'Include Syntax',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/include',
                    objectId: '-LbZ6CkXe4K0j_nbp7eh',
                    item: [],
                  },
                  {
                    name: 'Access a Content Item (this)',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/parsley-page-call',
                    objectId: '-Lave3Q__kcAGqQtTYN2',
                    item: [],
                  },
                  {
                    name: 'Instance Functions',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/parsley-instance-functions',
                    objectId: '-M9P8ROp4CgA8uhwT12t',
                    item: [],
                  },
                  {
                    name: 'Variables',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/variables',
                    objectId: '-Lb4Rs8esd-di9SnNdkG',
                    item: [],
                  },
                  {
                    name: 'Remote Integrations',
                    url: '/webengine/guides/web-engine/introduction-to-parsley/remote-integrations',
                    objectId: '-MBIIh3d5nrGhNci1Hc3',
                    item: [],
                  },
                ],
              },
              {
                name: 'CSS & JS Processing Flow',
                url: '/webengine/guides/web-engine/css-processing-flow',
                objectId: '-L_8WplWNdWsJV5ginZK',
                item: [],
              },
              {
                name: 'meta-tags',
                url: '/webengine/guides/web-engine/meta-tags',
                item: [
                  {
                    name: 'Custom Head Overwrite',
                    url: '/webengine/guides/web-engine/meta-tags/custom-head-overwrite',
                    objectId: '-LzJwj_eo5klGPgFYlJh',
                    item: [],
                  },
                  {
                    name: 'Custom Head Tags',
                    url: '/webengine/guides/web-engine/meta-tags/custom-head-tags',
                    objectId: '-Lexp_wlFCKmA3zXKWox',
                    item: [],
                  },
                  {
                    name: 'Open Graph and Twitter Card Meta Tags',
                    url: '/webengine/guides/web-engine/meta-tags/open-graph-twitter-card-meta-tags',
                    objectId: '-LLJ2ESxZqnk5izHQXJ7',
                    item: [],
                  },
                ],
              },
              {
                name: '30X Redirects',
                url: '/webengine/guides/web-engine/30x-redirects',
                objectId: '-LMdkh8bFw28T8ttZkWP',
                item: [],
              },
              {
                name: 'Security',
                url: '/webengine/guides/web-engine/security',
                objectId: '-MQDMxJ9dpferFQdKO2S',
                item: [],
              },
              {
                name: 'Caching',
                url: '/webengine/guides/web-engine/caching',
                objectId: 'LEnNWrbgnaBq96e1Suth',
                item: [],
              },
              {
                name: 'Hybrid CDN Setup',
                url: '/webengine/guides/web-engine/hybrid-cdn-setup',
                objectId: '-MBp7GLDbpT_FrQvR1_K',
                item: [],
              },
              {
                name: 'Zesty URLs & Their Functionality',
                url: '/webengine/guides/web-engine/zesty-urls-and-their-functionality',
                objectId: 'fMHbjYnYNmZzsv3CHa5G',
                item: [],
              },
              {
                name: 'File Proxy',
                url: '/webengine/guides/web-engine/file-proxy',
                objectId: '-MS54wuvhJGx7UiF8Xah',
                item: [],
              },
            ],
          },
          {
            name: 'json-endpoints',
            url: '/webengine/guides/json-endpoints',
            item: [
              {
                name: 'Headless & Hybrid toJSON',
                url: '/webengine/guides/json-endpoints/headless-and-hybrid-tojson',
                objectId: 'X62qTl3UPqNAP0ygaxWz',
                item: [],
              },
              {
                name: 'Instant API (Read Only)',
                url: '/webengine/guides/json-endpoints/instant-content-api',
                objectId: '-LKwhvisgQvgTNV-vsdj',
                item: [],
              },
              {
                name: 'Parsley toJSON()',
                url: '/webengine/guides/json-endpoints/parsley-tojson',
                objectId: 'LkYynT981KS49flHfKNS',
                item: [],
              },
              {
                name: 'Creating a Customizable JSON Endpoint For Content',
                url: '/webengine/guides/json-endpoints/how-to-create-a-customizable-json-endpoint-for-content',
                objectId: 'jLOSOAnJTUIDXUaCt9P6',
                item: [],
              },
            ],
          },
          {
            name: 'Instant API (Read Only)',
            url: '/webengine/guides/instant-content-api',
            objectId: 'EuxuJRVPwQMVWxfnJkKz',
            item: [],
          },
          {
            name: 'GraphQL',
            url: '/webengine/guides/graphql',
            objectId: '-MQryVMXEc5ztVMHFzG3',
            item: [],
          },
        ],
      },
    ],
  },
  {
    name: 'tools',
    url: '/tools',
    item: [
      {
        name: 'guides',
        url: '/tools/guides',
        item: [
          {
            name: 'layouts-app',
            url: '/tools/guides/layouts-app',
            item: [
              {
                name: 'Creating Custom Components with Parsley',
                url: '/tools/guides/layouts-app/creating-custom-components-with-parsley',
                objectId: 'nU1NiBZAVmkSrYHdLYk4',
                item: [],
              },
              {
                name: 'Creating Custom Components with NextJS',
                url: '/tools/guides/layouts-app/creating-custom-components-with-nextjs',
                objectId: '9iswzFugv1NLwd16TyA5',
                item: [],
              },
            ],
          },
          {
            name: 'nextjs',
            url: '/tools/guides/nextjs',
            item: [
              {
                name: 'Zesty Content Object',
                url: '/tools/guides/nextjs/zesty-content-object',
                objectId: '5aS6tjGaX6IBHcwvfL87',
                item: [],
              },
              {
                name: 'Manager Redirects in Next.js',
                url: '/tools/guides/nextjs/manager-redirects-in-next.js',
                objectId: '71lsSPar9a8EyW92U1XD',
                item: [],
              },
              {
                name: 'Custom Integrations',
                url: '/tools/guides/nextjs/custom-integrations',
                objectId: 'AhEOJKBnWw6s7VLdhj9w',
                item: [],
              },
              {
                name: 'Next.js & Cookies',
                url: '/tools/guides/nextjs/next.js-and-cookies',
                objectId: 'AzERav1z7JMUfM1l4I9l',
                item: [],
              },
              {
                name: 'Pagination and Search Example with Custom Endpoint and Next.js',
                url: '/tools/guides/nextjs/pagination-and-search-example-with-custom-endpoint-and-next.js',
                objectId: 'ZHz0FCfcZatywIcLpB3h',
                item: [],
              },
              {
                name: 'SSR: Server Side Rendering',
                url: '/tools/guides/nextjs/ssr-server-side-rendering',
                objectId: 'a4B7yz2kUSXJdkuSqLfk',
                item: [],
              },
              {
                name: 'SSG: Static Site Generation',
                url: '/tools/guides/nextjs/ssg-static-site-generation',
                objectId: 'f4qPY46KBnTEUHd6IPWi',
                item: [],
              },
            ],
          },
          {
            name: 'Atom IDE Package',
            url: '/tools/guides/atom-package',
            objectId: '-M4z5Dhot7Oy-b-RmNmR',
            item: [],
          },
          {
            name: 'Chrome Browser Extension',
            url: '/tools/guides/chrome-extension',
            objectId: '-M6qdgJ2MZEO2_vA4Gqw',
            item: [],
          },
          {
            name: 'code-examples',
            url: '/tools/guides/code-examples',
            item: [
              {
                name: 'react',
                url: '/tools/guides/code-examples/react',
                item: [
                  {
                    name: 'Guide (Local React App)',
                    url: '/tools/guides/code-examples/react/guide-local-react-app',
                    objectId: '-LLITDMaSib7ZF8GglBH',
                    item: [],
                  },
                  {
                    name: 'Guide (Remote React App)',
                    url: '/tools/guides/code-examples/react/guide-remote-react-app',
                    objectId: '-LLITDMb4thz6f1ir_1y',
                    item: [],
                  },
                ],
              },
              {
                name: 'swift',
                url: '/tools/guides/code-examples/swift',
                item: [
                  {
                    name: 'iOS App Guide',
                    url: '/tools/guides/code-examples/swift/ios-app-guide',
                    objectId: '-LLITDMd_kWKOXcnaoAm',
                    item: [],
                  },
                ],
              },
              {
                name: 'React Ruby Build Guide',
                url: '/tools/guides/code-examples/ruby-build-guide',
                objectId: '-LLITDMfmkIWjxZs-_ap',
                item: [],
              },
              {
                name: 'Jekyll Static Site',
                url: '/tools/guides/code-examples/guide',
                objectId: '-LKbswANp9W0i7_NtW3Z',
                item: [],
              },
              {
                name: 'Hugo Static Site',
                url: '/tools/guides/code-examples/guide-1',
                objectId: '-LKbswALMzw51MGM_11R',
                item: [],
              },
            ],
          },
          {
            name: 'Salesforce Commerce Cloud',
            url: '/tools/guides/salesforce-commerce-cloud',
            objectId: '-LMIvwnSnOXlumI0TV3_',
            item: [],
          },
          {
            name: 'node-sdk',
            url: '/tools/guides/node-sdk',
            item: [
              {
                name: 'Instantiation',
                url: '/tools/guides/node-sdk/instantiation',
                objectId: '-M4yxJe4sDfZ-HQoJvVd',
                item: [],
              },
              {
                name: 'instance',
                url: '/tools/guides/node-sdk/instance',
                item: [
                  {
                    name: 'Content',
                    url: '/tools/guides/node-sdk/instance/instance-content',
                    objectId: '-M4z7QDKfpEFSZo-1rlm',
                    item: [],
                  },
                  {
                    name: 'Model & Fields',
                    url: '/tools/guides/node-sdk/instance/instance-model',
                    objectId: '-M4z7QDLd58LAMCSwYp9',
                    item: [],
                  },
                  {
                    name: 'Stylesheet',
                    url: '/tools/guides/node-sdk/instance/instance-stylesheet',
                    objectId: '-M4z7QDM2gTUkMaP-zOo',
                    item: [],
                  },
                  {
                    name: 'Views',
                    url: '/tools/guides/node-sdk/instance/instance-view',
                    objectId: '-M4z7QDNHWY-ty_TcKzw',
                    item: [],
                  },
                  {
                    name: 'Audit Trail',
                    url: '/tools/guides/node-sdk/instance/instance-audit-trail',
                    objectId: '-M4z7QDOqjDokt8_VbJb',
                    item: [],
                  },
                  {
                    name: 'Head Tags',
                    url: '/tools/guides/node-sdk/instance/instance-head-tags',
                    objectId: '-M4z7QDP9Fz24Dqfj6-W',
                    item: [],
                  },
                ],
              },
              {
                name: 'media',
                url: '/tools/guides/node-sdk/media',
                item: [
                  {
                    name: 'Files',
                    url: '/tools/guides/node-sdk/media/media-file',
                    objectId: '-M4z7QDRICWgNm1x0i5u',
                    item: [],
                  },
                  {
                    name: 'Groups',
                    url: '/tools/guides/node-sdk/media/media-group',
                    objectId: '-M4z7QDSusis76Mw-ZEC',
                    item: [],
                  },
                ],
              },
              {
                name: 'Accounts',
                url: '/tools/guides/node-sdk/account',
                objectId: '-M4yxJe7eJzgbNrGMteS',
                item: [],
              },
              {
                name: 'Auth',
                url: '/tools/guides/node-sdk/auth',
                objectId: '-M4yxJe8NyT9kvbJfazZ',
                item: [],
              },
            ],
          },
          {
            name: 'Setting up Google Analytics for GDPR',
            url: '/tools/guides/setting-up-google-analytics-for-gdpr',
            objectId: '-LbczW3hl6W4UQVMTCGh',
            item: [],
          },
        ],
      },
    ],
  },
];
