import Aboutcomponent from '@/components/about';
import ContactComponent from '@/components/contact';
import ExperienceComponent from '@/components/experience';
import HeaderComponent from '@/components/header';
import ProjectsComponent from '@/components/projects';
import { Image } from '@nextui-org/react';
import React from 'react';

export default function App() {
  return (
    <div className="mb-2">
      <HeaderComponent />
      <div className="flex md:flex-row flex-col-reverse justify-around items-center text-lg">
        <p>
          Hello there👋, I am
          <br />
          <span className="text-5xl font-bold">Fabrice Mukunzi</span>
          <br />
          Experienced Fullstack developer based in Kigali,Rwanda
          <br />I thrive on turning ideas into impactful solutions.
          <br /> With a keen eye for detail and a dedication to excellence
        </p>
        <Image
          width={300}
          alt="logo"
          src="https://res.cloudinary.com/dagurahkl/image/upload/v1698509499/xpu6s3rcfvdnvjrvnr61.png "
        />
      </div>
      <Aboutcomponent />
      <ExperienceComponent />
      <ProjectsComponent />
      <ContactComponent />
    </div>
  );
}
