import SettingsIcon from '@mui/icons-material/Settings';
import PhishingIcon from '@mui/icons-material/Phishing';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Public from '@mui/icons-material/Public';
import DataObject from '@mui/icons-material/DataObject';
import FolderShared from '@mui/icons-material/FolderShared';
import SupportIcon from '@mui/icons-material/Support';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LockIcon from '@mui/icons-material/Lock';

export const profileTabs = [
  {
    icon: <InfoOutlinedIcon />,
    filename: '',
    label: 'Your Profile',
    sort: 0,
  },
  {
    icon: <LockIcon />,
    filename: 'security',
    label: 'Security',
    sort: 2,
  },
  {
    icon: <DataObject />,
    filename: 'preference',
    label: 'Preferences',
    sort: 4,
  },
];
