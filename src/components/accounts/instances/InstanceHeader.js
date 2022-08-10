import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function InstanceHeader({ instance }) {
  const webengineUrl = `https://${instance?.randomHashID}-dev.webengine.zesty.io`;
  const managerURl = `https://${instance?.ZUID}.manager.zesty.io`;
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card sx={{ maxWidth: isSM ? '100%' : 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image={instance?.screenshotURL}
        alt="screenshot"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {instance?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Updated at: {instance.updatedAt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          target="_blank"
          href={managerURl}
        >
          Edit Content
        </Button>

        <Button
          size="small"
          target="_blank"
          color="secondary"
          href={webengineUrl}
        >
          Preview Website
        </Button>
      </CardActions>
    </Card>
  );
}
