import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box, Card, Grid, List, ListItem, ListItemButton } from '@mui/material';

const CardLoadingGrid = () => {
  return (
    <Grid item xs={3} sm={4} lg={3}>
      <Card sx={{ cursor: 'pointer', minHeight: '100%' }}>
        <Box
          paddingX={1}
          paddingY={1}
          width={1}
          display={'flex'}
          justifyContent={'flex-end'}
        >
          <Box>
            <Skeleton variant="circular" width={30} height={30} />
          </Box>
        </Box>
        <Skeleton variant="rectangular" height="150px" />

        <Box paddingX={2} paddingY={2}>
          <Skeleton variant="text" width={120} height={50} />
        </Box>
      </Card>
    </Grid>
  );
};

const CardLoadingList = () => {
  return (
    <ListItem divider disablePadding>
      <Box>
        <Skeleton variant="circular" width={20} height={20} />
      </Box>
      <ListItemButton>
        <Skeleton variant="rectangular" width={'50px'} height="50px" />
        <Box paddingX={1}>
          <Skeleton variant="text" width={150} height={50} />
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

const gridLoading = [
  <CardLoadingGrid />,
  <CardLoadingGrid />,
  <CardLoadingGrid />,
  <CardLoadingGrid />,
  <CardLoadingGrid />,
  <CardLoadingGrid />,
  <CardLoadingGrid />,
  <CardLoadingGrid />,
];
const listLoading = [
  <CardLoadingList />,
  <CardLoadingList />,
  <CardLoadingList />,
  <CardLoadingList />,
  <CardLoadingList />,
  <CardLoadingList />,
];
export const InstanceLoading = ({ view }) => {
  if (view === 'list') {
    return (
      <Box>
        <Skeleton variant="rectangular" width={20} height={20} />
        <List>{listLoading.map((e) => e)}</List>;
      </Box>
    );
  }
  return (
    <Box paddingY={2}>
      <Skeleton variant="rectangular" width={250} height={40} />
      <Grid container direction="row" my={2} spacing={2}>
        {gridLoading.map((e) => e)}
      </Grid>
    </Box>
  );
};
