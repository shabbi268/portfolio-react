import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';
import data from './data.json';
import About, { IAboutProps } from './modules/About/About';
import VolunteerWork, { IVolunteerWorkProps } from './modules/VolunteerWork/VolunteerWork';
import Certifications, { ICertificationsProps } from './modules/Certifications/Certifications';
import WhatIKnow, { IWhatIKnowProps } from './modules/WhatIKnow/WhatIKnow';
import WorkExperience, { IWorkExperienceProps } from './modules/WorkExperience/WorkExperience';

const StyledApp = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.95);
  min-height: 100vh;
`;

/* Animated background elements */
const BackgroundDecorations = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255, 140, 0, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    top: 10%;
    left: 10%;
    animation: float 6s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(35, 166, 213, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    bottom: 10%;
    right: 10%;
    animation: float 8s ease-in-out infinite reverse;
  }
`;

const FloatingElement = styled.div`
  position: fixed;
  pointer-events: none;
  opacity: 0.1;
  z-index: 0;

  &:nth-child(1) {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(231, 60, 126, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    top: 20%;
    right: 15%;
    animation: float 7s ease-in-out infinite;
  }

  &:nth-child(2) {
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(35, 213, 171, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    bottom: 20%;
    left: 10%;
    animation: float 9s ease-in-out infinite reverse;
  }

  &:nth-child(3) {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(238, 119, 82, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    top: 50%;
    left: 5%;
    animation: float 5s ease-in-out infinite;
  }
`;


export enum Module {
  ABOUT = "about",
  WORK_EXPERIENCE = "workExperience",
  WHAT_I_KNOW = "whatIKnow",
  VOLUNTEERING = "volunteering",
  CERTIFICATIONS="certifications"
}

function App() {
  return (
    <ChakraProvider>
      <BackgroundDecorations>
        <FloatingElement />
        <FloatingElement />
        <FloatingElement />
      </BackgroundDecorations>
      <StyledApp>
        <Header data={data.header} modules={data.modules} />
        {data.modules.map((module, index) => {
          switch (module.type) {
            case Module.ABOUT:
              return <About {...module as Omit<IAboutProps,'index'>} index={index} key={index} />
            case Module.WORK_EXPERIENCE:
              return <WorkExperience {...module as Omit<IWorkExperienceProps,'index'>} index={index} key={index} />
            case Module.WHAT_I_KNOW:
              return <WhatIKnow {...module as Omit<IWhatIKnowProps,'index'>} index={index} key={index} />
            case Module.VOLUNTEERING:
              return <VolunteerWork {...module as Omit<IVolunteerWorkProps,'index'>} index={index} key={index} />
            case Module.CERTIFICATIONS:
              return <Certifications {...module as Omit<ICertificationsProps,'index'>} index={index} key={index} />
            default:
              return <></>
          }
        })}
      </StyledApp>
    </ChakraProvider>
  );
}

export default App;
