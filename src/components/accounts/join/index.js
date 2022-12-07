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
import { ResourcesCard } from './ResourceCard';
import { pendoScript } from 'components/marketing/Start/pendoScript';
import { FormInput, SubmitBtn, SuccessMsg } from '../ui';
import { useFormik } from 'formik';
import { accountsValidations } from '../validations';

const frameworkList = [
  { label: 'Parsely/Zesty', value: 'parsely' },
  { label: 'NextJs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'PHP/Laravel', value: 'php' },
  { label: 'HTML/jQuery', value: 'html' },
  { label: 'NodeJS', value: 'nodejs' },
  { label: 'Hugo', value: 'hugo' },
  { label: 'Gatsby', value: 'gatsby' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Remix', value: 'remix' },
  { label: 'Astro', value: 'astro' },
  { label: 'Other', value: 'other' },
];

const componentsSystemList = [
  { label: 'Bootstrap', value: 'bootstrap' },
  { label: 'Material UI', value: 'material ui' },
  { label: 'Tailwind', value: 'tailwind' },
  { label: 'Bulma', value: 'bulma' },
  { label: 'Foundation', value: 'foundation' },
  { label: 'Chakra UI', value: 'chakra ui' },
  { label: 'Other', value: 'other' },
];

const roleList = [
  { label: 'Marketer', value: 'marketer', type: 'influencer' },
  { label: 'Developer', value: 'developer', type: 'influencer' },
  { label: 'Content Creator', value: 'content creator', type: 'influencer' },
  { label: 'Business Lead', value: 'business lead', type: 'decision-maker' },
  {
    label: 'Development Leader',
    value: 'development leader',
    type: 'decision-maker',
  },
  {
    label: 'Marketing Leader',
    value: 'marketing leader',
    type: 'decision-maker',
  },
  {
    label: 'Project Manager',
    value: 'project manager',
    type: 'decision-maker',
  },
  {
    label: 'Product Manager',
    value: 'product manager',
    type: 'decision-maker',
  },
];

const goalsList = [
  { label: 'Personalization', value: 'personalization' },
  { label: 'SEO', value: 'seo' },
  { label: 'Marketing Autonomy', value: 'marketing autonomy' },
  { label: 'A/B Testing', value: 'a/b testing' },
  { label: 'Multi-site', value: 'multi-site' },
  { label: 'Multi-lang(globalization)', value: 'multi-lang' },
  { label: 'Product Activation', value: 'product activation' },
  { label: 'Developer Flexibility', value: 'developer flexibility' },
];
const devProjects = [
  { label: 'App', value: 'app' },
  { label: 'Headless Website', value: 'headless website' },
  { label: 'Hybrid Website', value: 'hybrid website' },
  { label: 'Other Headless Project', value: 'other headless project' },
];
const nonDevProjects = [
  { label: 'Website', value: 'website' },
  { label: 'Blog', value: 'blog' },
  { label: 'App', value: 'app' },
];

const projectTypeList = [
  { label: 'Personal', value: 'personal' },
  { label: 'Business', value: 'business' },
];

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
          <FormInput
            label="Project Description"
            name={'projectDescription'}
            formik={formik}
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

const CompanyDetails = ({ projectName, setprojectName, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <SwipeCompContainer>
      <Typography variant="h4" color="text.secondary">
        {`What is your company's name?`}
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
        onClick={handleClick}
      >
        Next
      </LoadingButton>
    </SwipeCompContainer>
  );
};

const InviteTeam = ({ emails, setemails, handleNext }) => {
  return (
    <SwipeCompContainer>
      <Typography variant="h4" color="text.secondary">
        Invite your Team
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
  );
};

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
    console.log(error);
    // throw new Error(`HTTP error: ${error}`);
  }
};

const Index = ({ content }) => {
  const [preferred_framework, setframework] = React.useState('');
  const [preferred_component_system, setcomponentSystem] = React.useState('');
  const [goal, setgoal] = React.useState('');
  const [roleType, setroleType] = React.useState('');
  const [projectType, setprojectType] = React.useState('');
  const { zestyProductionMode } = content || {};
  const {
    userInfo,
    ZestyAPI,
    role,
    setrole,
    project,
    setproject,
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
    projecttype: project,
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
    // await window.pendo.initialize({
    //   visitor,
    // });
    setrole(e.value);
    setroleType(e.type);
    await updateUser('persona', e.value);
    handleNext();
  };
  const handleProject = async (e) => {
    setproject(e.value);
    await updateUser('project', e.value);
    handleNext();
  };

  const handleProjectType = async (e) => {
    setprojectType(e.value);
    await updateUser('projectType', e.value);
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
  const handleCompanyDetails = async () => {
    setcompany(projectName);
    await updateUser('company', company);
    handleNext();
    // setCookie('projectName', projectName);
  };

  const handleDemoForm = (e) => {
    setprojectDescription(e?.projectDescription);
    setcompany(e?.company);
    setphoneNumber(e?.phoneNumber);

    SuccessMsg({
      title: 'Success',
      action: () => {
        window.location.reload();
      },
    });
  };

  const isDeveloper = role === 'developer' ? true : false;
  const isBusiness = projectType === 'business' ? true : false;

  const zohoObj = {
    ...userInfo,
    project,
    projectType,
    goal,
    company,
    preferred_framework,
    preferred_component_system,
    role,
    phoneNumber,
    projectDescription,
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
    project,
    projectType,
    goal,
    company,
    preferred_framework,
    preferred_component_system,
    role,
    phoneNumber,
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
            <SwiperSlide>
              <Questionaire
                title="What is your role?"
                data={roleList}
                onClick={handleRole}
              />
            </SwiperSlide>

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
              />
            </SwiperSlide>

            <SwiperSlide>
              <Questionaire
                title="Who is this project for?"
                data={projectTypeList}
                onClick={handleProjectType}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Questionaire
                title="What are your most important goals?"
                data={goalsList}
                onClick={handleGoals}
              />
            </SwiperSlide>

            {isDeveloper && (
              <SwiperSlide>
                <Questionaire
                  title="Preferred Framework"
                  data={frameworkList}
                  onClick={handlePrefFramework}
                />
              </SwiperSlide>
            )}

            {isDeveloper && (
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
                <CompanyDetails
                  projectName={projectName}
                  setprojectName={setprojectName}
                  onClick={handleCompanyDetails}
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
