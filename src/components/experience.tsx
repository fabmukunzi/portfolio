import { experience } from '@/utils/data';
import { Avatar } from '@nextui-org/react';
import { CheckCircle, CircleCheck, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExperienceComponent = () => {
  return (
    <motion.div
      className="flex flex-col pb-20 items-center"
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
    >
      <h1 className="py-20 text-left text-4xl font-bold">Experience</h1>
      <p className="md:w-1/2 mb-5 text-center text-neutral-200">
        Below is few of my recent relevant technical experience.
      </p>
      {experience.map((exp) => (
        <motion.div
          className="text-left md:mx-0 my-4 mx-6 md:w-[70%]"
          key={exp.url}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
        >
          <Link
            target="blank"
            href={exp.url}
            className="flex items-center gap-2 font-semibold md:text-lg"
          >
            {/*bg-[#181818] p-2*/}
            <Image
              alt="logo"
              className="rounded-lg object-contain w-10 h-10"
              src={exp.logo}
            />
            <div className="my-2">
              <div className="flex gap-2 items-center">
                {exp.company}
                <ExternalLink size={18} />
              </div>
              <p className="text-sm font-normal">{exp.position}</p>
            </div>
          </Link>
          {/* <p className="text-white/80 text-sm font-semibold mb-4 ml-12">
            {exp.position} - <span className="">[{exp.location}]</span>
          </p> */}
          <p className="text-secondary text-xs md:text-sm">
            <span className="">{exp.location}</span> [{exp.duration}]
          </p>
          <div className="flex flex-col my-3 text-secondary">
            {exp.responsibilities.map((resp) => (
              <p key={resp} className="flex gap-2 my-1 text-sm lg:text-base">
                <CircleCheck className="text-white flex-shrink-0" size={17} />{' '}
                {resp}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ExperienceComponent;
