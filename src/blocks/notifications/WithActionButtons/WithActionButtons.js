import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Container from 'components/Container';

const WithActionButtons = () => {
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
              <ListItem sx={{ p: 0 }}>
                <ListItemIcon
                  sx={{
                    color: theme.palette.warning.main,
                    minWidth: 'auto',
                    marginRight: 2,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary={'Document is removed.'}
                  secondary={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                  }
                  primaryTypographyProps={{ fontWeight: 700 }}
                  sx={{ m: 0 }}
                />
              </ListItem>
            </List>
            <Stack direction={'row'}>
              <Button color={'primary'}>Undo</Button>
              <Button sx={{ color: 'text.primary' }}>Dismiss</Button>
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

export default WithActionButtons;
