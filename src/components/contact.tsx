import {
  AntdImage,
  GrapgqlImage,
  JavascriptImage,
  NextImage,
  ReactImage,
  TailwindImage,
  TypescriptImage,
} from '@/utils/images';
import { Button, Image } from '@nextui-org/react';
import React from 'react';

const ContactComponent = () => {
  return (
    <div className="py-10 flex flex-col items-center" id="contact">
      <h1 className="text-left text-4xl font-bold">Get in touch</h1>
      <p className="md:w-1/2 mx-4 text-center">
        With a passion for [your field], I&apos;ve honed my skills over 3 years,
        blending creativity with strategic thinking. Specializing in Software
        development, I empower clients to thrive in today&apos;s dynamic
        landscape.With over three years in the field, I&apos;ve continuously
        expanded my expertise through various online platforms, shaping me into
        a dedicated and skilled web professional.
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

export default ContactComponent;
