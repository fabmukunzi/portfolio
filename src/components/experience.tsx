import { experience } from '@/utils/data';
import { Avatar } from '@nextui-org/react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo_primary_rounded.jpg';
import Image from 'next/image';

const ExperienceComponent = () => {
  return (
    <div className="flex flex-col pb-20 items-center" id="experience">
      <h1 className="py-20 text-left text-4xl font-bold">Experience</h1>
      <p className="md:w-1/2 mb-5 text-center">
        Below is few of my recent relevant technical experience.
      </p>
      {experience.map((exp) => (
        <div className="text-left md:mx-0 my-4 mx-6 md:w-[70%]" key={exp.url}>
          <Link
            target="blank"
            href={exp.url}
            className="flex items-center gap-2 font-semibold md:text-xl"
          >
            {/*bg-[#181818] p-2*/}
            <Image alt="logo" className="rounded-lg object-contain w-10 h-10" src={exp.logo} />
            {exp.company} 
            <ExternalLink size={20} />
          </Link>
          <p className="text-white/80 font-medium text-base my-2">
            {exp.position} -<span className="">[{exp.location}]</span>
          </p>
          <p className="text-secondary text-xs">{exp.duration}</p>
          <div className="flex flex-col my-3 text-secondary">
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
