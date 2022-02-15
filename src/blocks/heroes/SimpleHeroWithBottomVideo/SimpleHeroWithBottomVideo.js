/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const SimpleHeroWithBottomVideo = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Container>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              Turn your ideas into{' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
              >
                success.
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              theFront will make your product look modern and professional while
              saving you precious time.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              component={'a'}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href={'https://mui.com/store/items/the-front-landing-page/'}
              target={'_blank'}
            >
              Purchase now
            </Button>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              <Button
                component={'a'}
                href={'/docs/introduction'}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                View documentation
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container maxWidth={1} paddingTop={'0 !important'}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              width: 1,
              height: 1,
              zIndex: 3,
              background: theme.palette.primary.main,
              opacity: 0.2,
            },
          }}
        >
          <Box
            component={'video'}
            width={1}
            autoPlay={true}
            muted={true}
            loop={true}
          >
            <source
              src="https://assets.maccarianagency.com/videos/video.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.maccarianagency.com/videos/video.mp4"
              type="video/webm"
            />
            <source
              src="https://assets.maccarianagency.com/videos/video.mp4"
              type="video/ogg"
            />
            Your browser do not support HTML5 video.
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SimpleHeroWithBottomVideo;
