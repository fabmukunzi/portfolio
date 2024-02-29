import {
  AntdImage,
  GrapgqlImage,
  JavascriptImage,
  NextImage,
  ReactImage,
  TailwindImage,
  TypescriptImage,
} from '@/utils/images';
import Image from 'next/image';
// import { Image } from '@nextui-org/react';
import React from 'react';

const ExperienceComponent = () => {
  return (
    <div className="py-10 flex flex-col items-center" id="experience">
      <h1 className="text-left text-4xl font-bold">Experince</h1>
      <p className="md:w-1/2 my-10 text-center">
        Below is some of the recent projects i have worked on.
      </p>
      <div className="grid grid-cols-3">
        <Image src={ReactImage} alt="React" />
        <Image src={NextImage} alt="Next.js" />
        <Image src={GrapgqlImage} alt="GraphQL" />
        <Image src={TypescriptImage} alt="TypeScript" />
        <Image src={JavascriptImage} alt="JavaScript" />
        <Image src={AntdImage} alt="Ant Design" />
        <Image src={TailwindImage} alt="Tailwind CSS" />
      </div>
    </div>
  );
};

export default ExperienceComponent;
