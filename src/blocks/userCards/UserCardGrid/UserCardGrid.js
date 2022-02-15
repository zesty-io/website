import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const mock = [
  {
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    name: 'Clara Bertoletti',
    isVerified: true,
    title: 'Paradigm Technician',
    followers: 84,
    href: '#',
  },
  {
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    name: 'Jhon Anderson',
    isVerified: false,
    title: 'Product Developer',
    followers: 63,
    href: '#',
  },
  {
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
    name: 'Andreas Smith',
    isVerified: false,
    title: 'Sales Manager',
    followers: 45,
    href: '#',
  },
];

const UserCardGrid = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid key={i} item xs={12} sm={4}>
              <Card
                sx={{
                  p: { xs: 2, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: 1,
                  height: 1,
                  background: 'transparent',
                  backgroundImage: `linear-gradient(0deg, ${theme.palette.background.paper} 75%, ${theme.palette.primary.main} 0%)`,
                }}
              >
                <Avatar
                  src={item.avatar}
                  variant={'circular'}
                  sx={{
                    width: 120,
                    height: 120,
                  }}
                />
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  marginTop={2}
                >
                  <Typography fontWeight={700}>{item.name}</Typography>
                  {item.isVerified ? (
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={22}
                      height={22}
                      color={'primary.main'}
                      marginLeft={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </Box>
                  ) : null}
                </Box>
                <Typography color={'text.secondary'}>{item.title}</Typography>
                <Box flexGrow={1} />
                <Stack
                  spacing={2}
                  marginTop={4}
                  width={1}
                  alignItems={'center'}
                >
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={18}
                      height={18}
                      color={'text.secondary'}
                      marginRight={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </Box>
                    <Typography color={'text.secondary'} variant={'subtitle2'}>
                      {item.followers} followers
                    </Typography>
                  </Box>
                  <Button
                    component={'a'}
                    variant={'outlined'}
                    color={'primary'}
                    href={item.href}
                    fullWidth
                  >
                    View profile
                  </Button>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UserCardGrid;
