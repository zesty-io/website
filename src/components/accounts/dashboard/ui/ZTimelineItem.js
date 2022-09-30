import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Skeleton, Typography } from '@mui/material';
import React from 'react';

const ZTimelineItem = ({
  title,
  children,
  isLoading,
  logo = 'https://brand.zesty.io/zesty-io-logo.svg',
  icon,
  ...props
}) => {
  return (
    <TimelineItem {...props}>
      <TimelineSeparator>
        {icon ? (
          <>{icon}</>
        ) : (
          <TimelineDot
            sx={{
              '&.MuiTimelineDot-root': {
                background: `url(${logo}) no-repeat`,
                height: 20,
                width: 20,
              },
            }}
          ></TimelineDot>
        )}
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {isLoading ? (
          <Skeleton width="100%" />
        ) : (
          <Typography variant="caption" color="text.primary">
            {title}
          </Typography>
        )}

        {isLoading ? <Skeleton width="100%" height="200px" /> : children}
      </TimelineContent>
    </TimelineItem>
  );
};

export default ZTimelineItem;
