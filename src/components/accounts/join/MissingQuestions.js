import React from 'react';
import { Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useZestyStore } from 'store';
import Script from 'next/script';
import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import { Onboarding } from './Onboarding';
import { zohoPostObject } from './zohoPostObject';
import { grey } from '@mui/material/colors';
import { pendoScript } from 'components/marketing/Start/pendoScript';
import { FormInput, SubmitBtn, SuccessMsg } from '../ui';
import { useFormik } from 'formik';
import { accountsValidations } from '../validations';

const Questionaire = ({ title = 'no title', data = [], onClick }) => {
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
        spacing={4}
        gap={2}
        justifyContent="center"
        sx={{
          width: '50vw',
          overflow: 'auto',
          flexWrap: 'wrap',
        }}
        flexWrap
      >
        {data?.map((e) => {
          return (
            <LoadingButton
              color="primary"
              variant="contained"
              onClick={() => handleClick(e)}
            >
              <Typography whiteSpace={'nowrap'} width={1}>
                {e?.label}
              </Typography>
            </LoadingButton>
          );
        })}
      </Stack>
    </SwipeCompContainer>
  );
};

const ProjectNameForm = ({ onSubmit = () => {} }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.projectName,
    initialValues: {
      projectName: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      onSubmit(values);
      formik.resetForm();
    },
  });
  return (
    <Stack>
      <Typography variant="h3">What is your project name?</Typography>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Stack gap={2}>
          <FormInput label="projectName" name={'projectName'} formik={formik} />
          <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
        </Stack>
      </form>
    </Stack>
  );
};

const DemoForm = ({ onSubmit = () => {} }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.demoForm,
    initialValues: {
      company: '',
      projectDescription: '',
      phoneNumber: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      onSubmit(values);
      formik.resetForm();
    },
  });
  return (
    <Stack>
      <Typography variant="h3">Demo Form</Typography>
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
          <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
        </Stack>
      </form>
    </Stack>
  );
};

const CompanyDetails = ({ onSubmit }) => {
  const formik = useFormik({
    validationSchema: accountsValidations.companyDetails,
    initialValues: {
      company: '',
    },
    onSubmit: async (values) => {
      console.log(values);
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
          <SubmitBtn loading={formik.isSubmitting}>Submit</SubmitBtn>
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

      <Stack direction="row" spacing={4}>
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

const Index = ({
  content,
  hasCompany = false,
  hasProjectName = false,
  hasGoal = false,
  hasPersona = false,
  hasPreferredComponentSystem = false,
  hasPreferredFramework = false,
  hasUserType = false,
  hasProjectType = false,
  devProjects = [],
  nonDevProjects = [],
  userTypeList = [],
  frameworkList = [],
  componentsSystemList = [],
  roleList = [],
  goalsList = [],
}) => {
  const [preferred_framework, setframework] = React.useState('');
  const [preferred_component_system, setcomponentSystem] = React.useState('');
  const [goal, setgoal] = React.useState('');
  const [roleType, setroleType] = React.useState('');
  const { zestyProductionMode } = content || {};
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
    await window.pendo.initialize({
      visitor,
    });
    setrole(e.value);
    setroleType(e.type);
    await updateUser('persona', e.value);
    handleNext();
  };
  const handleProject = async (e) => {
    setprojectType(e.value);
    await updateUser('projectType', e.value);
    handleNext();
  };
  const handleProjectName = async (e) => {
    setprojectName(e.projectName);
    await updateUser('projectName', e.value);
    handleNext();
  };

  const handleUserType = async (e) => {
    setuserType(e.value);
    await updateUser('userType', e.value);
    handleNext();
  };

  const handleGoals = async (e) => {
    setgoal(e.value);
    await updateUser('goal', e.value);
    handleNext();
  };
  const handlePrefFramework = async (e) => {
    setframework(e.value);
    await updateUser('preferred_framework', e.value);
    handleNext();
  };
  const handlePrefCompSystem = async (e) => {
    await updateUser('preferred_component_system', e.value);
    setcomponentSystem(e.value);
    handleNext();
  };
  const handleCompanyDetails = async (e) => {
    // console.log(e, 4444);
    setcompany(e.company);
    await updateUser('company', e.company);
    handleNext();
    // setCookie('projectName', projectName);
  };

  const handleDemoForm = async (e) => {
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
  };

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
    if (zestyProductionMode) {
      handleZoho(obj);
    }
  }, [
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
      })}
    >
      <h1>on boarding</h1>
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
        <Grid item xs={12} px={10} py={10}>
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
            {hasPersona && (
              <SwiperSlide>
                <Questionaire
                  title="What is your role?"
                  data={roleList}
                  onClick={handleRole}
                />
              </SwiperSlide>
            )}

            {roleType !== 'decision-maker' && hasProjectName && (
              <SwiperSlide>
                <ProjectNameForm onSubmit={handleProjectName} />
              </SwiperSlide>
            )}

            {roleType === 'decision-maker' && (
              <SwiperSlide>
                <DemoForm onSubmit={handleDemoForm} />
              </SwiperSlide>
            )}

            {hasProjectName && (
              <SwiperSlide>
                <Questionaire
                  title="What are you creating today?"
                  data={isDeveloper ? devProjects : nonDevProjects}
                  onClick={handleProject}
                />
              </SwiperSlide>
            )}

            {hasUserType && (
              <SwiperSlide>
                <Questionaire
                  title="Who is this project for?"
                  data={userTypeList}
                  onClick={handleUserType}
                />
              </SwiperSlide>
            )}

            {isBusiness && hasCompany && (
              <SwiperSlide>
                <CompanyDetails onSubmit={handleCompanyDetails} />
              </SwiperSlide>
            )}

            {hasGoal && (
              <SwiperSlide>
                {' '}
                <Questionaire
                  title="What is your top priority?"
                  data={goalsList}
                  onClick={handleGoals}
                />
              </SwiperSlide>
            )}

            {isDeveloper && hasPreferredFramework && (
              <SwiperSlide>
                <Questionaire
                  title="Preferred Framework"
                  data={frameworkList}
                  onClick={handlePrefFramework}
                />
              </SwiperSlide>
            )}

            {isDeveloper && hasPreferredComponentSystem && (
              <SwiperSlide>
                <Questionaire
                  title="Preferred Component System"
                  data={componentsSystemList}
                  onClick={handlePrefCompSystem}
                />
              </SwiperSlide>
            )}

            {isBusiness && (
              <SwiperSlide>
                <InviteTeam
                  emails={emails}
                  setemails={setemails}
                  handleNext={handleNext}
                />
              </SwiperSlide>
            )}

            <SwiperSlide>
              <SwipeCompContainer>
                <Onboarding />
              </SwipeCompContainer>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
};

export const MissingQuestions = React.memo(Index);
