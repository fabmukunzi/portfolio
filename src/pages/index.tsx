import React from 'react';
import AboutComponent from '@/components/about';
import ContactComponent from '@/components/contact';
import ExperienceComponent from '@/components/experience';
import HeaderComponent from '@/components/header';
import LandingPage from '@/components/landing';
import ProjectsComponent from '@/components/projects';
import ParallaxComponent from '@/components/pallarax';
import { Vazirmatn } from 'next/font/google'

const inter = Vazirmatn({
  subsets: ['latin'],
  display: 'swap',
  weight:['200','400','600']
})
const App: React.FC = () => {
  // ScrollReveal().reveal('.headline')

  return (
    <div className={`${inter.className} dark:bg-black dark:text-white bg-white text-black headline`}>
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
