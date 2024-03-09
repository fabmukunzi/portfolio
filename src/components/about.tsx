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
    <div className="mt-64 py-10 flex flex-col items-center" id="about">
      <h1 className="text-left text-4xl font-bold">About</h1>
      <p className="md:w-1/2 mx-4 text-center">
        With a passion for [your field], I&apos;ve honed my skills over 3 years,
        blending creativity with strategic thinking. Specializing in Software
        development, I empower clients to thrive in today&apos;s dynamic
        landscape.With over three years in the field, I&apos;ve continuously
        expanded my expertise through various online platforms, shaping me into
        a dedicated and skilled web professional.
      </p>
      <div className="grid grid-cols-4 gap-x-10 gap-y-2 items-center place-items-center my-4">
        <Image width={120} src={ReactImage} alt="React" />
        <Image width={120} src={NextImage} alt="Next.js" />
        <Image width={120} src={GrapgqlImage} alt="GraphQL" />
        <Image width={120} src={TypescriptImage} alt="TypeScript" />
        <Image width={120} src={JavascriptImage} alt="JavaScript" />
        <Image width={120} src={AntdImage} alt="Ant Design" />
        <Image width={120} src={TailwindImage} alt="Tailwind CSS" />
      </div>
    </div>
  );
};

export default Aboutcomponent;
