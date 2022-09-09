import {
  Button,
  Divider,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const repositories = [
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/website',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/fetch-wrapper',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/manager-ui',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/app-layouts',
  },
  {
    logo: 'https://avatars.githubusercontent.com/u/8280627?s=16&v=4',
    name: 'zesty-io/react-autolayout',
  },
];

const SideContent = () => {
  return (
    <Stack p={3}>
      <Stack>
        <Typography>Username</Typography>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <SideListItems
        label="Recent Repositories"
        lists={repositories}
        bottomAction={
          <Button color="secondary" sx={{ alignSelf: 'start' }}>
            Show more
          </Button>
        }
      >
        <Typography mb={2}>Recent Repositories</Typography>
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
      <SideListItems label="Your Teams" lists={repositories} />
    </Stack>
  );
};

export default SideContent;

const SideListItems = ({ label, lists, children, bottomAction }) => {
  return (
    <Stack>
      {children}
      <Typography fontWeight="bold" color="text.secondary" mb={2}>
        {label}
      </Typography>
      <List disablePadding>
        {lists.map((repo, index) => (
          <ListItem
            alignItems="center"
            key={index}
            sx={{ pb: 1 }}
            disablePadding
          >
            <img src={repo.logo} />
            <Typography ml={1}>{repo.name}</Typography>
          </ListItem>
        ))}
      </List>
      {bottomAction}
    </Stack>
  );
};
