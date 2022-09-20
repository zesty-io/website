import { Link, List, Stack, TextField } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';
import React from 'react';
import MyListItem from './ui/MyListItem';
import SideListContent from './ui/SideListContent';

const SideContent = ({
  instances,
  totalLength,
  unfilteredTotalInstances,
  handleSearchInstances,
  teams,
}) => {
  return (
    <Stack p={3} pl={1} spacing={2} pr={{ xs: 0, md: 3 }}>
      <SideListContent
        label="Your Instances"
        bottomAction={
          unfilteredTotalInstances > totalLength &&
          instances?.length > 0 && (
            <Link
              underline="none"
              href="/instances"
              color="secondary"
              sx={{ cursor: 'pointer' }}
            >
              Show All
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
                  logo={instance.screenshotURL || FillerContent.image}
                  link={`/instances/${instance.ZUID}`}
                  name={instance.name}
                />
              ))}
        </List>
      </SideListContent>

      <SideListContent label="Your Teams" showDivider={false}>
        <List disablePadding>
          {teams?.map((team, index) => (
            <MyListItem
              key={index}
              logo="https://avatars.githubusercontent.com/u/8280627?s=16&v=4"
              link="/teams"
              name={team.name}
            />
          ))}
        </List>
      </SideListContent>
    </Stack>
  );
};

export default SideContent;
