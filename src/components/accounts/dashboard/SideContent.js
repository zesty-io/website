import { Link, List, Stack, TextField } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';
import React from 'react';
import ZMyListItem from './ui/ZMyListItem';
import ZSideListContent from './ui/ZSideListContent';

const SideContent = ({
  instances,
  totalInstancesLimit,
  totalTeamsLimit,
  unfilteredTotalInstances,
  handleSearchInstances,
  teams,
}) => {
  return (
    <Stack p={3} pt={0} pl={1} spacing={2} pr={{ xs: 0, md: 3 }}>
      <ZSideListContent
        label="Your Instances"
        bottomAction={
          unfilteredTotalInstances > totalInstancesLimit &&
          instances?.length > 0 && (
            <Link
              underline="none"
              href="/instances"
              color="primary"
              sx={{ cursor: 'pointer' }}
            >
              Show All
            </Link>
          )
        }
        topAction={
          <TextField
            size="small"
            color="primary"
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
                <ZMyListItem
                  key={index}
                  logo={instance.screenshotURL || FillerContent.image}
                  link={`/instances/${instance.ZUID}`}
                  name={instance.name}
                />
              ))}
        </List>
      </ZSideListContent>

      <ZSideListContent
        label="Your Teams"
        showDivider={false}
        bottomAction={
          teams?.length > totalTeamsLimit &&
          teams?.length > 0 && (
            <Link
              underline="none"
              href="/teams"
              color="primary"
              sx={{ cursor: 'pointer' }}
            >
              Show All
            </Link>
          )
        }
      >
        <List disablePadding>
          {teams?.length === 0
            ? 'No Teams Found.'
            : teams
                ?.slice(0, totalTeamsLimit)
                ?.map((team, index) => (
                  <ZMyListItem
                    key={index}
                    logo="https://avatars.githubusercontent.com/u/8280627?s=16&v=4"
                    link="/teams"
                    name={team.name}
                  />
                ))}
        </List>
      </ZSideListContent>
    </Stack>
  );
};

export default SideContent;
