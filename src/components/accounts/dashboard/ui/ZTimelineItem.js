import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Skeleton, Typography } from '@mui/material';
import React from 'react';

const ZTimelineItem = ({ title, children, isLoading, ...props }) => {
  return (
    <TimelineItem {...props}>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            '&.MuiTimelineDot-root': {
              background:
                'url(https://brand.zesty.io/zesty-io-logo.svg) no-repeat',
              height: 20,
              width: 20,
            },
          }}
        />
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
