// REact and MUI Imports
import { useState, useRef, useCallback } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

// confetti
import Confetti from 'react-confetti';
import getWindowDimensions from 'components/marketing/Start/getWindowDimensions';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import slides
import { SlideQuestions } from 'components/marketing/Start/SlideQuestions';
import { Signup } from 'components/marketing/Start/Signup';

// zoho object
import { zohoPostObject } from 'components/marketing/Start/zohoPostObject.js';
import { setCookie } from 'cookies-next';

// pendo
import { pendoScript } from 'components/marketing/Start/pendoScript.js';

// slack post function
import slackQuestionPost from 'components/marketing/Start/slackQuestionPost.js';
import slackNotify from 'components/marketing/Start/slackNotify.js';

// google analytics
import * as ga from 'lib/ga';

// questions data
import RoleQuestions from 'components/marketing/Start/Data/RoleQuestions';
import { SelectTemplate } from 'components/marketing/Start/Start/SelectTemplate';
import { ProjectDetails } from 'components/marketing/Start/Start/ProjectDetails';
import { NavigationStart } from 'components/marketing/Start/NavigationStart';
import { NavStartData } from 'components/marketing/Start/Data/NavStartData';
import { ChooseTechStack } from 'components/marketing/Start/Start/ChooseTechStack';

// onboarding
// import Onboarding from 'components/marketing/Start/Onboarding';

