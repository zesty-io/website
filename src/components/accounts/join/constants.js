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

import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';

const frameworkList = [
  { label: 'Parsely/Zesty', value: 'parsely', icon: <JavascriptIcon /> },
  { label: 'NextJs', value: 'nextjs', icon: <JavascriptIcon /> },
  { label: 'React', value: 'react', icon: <JavascriptIcon /> },
  { label: 'Vue', value: 'vue', icon: <JavascriptIcon /> },
  { label: 'Nuxt', value: 'nuxt', icon: <JavascriptIcon /> },
  { label: 'PHP/Laravel', value: 'php', icon: <JavascriptIcon /> },
  { label: 'HTML/jQuery', value: 'html', icon: <JavascriptIcon /> },
  { label: 'NodeJS', value: 'nodejs', icon: <JavascriptIcon /> },
  { label: 'Hugo', value: 'hugo', icon: <JavascriptIcon /> },
  { label: 'Gatsby', value: 'gatsby', icon: <JavascriptIcon /> },
  { label: 'Svelte', value: 'svelte', icon: <JavascriptIcon /> },
  { label: 'Remix', value: 'remix', icon: <JavascriptIcon /> },
  { label: 'Astro', value: 'astro', icon: <JavascriptIcon /> },
  { label: 'Other', value: 'other', icon: <>j</> },
];

const componentsSystemList = [
  { label: 'Bootstrap', value: 'bootstrap', icon: <CssIcon /> },
  { label: 'Material UI', value: 'material ui', icon: <CssIcon /> },
  { label: 'Tailwind', value: 'tailwind', icon: <CssIcon /> },
  { label: 'Bulma', value: 'bulma', icon: <CssIcon /> },
  { label: 'Foundation', value: 'foundation', icon: <CssIcon /> },
  { label: 'Chakra UI', value: 'chakra ui', icon: <CssIcon /> },
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
export const joinAppConstants = {
  devProjects,
  nonDevProjects,
  userTypeList,
  frameworkList,
  componentsSystemList,
  roleList,
  goalsList,
};
