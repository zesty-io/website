import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ZInstanceItem from '../dashboard/ui/ZInstanceItem';
import VirtualizedMUIGrid from 'mui-virtualized-grid';

const InstancesTypes = ({
  view,
  lists,
  title,
  icon,
  isLoading,
  renderInstances,
}) => {
  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {isLoading &&
          [...new Array(4)].map((i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl2={2}>
              <ZInstanceItem isLoading={isLoading} />
            </Grid>
          ))}
      </Grid>
    );
  }

  return (
    lists?.length > 0 && (
      <Stack my={2}>
        <Typography
          gap={1}
          variant="h6"
          display="flex"
          alignItems="center"
          mb={2}
        >
          {icon}
          {title}
        </Typography>

        {view === 'list' ? (
          <Stack>
            <VirtualizedMUIGrid
              columns={1}
              variant="List"
              sx={{ background: 'red' }}
              containerHeight={lists.length <= 4 ? '30vh' : '50vh'}
              data={lists}
              renderItem={(data) => {
                return renderInstances('list', data);
              }}
              rowHeight={76}
              spacing={1}
            />
          </Stack>
        ) : (
          <>
            {isLoading ? (
              <Grid container spacing={2}>
                {[...new Array(12)].map((i) => {
                  return (
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl2={2}>
                      <ZInstanceItem isLoading={isLoading} />
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              <Stack sx={{ pt: 1 }}>
                <VirtualizedMUIGrid
                  columns={4}
                  variant="Grid"
                  containerHeight={lists.length <= 4 ? 350 : '65vh'}
                  data={lists}
                  renderItem={(data) => {
                    return renderInstances('grid', data);
                  }}
                  rowHeight={350}
                  spacing={2}
                />
              </Stack>
            )}
          </>
        )}
      </Stack>
    )
  );
};

export default InstancesTypes;
