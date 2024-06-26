import { projects } from '@/utils/data';
import { Card, CardFooter, Chip, Image, ScrollShadow } from '@nextui-org/react';
import { ArrowRight, GithubLogo } from '@phosphor-icons/react';
import { ExternalLink, Globe } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ProjectsComponent = () => {
  return (
    <div
      className="flex border-y-2 border-[#505050] flex-col pb-5 items-center w-full dark:bg-[#181818] bg-gray-100"
      id="projects"
    >
      <h1 className="py-20 text-left text-4xl font-bold">Projects</h1>
      <p className="md:w-[70%] mx-4 text-center mb-10">
        Below is some of the projects i have worked on.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-5">
        {projects.map((project) => (
          <Card
            key={project.link}
            className="md:w-[19rem] hover:cursor-pointer transition-all duration-500 group p-3 hover:bg-[#0c0c0c] hover:border-[#2f2f2f] bg-[#1d1d1d] border-[#131313] w-[22rem] lg:w-[22rem] h-[22rem] border rounded-xl"
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
                <div className="flex gap-3">
                  <Link
                    target="blank"
                    href={project.link}
                    className="bg-white border border-[#333333] dark:bg-[#333333] p-2 rounded-full"
                  >
                    <ArrowRight size={20} className='group-hover:-rotate-45 transition-all duration-500' />
                    {/* <Globe size={20} /> */}
                  </Link>
                  {project?.github && (
                    <Link
                      target="blank"
                      href={project?.github}
                      className="bg-white border border-[#333333] dark:bg-[#333333] transition-all duration-500 hover:scale-110 p-2 rounded-full"
                    >
                      <GithubLogo size={20} />
                    </Link>
                  )}
                </div>
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
        ))}
      </div>
    </div>
  );
};

export default ProjectsComponent;