// messages
const firstMessage = (
  <Box paddingY={4} sx={{ textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>
      Hello!
    </Typography>
    <Typography variant="h6">
      We are excited for you to explore Zesty.
    </Typography>
    <Box paddingY={1}>
      <Typography variant="p">
        {' '}
        To help onboard you, can we ask two questions?
      </Typography>
    </Box>
  </Box>
);

const firstButton = `Yes, let's go!`;

// zoho lead post function

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

// Start component

export default function Start(props) {
  const theme = useTheme();
  const { height, width } = getWindowDimensions();
  const isProduction = props.production;

  const [repository, setrepository] = useState('');
  // state values for form capture
  const [role, setRole] = useState('Developer');
  const [email, setEmail] = useState('..still capturing email');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [projectType, setProjectType] = useState('website');
  const [currentAnimation, setCurrentAnimation] = useState('enterScreen'); // set starting animation
  const [userObject, setUserObject] = useState({});
  const sliderRef = useRef(null);

  // state values for left guide
  const [title, setTitle] = useState(`Let's begin your Zesty Journey`);
  const [description, setDescription] = useState(
    'We are here to guide you every step fo the way.',
  );
  const [steps, setSteps] = useState(4);
  const [currentStep, setCurrentStep] = useState(1);

  const handlePrev = useCallback(() => {
    console.log(currentStep, 555);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, [currentStep]);

  // moves user forward a slide in the onboard process
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    setCurrentAnimation('still');
  }, []);

  const welcomeMessage = (
    <Box paddingY={4} sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Zesty {firstName}!
      </Typography>
    </Box>
  );

  // captures the user question
  const handleAnswers = async (question, answer, store = false) => {
    ga.event({
      action: 'click',
      params: {
        question: question,
        answer: answer,
      },
    });
    if (store !== false) {
      if (store == 'role') {
        setRole(answer);
        setCookie('persona', answer);
      }
      if (store == 'projectType') {
        setProjectType(answer);
      }
    }

    setCurrentAnimation('jiggle');
    handleNext();
    setCurrentStep(2);
    if (isProduction === true) {
      await slackQuestionPost(question, answer, email);
    }
  };

  const handleSelectTemplate = (repository) => {
    setrepository(repository);
    handleNext();
    setCurrentStep(3);
  };
  const hanldeChooseTechStack = () => {
    handleNext();
    setCurrentStep(5);
  };
  const stringifyLead = (obj) => {
    let str = '';
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        str += key + ': ' + obj[key] + '\n';
      }
    }
    return str;
  };
  // creates a zesty user and send data into ZOHO leads
  const signUpSuccess = async (userDetails, creationObect) => {
    // send user forward visually, then capture their data
    handleNext();
    setCurrentAnimation('party');

    // store email and user to state
    setEmail(userDetails.email);
    setFirstName(userDetails.firstName);
    setLastName(userDetails.lastName);
    setUserObject(creationObect);

    // notify the team in slack
    if (isProduction === true) {
      await slackNotify(`Captured: ${userDetails.email}`);
    }
    // map additional userDetails for zoho object
    userDetails.message = `Project type: ${projectType}`;
    // instantiate zoho object
    userDetails.user = true;
    // setup zoho object
    let zohoLeadObject = zohoPostObject(
      userDetails,
      'Trial',
      'Trial',
      'Unknown',
      'Website',
      role,
      creationObect.data.ZUID,
    );
    // zoho capture backup
    if (isProduction === true) {
      slackNotify(
        `ZOHO lead slack fallback info: \n ${stringifyLead(zohoLeadObject)}`,
      );
    }
    // post lead to zoho
    if (isProduction === true) {
      let zohoData = await postToZOHO(zohoLeadObject);
      let zoholeadlink =
        'https://one.zoho.com/zohoone/zestyio/home/cxapp/crm/org749642405/tab/Leads/';
      await slackNotify(
        `View lead for ${userDetails.email} on ZOHO @ ${zoholeadlink}${zohoData.data[0].details.id}`,
      );
    } else {
      console.log('post object not sent', zohoLeadObject);
    }

    // welcome screen auto skip!
    setTimeout(() => {
      handleNext();
    }, 5000);
  };

  // leaves the onboard program
  const handleExit = () => {
    window.location = '/';
  };

  const handleInvite = () => {
    alert('Invite Friends');
  };

  const handlePrompt = () => {
    setCurrentAnimation('bouncing');
    handleNext();
  };

  // modifies the logo animation
  const handleAnimation = (ani) => {
    setCurrentAnimation(ani);
  };

  const nagivationProps = {
    theme,
    handlePrev,
    currentStep,
    steps,
    title,
    description,
  };

  React.useEffect(() => {
    setDescription(
      NavStartData.find((e) => e.step === currentStep)?.description,
    );
    setTitle(NavStartData.find((e) => e.step === currentStep)?.title);
  }, [currentStep]);

  return (
    <Box
      sx={{
        height: '100vh',
        background: theme.palette.zesty.zestyDarkBlue,
        position: 'relative',
      }}
    >
      <Grid container height={1}>
        {/* Navigation Description Guide */}
        <NavigationStart {...nagivationProps} /> {/* Slider Expereince  */}
        <Grid
          item
          xs={12}
          md={9}
          height={1}
          sx={{
            background: theme.palette.common.white,
            borderTopLeftRadius: '120px',
          }}
        >
          {pendoScript}
          {currentAnimation == 'party' && (
            <Confetti
              width={width}
              height={height}
              numberOfPieces={333}
              recycle={false}
              confettiSource={{ x: width / 2 - 100, y: 0, w: 200, h: 200 }}
              onConfettiComplete={() => setCurrentAnimation('still')}
            />
          )}
          {/* <DancingLogo animation={currentAnimation} /> */}
          <Swiper
            ref={sliderRef}
            autoHeight={false}
            navigation={false}
            pagination={{ clickable: false, draggable: false, type: 'none' }}
            scrollbar={{ draggable: false }}
            modules={[Pagination, Navigation]}
            // remove this when testing
            allowTouchMove={isProduction === true ? false : true}
          >
            {/* Step 1: persona question */}
            <SwiperSlide>
              <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                  <SlideQuestions
                    question={RoleQuestions.question}
                    why={RoleQuestions.why}
                    answers={RoleQuestions.answers}
                    answerCallBack={handleAnswers}
                    hoverAnimation={handleAnimation}
                    storeValue="role"
                  />
                </Grid>
              </Grid>
            </SwiperSlide>
            {/* Step 2: Select a Template  */}
            <SwiperSlide>
              <SelectTemplate
                production={props.production}
                handleSelectTemplate={handleSelectTemplate}
                title="What kind of project do you want to build?"
                description={
                  'Create from a blank project or start from a schema template'
                }
              />
            </SwiperSlide>
            {/* Step 3: Signup  */}
            {/* <SwiperSlide>
              <Signup
                message={
                  <Box>
                    <Box sx={{ fontWeight: 'bold' }} display="inline">
                      Awesome!
                    </Box>{' '}
                    {`Let's start on your`}
                    <Box sx={{ fontWeight: 'bold' }} display="inline">
                      {projectType}
                    </Box>{' '}
                    project.
                  </Box>
                }
                callback={signUpSuccess}
                production={isProduction}
              />
            </SwiperSlide> */}
            {/* Removing: Welcome - we need move the pendo capture script to post create  */}
            {/* <SwiperSlide>
              <WelcomeScreen
                firstname={firstName}
                lastname={lastName}
                email={firstName}
                role={role}
                projectType={projectType}
                userZUID={userObject?.data?.ZUID}
                dateCreated={new Date().toUTCString()}
              >
                {welcomeMessage}
                <SlideMessage 
                                message={welcomeMessage}
                                buttonText={`Let's go!`} 
                                // exitButtonText={'Wait, let me invite my team.'}
                                exitButtonAction={handleInvite}
                                answerCallBack={handlePrompt} 
                                hoverAnimation={handleAnimation}
                                exitButtonText={''}
                                
                            />
              </WelcomeScreen>
            </SwiperSlide> */}
            {/* Step 4: enter project details, on continue it creates an instance */}
            <SwiperSlide>
              <ProjectDetails
                title={'Project Details'}
                description="You can change these details after"
                repository={repository}
                handleNext={handleNext}
                setCurrentStep={() => setCurrentStep(4)}
              />
            </SwiperSlide>
            {/* Step 5: Technilogy selection Onboarding */}
            <SwiperSlide>
              <ChooseTechStack
                title={'Choose your tech stack'}
                description="This will help us guide you through your onboarding experience better"
                handleNext={handleNext}
                hanldeChooseTechStack={hanldeChooseTechStack}
              />
              {/* <SlideQuestions
                question={ProjectQuestions.question}
                why={ProjectQuestions.why}
                answers={ProjectQuestions.answers}
                answerCallBack={handleAnswers}
                hoverAnimation={handleAnimation}
                storeValue="projectType"
              /> */}
            </SwiperSlide>
            <SwiperSlide>
              <Signup
                message={
                  <Box>
                    <Box sx={{ fontWeight: 'bold' }} display="inline">
                      Awesome!
                    </Box>{' '}
                    {`Let's start on your`}
                    <Box sx={{ fontWeight: 'bold' }} display="inline">
                      {projectType}
                    </Box>{' '}
                    project.
                  </Box>
                }
                callback={signUpSuccess}
                production={isProduction}
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps({ res }) {
  // does not display with npm run dev
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=3600',
  );
  let data = {
    production:
      process.env.PRODUCTION == 'true' || process.env.PRODUCTION === true
        ? true
        : false,
  };

  // Pass data to the page via props
  return { props: data };
}
