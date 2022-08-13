// REact and MUI Imports
import { React, useEffect, useState, useRef, useCallback } from 'react';
import { useTheme } from '@emotion/react';
import { Container, Box, Button, Grid, Typography } from '@mui/material';

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

// slack post function
import slackQuestionPost from 'components/marketing/Join/slackQuestionPost.js';
import slackNotify from 'components/marketing/Join/slackNotify.js';

// google analytis
import * as ga from 'lib/ga'


// messages
const firstMessage = <>
    <Typography variant="h2">Hi there!</Typography>
    <Typography variant="h6">We are excited for you to explore Zesty ;)</Typography>
    <Box paddingY={1}>
        <Typography variant="p"> To help onboard you, may we ask two questions?</Typography>
    </Box>
</>;
const firstButton = `Yes, Let's Go!`;
const firstQuestion = "What team are you on?";
const firstAnswers = [
    {
        answer: 'Development',
        value: 'developer'
    },
    {
        answer: 'Marketing',
        value: 'marketer'
    },
    {
        answer: 'Management',
        value: 'manager'
    }
];

const secondQuestion = "What are you building?";
const secondAnswers = [
    {
        answer: 'Website',
        value: 'website'
    },
    {
        answer: 'Landing Page',
        value: 'landing-page'
    },
    {
        answer: 'Ecommerce',
        value: 'ecommerce'
    },
    {
        answer: 'App',
        value: 'app'
    },
    {
        answer: 'IoT Project',
        value: 'iot'
    },
    {
        answer: 'All Those Things ;)',
        value: 'all'
    },

];

 // for everyone
const thirdQuestion = "What CMS are you currently using?";
const thirdAnswers = [
    {
        answer: 'Wordpress',
        value: 'wordpress'
    },
    {
        answer: 'Drupal / Acquia',
        value: 'drupal'
    },
    {
        answer: 'Contentful',
        value: 'contentful'
    },
    {
        answer: 'Prismic',
        value: 'prismic'
    },
    {
        answer: 'Strapi',
        value: 'strapi'
    },
    {
        answer: 'GraphCMS / Hygraph',
        value: 'graphcms'
    },
    {
        answer: 'Kentico',
        value: 'kentico'
    },
    {
        answer: 'Webflow / Wix / Weebly',
        value: 'other'
    },
    {
        answer: 'Other / Custom',
        value: 'other'
    },
    {
        answer: 'Content Stack',
        value: 'kentico'
    },
    {
        answer: 'Adobe',
        value: 'adobe'
    }
];


// on if developer was picked

const fourthQuestion = "What Technologies are you using?";
const fourthAnswers = [
    {
        answer: 'React / Next.js / Gatsby',
        value: 'react'
    },
    {
        answer: 'Vue / Nuxt',
        value: 'vue'
    },
    {
        answer: 'PHP',
        value: 'php'
    },
    {
        answer: 'Node.js',
        value: 'node'
    },    
    {
        answer: 'Traditional HTML/Javascript',
        value: 'traditional'
    },
    {
        answer: '.Net',
        value: 'node'
    },      
];


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

    // state values for form capture
    const [role, setRole] = useState('Unknown');
    const [email, setEmail] = useState('..still capturing email');
    const [projectType, setProjectType] = useState('Unknown');
    const [currentAnimation, setCurrentAnimation] = useState('rollIn');

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
    const signUpSuccess = async  (userDetails) => {
        // send user forward visually, then capture their data
        handleNext();
        //store email to state
        setEmail(userDetails.email);
        // notify the team in slack
        await slackNotify(`Captured: ${userDetails.email}`)
        // map additional userDetails for zoho object
        userDetails.message = `Project type: ${projectType}`;
        // instantiate zoho object
        userDetails.user = true;
        // setup zoho object 
        let zohoLeadObject = zohoPostObject(userDetails);
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


    return (
        <Box>
            <DancingLogo animation={currentAnimation} />
            <Swiper
                pagination={{
                type: "progressbar",
                }}
                ref={sliderRef}
                navigation={false}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide> 
                    <Grid container>  
                        <Grid item lg={7} md={7} xs={12}>
                            <WelcomeScreen />
                        </Grid>  
                        <Grid item lg={5} md={5} xs={12}>
                            <Container sx={{padding: '5em'}}>

                                <SlideMessage 
                                    message={firstMessage} 
                                    buttonText={firstButton} 
                                    exitButtonText={'No, get me outta here!'}
                                    exitButtonAction={handleExit}
                                    answerCallBack={handlePrompt} 
                                    hoverAnimation={handleAnimation}
                                    
                                />
                            </Container>
                        </Grid>
                    
                    </Grid>
                </SwiperSlide>
                {/* Question 1  */}
                <SwiperSlide>
                    <Grid container>
                        <Grid item lg={6} md={6} xs={12}>
                            <SlideQuestions 
                                question={firstQuestion} 
                                answers={firstAnswers} 
                                answerCallBack={handleAnswers}
                                hoverAnimation={handleAnimation}
                                storeValue='role'
                                />
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                        What is Zesty component
                        </Grid>
                    </Grid>
                </SwiperSlide>
                {/* Question 2  */}
                <SwiperSlide>
                    <SlideQuestions 
                        question={secondQuestion} 
                        answers={secondAnswers} 
                        answerCallBack={handleAnswers} 
                        hoverAnimation={handleAnimation} 
                        storeValue='projectType'
                        />
                </SwiperSlide>
                {/* Signup  */}
                <SwiperSlide>
                    <Signup 
                        message="Thanks, now let's get your started!." 
                        callback={signUpSuccess}
                        />
                </SwiperSlide>
                <SwiperSlide> 
                    <Grid container>  
                        
                        <Grid item lg={5} md={5} xs={12}>
                            <Container sx={{padding: '5em'}}>

                                <SlideMessage 
                                    message={<h1>Welcome to Zesty!</h1>}
                                    buttonText={`Let's Go!`} 
                                    exitButtonText={'Wait, let me invite friends ;)'}
                                    exitButtonAction={handleInvite}
                                    answerCallBack={handlePrompt} 
                                    hoverAnimation={handleAnimation}
                                    
                                />
                            </Container>
                        </Grid>
                    
                    </Grid>
                </SwiperSlide>
                
                
                <SwiperSlide>
                    <>
                        <SlideQuestions question={thirdQuestion} answers={thirdAnswers} answerCallBack={handleAnswers} hoverAnimation={handleAnimation} />
                        <Button onClick={handleNext}  variant="outlined">Skip</Button>
                    </>
                </SwiperSlide>
                <SwiperSlide>NPM starter, Youtube Video, Join Community Chat, Talk to an onbording specialist</SwiperSlide>
            </Swiper>
        
        </Box>
       
    )
}