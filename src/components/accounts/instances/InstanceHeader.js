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
import { grey } from '@mui/material/colors';
import FillerContent from 'components/globals/FillerContent';

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
        <Typography gutterBottom variant="h5" component="div">
          {instance?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Updated at:
          {dayjs(instance.updatedAt).format(' MMMM D, YYYY @ hh:mm A')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          target="_blank"
          color="secondary"
          href={webengineUrl}
        >
          Preview Website
        </Button>

        <Button
          size="small"
          color="secondary"
          target="_blank"
          variant="contained"
          href={managerURl}
        >
          Open Manager
        </Button>
      </CardActions>
    </Card>
  );
}
