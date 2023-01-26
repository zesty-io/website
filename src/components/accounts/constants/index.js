const eventActionOptions = [
  {
    id: 1,
    label: 'Create',
    value: 1,
  },
  {
    id: 2,
    label: 'Update',
    value: 2,
  },
  {
    id: 3,
    label: 'Delete',
    value: 3,
  },
  {
    id: 4,
    label: 'Publish',
    value: 4,
  },
  {
    id: 5,
    label: 'Unpublish',
    value: 5,
  },
  {
    id: 6,
    label: 'UndoDelete',
    value: 6,
  },
];
const methodOptions = [
  {
    id: 1,
    label: 'GET',
    value: 'GET',
  },
  {
    id: 2,
    label: 'POST',
    value: 'POST',
  },
];

const contentTypeOptions = [
  {
    id: 1,
    label: 'application/json',
    value: 'application/json',
  },
  {
    id: 2,
    label: 'application/x-www-form-url-encoded',
    value: 'application/x-www-form-url-encoded',
  },
];
const resourceOptions = [
  { label: 'Content Items', value: 'items' },
  { label: 'Content Models', value: 'models' },
  { label: 'Content Fields', value: 'fields' },
  { label: 'Content Settings', value: 'settings' },
  { label: 'Stylesheets', value: 'stylesheets' },
  { label: 'Views and custom files', value: 'views' },
  { label: '301 Redirects', value: 'redirects' },
  { label: 'Domain Changes', value: 'domains' },
  { label: 'User Invites', value: 'invites' },
  { label: 'Users Role Changes', value: 'roles' },
  // { label: 'Specific Content Model', value: 'roles' },
  // { label: 'Specific Content Item', value: 'roles' },
];

const developerDocs = [
  { title: 'Guides and Docs', url: 'https://zesty.org/' },
  { title: 'Node SDK', url: 'https://github.com/zesty-io/node-sdk' },
  { title: 'Instance API', url: 'https://instances-api.zesty.org/' },
  { title: 'Accounts API', url: 'https://accounts-api.zesty.org/' },
  { title: 'Auth API', url: 'https://auth-api.zesty.org/' },
  { title: 'Media API', url: 'https://media-api.zesty.org/' },
  { title: 'Fetch Wrapper', url: 'https://github.com/zesty-io/fetch-wrapper' },
  { title: 'Status', url: 'https://status.zesty.io/' },
  { title: 'Parsley', url: 'https://github.com/zesty-io/parsley' },
];
const leftNav = [
  { title: 'Dashboard', url: '/' },
  { title: 'Instance', url: '/instances/' },
  { title: 'Teams', url: '/teams/' },
  { title: 'Marketplace', url: '/marketplace/' },
];

const sso = {
  microsoft: {
    logo: 'https://storage.googleapis.com/assets.zesty.io/website/images/marketing/images/microsoft/microsoft_logo.svg',
  },
  google: {
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=',
  },

  github: {
    logo: 'https://storage.googleapis.com/assets.zesty.io/website/images/GitHub-Mark-Light-32px.png',
  },
};

export const accounts = {
  eventActionOptions,
  contentTypeOptions,
  methodOptions,
  resourceOptions,
  developerDocs,
  leftNav,
  sso,
};
