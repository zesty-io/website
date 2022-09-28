// REact and MUI Imports
import { useState, useRef, useCallback } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Grid } from '@mui/material';
import React from 'react';

// confetti
import Confetti from 'react-confetti';
import getWindowDimensions from 'components/marketing/Start/getWindowDimensions';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

import { NavigationStart } from 'components/marketing/Start/NavigationStart';
import { NavStartData } from 'components/marketing/Start/Data/NavStartData';
import { useZestyStore } from 'store';
import { Scenarios } from 'components/marketing/Start/Data/Scenarios';

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

export default function Start(props) {
  const { userAppSID, template } = useZestyStore();
  const theme = useTheme();
  const { height, width } = getWindowDimensions();
  const isProduction = props.production;
  const [token, settoken] = useState(userAppSID);

  const [scenario, setscenario] = React.useState(1);
  const [repository, setrepository] = useState(template);
  const [instanceZUID, setinstanceZUID] = useState('');
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
  const [steps, setSteps] = useState(5);
  const [currentStep, setCurrentStep] = useState(1);

  const handlePrev = useCallback(() => {
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
    setCurrentStep(currentStep + 1);
    if (isProduction === true) {
      await slackQuestionPost(question, answer, email);
    }
  };

  const handleSelectTemplate = (repository) => {
    setrepository(repository);
    handleNext();
    setCurrentStep(currentStep + 1);
  };
  const hanldeChooseTechStack = () => {
    window.location.replace(`/instances/${instanceZUID}`);
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
    setCurrentStep(currentStep + 1);

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

  const scenarioProps = {
    sliderRef,
    isProduction,
    props,
    handleSelectTemplate,
    repository,
    handleNext,
    token,
    setCurrentStep,
    hanldeChooseTechStack,
    setinstanceZUID,
    settoken,
    handleAnswers,
    handleAnimation,
    projectType,
    signUpSuccess,
    setscenario,
    currentStep,
  };

  const ScenarioSwitch = () => {
    const isTemplate = Object.keys(template).length !== 0 ? true : false;
    if (!isTemplate && token) {
      return <Scenarios.Scenario2 {...scenarioProps} />;
    } else if (isTemplate && !token) {
      return <Scenarios.Scenario3 {...scenarioProps} />;
    } else if (isTemplate && token) {
      return <Scenarios.Scenario4 {...scenarioProps} />;
    } else if (!isTemplate && !token) {
      return <Scenarios.Scenario1 {...scenarioProps} />;
    } else {
      return <Scenarios.Scenario1 {...scenarioProps} />;
    }
  };

  React.useEffect(() => {
    setDescription(
      NavStartData(scenario).find((e) => e.step.id === currentStep)
        ?.description,
    );
    setTitle(
      NavStartData(scenario).find((e) => e.step.id === currentStep)?.title,
    );
  }, [currentStep, scenario]);

  React.useEffect(() => {
    console.log(scenario, 4444);
    if (scenario === 1) setSteps(5);
    if (scenario === 2) setSteps(3);
    if (scenario === 3) setSteps(3);
    if (scenario === 4) setSteps(2);
  }, [scenario]);

  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestyDarkBlue,
        position: 'relative',
      }}
    >
      <Grid container height={1}>
        {/* Navigation Description Guide */}
        <NavigationStart {...nagivationProps} /> {/* Slider Expereince  */}
        <Grid item xs={0} md={3}></Grid>
        <Grid
          item
          xs={12}
          md={9}
          height={1}
          sx={{
            background: theme.palette.common.white,
            borderTopLeftRadius: '120px',
            overflow: 'hidden',
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
          {ScenarioSwitch()}
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
