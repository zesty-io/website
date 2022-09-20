import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Typography } from '@mui/material';
import React from 'react';

const ZTimelineItem = ({ title, children, ...props }) => {
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
        <Typography variant="caption" color="text.secondary">
          {title}
        </Typography>
        {children}
      </TimelineContent>
    </TimelineItem>
  );
};

export default ZTimelineItem;
