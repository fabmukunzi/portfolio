import { experience } from '@/utils/constants';
import {
  AntdImage,
  GrapgqlImage,
  JavascriptImage,
  NextImage,
  ReactImage,
  TailwindImage,
  TypescriptImage,
} from '@/utils/images';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// import { Image } from '@nextui-org/react';
import React from 'react';

const ExperienceComponent = () => {
  return (
    <div className="flex flex-col items-center" id="experience">
      <h1 className="py-20 text-left text-4xl font-bold">Experince</h1>
      <p className="md:w-1/2 mb-5 text-center">
        Below is few of my recent relevant technical experience.
      </p>
      {experience.map((exp) => (
        <div className="text-left md:w-[70%]" key={exp.url}>
          <Link
            target="blank"
            href={exp.url}
            className="flex gap-4 font-bold md:text-xl"
          >
            {exp.company} <ExternalLink />
          </Link>
          <p className="text-secondary text-base my-2">@{exp.position}</p>
          <p className="text-secondary text-xs">{exp.duration}</p>
          <div className="flex flex-col my-4 text-secondary">
            {exp.responsibilities.map((resp) => (
              <p key={resp}>- {resp}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceComponent;
