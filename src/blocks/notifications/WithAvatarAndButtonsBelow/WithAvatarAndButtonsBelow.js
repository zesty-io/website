import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import Container from 'components/Container';

const WithAvatarAndButtonsBelow = () => {
  const theme = useTheme();
  return (
    <Box bgcolor="alternate.main">
      <Container maxWidth={600}>
        <Card
          sx={{
            padding: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Stack spacing={2}>
            <List sx={{ p: 0 }}>
              <ListItem alignItems="flex-start" disableGutters disablePadding>
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://assets.maccarianagency.com/avatars/img1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
            <Stack direction={'row'} spacing={2}>
              <Button color={'primary'} variant={'contained'}>
                Reply now
              </Button>
              <Button
                sx={{
                  color: 'text.primary',
                  borderColor: alpha(theme.palette.text.primary, 0.2),
                  bgcolor: 'transparent',
                  '&:hover': {
                    borderColor: alpha(theme.palette.text.primary, 0.5),
                    bgcolor: 'transparent',
                  },
                }}
                variant={'outlined'}
              >
                Rimind me later
              </Button>
            </Stack>
          </Stack>
          <Box color={theme.palette.text.secondary} marginLeft={2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={20}
              height={20}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default WithAvatarAndButtonsBelow;
