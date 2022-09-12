import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import { useMediaQuery } from '@mui/material';

const UserCardWithBackground = ({
  avatar,
  name,
  description,
  title,
  twitter,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        background: 'transparent',
        backgroundImage: `linear-gradient(0deg, ${theme.palette.background.paper} 40%, ${theme.palette.primary.main} 0%)`,
      }}
    >
      <Container maxWidth={800}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Avatar
            src={avatar}
            variant={'circular'}
            sx={{
              width: { xs: theme.spacing(16), sm: theme.spacing(20) },
              height: { xs: theme.spacing(16), sm: theme.spacing(20) },
              border: `8px solid ${theme.palette.background.paper}`,
            }}
          />
          <Card
            sx={{
              p: { xs: 2, md: 4 },
              marginTop: theme.spacing(-10),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 1,
              height: 1,
            }}
          >
            <Box marginTop={isMobile ? 5 : 2}>
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                marginTop={2}
              >
                <Typography marginTop={2} fontWeight={700} variant={'h4'}>
                  {name}
                </Typography>
              </Box>
              <Typography
                color={'text.secondary'}
                variant={'h6'}
                align={'center'}
              >
                {title}
              </Typography>
              <Typography
                marginTop={2}
                color={'text.secondary'}
                variant={'h6'}
                align={'center'}
              >
                {description}
              </Typography>
              <Stack spacing={2} marginTop={4} width={1} alignItems={'center'}>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 1, md: 2 }}
                >
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Typography color={'primary'} variant={'subtitle2'}>
                      {twitter && `@${twitter}`}
                    </Typography>
                  </Box>
                  {/* <Box
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
                      {website}
                    </Typography>
                  </Box> */}
                  {/* <Box
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
                      {email}
                    </Typography>
                  </Box> */}
                </Stack>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default UserCardWithBackground;
