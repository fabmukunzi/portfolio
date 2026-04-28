import { projects } from '@/utils/data';
import { Card, CardFooter, Chip, Image, ScrollShadow } from '@nextui-org/react';
import { ArrowRight, GithubLogo } from '@phosphor-icons/react';
import { ExternalLink, Globe } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { PinContainer } from './ui/3d-pin';
import { motion } from 'framer-motion';

const ProjectsComponent = () => {
  return (
    <motion.div
      className="flex border-y-2 border-border_color flex-col pb-5 items-center w-full dark:bg-dark_bg_color bg-gray-100"
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
    >
      <h1 className="py-20 text-left text-4xl font-bold">Projects</h1>
      <p className="md:w-[70%] mx-4 text-center mb-10 text-neutral-200">
        Below is some of the projects i have worked on.
      </p>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 gap-y-20 pb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        {projects.map((project, index) => (
          <PinContainer
            key={index}
            href={project.link}
            title={project.name}
          >
            <Card
            // className="md:w-[19rem] hover:cursor-pointer transition-all duration-500 group rounded-xl"
            >
              {/* <CardHeader>Sinc Organizer Dashboard</CardHeader> */}
              {/* <CardBody className="overflow-visible py-2"> */}
              <Image
                // isZoomed
                alt="Project Image"
                className="object-cover grayscale group-hover:grayscale-0 rounded-lg h-48 w-full transition-all duration-500"
                src={project.imageSrc}
                // width={370}
              />
              {/* </CardBody> */}
              <CardFooter className="flex flex-col transition-all duration-500 items-start bg-[#282828] group-hover:bg-[#181818] rounded-lg mt-3 ">
                <div className="flex justify-between items-center w-full">
                  <p>{project.name}</p>
                </div>
                <p className="text-secondary text-sm text-left mb-3">
                  {project.description}
                </p>
                <ScrollShadow
                  orientation="horizontal"
                  className="flex flex-wrap justify-center gap-1"
                >
                  {project.technologies.map((teck) => (
                    <Chip
                      key={teck}
                      // size='sm'
                      className="rounded-full text-xs bg-white border border-[#333333] dark:bg-[#333333]"
                    >
                      {teck}
                    </Chip>
                  ))}
                </ScrollShadow>
              </CardFooter>
            </Card>
          </PinContainer>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsComponent;
