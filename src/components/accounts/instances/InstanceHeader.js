import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
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
        borderBottom: `1px solid ${grey[300]}`,
      }}
    >
      {instance?.screenshotURL ? (
        <CardMedia
          component="img"
          height="100%"
          image={instance?.screenshotURL}
          alt="screenshot"
        />
      ) : (
        <CardMedia
          component="img"
          height="100%"
          image={FillerContent.image}
          alt="screenshot"
        />
      )}

      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {instance?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last updated {dayjs(instance.updatedAt).fromNow()}
        </Typography>
      </CardContent>
      <CardActions sx={{ pb: 1, px: 2 }}>
        <Button
          size="medium"
          color="primary"
          target="_blank"
          variant="contained"
          href={managerURl}
        >
          <CreateIcon />
          <Typography ml={1}>Open Manager</Typography>
        </Button>
        <Button
          size="medium"
          variant="outlined"
          target="_blank"
          color="inherit"
          href={webengineUrl}
          sx={{
            backgroundColor: '#fff',
            borderColor: grey[300],
            color: grey[500],
          }}
        >
          <VisibilityIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
