import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const mock = {
  avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
  name: 'Clara Bertoletti',
  isVerified: true,
  title: 'Paradigm Technician',
  username: '@clara.bertoletti',
  href: '#',
  location: 'Milan, Italy',
  website: 'www.example.com',
  email: 'clara.bertoletti@example.com',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

const UserCardWithRating = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Card
          sx={{
            p: { xs: 2, md: 4 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: 1,
            height: 1,
          }}
        >
          <Stack
            spacing={2}
            width={{ xs: 1, sm: 'auto' }}
            alignItems={'center'}
          >
            <Avatar
              src={mock.avatar}
              variant={'circular'}
              sx={{
                width: theme.spacing(20),
                height: theme.spacing(20),
              }}
            />
            <Button
              component={'a'}
              variant={'contained'}
              color={'primary'}
              href={mock.href}
              fullWidth
            >
              View profile
            </Button>
          </Stack>
          <Box marginLeft={{ xs: 0, sm: 4 }} marginTop={{ xs: 4, sm: 0 }}>
            <Box display={'flex'} alignItems={'center'} marginBottom={1}>
              <Typography fontWeight={700} variant={'h5'}>
                {mock.name}
              </Typography>
              <Typography color={'text.secondary'} marginX={1}>
                {mock.username}
              </Typography>
              {mock.isVerified ? (
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={24}
                  height={24}
                  color={'success.main'}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </Box>
              ) : null}
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Typography>{mock.title}</Typography>
              <Box
                display={'flex'}
                justifyContent={{ xs: 'flex-start', sm: 'center' }}
                alignItems={'center'}
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <Box
                    key={item}
                    component={'svg'}
                    width={18}
                    height={18}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    color={theme.palette.secondary.main}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </Box>
                ))}
              </Box>
            </Stack>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 1, md: 2 }}
              marginY={2}
              alignItems={'flex-start'}
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
                  color={'primary.dark'}
                  marginRight={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </Box>
                <Typography color={'primary'} variant={'subtitle2'}>
                  {mock.location}
                </Typography>
              </Box>
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
                  color={'primary.dark'}
                  marginRight={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </Box>
                <Typography color={'primary'} variant={'subtitle2'}>
                  {mock.website}
                </Typography>
              </Box>
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
                  color={'primary.dark'}
                  marginRight={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </Box>
                <Typography color={'primary'} variant={'subtitle2'}>
                  {mock.email}
                </Typography>
              </Box>
            </Stack>
            <Typography variant={'subtitle2'} component={'p'}>
              {mock.bio}
            </Typography>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default UserCardWithRating;
