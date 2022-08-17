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
    label: 'application/x-www-form-urlencoded',
    value: 'application/x-www-form-urlencoded',
  },
];

export const accounts = {
  eventActionOptions,
  contentTypeOptions,
  methodOptions,
};
