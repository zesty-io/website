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
    logo: <MsIconSvg />,
  },
  google: {
    logo: <GoogleIconSvg />,
  },

  github: {
    logo: <GithubIconSvg />,
  },
};

function GithubIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_44_1823)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.7999 1.0001C8.99844 0.997972 6.2878 1.99336 4.15351 3.80795C2.01923 5.62254 0.600754 8.13775 0.152205 10.903C-0.296344 13.6683 0.254339 16.5029 1.7056 18.8991C3.15687 21.2953 5.41388 23.0965 8.07233 23.98C8.66268 24.0873 8.87735 23.723 8.87735 23.4108C8.87735 23.1311 8.8676 22.3895 8.86109 21.4055C5.58243 22.1179 4.88962 19.8247 4.88962 19.8247C4.35293 18.4619 3.58043 18.1009 3.58043 18.1009C2.51031 17.369 3.66175 17.3836 3.66175 17.3836C4.84571 17.4666 5.46696 18.5985 5.46696 18.5985C6.51919 20.4005 8.22683 19.88 8.8985 19.5775C9.00583 18.8164 9.31158 18.296 9.6466 18.0016C7.02823 17.704 4.2765 16.6925 4.2765 12.1745C4.25947 11.0031 4.69458 9.87021 5.49136 9.01135C5.36938 8.71211 4.96443 7.51513 5.6052 5.88881C5.6052 5.88881 6.59725 5.57331 8.84808 7.0988C9.81024 6.83715 10.8027 6.70372 11.7999 6.70197C12.7969 6.70385 13.7894 6.83728 14.7516 7.0988C17.0024 5.57331 17.9913 5.89044 17.9913 5.89044C18.6353 7.51351 18.2303 8.71211 18.1083 9.01135C18.8646 9.83589 19.32 10.8865 19.32 12.1745C19.32 16.7038 16.5633 17.7008 13.9368 17.9919C14.3597 18.3562 14.737 19.0766 14.737 20.176C14.737 21.7536 14.7223 23.0237 14.7223 23.4108C14.7223 23.7263 14.9354 24.0938 15.5339 23.9784C18.1918 23.0938 20.4479 21.2917 21.8981 18.8951C23.3484 16.4985 23.898 13.6638 23.4485 10.8989C22.9989 8.13393 21.5797 5.61934 19.445 3.80553C17.3102 1.99173 14.6011 0.9972 11.7999 1.0001Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_44_1823">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function MsIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_44_1236)">
        <path d="M11.4062 11.4062H0V0H11.4062V11.4062Z" fill="#F1511B" />
        <path d="M24 11.4062H12.5939V0H24V11.4062Z" fill="#80CC28" />
        <path d="M11.4059 24.0002H0V12.594H11.4059V24.0002Z" fill="#00ADEF" />
        <path d="M24 24.0002H12.5939V12.594H24V24.0002Z" fill="#FBBC09" />
      </g>
      <defs>
        <clipPath id="clip0_44_1236">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GoogleIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_44_1227)">
        <path
          d="M23.9886 12.2245C23.9886 11.2413 23.9069 10.5237 23.7302 9.77963H12.2391V14.2176H18.9841C18.8482 15.3205 18.1138 16.9815 16.4819 18.0976L16.459 18.2461L20.0923 20.9963L20.344 21.0209C22.6558 18.9347 23.9886 15.8653 23.9886 12.2245Z"
          fill="#4285F4"
        />
        <path
          d="M12.2391 23.9176C15.5436 23.9176 18.3177 22.8545 20.344 21.0209L16.4819 18.0976C15.4484 18.8018 14.0613 19.2934 12.2391 19.2934C9.00253 19.2934 6.25556 17.2074 5.27634 14.324L5.13281 14.3359L1.35488 17.1927L1.30547 17.3269C3.31809 21.2334 7.45219 23.9176 12.2391 23.9176Z"
          fill="#34A853"
        />
        <path
          d="M5.27634 14.324C5.01797 13.5799 4.86844 12.7826 4.86844 11.9588C4.86844 11.1349 5.01797 10.3377 5.26275 9.59359L5.25591 9.43511L1.43062 6.53239L1.30547 6.59056C0.475969 8.21166 0 10.0321 0 11.9588C0 13.8855 0.475969 15.7058 1.30547 17.3269L5.27634 14.324Z"
          fill="#FBBC05"
        />
        <path
          d="M12.2391 4.62403C14.5373 4.62403 16.0875 5.59402 16.9715 6.40461L20.4256 3.10928C18.3042 1.1826 15.5436 0 12.2391 0C7.45219 0 3.31809 2.68406 1.30547 6.59056L5.26275 9.59359C6.25556 6.7102 9.00253 4.62403 12.2391 4.62403Z"
          fill="#EB4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_44_1227">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export const accounts = {
  eventActionOptions,
  contentTypeOptions,
  methodOptions,
  resourceOptions,
  developerDocs,
  leftNav,
  sso,
  GithubIconSvg,
  GoogleIconSvg,
  MsIconSvg,
};
