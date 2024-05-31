import { projects } from '@/utils/constants';
import { Card, CardFooter, Chip, Image, ScrollShadow } from '@nextui-org/react';
import { GithubLogo } from '@phosphor-icons/react';
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
            className="md:w-[18rem] border-[#2f2f2f] w-[21rem] lg:w-[20rem] h-[21.5rem] border rounded-xl p-0"
          >
            {/* <CardHeader>Sinc Organizer Dashboard</CardHeader> */}
            {/* <CardBody className="overflow-visible py-2"> */}
            <Image
              isZoomed
              alt="Project Image"
              className="object-cover h-48 w-full transition-all duration-500"
              src={project.imageSrc}
              // width={370}
            />
            {/* </CardBody> */}
            <CardFooter className="flex flex-col items-start pb-">
              <div className="flex justify-between items-center w-full">
                <p>{project.name}</p>
                <div className="flex gap-3">
                  <Link target="blank" href={project.link} className="bg-[#333333] transition-all duration-500 hover:scale-110 p-2 rounded-full">
                    <Globe size={20} />
                  </Link>
                  {project?.github && (
                    <Link target="blank" href={project?.github} className="bg-[#333333] transition-all duration-500 hover:scale-110 p-2 rounded-full">
                      <GithubLogo size={20} />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-secondary text-left mb-3">
                {project.description}
              </p>
              <ScrollShadow
                orientation="horizontal"
                className="flex flex-wrap justify-center gap-1"
              >
                {project.technologies.map((teck) => (
                  <Chip
                    key={teck}
                    className="rounded-full border-none text-xs bg-[#333333]"
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
