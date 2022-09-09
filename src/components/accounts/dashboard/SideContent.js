import {
  Divider,
  Link,
  List,
  ListItem,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const repositories = [
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/website',
    link: '',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/fetch-wrapper',
    link: '',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/manager-ui',
    link: '',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/app-layouts',
    link: '',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/react-autolayout',
    link: '',
  },
];

const SideContent = ({ firstName }) => {
  return (
    <Stack p={3} pl={1} pr={3}>
      <Stack>
        <Typography color="text.secondary" fontWeight="bold">
          {firstName ? firstName : <Skeleton />}
        </Typography>
      </Stack>
      <Divider sx={{ my: 2 }} />
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

      <Divider sx={{ my: 2 }} />
      <SideListItems label="Recent Activity" lists={repositories} />
      <Divider sx={{ my: 2 }} />
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

const SideListItems = ({ label, lists, children, bottomAction }) => {
  return (
    <Stack>
      <Typography fontWeight="bold" color="text.secondary" mb={2}>
        {label}
      </Typography>
      {children}
      <List disablePadding>
        {lists.map((list, index) => (
          <ListItem
            alignItems="center"
            key={index}
            sx={{ pb: 1 }}
            disablePadding
          >
            <img src={list.logo} />
            <Link
              href={list.link}
              underline="none"
              color="text.primary"
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
              ml={1}
            >
              {list.name}
            </Link>
          </ListItem>
        ))}
      </List>
      {bottomAction}
    </Stack>
  );
};
