import {
  AntdImage,
  GrapgqlImage,
  JavascriptImage,
  NextImage,
  ReactImage,
  TailwindImage,
  TypescriptImage,
  ReactNative,
  NestJs,
  Java,
  Quarkus,
} from "@/utils/images";
import Image from "next/image";
import React from "react";

const Aboutcomponent = () => {
  return (
    <div
      className="flex flex-col border-y-2 border-border_color items-center md:w-full w-[100%] h-[100vh] dark:bg-dark_bg_color bg-gray-100"
      id="about"
    >
      <h1 className="text-left text-4xl font-bold py-20">About</h1>
      <p className="mx-3 text-center md:w-[80%] text-neutral-300 grayscale">
        With a passion for software development, I&apos;ve honed my skills over
        3 years, blending creativity with strategic thinking. Specializing in
        Software development, I empower clients to thrive in today&apos;s
        dynamic landscape.With over three years in the field, I&apos;ve
        continuously expanded my expertise through various online platforms,
        shaping me into a dedicated and skilled web professional.
      </p>
      <p className="my-10 text-2xl font-semibold text-neutral-400">
        Tools and Platforms
      </p>
      <div className="grid lg:grid-cols-5 grid-cols-4 md:grid-cols-3 md:mx-0 mx-6 flex-wrap md:gap-20 gap-8 items-center lg:mt-6">
        <Image
          className="w-20 md:w-32"
          src={TypescriptImage}
          alt="TypeScript"
        />
        <Image className="w-20 md:w-32" src={NextImage} alt="NextJs" />
        <Image
          className="w-20 md:w-32"
          src={JavascriptImage}
          alt="JavaScript"
        />
        <Image className="w-20 md:w-28" src={Java} alt="Java" />
        <Image className="w-20 md:w-32" src={ReactImage} alt="React" />
        <Image className="w-20 md:w-32" src={ReactNative} alt="React Native" />
        <Image className="w-20 md:w-32" src={NestJs} alt="NestJs" />
        <Image className="w-20 md:w-28" src={Quarkus} alt="Quarkus" />
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
