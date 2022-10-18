import { Grid, List, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import ZInstanceItem from '../dashboard/ui/ZInstanceItem';
import InfiniteScroll from 'react-infinite-scroll-component';

const InstancesGrid = ({
  fetchData,
  collectect,
  renderInstances,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {[...new Array(12)].map((i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl2={2}>
            <ZInstanceItem isLoading={isLoading} />
          </Grid>
        ))}
      </Grid>
    );
  }
  return (
    <InfiniteScroll
      dataLength={collectect?.length}
      next={fetchData}
      hasMore={true}
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'start',
        gap: '1rem',
      }}
    >
      {collectect?.map((instance) => {
        return (
          <Stack
            direction={'column'}
            sx={{
              width: '27rem',
              display: 'flex',
              flexWrap: 'wrap',
            }}
            spacing={2}
          >
            {renderInstances('grid', instance)}
          </Stack>
        );
      })}
    </InfiniteScroll>
  );
};

const InstancesTypes = ({
  view,
  lists,
  title,
  icon,
  isLoading,
  renderInstances,
}) => {
  const [count, setcount] = useState(8);
  const [collectect, setcollectect] = useState([]);

  const fetchData = () => {
    setcount(count + 2);
  };

  React.useEffect(() => {
    setcollectect(
      lists
        ?.sort(function compare(a, b) {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          const sortedByCreatedAt = dateB - dateA;
          return sortedByCreatedAt;
        })
        .slice(0, count),
    );
  }, [count, lists]);

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

        {view === 'grid' && (
          <InstancesGrid
            collectect={collectect}
            fetchData={fetchData}
            renderInstances={renderInstances}
            isLoading={isLoading}
          />
        )}

        {view === 'list' && (
          <List>
            {lists?.map((instance) => {
              return renderInstances('list', instance);
            })}
          </List>
        )}
      </Stack>
    )
  );
};

export default InstancesTypes;
