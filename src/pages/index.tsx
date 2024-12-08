import React from 'react';
import AboutComponent from '@/components/about';
import ContactComponent from '@/components/contact';
import ExperienceComponent from '@/components/experience';
import HeaderComponent from '@/components/header';
import LandingPage from '@/components/landing';
import ProjectsComponent from '@/components/projects';
import ParallaxComponent from '@/components/pallarax';
import { Poppins } from 'next/font/google'
import { FloatingNav } from '@/components/ui/floating-navbar';

const inter = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight:['200','400','600']
})
const App: React.FC = () => {

  return (
    <div className={`${inter.className} dark:bg-black dark:text-white bg-white text-black`}>
      {/* <FloatingNav /> */}
      <HeaderComponent />
      {/* <ParallaxComponent offset={100}> */}
        <LandingPage />
      {/* </ParallaxComponent> */}
      <ParallaxComponent offset={50}>   
        <AboutComponent />
      </ParallaxComponent>
      <ParallaxComponent offset={75}>
        <ExperienceComponent />
      </ParallaxComponent>
      <ParallaxComponent offset={50}>
        <ProjectsComponent />
      </ParallaxComponent>
      <ParallaxComponent offset={100}>
        <ContactComponent />
      </ParallaxComponent>
    </div>
  );
};

export default App;
