// REact and MUI Imports
import { React, useEffect, useState, useRef, useCallback } from 'react';
import { useTheme } from '@emotion/react';
import { Container, Box, Button, Grid, Typography } from '@mui/material';

// confetti
import Confetti from 'react-confetti'
import getWindowDimensions from 'components/marketing/Join/getWindowDimensions';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import slides
import { SlideQuestions } from 'components/marketing/Join/SlideQuestions';
import { SlideMessage } from 'components/marketing/Join/SlideMessage';
import { DancingLogo } from 'components/marketing/Join/DancingLogo';
import { Signup } from 'components/marketing/Join/Signup';
import { WelcomeScreen } from 'components/marketing/Join/WelcomeScreen';

// zoho object
import { zohoPostObject } from 'components/marketing/Join/zohoPostObject.js'
import { setCookie } from 'cookies-next';

// pendo
import  { pendoScript }  from 'components/marketing/Join/pendoScript.js'

// slack post function
import slackQuestionPost from 'components/marketing/Join/slackQuestionPost.js';
import slackNotify from 'components/marketing/Join/slackNotify.js';

// google analytics
import * as ga from 'lib/ga'

// questions data 
import RoleQuestions from 'components/marketing/Join/Data/RoleQuestions'
import ProjectQuestions from 'components/marketing/Join/Data/ProjectQuestions'
import CMSQuestions from 'components/marketing/Join/Data/CMSQuestions'

// onboarding
import Onboarding from 'components/marketing/Join/Onboarding'

// messages
const firstMessage = <Box paddingY={4} sx={{textAlign: 'center'}}>
    <Typography variant="h4" gutterBottom>Hello!</Typography>
    <Typography variant="h6">We are excited for you to explore Zesty.</Typography>
    <Box paddingY={1}>
        <Typography variant="p"> To help onboard you, can we ask two questions?</Typography>
    </Box>
</Box>;


const firstButton = `Yes, let's go!`;



// zoho lead post function

