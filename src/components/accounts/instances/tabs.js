import TranslateIcon from '@mui/icons-material/Translate';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import LanguageIcon from '@mui/icons-material/Language';
import ApiIcon from '@mui/icons-material/Api';
import WebhookIcon from '@mui/icons-material/Webhook';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export const instanceTabs = [
  {
    icon: <AutoGraphIcon fontSize="large" />,
    filename: '',
    label: 'Overview',
    sort: 0,
  },
  {
    icon: <PeopleIcon fontSize="large" />,
    filename: 'users',
    label: 'Users',
    sort: 1,
  },
  {
    icon: <GroupsIcon fontSize="large" />,
    filename: 'teams',
    label: 'Teams',
    sort: 2,
  },
  {
    icon: <LanguageIcon fontSize="large" />,
    filename: 'domains',
    label: 'Domains',
    sort: 3,
  },
  {
    icon: <TranslateIcon fontSize="large" />,
    filename: 'locales',
    label: 'Locales',
    sort: 3,
  },
  {
    icon: <ApiIcon fontSize="large" />,
    filename: 'apis',
    label: 'APIs & Tokens',
    sort: 4,
  },
  {
    icon: <WebhookIcon fontSize="large" />,
    filename: 'webhooks',
    label: 'Webhooks',
    sort: 6,
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    filename: 'support',
    label: 'Support',
    sort: 5,
  },
  {
    icon: <SettingsIcon fontSize="large" />,
    filename: 'billing',
    label: 'Billing & Plan',
    sort: 8,
  },
  {
    icon: <CreditCardIcon fontSize="large" />,
    filename: 'settings',
    label: 'Settings',
    sort: 7,
  },
];
