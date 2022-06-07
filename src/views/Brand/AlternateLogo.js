import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function AlternateLogo({png,svg,dark=false,name='',description=''}) {
    const theme = useTheme();

    return (
    <Card sx={{
        backgroundColor: dark ? theme.palette.background.paper : theme.palette.background.paper,
    }}>
        <Box  sx={{
            height: '200px',
            width: '100%',
            textAlign: 'center',
            backgroundColor: dark ? theme.palette.zesty.zestyDarkBlue : theme.palette.zesty.zestyWhiteBlue,
            display: 'flex'
        }}>
        <CardMedia
            component="img"
            alt={name}
            sx={{
                height: 'auto',
                maxHeight: '160px',
                width: 'auto',
                maxWidth: '80%',
                margin: 'auto auto',
            }}
            
            image={svg}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" marginBottom={0}>
          {name}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {description}
        </Typography> */}
      </CardContent>
      <CardActions>
          
        <Button 
            size="small" 
            endIcon={<Icon>download</Icon>}
            component={'a'}
            href={svg}
            target={'_blank'}>SVG</Button>
        <Button 
            size="small" 
            endIcon={<Icon>download</Icon>}
            component={'a'}
            href={png}
            target={'_blank'}>PNG</Button>
      </CardActions>
    </Card>
  );
}