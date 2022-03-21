/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';

const ContactDetails = ({ title, subtitle, phone, email, address }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          variant={'h4'}
          sx={{ fontWeight: 700 }}
          gutterBottom
          align={'center'}
        >
          {title}
        </Typography>
        <Typography color="text.secondary" align={'center'}>
          {subtitle}
        </Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent={'space-between'}
        marginBottom={4}
      >
        <Box component={ListItem} disableGutters width={'auto'} padding={0}>
          <Box
            component={ListItemAvatar}
            minWidth={'auto !important'}
            marginRight={2}
          >
            <Box
              component={Avatar}
              bgcolor={theme.palette.secondary.main}
              width={40}
              height={40}
            >
              <Icon>phone</Icon>
            </Box>
          </Box>
          <ListItemText primary="Phone" secondary={phone} />
        </Box>
        <Box component={ListItem} disableGutters width={'auto'} padding={0}>
          <Box
            component={ListItemAvatar}
            minWidth={'auto !important'}
            marginRight={2}
          >
            <Box
              component={Avatar}
              bgcolor={theme.palette.secondary.main}
              width={40}
              height={40}
            >
              <Icon>email</Icon>
            </Box>
          </Box>
          <ListItemText primary="Email" secondary={email} />
        </Box>
        <Box component={ListItem} disableGutters width={'auto'} padding={0}>
          <Box
            component={ListItemAvatar}
            minWidth={'auto !important'}
            marginRight={2}
          >
            <Box
              component={Avatar}
              bgcolor={theme.palette.secondary.main}
              width={40}
              height={40}
            >
              <Icon>maps</Icon>
            </Box>
          </Box>
          <ListItemText primary="Address" secondary={address} />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetails;
