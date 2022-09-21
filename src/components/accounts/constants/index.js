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
export const accounts = {
  eventActionOptions,
  contentTypeOptions,
  methodOptions,
  resourceOptions,
  developerDocs,
  leftNav,
};
