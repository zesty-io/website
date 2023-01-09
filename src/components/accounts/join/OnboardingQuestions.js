import React from 'react';
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useZestyStore } from 'store';
import Script from 'next/script';
import { SwiperSlide } from 'swiper/react';
import DoneIcon from '@mui/icons-material/Done';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import { Onboarding } from './Onboarding';
import { zohoPostObject } from './zohoPostObject';
import { grey } from '@mui/material/colors';
import { FormInput, JoinAppBtn, SubmitBtn, SuccessMsg } from '../ui';
import { useFormik } from 'formik';
import { accountsValidations } from '../validations';
import { getCookie } from 'cookies-next';
import axios from 'axios';
import { isProd } from 'utils';
import { handlePostToSlack } from './services';
import slackNotify from 'components/marketing/Start/slackNotify';
import { pendoScript } from 'components/marketing/Join/pendoScript';
import dayjs from 'dayjs';

const zoholeadUrl =
  'https://one.zoho.com/zohoone/zestyio/home/cxapp/crm/org749642405/tab/Leads/';
const slackInviteUrl =
  'https://us-central1-zesty-prod.cloudfunctions.net/getSlackInvite';
const repository = 'https://github.com/zesty-io/template-nextjs-marketing';
const baseUrl = `https://installer-m3rbwjxm5q-uc.a.run.app`;

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

const ProjectNameForm = ({ onSubmit = () => {}, loading = false }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.projectName,
    initialValues: {
      projectName: '',
    },
    onSubmit: async (values) => {
      onSubmit(values);
      formik.resetForm();
    },
  });
  return (
    <SwipeCompContainer>
      <Stack gap={2}>
        <Typography variant="h4" color="text.secondary">
          What is your project name?
        </Typography>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Stack gap={2}>
            <FormInput
              label="Project Name"
              name={'projectName'}
              formik={formik}
            />
            <Stack width={'5rem'}>
              <SubmitBtn
                loading={loading || formik.isSubmitting}
                endIcon={<DoneIcon />}
              >
                OK
              </SubmitBtn>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </SwipeCompContainer>
  );
};

const DemoForm = ({ onSubmit = () => {} }) => {
  const [loading, setloading] = React.useState(false);
  const formik = useFormik({
    validationSchema: accountsValidations.demoForm,
    initialValues: {
      company: '',
      projectDescription: '',
      phoneNumber: '',
    },
    onSubmit: async (values) => {
      setloading(true);
      onSubmit(values);
      formik.resetForm();

      setTimeout(() => {
        setloading(false);
      }, 3000);
    },
  });
  return (
    <SwipeCompContainer>
      <Stack width={'40vw'}>
        <Typography variant="h3" color={'GrayText'}>
          Demo Form
        </Typography>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Stack gap={2}>
            <FormInput label="Company" name={'company'} formik={formik} />
            {/* // convert to  text area */}
            <FormInput
              label="Project Description"
              name={'projectDescription'}
              formik={formik}
              multiline={true}
              rows={5}
              maxRows={4}
            />
            <FormInput
              label="Phone Number"
              name={'phoneNumber'}
              formik={formik}
            />

            <Stack width={'5rem'}>
              <SubmitBtn loading={loading} endIcon={<DoneIcon />}>
                OK
              </SubmitBtn>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </SwipeCompContainer>
  );
};

const CompanyDetails = ({ onSubmit, loading }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.companyDetails,
    initialValues: {
      company: '',
    },
    onSubmit: async (values) => {
      onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <SwipeCompContainer>
      <Typography variant="h4" color="text.secondary">
        {`What is your company's name?`}
      </Typography>

      <form noValidate onSubmit={formik.handleSubmit}>
        <Stack gap={2}>
          <FormInput label="Company" name={'company'} formik={formik} />
          <Stack width={'5rem'}>
            <SubmitBtn
              loading={formik.isSubmitting || loading}
              endIcon={<DoneIcon />}
            >
              OK
            </SubmitBtn>
          </Stack>
        </Stack>
      </form>
    </SwipeCompContainer>
  );
};

const InviteTeam = ({ emails, setemails, handleNext }) => {
  return (
    <SwipeCompContainer>
      <Typography variant="h4" color="text.secondary">
        Invite your Team
      </Typography>
      <TextBox
        collections={emails}
        setcollections={setemails}
        handleNext={handleNext}
      />
    </SwipeCompContainer>
  );
};

