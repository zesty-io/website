import React from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useZestyStore } from 'store';

import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';

import { ResourcesCard } from './ResourceCard';
import { pendoScript } from 'components/marketing/Start/pendoScript';

const roleList = [
  { label: 'Marketer', value: 'marketer' },
  { label: 'Developer', value: 'developer' },
  { label: 'Business Lead', value: 'business lead' },
];

const SwipeCompContainer = ({ children, pt = 14 }) => {
  return (
    <Stack
      width={1}
      justifyContent="center"
      textAlign={'center'}
      alignItems="center"
      pt={pt}
      spacing={4}
      height={200}
    >
      {children}
    </Stack>
  );
};

const Index = ({ content }) => {
  const { zestyProductionMode } = content || {};
  const { userInfo, ZestyAPI, role, setrole, project } = useZestyStore();
  const sliderRef = React.useRef(null);

  const updateUser = async (role) => {
    const userZUID = userInfo.ZUID;
    const body = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      prefs: JSON.stringify({ persona: role }),
    };
    await ZestyAPI.updateUser(userZUID, body);
  };

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const visitor = {
    id: userInfo?.zuid,
    email: userInfo?.email,
    firstName: userInfo?.firstname,
    lastName: userInfo?.lastname,
    full_name: `${userInfo?.firstname} ${userInfo?.lastname}`,
    personajoin: role,
    projecttype: project,
    staff: 0,
    creationdate: new Date().toUTCString(),
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={(theme) => ({
        maxWidth: theme.breakpoints.values.xl2,
      })}
    >
      {pendoScript}
      <Grid container>
        <Grid item xs={12} md={8} px={10} py={10}>
          <Typography variant="p" color={'text.primary'}>
            Hey, <b>{userInfo?.firstName}</b>
          </Typography>
          <Typography variant="h6" color={'text.primary'}>
            {`Let's customize your experiences.`}
          </Typography>

          <Swiper
            ref={sliderRef}
            autoHeight={false}
            navigation={false}
            pagination={{ clickable: false, draggable: false, type: 'none' }}
            scrollbar={{ draggable: false }}
            modules={[Pagination, Navigation]}
            allowTouchMove={!zestyProductionMode}
            style={{ height: '50vh' }}
            direction={'vertical'}
          >
            {/* 1st question */}
            <SwiperSlide>
              <SwipeCompContainer>
                <Typography variant="h4" color="text.secondary">
                  What is your role?
                </Typography>
                <Stack direction={'row'} spacing={4}>
                  {roleList.map((e) => {
                    return (
                      <LoadingButton
                        color="primary"
                        variant="contained"
                        onClick={async () => {
                          await updateUser(e.value);
                          await window.pendo.initialize({
                            visitor,
                          });
                          setrole(e.value);
                          handleNext();
                          window.location.replace('/');
                        }}
                      >
                        {e.label}
                      </LoadingButton>
                    );
                  })}
                </Stack>
              </SwipeCompContainer>
            </SwiperSlide>
          </Swiper>
        </Grid>
        <Grid
          item
          xs={0}
          md={4}
          display={{ sm: 'none', md: 'flex' }}
          width={1}
          justifyContent={'center'}
          justifyItems="center"
          alignContent="center"
          alignItems={'center'}
          bgcolor={(theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.zesty.zestyDarkerBlue
              : theme.palette.secondary.main
          }
        >
          <Stack>
            <ResourcesCard />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export const PersonalizationSurvey = React.memo(Index);
