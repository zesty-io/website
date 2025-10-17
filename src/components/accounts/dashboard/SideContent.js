import { Link, List, Stack, TextField } from '@mui/material';
import FillerContent from 'components/globals/FillerContent';
import React, { memo, useEffect, useState } from 'react';
import * as helpers from 'utils';
import ZMyListItem from './ui/ZMyListItem';
import ZSideListContent from './ui/ZSideListContent';
import { useTheme } from '@mui/material/styles';

import { TOTAL_INSTANCES_LIMIT, TOTAL_TEAMS_LIMIT } from '.';

function SideContent({ initialInstances, unfilteredTotalInstances, teams }) {
  const [filteredInstances, setFilteredInstances] = useState([]);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  function onChange(e) {
    if (e?.target?.value) {
      handleSearchInstances(e.target.value.toLocaleLowerCase());
    }
  }

  function handleSearchInstances(value) {
    if (!initialInstances) {
      return;
    }
    const filterInstances = [...initialInstances]?.filter((instance) =>
      helpers.isMatch(
        [
          instance?.name,
          instance?.ID,
          instance?.ZUID,
          instance?.randomHashID,
          instance?.domain,
        ],
        value,
      ),
    );

    setFilteredInstances([...filterInstances].slice(0, TOTAL_INSTANCES_LIMIT));
  }

  useEffect(() => {
    if (initialInstances) {
      setFilteredInstances(initialInstances.slice(0, TOTAL_INSTANCES_LIMIT));
    }
  }, [initialInstances]);

  return (
    <Stack p={3} pt={0} pl={1} spacing={2} pr={{ xs: 0, md: 3 }}>
      <ZSideListContent
        label="Your Instances"
        bottomAction={
          unfilteredTotalInstances > TOTAL_INSTANCES_LIMIT &&
          filteredInstances?.length > 0 && (
            <Link
              underline="none"
              href="/instances"
              sx={(theme) => ({
                cursor: 'pointer',
                color: theme.palette.primary.main,
              })}
            >
              Show All
            </Link>
          )
        }
        topAction={
          <TextField
            data-testid="searchInstanceDashboard"
            size="small"
            color="primary"
            placeholder="Search an Instances"
            onChange={onChange}
            sx={{
              mb: 2,
              '& .MuiInputBase-root': {
                bgcolor: isDarkMode && 'transparent',
              },
            }}
          />
        }
      >
        <List disablePadding>
          {filteredInstances?.length === 0
            ? 'No Instances Found.'
            : filteredInstances?.map((instance, index) => (
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
          teams?.length > TOTAL_TEAMS_LIMIT &&
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
                ?.slice(0, TOTAL_TEAMS_LIMIT)
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
}

export default memo(SideContent);