const TextBox = ({ collections, setcollections, handleNext }) => {
  const [email, setemail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setcollections([...collections, email]);
      setemail('');
    }
  };
  const handleClick = () => {
    if (email) {
      setcollections([...collections, email]);
      setemail('');
    }
    handleNext();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack
        direction={'row'}
        gap={2}
        alignItems="center"
        justifyContent={'center'}
        width={1}
      >
        <TextField
          placeholder="Email"
          size="small"
          onChange={(e) => setemail(e.currentTarget.value)}
          value={email}
        />

        <LoadingButton type="submit" color="primary" variant="contained">
          Add
        </LoadingButton>
      </Stack>

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

      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        width={1}
        justifyContent="center"
        mt={2}
      >
        <LoadingButton
          color="primary"
          variant="contained"
          onClick={() => {
            handleClick();
          }}
        >
          Lets go
        </LoadingButton>
        <LoadingButton
          color="primary"
          variant="contained"
          onClick={() => {
            handleClick();
          }}
        >
          Copy invite link
        </LoadingButton>
        <LoadingButton
          color="primary"
          variant="outlined"
          onClick={() => {
            handleClick();
          }}
        >
          Skip
        </LoadingButton>
      </Stack>
    </form>
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

const Index = ({
  content,
  // hasCompany = false,
  // hasGoal = false,
  // hasPersona = false,
  // hasProjectName = false,
  // hasPreferredComponentSystem = false,
  // hasPreferredFramework = false,
  // hasUserType = false,
  // hasProjectType = false,
  devProjects = [],
  nonDevProjects = [],
  userTypeList = [],
  frameworkList = [],
  componentsSystemList = [],
  roleList = [],
  goalsList = [],
  inviteUserList = [],
}) => {
  const [zohoLeadLink, setzohoLeadLink] = React.useState('');
  const [loading, setloading] = React.useState(false);
  const token = isProd ? getCookie('APP_SID') : getCookie('DEV_APP_SID');
  const [preferred_framework, setframework] = React.useState('');
  const [preferred_component_system, setcomponentSystem] = React.useState('');
  const [goal, setgoal] = React.useState('');
  const [roleType, setroleType] = React.useState('');
  const [instance_zuid, setinstance_zuid] = React.useState('');
  const [installLoading, setinstallLoading] = React.useState(false);
  const { zestyProductionMode } = content || {};
  const [createInstanceLoading, setcreateInstanceLoading] =
    React.useState(false);
  const {
    userInfo,
    ZestyAPI,
    role,
    setrole,
    userType,
    setuserType,
    projectType,
    setprojectType,
    projectName,
    setprojectName,
    company,
    setcompany,
    emails,
    setemails,
    phoneNumber,
    setphoneNumber,
    projectDescription,
    setprojectDescription,
    setprefs,
    // userInvited,
    setuserInvited,
  } = useZestyStore();

  const sliderRef = React.useRef(null);

  const handleZoho = async (obj, callback = () => {}) => {
    const zohoData = await postToZOHO(obj);
    setzohoLeadLink(
      `${zoholeadUrl}${zohoData?.data && zohoData?.data[0]?.details?.id}`,
    );
    await callback();
  };

  const handleSuccessCreate = async (res, name) => {
    setinstance_zuid(res.data.ZUID);
    await handleInstall(res.data.ZUID, name);
  };

  const handleErrCreate = (res) => {
    console.error(res);
  };

  const handleCreateInstance = async (name) => {
    const res = await ZestyAPI.createInstance(name, '');
    !res.error && handleSuccessCreate(res, name);
    res.error && handleErrCreate(res);
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const handleInstall = async (instance_zuid, name) => {
    setinstallLoading(true);
    const url = `${baseUrl}/install`;
    const body = {
      repository,
      github_key: '',
      instance_zuid,
      token,
    };

    await slackNotify(
      `${role}  ${userInfo.firstName} ${userInfo.lastName}  ${userInfo.email} is creating New Project: *${name}* (${instance_zuid}) `,
    );

    // after install make the 1st instance favorite
    await updateUser('favorite_sites', [instance_zuid]);
    try {
      await axios
        .post(url, body, {
          headers,
        })
        .then((data) => {
          console.log(data);
          setinstallLoading(false);
        })
        .catch(async (error) => {
          console.error(error);
          await slackNotify(
            `${userInfo.email} had a template installation failure.`,
          );
          setinstallLoading(false);
        });
    } catch (error) {
      console.error(error);
      setinstallLoading(false);
      await slackNotify(
        `${userInfo.email} had a template installation failure.`,
      );
    }
  };

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

  const visitor = {
    id: userInfo.ZUID,
    email: userInfo.email,
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    full_name: `${userInfo.firstName} ${userInfo.lastName}`,
    personaJoin: role,
    projecttype: projectType,
    staff: 0,
    creationdate: new Date().toUTCString(),
  };
  const handleRole = async (e) => {
    setloading(true);
    visitor.personaJoin = e.value;
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

    handleNext();
  };
  const handleProject = async (e) => {
    setloading(true);
    setprojectType(e.value);
    visitor.projecttype = e.value;
    await window.pendo.initialize({
      visitor,
    });
    await updateUser('projectType', e.value);
    handleNext();
  };
  const handleProjectName = async (e) => {
    setloading(true);
    setcreateInstanceLoading(true);
    setprojectName(e.projectName);
    await updateUser('projectName', e.projectName);
    await handleCreateInstance(e.projectName);
    setcreateInstanceLoading(false);
    handleNext();
  };

  const handleUserType = async (e) => {
    setloading(true);
    setuserType(e.value);
    await updateUser('userType', e.value);

    if (e.value !== 'Business') {
      await updateUser('company', '');
    }
    handleNext();
  };

  const handleGoals = async (e) => {
    setloading(true);
    setgoal(e.value);
    await updateUser('goal', e.value);
    handleNext();
  };
  const handlePrefFramework = async (e) => {
    setloading(true);
    setframework(e.value);
    await updateUser('preferred_framework', e.value);
    handleNext();
  };
  const handlePrefCompSystem = async (e) => {
    setloading(true);
    await updateUser('preferred_component_system', e.value);
    setcomponentSystem(e.value);
    handleNext();
  };
  const handleCompanyDetails = async (e) => {
    setloading(true);
    setcompany(e.company);
    await updateUser('company', e.company);
    handleNext();
  };

  const handleInviteUser = async (e) => {
    setloading(true);
    setuserInvited(e.value);
    await updateUser('userInvited', e.value);
    if (e.value === 'Yes') {
      zestyProductionMode &&
        (await handlePostToSlack(userInfo?.email, slackInviteUrl));
    }
    handleNext();
  };

  const handleDemoForm = async (e) => {
    setloading(true);
    setprojectDescription(e?.projectDescription);
    setcompany(e?.company);
    setphoneNumber(e?.phoneNumber);
    await updateUser('company', e.company);
    await updateUser('phoneNumber', e.phoneNumber);
    await updateUser('projectDescription', e.projectDescription);

    SuccessMsg({
      title: 'Success',
      action: () => {
        window.location.reload();
      },
    });
  };

  const isDeveloper = role === 'Developer' ? true : false;
  const isBusiness = userType === 'Business' ? true : false;

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
    instance_zuid,
  };

  const onBoardingProps = {
    userInfo,
    role,
    projectType,
    projectName,
    instance_zuid,
    goal,
    userType,
    preferred_framework,
    preferred_component_system,
    loading: installLoading,
    instanceUrl: `https://${instance_zuid}.manager.zesty.io/`,
    zohoLeadLink,
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

  const handleInviteEmails = async () => {
    if (emails?.length !== 0) {
      await slackNotify(
        `*${userInfo?.firstName} ${userInfo?.lastName}* ${
          userInfo?.email
        } invited ${JSON.stringify(emails)}`,
      );
    }
    handleNext();
  };
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
      {pendoScript}
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
                backgroundImage: `url('https://brand.zesty.io/zesty-io-logo.svg')`,
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

            {roleType !== 'decision-maker' && (
              <SwiperSlide>
                <ProjectNameForm
                  onSubmit={handleProjectName}
                  loading={createInstanceLoading}
                />
              </SwiperSlide>
            )}

            {roleType === 'decision-maker' && (
              <SwiperSlide>
                <DemoForm onSubmit={handleDemoForm} />
              </SwiperSlide>
            )}

            <SwiperSlide>
              <Questionaire
                title="What are you creating today?"
                data={isDeveloper ? devProjects : nonDevProjects}
                onClick={handleProject}
                loading={loading}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Questionaire
                title="Who is this project for?"
                data={userTypeList}
                onClick={handleUserType}
                loading={loading}
              />
            </SwiperSlide>

            {isBusiness && (
              <SwiperSlide>
                <CompanyDetails
                  onSubmit={handleCompanyDetails}
                  loading={loading}
                />
              </SwiperSlide>
            )}

            <SwiperSlide>
              <Questionaire
                title="What is your top priority?"
                data={goalsList}
                onClick={handleGoals}
                loading={loading}
              />
            </SwiperSlide>

            {isDeveloper && (
              <SwiperSlide>
                <Questionaire
                  title="Preferred Framework"
                  data={frameworkList}
                  onClick={handlePrefFramework}
                  loading={loading}
                />
              </SwiperSlide>
            )}

            {isDeveloper && (
              <SwiperSlide>
                <Questionaire
                  title="Preferred Component System"
                  data={componentsSystemList}
                  onClick={handlePrefCompSystem}
                  loading={loading}
                />
              </SwiperSlide>
            )}

            {isDeveloper && (
              <SwiperSlide>
                <Questionaire
                  title="Would you like to join our Developer Slack Community"
                  data={inviteUserList}
                  onClick={handleInviteUser}
                  loading={loading}
                />
              </SwiperSlide>
            )}

            {isBusiness && (
              <SwiperSlide>
                <InviteTeam
                  emails={emails}
                  setemails={setemails}
                  handleNext={handleInviteEmails}
                />
              </SwiperSlide>
            )}

            <SwiperSlide>
              <SwipeCompContainer>
                <Onboarding {...onBoardingProps} />
              </SwipeCompContainer>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
};

export const OnboardingQuestions = React.memo(Index);
