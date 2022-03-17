/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

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
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
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
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
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
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </Box>
          </Box>
          <ListItemText primary="Address" secondary={address} />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetails;
