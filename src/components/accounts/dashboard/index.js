import { Container, Grid, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useZestyStore } from 'store';
import MainContent from './MainContent';
import SideContent from './SideContent';
import { theme } from '@zesty-io/material';

const TOTAL_INSTANCES_LENGTH = 10;

const Dashboard = () => {
  const { userInfo, ZestyAPI } = useZestyStore((state) => state);
  const [instances, setInstances] = useState([]);
  const [filteredInstances, setFilteredInstances] = useState([]);

  const handleSearchInstances = (value) => {
    const filterInstances = [...instances]?.filter((instance) =>
      instance?.name.toLowerCase().includes(value),
    );

    setFilteredInstances([...filterInstances].slice(0, TOTAL_INSTANCES_LENGTH));
  };

  useEffect(() => {
    const getInstances = async () => {
      const res = await ZestyAPI.getInstances();
      setInstances([...res?.data]);
      setFilteredInstances([...res?.data].slice(0, TOTAL_INSTANCES_LENGTH));
    };

    getInstances();
  }, []);

  return (
    <ThemeProvider theme={theme}>
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
              firstName={userInfo?.firstName}
              instances={filteredInstances}
              totalLength={TOTAL_INSTANCES_LENGTH}
              unfilteredTotalInstances={instances?.length}
              handleSearchInstances={handleSearchInstances}
            />
          </Grid>

          <Grid xs={12} md={9} lg={10} item>
            <MainContent />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
