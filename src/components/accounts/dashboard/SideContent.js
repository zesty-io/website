import {
  Divider,
  Link,
  List,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import MyListItem from './ui/MyListItem';
import SideListContent from './ui/SideListContent';

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

const SideContent = ({
  firstName,
  instances,
  totalLength,
  unfilteredTotalInstances,
  handleSearchInstances,
}) => {
  return (
    <Stack p={3} pl={1} pr={{ xs: 0, md: 3 }}>
      <Stack>
        <Typography color="text.secondary" fontWeight="bold">
          {firstName ? firstName : <Skeleton />}
        </Typography>
        <Divider sx={{ my: 2 }} />
      </Stack>

      <SideListContent
        label="Recent Instances"
        bottomAction={
          unfilteredTotalInstances > totalLength &&
          instances?.length > 0 && (
            <Link
              underline="none"
              href="/instances"
              color="secondary"
              sx={{ cursor: 'pointer' }}
            >
              Show more
            </Link>
          )
        }
        topAction={
          <TextField
            size="small"
            color="secondary"
            placeholder="Search an Instances"
            onChange={(e) => {
              handleSearchInstances(e.target.value.toLocaleLowerCase());
            }}
            sx={{ mb: 2 }}
          />
        }
      >
        <List disablePadding>
          {instances?.length === 0
            ? 'No Instances Found.'
            : instances?.map((instance, index) => (
                <MyListItem
                  key={index}
                  logo={instance.screenshotURL}
                  link={`/instances/${instance.ZUID}`}
                  name={instance.name}
                />
              ))}
        </List>
      </SideListContent>

      <SideListContent label="Recent Activity">
        <List disablePadding>
          {repositories?.map((repo, index) => (
            <MyListItem
              key={index}
              logo={repo.logo}
              link={repo.link}
              name={repo.name}
            />
          ))}
        </List>
      </SideListContent>

      <SideListContent
        label="Your Teams"
        topAction={
          <TextField
            size="small"
            color="secondary"
            placeholder="Find a team.."
            sx={{ mb: 2 }}
          />
        }
      >
        <List disablePadding>
          {repositories?.map((repo, index) => (
            <MyListItem
              key={index}
              logo={repo.logo}
              link={repo.link}
              name={repo.name}
            />
          ))}
        </List>
      </SideListContent>
    </Stack>
  );
};

export default SideContent;
