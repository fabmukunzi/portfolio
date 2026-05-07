import { experience } from '@/utils/data';
import { ExternalLink, CircleCheck, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceComponent = () => {
  const [expanded, setExpanded] = useState<string | null>(experience[0].url);

  return (
    <motion.div
      className="flex flex-col pb-20 items-center"
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <h1 className="pt-20 text-left text-4xl font-bold">Experience</h1>
      <p className="md:w-1/2 my-10 text-center text-neutral-200">
        Below is few of my recent relevant technical experience.
      </p>

      <div className="relative md:w-[70%] w-[90%]">

        {experience.map((exp, index) => {
          const isOpen = expanded === exp.url;
          return (
            <motion.div
              key={exp.url}
              className="relative mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut' }}
            >
              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl py-7 px-8 hover:border-white/20 transition-colors">
                {/* Header row */}
                <div className="flex items-start justify-between gap-2">
                  <Link
                    target="_blank"
                    href={exp.url}
                    className="flex items-center gap-3 font-semibold md:text-lg group"
                  >
                    <Image
                      alt="logo"
                      className="rounded-lg object-contain w-9 h-9 flex-shrink-0"
                      src={exp.logo}
                    />
                    <div>
                      <div className="flex gap-2 items-center group-hover:underline">
                        {exp.company}
                        <ExternalLink size={14} />
                      </div>
                      <p className="text-sm font-normal text-neutral-400">{exp.position}</p>
                    </div>
                  </Link>

                  {/* Badges */}
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className="text-xs bg-white/5 text-neutral-400 border border-white/10 px-2 py-0.5 rounded-lg whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <p className="text-xs text-neutral-500 mt-2">{exp.location}</p>

                {/* Expand toggle */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setExpanded(isOpen ? null : exp.url)}
                    className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white mt-3 transition-colors"
                  >
                    {isOpen ? 'Show less' : 'Show more'}
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>
                </div>

                {/* Responsibilities */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="responsibilities"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col mt-3 text-secondary gap-2">
                        {exp.responsibilities.map((resp) => (
                          <p key={resp} className="flex gap-2 text-sm">
                            <CircleCheck className="text-white flex-shrink-0 mt-0.5" size={15} />
                            {resp}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ExperienceComponent;
