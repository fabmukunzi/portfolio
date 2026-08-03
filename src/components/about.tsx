import {
  AntdImage,
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
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

const logos: { src: StaticImageData; alt: string; className: string }[] = [
  { src: TypescriptImage, alt: "TypeScript", className: "w-20 md:w-32" },
  { src: Java, alt: "Java", className: "w-20 md:w-28" },
  { src: ReactImage, alt: "React", className: "w-20 md:w-32" },
  { src: NextImage, alt: "NextJs", className: "w-20 md:w-32" },
  { src: JavascriptImage, alt: "JavaScript", className: "w-20 md:w-32" },
  { src: Quarkus, alt: "Quarkus", className: "w-20 md:w-28" },
  { src: ReactNative, alt: "React Native", className: "w-20 md:w-32" },
  { src: NestJs, alt: "NestJs", className: "w-20 md:w-32" },
  { src: AntdImage, alt: "Ant Design", className: "w-20 md:w-32" },
  { src: TailwindImage, alt: "Tailwind CSS", className: "w-20 md:w-32" },
];

const Aboutcomponent = () => {
  return (
    <motion.div
      className="flex flex-col border-y-2 border-border_color items-center md:w-full w-[100%] h-[100vh] dark:bg-dark_bg_color bg-gray-100"
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
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
      <motion.div
        className="grid lg:grid-cols-5 grid-cols-4 md:grid-cols-3 md:mx-0 mx-6 flex-wrap md:gap-20 gap-8 items-center 2xl:mt-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        {logos.map((logo) => (
          <div key={logo.alt} className={logo.className}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={128}
              height={128}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Aboutcomponent;
