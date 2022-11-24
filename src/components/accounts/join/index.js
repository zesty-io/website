import React from 'react';
import { Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useZestyStore } from 'store';

import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import { Onboarding } from './Onboarding';
import { zohoPostObject } from 'components/marketing/Start/zohoPostObject';
import { grey } from '@mui/material/colors';
import { setCookie } from 'cookies-next';

import { ResourcesCard } from './ResourceCard';
import { pendoScript } from 'components/marketing/Start/pendoScript';

const roleList = [
  { label: 'Marketer', value: 'marketer' },
  { label: 'Developer', value: 'developer' },
  { label: 'Business Lead', value: 'business lead' },
];
const projectList = [
  { label: 'Website', value: 'website' },
  { label: 'App', value: 'app' },
  { label: 'Headless Project', value: 'headless project' },
];

const TextBox = ({ collections, setcollections }) => {
  const [email, setemail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setcollections([...collections, email]);
      setemail('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="Email"
        size="small"
        onChange={(e) => setemail(e.currentTarget.value)}
        value={email}
      />

      <Stack
        mt={2}
        spacing={2}
        p={1}
        sx={{
          background: grey[100],
          height: '10rem',
          width: '30vw',
          overflow: 'auto',
          flexWrap: 'wrap',
        }}
        direction="row"
      >
        {collections.map((e) => {
          return (
            <Stack py={0.5}>
              <LoadingButton variant="contained" color="secondary">
                {e}
              </LoadingButton>
            </Stack>
          );
        })}
      </Stack>
    </form>
  );
};
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

const postToZOHO = async (payloadJSON) => {
  dataLayer.push({ event: 'SignupLead', value: '1' });
  try {
    let res = await fetch(
      'https://us-central1-zesty-prod.cloudfunctions.net/zoho',
      {
        method: 'POST',
        body: JSON.stringify(payloadJSON),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return await res.json();
  } catch (error) {
    throw new Error(`HTTP error: ${error}`);
  }
};

const Index = ({ content }) => {
  const { zestyProductionMode } = content || {};
  const [zohoLeadObject, setzohoLeadObject] = React.useState('');
  const {
    userInfo,
    ZestyAPI,
    role,
    setrole,
    project,
    setproject,
    projectName,
    setprojectName,
    emails,
    setemails,
  } = useZestyStore();
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

  const newProjectList =
    role !== 'developer'
      ? projectList.filter((e) => e.value !== 'headless project')
      : projectList;

  const visitor = {
    id: userInfo.zuid,
    email: userInfo.email,
    firstName: userInfo.firstname,
    lastName: userInfo.lastname,
    full_name: `${userInfo.firstname} ${userInfo.lastname}`,
    personajoin: role,
    projecttype: project,
    staff: 0,
    creationdate: new Date().toUTCString(),
  };

  React.useEffect(() => {
    if (role) {
      const obj = zohoPostObject(
        userInfo,
        'Trial',
        'Trial',
        'Unknown',
        'Website',
        role,
        userInfo.ZUID,
      );
      setzohoLeadObject(obj);
    }
  }, [role, userInfo]);

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
                        }}
                      >
                        {e.label}
                      </LoadingButton>
                    );
                  })}
                </Stack>
              </SwipeCompContainer>
            </SwiperSlide>

            {/* 2nd Question */}
            <SwiperSlide>
              <SwipeCompContainer>
                <Typography variant="h4" color="text.secondary">
                  What are you creating today?
                </Typography>
                <Stack direction={'row'} spacing={4}>
                  {newProjectList.map((e) => {
                    return (
                      <LoadingButton
                        color="primary"
                        variant="contained"
                        onClick={async () => {
                          if (zestyProductionMode) {
                            await postToZOHO(zohoLeadObject);
                          }
                          setproject(e.value);
                          handleNext();
                        }}
                      >
                        {e.label}
                      </LoadingButton>
                    );
                  })}
                </Stack>
              </SwipeCompContainer>
            </SwiperSlide>

            {/* 3rd Question */}
            <SwiperSlide>
              <SwipeCompContainer>
                <Typography variant="h4" color="text.secondary">
                  Project Name?
                </Typography>
                <TextField
                  placeholder="Project name"
                  value={projectName}
                  onChange={(e) => setprojectName(e.currentTarget.value)}
                />
                <LoadingButton
                  disabled={!projectName}
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    handleNext();
                    setCookie('projectName', projectName);
                  }}
                >
                  Next
                </LoadingButton>
              </SwipeCompContainer>
            </SwiperSlide>

            {/* 4th Question */}
            <SwiperSlide>
              <SwipeCompContainer>
                <Typography variant="h4" color="text.secondary">
                  Who else will be working on <b>{projectName}</b>?
                </Typography>
                <TextBox collections={emails} setcollections={setemails} />
                <Stack direction="row" spacing={4}>
                  <LoadingButton
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      handleNext();
                    }}
                  >
                    Lets go
                  </LoadingButton>
                  <LoadingButton
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      handleNext();
                    }}
                  >
                    Copy invite link
                  </LoadingButton>
                  <LoadingButton
                    color="primary"
                    variant="outlined"
                    onClick={() => {
                      handleNext();
                    }}
                  >
                    Skip
                  </LoadingButton>
                </Stack>
              </SwipeCompContainer>
            </SwiperSlide>

            {/* 5th Question */}
            <SwiperSlide>
              <SwipeCompContainer>
                <Onboarding />
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

export const Join = React.memo(Index);
