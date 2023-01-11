import PeopleIcon from '@mui/icons-material/People';
import PsychologyIcon from '@mui/icons-material/Psychology';

import LanguageIcon from '@mui/icons-material/Language';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AppsIcon from '@mui/icons-material/Apps';

import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import SearchIcon from '@mui/icons-material/Search';
import ScienceIcon from '@mui/icons-material/Science';
import PublicIcon from '@mui/icons-material/Public';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BugReportIcon from '@mui/icons-material/BugReport';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import HPlusMobiledataIcon from '@mui/icons-material/HPlusMobiledata';
import MoreIcon from '@mui/icons-material/More';

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const frameworkList = [
  {
    label: 'Parsely/Zesty',
    value: 'parsely',

    icon: (
      <img width={'24px'} src={'https://brand.zesty.io/zesty-io-logo.png'} />
    ),
  },
  {
    label: 'NextJs',
    value: 'nextjs',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/next-js-icon-logo-EE302D5DBD-seeklogo.com.png'
        }
      />
    ),
  },
  {
    label: 'React',
    value: 'react',
    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/React-icon.svg.png'
        }
      />
    ),
  },
  {
    label: 'Vue',
    value: 'vue',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/Vue.js_Logo_2.svg.png'
        }
      />
    ),
  },
  {
    label: 'Angular',
    value: 'angular',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/4373284_angular_logo_logos_icon.png'
        }
      />
    ),
  },
  {
    label: 'Nuxt',
    value: 'nuxt',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/Nuxt-js.png'
        }
      />
    ),
  },
  {
    label: 'PHP/Laravel',
    value: 'php',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/32px-Laravel.svg.png'
        }
      />
    ),
  },
  {
    label: 'HTML/jQuery',
    value: 'html',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/HTML5_logo_and_wordmark.svg.png'
        }
      />
    ),
  },
  {
    label: 'NodeJS',
    value: 'nodejs',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/node%20logo%20green.png'
        }
      />
    ),
  },
  {
    label: 'Hugo',
    value: 'hugo',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/hugo.svg'
        }
      />
    ),
  },
  {
    label: 'Gatsby',
    value: 'gatsby',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/file_type_gatsby_icon_130583.png'
        }
      />
    ),
  },
  {
    label: 'Svelte',
    value: 'svelte',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/Svelte_logo_by_gengns.svg.png'
        }
      />
    ),
  },
  {
    label: 'Remix',
    value: 'remix',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/remix.png'
        }
      />
    ),
  },
  {
    label: 'Astro',
    value: 'astro',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/astro.svg'
        }
      />
    ),
  },
  {
    label: 'Other',
    value: 'other',
    icon: <></>,
  },
];

const componentsSystemList = [
  {
    label: 'Bootstrap',
    value: 'bootstrap',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/Bootstrap_logo.svg.png'
        }
      />
    ),
  },
  {
    label: 'Material UI',
    value: 'material ui',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/mui.png'
        }
      />
    ),
  },
  {
    label: 'Tailwind Css',
    value: 'tailwind',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/Tailwind_CSS_Logo.svg.png'
        }
      />
    ),
  },
  {
    label: 'Bulma',
    value: 'bulma',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/bulma.png'
        }
      />
    ),
  },
  {
    label: 'Ant Design',
    value: 'ant design',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/ant-design-logo-EAB6B3D5D9-seeklogo.com.png'
        }
      />
    ),
  },
  {
    label: 'Foundation',
    value: 'foundation',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/HTML5_logo_and_wordmark.svg.png'
        }
      />
    ),
  },
  {
    label: 'Chakra UI',
    value: 'chakra ui',

    icon: (
      <img
        width={'24px'}
        src={
          'https://storage.googleapis.com/assets.zesty.io/website/images/join-app-logos/chakra-ui_title2-400x400.png'
        }
      />
    ),
  },
  { label: 'Other', value: 'other', icon: <></> },
];

const roleList = [
  {
    label: 'Marketer',
    value: 'Marketer',
    type: 'influencer',
    icon: <PeopleIcon />,
  },
  {
    label: 'Developer',
    value: 'Developer',
    type: 'influencer',
    icon: <PeopleIcon />,
  },
  {
    label: 'Content Creator',
    value: 'Content Creator',
    type: 'influencer',
    icon: <PeopleIcon />,
  },
  {
    label: 'Business Leader',
    value: 'Business Leader',
    type: 'decision-maker',
    icon: <PsychologyIcon />,
  },
  {
    label: 'Development Leader',
    value: 'Development Leader',
    type: 'decision-maker',
    icon: <PsychologyIcon />,
  },
  {
    label: 'Marketing Leader',
    value: 'Marketing Leader',
    type: 'decision-maker',
    icon: <PsychologyIcon />,
  },
  {
    label: 'Project Manager',
    value: 'Project Manager',
    type: 'decision-maker',
    icon: <PsychologyIcon />,
  },
  {
    label: 'Product Manager',
    value: 'Product Manager',
    type: 'decision-maker',
    icon: <PsychologyIcon />,
  },
];

const goalsList = [
  { label: 'Personalization', value: 'personalization', icon: <PersonIcon /> },
  { label: 'SEO', value: 'seo', icon: <SearchIcon /> },
  {
    label: 'Marketing Autonomy',
    value: 'marketing autonomy',
    icon: <LocalGroceryStoreIcon />,
  },
  { label: 'A/B Testing', value: 'a/b testing', icon: <ScienceIcon /> },
  { label: 'Multi-site', value: 'multi-site', icon: <LanguageIcon /> },
  {
    label: 'Multi-lang(globalization)',
    value: 'multi-lang',
    icon: <PublicIcon />,
  },
  {
    label: 'Product Activation',
    value: 'product activation',
    icon: <NotificationsActiveIcon />,
  },
  {
    label: 'Developer Flexibility',
    value: 'developer flexibility',
    icon: <BugReportIcon />,
  },
];
const devProjects = [
  { label: 'App', value: 'App or IoT', icon: <AppsIcon /> },
  {
    label: 'Headless Website',
    value: 'Headless Website',
    icon: <PsychologyAltIcon />,
  },
  {
    label: 'Hybrid Website',
    value: 'Hybrid Website',
    icon: <HPlusMobiledataIcon />,
  },
  {
    label: 'Other Headless Project',
    value: 'other Headless Project',
    icon: <MoreIcon />,
  },
];
const nonDevProjects = [
  { label: 'Website', value: 'Website', icon: <LanguageIcon /> },
  { label: 'Blog', value: 'Blog', icon: <RssFeedIcon /> },
  { label: 'App', value: 'App or IoT', icon: <AppsIcon /> },
];

const userTypeList = [
  { label: 'Personal', value: 'Personal', icon: <PersonIcon /> },
  { label: 'Business', value: 'Business', icon: <LocalGroceryStoreIcon /> },
];

const inviteUserList = [
  { label: 'Yes', value: 'Yes', icon: <CheckIcon /> },
  { label: 'No', value: 'No', icon: <ClearIcon /> },
];
export const joinAppConstants = {
  devProjects,
  nonDevProjects,
  userTypeList,
  frameworkList,
  componentsSystemList,
  roleList,
  goalsList,
  inviteUserList,
};
