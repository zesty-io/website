import SettingsIcon from '@mui/icons-material/Settings';
import PhishingIcon from '@mui/icons-material/Phishing';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Public from '@mui/icons-material/Public';
import DataObject from '@mui/icons-material/DataObject';
import FolderShared from '@mui/icons-material/FolderShared';
import SupportIcon from '@mui/icons-material/Support';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

export const profileTabs = [
  {
    icon: <InfoOutlinedIcon />,
    filename: '',
    label: 'Your Profile',
    sort: 0,
  },
  {
    icon: <GroupAddIcon />,
    filename: 'email',
    label: 'Email',
    sort: 1,
  },
  {
    icon: <FolderShared />,
    filename: 'password',
    label: 'Password',
    sort: 2,
  },
  {
    icon: <Public />,
    filename: 'two-factor-auth',
    label: 'Two-Factor Auth',
    sort: 3,
  },
  {
    icon: <DataObject />,
    filename: 'preference',
    label: 'Preference',
    sort: 4,
  },
];
