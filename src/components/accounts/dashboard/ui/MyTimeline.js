import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Link, Stack, Typography } from '@mui/material';

const MyTimeline = ({ title, timelineLists }) => {
  return (
    <Stack my={1}>
      <Typography color="text.secondary">{title}</Typography>
      <Timeline sx={{ p: 0, m: 0 }}>
        {timelineLists.map((item, index) => (
          <TimelineItem
            key={index}
            sx={{
              '::before': {
                content: 'none',
              },
            }}
          >
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="caption" color="text.secondary">
                {item.title}
              </Typography>
              <Typography>
                <Link
                  color="text.primary"
                  underline="none"
                  href="/"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {item.description}
                </Link>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Stack>
  );
};

export default MyTimeline;
