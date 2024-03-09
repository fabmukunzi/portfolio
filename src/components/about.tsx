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
import React from 'react';

const Aboutcomponent = () => {
  return (
    <div
      className="flex flex-col items-center h-[100vh] dark:bg-[#282828] bg-gray-100"
      id="about"
    >
      <h1 className="text-left text-4xl font-bold py-20">About</h1>
      <p className="md:w-[70%] md:mx-4 text-center">
        With a passion for software development, I&apos;ve honed my skills over
        3 years, blending creativity with strategic thinking. Specializing in
        Software development, I empower clients to thrive in today&apos;s
        dynamic landscape.With over three years in the field, I&apos;ve
        continuously expanded my expertise through various online platforms,
        shaping me into a dedicated and skilled web professional.
      </p>
      <div className="flex flex-wrap gap-x-10 gap-y-4 mt-3">
        <Image className="w-20 md:w-32" src={ReactImage} alt="React" />
        <Image className="w-20 md:w-32" src={NextImage} alt="Next.js" />
        <Image className="w-20 md:w-32" src={GrapgqlImage} alt="GraphQL" />
        <Image
          className="w-20 md:w-32"
          src={TypescriptImage}
          alt="TypeScript"
        />
        <Image
          className="w-20 md:w-32"
          src={JavascriptImage}
          alt="JavaScript"
        />
        <Image className="w-20 md:w-32" src={AntdImage} alt="Ant Design" />
        <Image
          className="w-20 md:w-32"
          src={TailwindImage}
          alt="Tailwind CSS"
        />
      </div>
    </div>
  );
};

export default Aboutcomponent;
