import { React, useEffect, useState, useRef, useCallback } from 'react';
import { useTheme } from '@emotion/react';
import { Container, Box, Grid, Typography } from '@mui/system';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SlideQuestions } from 'components/marketing/Join/SlideQuestions';
import { SlideMessage } from 'components/marketing/Join/SlideMessage';
import { DancingLogo } from 'components/marketing/Join/DancingLogo';
import { Signup } from 'components/marketing/Join/Signup';




const firstMessage = 'Hello! We are exicted to have you join Zesty. We have 2 questions for you before we start.';
const firstButton = `Ok, Let's Go!`;
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
        answer: 'Headless Website',
        value: 'headless'
    },
    {
        answer: 'Traditional Website',
        value: 'marketer'
    },
    {
        answer: 'Ecommerce',
        value: 'ecommerce'
    },
    {
        answer: 'Mobile App',
        value: 'app'
    },
    {
        answer: 'Other',
        value: 'other'
    },
    {
        answer: 'All Those Things ;)',
        value: 'all'
    },

];

const thirdQuestion = "What CMS are you most familir with?";
const thirdAnswers = [
    {
        answer: 'Wordpress',
        value: 'wordpress'
    },
    {
        answer: 'Drupal',
        value: 'drupal'
    },
    {
        answer: 'Contentful',
        value: 'contentful'
    },
    {
        answer: 'Other',
        value: 'other'
    },
    {
        answer: 'None',
        value: 'none'
    }
];



export default function Join(props) {
    const theme = useTheme();

    const [currentAnimation, setCurrentAnimation] = useState('rollIn');

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);

    const handleAnswers = (answer) => {
        setCurrentAnimation('jiggle');
        handleNext();
    }

    const handlePrompt = () => {
        setCurrentAnimation('bouncing');
        handleNext();
    }

    const handleHover = (ani) => {
        setCurrentAnimation('still')
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
            <SwiperSlide >
                <SlideMessage 
                    message={firstMessage} 
                    buttonText={firstButton} 
                    answerCallBack={handlePrompt} 
                    hoverAnimation={handleHover}
                    />
            </SwiperSlide>
            <SwiperSlide>
                <SlideQuestions question={firstQuestion} answers={firstAnswers} answerCallBack={handleAnswers} />
            </SwiperSlide>
            <SwiperSlide>
                <SlideQuestions question={secondQuestion} answers={secondAnswers} answerCallBack={handleAnswers} />
            </SwiperSlide>
            <SwiperSlide>
                <Signup message="Thanks! Let's create an account." />
            </SwiperSlide>
            <SwiperSlide>
                <SlideQuestions question={thirdQuestion} answers={thirdAnswers} answerCallBack={handleAnswers} />
            </SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
       
    </Box>
       
    )
}


const payload = {
    "question": '',
    "answer": '',
    "path": '',
    "email": '',
  }
  
  function sendPayload(payload){
    if(isLive()){
      fetch('https://us-central1-zesty-prod.cloudfunctions.net/onboardQuestion', {
        method: 'POST',
        credentials: 'omit',
        body:    JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      console.log(payload)
    }
  }

  // sendPayload(payload); 