const postToZOHO = async (payloadJSON) => {
    dataLayer.push({'event': 'SignupLead', value: "1"});
    try {
        let res = await fetch('https://us-central1-zesty-prod.cloudfunctions.net/zoho', {
            method: 'POST',
            body: JSON.stringify(payloadJSON),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await res.json()
    } catch(error) {
        throw new Error(`HTTP error: ${error}`);
    }
};

// Join component

export default function Join(props) {
    const theme = useTheme();
    const { height, width } = getWindowDimensions();
    const isProduction = process.env.PRODUCTION || process.env.PRODUCTION === 'true'

    // state values for form capture
    const [role, setRole] = useState('Developer');
    const [email, setEmail] = useState('..still capturing email');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [projectType, setProjectType] = useState('website');
    const [currentAnimation, setCurrentAnimation] = useState('rollIn');
    const [userObject, setUserObject] = useState({});
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    // moves user forward a slide in the onboard process
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
      setCurrentAnimation('still');

    }, []);

    const welcomeMessage = <Box paddingY={4} sx={{textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>Welcome to Zesty {firstName}!</Typography>
        </Box>;

    // captures the user question 
    const handleAnswers = async (question,answer,store=false) => {
        ga.event({
            action: "click",
            params : {
              question: question,
              answer: answer
            }
          })
        if(store !== false){
            if(store=='role') { setRole(answer); setCookie('persona',answer) }
            if(store=='projectType') { setProjectType(answer); }
        }
        
        setCurrentAnimation('jiggle');
        handleNext();
        await slackQuestionPost(question,answer,email)
    }

    const stringifyLead = (obj) => {
        let str = '';
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                str += key + ": " + obj[key] + '\n';
            }
        }
        return str;
    }
    // creates a zesty user and send data into ZOHO leads
    const signUpSuccess = async  (userDetails, creationObect) => {
        // send user forward visually, then capture their data
        handleNext();
        // store email and user to state
        setEmail(userDetails.email);
        setFirstName(userDetails.firstName);
        setLastName(userDetails.lastName);
        setUserObject(creationObect);

        // notify the team in slack
        await slackNotify(`Captured: ${userDetails.email}`)
        // map additional userDetails for zoho object
        userDetails.message = `Project type: ${projectType}`;
        // instantiate zoho object
        userDetails.user = true;
        // setup zoho object 
        let zohoLeadObject = zohoPostObject(userDetails,'Trial','Trial','Unknown', 'Website',role);
        // zoho capture backup
        slackNotify(`ZOHO lead slack fallback info: \n ${stringifyLead(zohoLeadObject)}`)
        // post lead to zoho
        let zohoData = await postToZOHO(zohoLeadObject)
        let zoholeadlink = 'https://one.zoho.com/zohoone/zestyio/home/cxapp/crm/org749642405/tab/Leads/'
        await slackNotify(`View lead for ${userDetails.email} on ZOHO @ ${zoholeadlink}${zohoData.data[0].details.id}`)
        setCurrentAnimation('party');
        
        
    }

    // leaves the onboard program
    const handleExit = () => {
        window.location = '/'
    }

    const handleInvite = () => {
        alert('Invite Friends')
    }

    const handlePrompt = () => {
        setCurrentAnimation('bouncing');
        handleNext();
    }

    // modifies the logo animation
    const handleAnimation = (ani) => {
        setCurrentAnimation(ani)
    }

    // sx={{background: theme.palette.zesty.zestyDarkBlue}}
    return (
        <Box >
            {pendoScript}
            {currentAnimation == 'party' &&
             <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={333}
                    recycle={false}
                    confettiSource={{ x: ((width / 2) - 100), y: 0, w: 200, h: 200 }}
                    onConfettiComplete={() => setCurrentAnimation('still')}
                    
                  />}
            <DancingLogo animation={currentAnimation} />
            <Swiper
                
                ref={sliderRef}
                autoHeight={false}
                navigation={false}
                pagination={{ clickable: false, draggable: false, type: "none" }}
                scrollbar={{ draggable: false }}
                modules={[Pagination, Navigation]}
                // remove this when testing
                allowTouchMove={isProduction ? false : true}

            >
                <SwiperSlide > 
                  

                    <SlideMessage 
                        message={firstMessage} 
                        buttonText={firstButton} 
                        exitButtonText={'No, get me out of here!'}
                        exitButtonAction={handleExit}
                        answerCallBack={handlePrompt} 
                        hoverAnimation={handleAnimation}
                        
                    />
                </SwiperSlide>
                {/* Question 1  */}
                <SwiperSlide>
                    <Grid container>
                        <Grid item lg={12} md={12} xs={12}>
                            <SlideQuestions 
                                question={RoleQuestions.question} 
                                why={RoleQuestions.why} 
                                answers={RoleQuestions.answers} 
                                answerCallBack={handleAnswers}
                                hoverAnimation={handleAnimation}
                                storeValue='role'
                                />
                        </Grid>
                    </Grid>
                </SwiperSlide>
                {/* Question 2  */}
                <SwiperSlide>
                    <SlideQuestions 
                        question={ProjectQuestions.question} 
                        why={ProjectQuestions.why} 
                        answers={ProjectQuestions.answers} 
                        answerCallBack={handleAnswers} 
                        hoverAnimation={handleAnimation} 
                        storeValue='projectType'
                        />
                </SwiperSlide>
                {/* Signup  */}
                <SwiperSlide>
                    <Signup 
                        message={<Box><Box sx={{fontWeight:'bold'}} display='inline'>Awesome!</Box> Let's start on your <Box sx={{fontWeight:'bold'}} display='inline'>{projectType}</Box> project.</Box>} 
                        callback={signUpSuccess}
                        />
                </SwiperSlide>
                {/* Welcome  */}
                <SwiperSlide> 

                    <WelcomeScreen
                        firstname={firstName}
                        lastname={lastName}
                        email={firstName}
                        role={role}
                        projectType={projectType}
                        userZUID={userObject?.data?.ZUID}
                        dateCreated={new Date().toUTCString()}
                        >
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
                </SwiperSlide>
                {/* Onboarding */}
                <SwiperSlide>
                    <Onboarding role={role} />
                </SwiperSlide>
            </Swiper>
        
        </Box>
       
    )
}



export async function getServerSideProps({ res }) {
    // does not display with npm run dev
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=600, stale-while-revalidate=3600',
    );
    let data = {}
    
    // Pass data to the page via props
    return { props: data };
}
