import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useZestyStore } from 'store';
import MainContent from './MainContent';
import SideContent from './SideContent';

const TOTAL_INSTANCES_LENGTH = 10;

const Dashboard = () => {
  const { ZestyAPI } = useZestyStore((state) => state);
  const [instances, setInstances] = useState([]);
  const [isInstancesLoading, setIsInstanceLoading] = useState(false);
  const [filteredInstances, setFilteredInstances] = useState([]);
  const [teams, setTeams] = useState([]);

  const getAllTeams = async () => {
    const response = await ZestyAPI.getAllTeams();
    setTeams(response?.data);
  };

  const handleSearchInstances = (value) => {
    const filterInstances = [...instances]?.filter((instance) =>
      instance?.name.toLowerCase().includes(value),
    );

    setFilteredInstances([...filterInstances].slice(0, TOTAL_INSTANCES_LENGTH));
  };

  useEffect(() => {
    const getInstances = async () => {
      setIsInstanceLoading(true);
      const res = await ZestyAPI.getInstances();
      setInstances(
        [...res?.data]?.sort(
          (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt),
        ),
      );
      setFilteredInstances([...res?.data].slice(0, TOTAL_INSTANCES_LENGTH));
      setIsInstanceLoading(false);
    };

    getInstances();
    getAllTeams();
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={(theme) => ({
        maxWidth: theme.breakpoints.values.xl2,
        px: 3,
      })}
    >
      <Grid container spacing={2}>
        <Grid
          sx={{
            height: { md: `calc(100vh - 66px)` },
            position: { md: 'sticky' },
            top: { md: '66px' },
            overflowY: { md: 'auto' },
            maxWidth: { md: '384px' },
          }}
          md={3}
          lg={2}
          xs={12}
          item
        >
          <SideContent
            instances={filteredInstances}
            totalLength={TOTAL_INSTANCES_LENGTH}
            unfilteredTotalInstances={instances?.length}
            handleSearchInstances={handleSearchInstances}
            teams={teams}
          />
        </Grid>

        <Grid xs={12} md={9} lg={10} item>
          <MainContent
            instances={instances}
            isInstancesLoading={isInstancesLoading}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
