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
export const accounts = {
  eventActionOptions,
  contentTypeOptions,
  methodOptions,
  resourceOptions,
};
