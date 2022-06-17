import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TryFreeButton from './TryFreeButton';
import FillerContent from 'components/globals/FillerContent';

export default function SideBarCTA() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={FillerContent.image}
          alt={FillerContent.header}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {FillerContent.header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {FillerContent.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <TryFreeButton />
      </CardActions>
    </Card>
  );
}
