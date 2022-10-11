import { Grid, List, Stack, Typography } from '@mui/material';
import React from 'react';
import ZInstanceItem from '../dashboard/ui/ZInstanceItem';

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
          <List>
            {lists?.map((instance) => {
              return renderInstances('list', instance);
            })}
          </List>
        ) : (
          <Grid container spacing={2}>
            {isLoading
              ? [...new Array(12)].map((i) => (
                  <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl2={2}>
                    <ZInstanceItem isLoading={isLoading} />
                  </Grid>
                ))
              : lists?.map((instance, index) => {
                  return (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl2={2}>
                      {renderInstances('grid', instance)}
                    </Grid>
                  );
                })}
          </Grid>
        )}
      </Stack>
    )
  );
};

export default InstancesTypes;
