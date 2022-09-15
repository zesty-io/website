import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Card2Fa = ({ children }) => {
  return (
    <Card sx={{ minWidth: 275, padding: '2rem' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Two Factor Authentication
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Information on the 2FA setup and the phone number that should be used.
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          How to install the app and additional information
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Button
            color="secondary"
            size="small"
            sx={{ display: 'flex', gap: '.3rem', alignItems: 'center' }}
            href="https://authy.com/what-is-2fa/"
          >
            Learn More
            <ArrowRightAltIcon color="secondary" />
          </Button>
        </Box>
      </CardContent>
      <CardActions>
        <Box width={1}>{children}</Box>
      </CardActions>
    </Card>
  );
};
