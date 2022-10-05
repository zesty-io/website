import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { grey } from '@mui/material/colors';
import FillerContent from 'components/globals/FillerContent';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
dayjs.extend(relativeTime);

export default function InstanceHeader({ instance }) {
  const webengineUrl = `https://${instance?.randomHashID}-dev.webengine.zesty.io`;
  const managerURl = `https://${instance?.ZUID}.manager.zesty.io`;

  return (
    <Card
      sx={{
        maxWidth: '100%',
        borderRadius: 0,
        boxShadow: 'none',
      }}
    >
      {instance?.screenshotURL ? (
        <Stack py={2} pl={2} pr={2}>
          <CardMedia
            component="img"
            height="150px"
            image={instance?.screenshotURL}
            alt="screenshot"
            sx={{ boxShadow: 1, borderRadius: '8px' }}
          />
        </Stack>
      ) : (
        <Stack p={1.5}>
          <CardMedia
            component="img"
            height="150px"
            image={FillerContent.image}
            alt="screenshot"
            sx={{ boxShadow: 1, borderRadius: '8px' }}
          />
        </Stack>
      )}

      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          color={'text.primary'}
          component="div"
        >
          {instance?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last updated {dayjs(instance.updatedAt).fromNow()}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          px: 2,
        }}
      >
        <Stack
          width={1}
          direction={'row'}
          spacing={2}
          sx={{
            pb: 2,
            borderBottom: `1px solid ${grey[200]}`,
          }}
        >
          <Button
            color="primary"
            target="_blank"
            variant="contained"
            fullWidth
            title={managerURl}
            href={managerURl}
            startIcon={<CreateIcon />}
            sx={{
              whiteSpace: {
                md: 'nowrap',
              },
            }}
          >
            Open Manager
          </Button>
          <Button
            variant="outlined"
            target="_blank"
            color="inherit"
            title={webengineUrl}
            href={webengineUrl}
            sx={{
              backgroundColor: '#fff',
              borderColor: grey[300],
              color: grey[500],
            }}
          >
            <VisibilityIcon />
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
