
import SettingsIcon from '@mui/icons-material/Settings';
import PhishingIcon from '@mui/icons-material/Phishing';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Public from '@mui/icons-material/Public';
import DataObject from '@mui/icons-material/DataObject';
import FolderShared from '@mui/icons-material/FolderShared';
import SupportIcon from '@mui/icons-material/Support';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

export const instanceTabs = [
    {
      icon: <InfoOutlinedIcon />,
      filename: '',
      label: 'Overview',
      sort: 0, 
    },
    {
      icon: <GroupAddIcon />,
      filename: 'users',
      label: 'Users',
      sort: 1, 
    },
    {
      icon: <FolderShared />,
      filename: 'teams',
      label: 'Teams',
      sort: 2, 
    },
    {
      icon: <Public />,
      filename: 'domains',
      label: 'Domains',
      sort: 3, 
    },
    {
      icon: <DataObject />,
      filename: 'apis',
      label: 'API & Tokens',
      sort: 4, 
    },
    {
      icon: <PhishingIcon />,
      filename: 'webhooks',
      label: 'Webhooks',
      sort: 6,  
    },
    {
      icon: <SupportIcon />,
      filename: 'support',
      label: 'Support',
      sort: 5,  
    },
    {
      icon: <CreditCardOutlinedIcon />,
      filename: 'billing',
      label: 'Billing & Plan',
      sort: 8, 
    },
    {
      icon: <SettingsIcon />,
      filename: 'settings',
      label: 'Settings',
      sort: 7, 
    }
  ];