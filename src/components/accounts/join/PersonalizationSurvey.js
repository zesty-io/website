/* eslint-disable no-unused-vars */
// for checking
import React from 'react';
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { useZestyStore } from 'store';
import Script from 'next/script';
import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import { zohoPostObject } from './zohoPostObject';
import { pendoScript } from 'components/marketing/Start/pendoScript';
import { JoinAppBtn } from '../ui';

const Questionaire = ({
  title = 'no title',
  data = [],
  onClick,
  loading = false,
}) => {
  const handleClick = (data) => {
    onClick(data);
  };
  return (
    <SwipeCompContainer>
      <Typography variant="h4" color="text.secondary">
        {title}
      </Typography>
      <Stack
        direction={'row'}
        spacing={2}
        gap={1}
        py={1}
        justifyContent="center"
        sx={{
          width: '50vw',
          overflow: 'auto',
          flexWrap: 'wrap',
        }}
        flexWrap
      >
        <Box
          sx={{ width: '100%', visibility: !loading ? 'hidden' : 'visible' }}
          mb={2}
        >
          <LinearProgress color="primary" />
        </Box>
        {data?.map((e) => {
          return (
            <JoinAppBtn
              disabled={loading}
              onClick={() => handleClick(e)}
              startIcon={e?.icon}
              testId={e?.value}
            >
              <Typography whiteSpace={'nowrap'} width={1}>
                {e?.label}
              </Typography>
            </JoinAppBtn>
          );
        })}
      </Stack>
    </SwipeCompContainer>
  );
};

const SwipeCompContainer = ({ children, pt = 0 }) => {
  return (
    <Stack
      width={1}
      justifyContent="center"
      justifyItems={'center'}
      textAlign={'center'}
      alignItems="center"
      pt={pt}
      spacing={4}
      height={1}
    >
      {children}
    </Stack>
  );
};

const handleZoho = async (obj, callback = () => {}) => {
  await postToZOHO(obj);
  await callback();
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
    console.warn(error);
    // throw new Error(`HTTP error: ${error}`);
  }
};

const Index = ({ content, roleList = [] }) => {
  const [loading, setloading] = React.useState(false);
  const [preferred_framework, _setframework] = React.useState('');
  const [preferred_component_system, _setcomponentSystem] = React.useState('');
  const [goal, _setgoal] = React.useState('');
  const [_roleType, setroleType] = React.useState('');
  const [_instance_zuid, _setinstance_zuid] = React.useState('');
  const { zestyProductionMode } = content || {};
  const [_createInstanceLoading, _setcreateInstanceLoading] =
    React.useState(false);
  const {
    userInfo,
    ZestyAPI,
    role,
    setrole,
    userType,
    // setuserType,
    projectType,
    // setprojectType,
    projectName,
    // setprojectName,
    company,
    // setcompany,
    emails,
    // setemails,
    phoneNumber,
    // setphoneNumber,
    projectDescription,
    // setprojectDescription,
    setprefs,
    // userInvited,
    // setuserInvited,
  } = useZestyStore();

  const sliderRef = React.useRef(null);

  const updateUser = async (preference, val) => {
    const userZUID = userInfo.ZUID;
    const res = await ZestyAPI.getUser(userZUID);
    if (!res.error) {
      const { firstName, lastName, prefs } = res?.data || {};
      const newPrefs = prefs && JSON.parse(prefs);
      const body = {
        firstName,
        lastName,
        prefs: JSON.stringify({ ...newPrefs, [preference]: val }),
      };
      await ZestyAPI.updateUser(userZUID, body);
      setprefs(newPrefs);
    }
  };

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();

    setloading(false);
  }, []);

  const visitor = {
    id: userInfo.zuid,
    email: userInfo.email,
    firstName: userInfo.firstname,
    lastName: userInfo.lastname,
    full_name: `${userInfo.firstname} ${userInfo.lastname}`,
    personajoin: role,
    projecttype: projectType,
    staff: 0,
    creationdate: new Date().toUTCString(),
  };

  const gtag_report_conversion = (url) => {
    const callback = () => {
      if (typeof url != undefined) {
        url = window.location;
      }
    };

    window.gtag('event', 'conversion', {
      send_to: 'AW-955374362/-JA1CJv2g4MYEJq2x8cD',
      event_callback: callback,
    });
    return false;
  };

  const handleRole = async (e) => {
    setloading(true);
    await window.pendo.initialize({
      visitor,
    });
    setrole(e.value);
    setroleType(e.type);
    await updateUser('persona', e.value);

    if (e.value !== 'Developer') {
      await updateUser('preferred_framework', '');
      await updateUser('preferred_component_system', '');
      await updateUser('userInvited', '');
    }

    await window.location.reload();
    handleNext();
  };

  const zohoObj = {
    ...userInfo,
    projectType,
    userType,
    goal,
    company,
    preferred_framework,
    preferred_component_system,
    role,
    phoneNumber,
    projectDescription,
    emails,
    projectName,
  };

  const isExistingZestyUser =
    dayjs().diff(userInfo?.createdAt, 'hours') > 48 ? true : false;
  React.useEffect(() => {
    const obj = zohoPostObject(
      zohoObj,
      'Trial',
      'Trial',
      'Unknown',
      'Website',
      role,
      userInfo.ZUID,
    );
    if (!isExistingZestyUser) {
      handleZoho(obj);
    }
  }, [
    isExistingZestyUser,
    projectType,
    userType,
    goal,
    company,
    preferred_framework,
    preferred_component_system,
    role,
    phoneNumber,
    projectName,
    emails,
  ]);

  React.useEffect(() => {
    gtag_report_conversion();
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={(theme) => ({
        maxWidth: theme.breakpoints.values.xl2,
        position: 'relative',
      })}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-955374362"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-955374362');

        `}
      </Script>

      {pendoScript}
      <Grid container>
        <Grid item xs={12} px={10} py={4}>
          <Typography variant="p" color={'text.primary'}>
            Hey, <b>{userInfo?.firstName}</b>
          </Typography>
          <Typography variant="h6" color={'text.primary'}>
            {`Let's customize your Zesty experience.`}
          </Typography>
          <Swiper
            ref={sliderRef}
            autoHeight={false}
            navigation={false}
            pagination={{ clickable: false, draggable: false, type: 'none' }}
            scrollbar={{ draggable: false }}
            modules={[Pagination, Navigation]}
            allowTouchMove={!zestyProductionMode}
            style={{
              height: '70vh',
              position: 'relative',
            }}
            direction={'vertical'}
          >
            <Stack
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '70vh',
                width: '100%',
                backgroundImage: `url('https://brand.zesty.io/zesty-io-logo.png')`,
                backgroundRepeat: `no-repeat, repeat`,
                backgroundSize: `400px`,
                backgroundPosition: 'center',
                opacity: '.05',
              }}
            ></Stack>
            <SwiperSlide>
              <Questionaire
                title="What is your role?"
                data={roleList}
                onClick={handleRole}
                loading={loading}
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
};

export const PersonalizationSurvey = React.memo(Index);
