import TranslateIcon from '@mui/icons-material/Translate';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import LanguageIcon from '@mui/icons-material/Language';
import ApiIcon from '@mui/icons-material/Api';
import WebhookIcon from '@mui/icons-material/Webhook';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import SettingsIcon from '@mui/icons-material/Settings';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export const instanceTabs = [
  {
    icon: <AutoGraphIcon fontSize="medium" />,
    filename: '',
    label: 'Overview',
    sort: 0,
  },
  {
    icon: <PeopleIcon fontSize="medium" />,
    filename: 'users',
    label: 'Users',
    sort: 1,
  },
  {
    icon: <GroupsIcon fontSize="medium" />,
    filename: 'teams',
    label: 'Teams',
    sort: 2,
  },
  {
    icon: <LanguageIcon fontSize="medium" />,
    filename: 'domains',
    label: 'Domains',
    sort: 3,
  },
  {
    icon: <LeaderboardIcon fontSize="medium" />,
    filename: 'usage',
    label: 'Usage',
    sort: 4,
  },
  {
    icon: <TranslateIcon fontSize="medium" />,
    filename: 'locales',
    label: 'Locales',
    sort: 5,
  },
  {
    icon: <ApiIcon fontSize="medium" />,
    filename: 'apis',
    label: 'APIs & Tokens',
    sort: 6,
  },
  {
    icon: <WebhookIcon fontSize="medium" />,
    filename: 'webhooks',
    label: 'Webhooks',
    sort: 7,
  },
  {
    icon: <SupportAgentIcon fontSize="medium" />,
    filename: 'support',
    label: 'Support',
    sort: 8,
  },
  // comment out for now
  // {
  //   icon: <SettingsIcon fontSize="large" />,
  //   filename: 'billing',
  //   label: 'Billing & Plan',
  //   sort: 8,
  // },
  {
    icon: <CreditCardIcon fontSize="medium" />,
    filename: 'settings',
    label: 'Settings',
    sort: 7,
  },
];
