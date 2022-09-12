import {
  Divider,
  Link,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import SideListItems from './ui/SideListItem';

const repositories = [
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/website',
    link: '/',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/fetch-wrapper',
    link: '/',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/manager-ui',
    link: '/',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/app-layouts',
    link: '/',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/react-autolayout',
    link: '/',
  },
];

const SideContent = ({ firstName }) => {
  return (
    <Stack p={3} pl={1} pr={{ xs: 0, md: 3 }}>
      <Stack>
        <Typography color="text.secondary" fontWeight="bold">
          {firstName ? firstName : <Skeleton />}
        </Typography>
        <Divider sx={{ my: 2 }} />
      </Stack>

      <SideListItems
        label="Recent Repositories"
        lists={repositories}
        bottomAction={
          <Link underline="none" color="secondary" sx={{ cursor: 'pointer' }}>
            Show more
          </Link>
        }
      >
        <TextField
          size="small"
          color="secondary"
          placeholder="Find a repository"
          sx={{ mb: 2 }}
        />
      </SideListItems>

      <SideListItems label="Recent Activity" lists={repositories} />
      <SideListItems label="Your Teams" lists={repositories}>
        <TextField
          size="small"
          color="secondary"
          placeholder="Find a team.."
          sx={{ mb: 2 }}
        />
      </SideListItems>
    </Stack>
  );
};

export default SideContent;
