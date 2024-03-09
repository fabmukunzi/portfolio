import Aboutcomponent from '@/components/about';
import ContactComponent from '@/components/contact';
import ExperienceComponent from '@/components/experience';
import HeaderComponent from '@/components/header';
import LandingPage from '@/components/landing';
import ProjectsComponent from '@/components/projects';
import React from 'react';

export default function App() {
  return (
    <div className="dark:bg-black dark:text-white bg-white text-black">
      <HeaderComponent />
      <div className="mx-6 md:mx-0">
        <LandingPage />
        <Aboutcomponent />
        <ExperienceComponent />
        <ProjectsComponent />
        <ContactComponent />
      </div>
    </div>
  );
}
