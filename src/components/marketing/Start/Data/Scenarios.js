import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import { SelectTemplate } from '../Start/SelectTemplate';
import { ProjectDetails } from '../Start/ProjectDetails';
import { ChooseTechStack } from '../Start/ChooseTechStack';
import RoleQuestions from './RoleQuestions';
import { SlideQuestions } from '../SlideQuestions';
import { Signup } from '../Signup';
import { Box } from '@mui/material';
import { WelcomeScreen } from '../WelcomeScreen';

const Scenario1 = ({
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
  handleAnimation,
  handleAnswers,
  projectType,
  signUpSuccess,
  setscenario,
  currentStep,
  email,
  firstName,
  lastName,
  role,
  userObject,
  welcomeMessage,
}) => {
  React.useEffect(() => {
    setscenario(1);
  }, []);

  return (
    <Swiper
      ref={sliderRef}
      autoHeight={false}
      navigation={false}
      pagination={{ clickable: false, draggable: false, type: 'none' }}
      scrollbar={{ draggable: false }}
      modules={[Pagination, Navigation]}
      // remove this when testing
      allowTouchMove={isProduction === true ? false : false}
    >
      <SwiperSlide>
        <SlideQuestions
          question={RoleQuestions.question}
          why={RoleQuestions.why}
          answers={RoleQuestions.answers}
          answerCallBack={handleAnswers}
          hoverAnimation={handleAnimation}
          storeValue="role"
        />
      </SwiperSlide>

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

      <SwiperSlide>
        <Signup
          template={repository}
          settoken={settoken}
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

      <SwiperSlide>
        <WelcomeScreen
          firstname={firstName}
          lastname={lastName}
          email={email}
          role={role}
          projectType={projectType}
          userZUID={userObject?.data?.ZUID}
          dateCreated={new Date().toUTCString()}
        >
          {welcomeMessage}
        </WelcomeScreen>
      </SwiperSlide>

      <SwiperSlide>
        <ProjectDetails
          title={'Project Details'}
          description="You can change these details after"
          template={repository}
          handleNext={handleNext}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          token={token}
          setinstanceZUID={setinstanceZUID}
        />
      </SwiperSlide>

      <SwiperSlide>
        <ChooseTechStack
          template={repository}
          title={'Choose your tech stack'}
          description="This will help us guide you through your onboarding experience better"
          handleNext={handleNext}
          hanldeChooseTechStack={hanldeChooseTechStack}
        />
      </SwiperSlide>
    </Swiper>
  );
};

const Scenario2 = ({
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
  // settoken,
  setscenario,
  currentStep,

  // email,
  // firstName,
  // lastName,
  // role,
  // userObject,
  // welcomeMessage,
}) => {
  React.useEffect(() => {
    setscenario(2);
  }, []);
  return (
    <Swiper
      ref={sliderRef}
      autoHeight={false}
      navigation={false}
      pagination={{ clickable: false, draggable: false, type: 'none' }}
      scrollbar={{ draggable: false }}
      modules={[Pagination, Navigation]}
      // remove this when testing
      allowTouchMove={isProduction === true ? false : false}
    >
      <SwiperSlide>
        <SelectTemplate
          token={token}
          production={props.production}
          handleSelectTemplate={handleSelectTemplate}
          title="What kind of project do you want to build?"
          description={
            'Create from a blank project or start from a schema template'
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectDetails
          title={'Project Details'}
          description="You can change these details after"
          template={repository}
          handleNext={handleNext}
          token={token}
          setinstanceZUID={setinstanceZUID}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      </SwiperSlide>

      <SwiperSlide>
        <ChooseTechStack
          template={repository}
          title={'Choose your tech stack'}
          description="This will help us guide you through your onboarding experience better"
          handleNext={handleNext}
          hanldeChooseTechStack={hanldeChooseTechStack}
        />
      </SwiperSlide>
    </Swiper>
  );
};

const Scenario3 = ({
  sliderRef,
  isProduction,
  // props,
  // handleSelectTemplate,
  repository,
  handleNext,
  token,
  setCurrentStep,
  hanldeChooseTechStack,
  setinstanceZUID,
  settoken,
  // handleAnimation,
  // handleAnswers,
  projectType,
  signUpSuccess,
  setscenario,
  currentStep,
  email,
  firstName,
  lastName,
  role,
  userObject,
  welcomeMessage,
}) => {
  React.useEffect(() => {
    setscenario(3);
  }, []);
  return (
    <Swiper
      ref={sliderRef}
      autoHeight={false}
      navigation={false}
      pagination={{ clickable: false, draggable: false, type: 'none' }}
      scrollbar={{ draggable: false }}
      modules={[Pagination, Navigation]}
      // remove this when testing
      allowTouchMove={isProduction === true ? false : false}
    >
      <SwiperSlide>
        <Signup
          template={repository}
          settoken={settoken}
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
      <SwiperSlide>
        <WelcomeScreen
          firstname={firstName}
          lastname={lastName}
          email={email}
          role={role}
          projectType={projectType}
          userZUID={userObject?.data?.ZUID}
          dateCreated={new Date().toUTCString()}
        >
          {welcomeMessage}
        </WelcomeScreen>
      </SwiperSlide>
      <SwiperSlide>
        <ProjectDetails
          title={'Project Details'}
          description="You can change these details after"
          template={repository}
          handleNext={handleNext}
          token={token}
          setinstanceZUID={setinstanceZUID}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      </SwiperSlide>

      <SwiperSlide>
        <ChooseTechStack
          template={repository}
          title={'Choose your tech stack'}
          description="This will help us guide you through your onboarding experience better"
          handleNext={handleNext}
          hanldeChooseTechStack={hanldeChooseTechStack}
        />
      </SwiperSlide>
    </Swiper>
  );
};

const Scenario4 = ({
  sliderRef,
  isProduction,
  // props,
  // handleSelectTemplate,
  repository,
  handleNext,
  token,
  setCurrentStep,
  hanldeChooseTechStack,
  setinstanceZUID,
  // settoken,
  setscenario,
  currentStep,
  // firstName,
  // lastName,
  // role,
  // userObject,
  // welcomeMessage,
}) => {
  React.useEffect(() => {
    setscenario(4);
  }, []);

  return (
    <Swiper
      ref={sliderRef}
      autoHeight={false}
      navigation={false}
      pagination={{ clickable: false, draggable: false, type: 'none' }}
      scrollbar={{ draggable: false }}
      modules={[Pagination, Navigation]}
      // remove this when testing
      allowTouchMove={isProduction === true ? false : false}
    >
      <SwiperSlide>
        <ProjectDetails
          title={'Project Details'}
          description="You can change these details after"
          template={repository}
          handleNext={handleNext}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          token={token}
          setinstanceZUID={setinstanceZUID}
        />
      </SwiperSlide>

      <SwiperSlide>
        <ChooseTechStack
          template={repository}
          title={'Choose your tech stack'}
          description="This will help us guide you through your onboarding experience better"
          handleNext={handleNext}
          hanldeChooseTechStack={hanldeChooseTechStack}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export const Scenarios = {
  Scenario1,
  Scenario2,
  Scenario3,
  Scenario4,
};
