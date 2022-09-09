import { Container, Grid } from '@mui/material';
import React from 'react';
import MainContent from './MainContent';
import SideContent from './SideContent';

const Dashboard = () => {
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
            // height: `calc(100vh - 66px)`,
            // position: 'sticky',
            // top: '66px',
            // overflowY: 'auto',
            maxWidth: { md: '384px' },
          }}
          md={3}
          lg={2}
          xs={12}
          item
        >
          <SideContent />
        </Grid>

        <Grid xs={12} md={9} lg={10} item>
          <MainContent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
