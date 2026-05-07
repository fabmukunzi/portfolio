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
import { motion } from "framer-motion"

const Aboutcomponent = () => {
  return (
    <motion.div
      className="flex flex-col border-y-2 border-border_color items-center md:w-full w-[100%] h-[100vh] dark:bg-dark_bg_color bg-gray-100"
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}

    >
      <h1 className="text-left text-4xl font-bold py-20">About</h1>
      <p className="mx-3 text-center md:w-[80%] text-neutral-300 grayscale">
        Full-Stack Software Engineer with 3+ years of experience building and shipping production applications end-to-end,
        from requirements to deployment, in an international teams. Solid expertise in TypeScript, Java, and React within
        modern full-stack stacks, and a proven agile partner collaborating closely with Engineering, QA, and Product teams,
        committed to continuous learning and improvement.
      </p>
      <p className="my-10 text-2xl font-semibold text-neutral-400">
        Tools and Platforms
      </p>
      <motion.div className="grid lg:grid-cols-5 grid-cols-4 md:grid-cols-3 md:mx-0 mx-6 flex-wrap md:gap-20 gap-8 items-center 2xl:mt-6" initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}>
        <Image
          className="w-20 md:w-32"
          src={TypescriptImage}
          alt="TypeScript"
        />
        <Image className="w-20 md:w-28" src={Java} alt="Java" />
        <Image className="w-20 md:w-32" src={ReactImage} alt="React" />
        <Image className="w-20 md:w-32" src={NextImage} alt="NextJs" />
        <Image
          className="w-20 md:w-32"
          src={JavascriptImage}
          alt="JavaScript"
        />
        <Image className="w-20 md:w-28" src={Quarkus} alt="Quarkus" />
        <Image className="w-20 md:w-32" src={ReactNative} alt="React Native" />
        <Image className="w-20 md:w-32" src={NestJs} alt="NestJs" />
        <Image className="w-20 md:w-32" src={AntdImage} alt="Ant Design" />
        <Image
          className="w-20 md:w-32"
          src={TailwindImage}
          alt="Tailwind CSS"
        />
      </motion.div>
    </motion.div>
  );
};

export default Aboutcomponent;
