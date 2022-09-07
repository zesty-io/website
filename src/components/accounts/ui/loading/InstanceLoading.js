import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box, Card, Grid, List, ListItem, ListItemButton } from '@mui/material';

const CardLoadingGrid = () => {
  return (
    <Card sx={{ cursor: 'pointer', minHeight: '100%' }}>
      <Box
        paddingX={1}
        paddingY={1}
        width={1}
        display={'flex'}
        justifyContent={'flex-end'}
      >
        <Box>
          <Skeleton variant="circular" width={25} height={25} />
        </Box>
      </Box>
      <Skeleton variant="rectangular" height="220px" />

      <Box paddingX={2} paddingY={1}>
        <Skeleton variant="text" width={150} height={30} />
      </Box>
    </Card>
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
      <Box paddingY={2}>
        <Skeleton variant="rectangular" width={180} height={40} />
        <List>{listLoading.map((e) => e)}</List>
      </Box>
    );
  }
  return (
    <Box paddingY={2}>
      <Skeleton variant="text" width={250} height={40} />
      <Grid container direction="row" my={2} spacing={4}>
        {gridLoading.map((e, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={2.4} key={index}>
            {e}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
