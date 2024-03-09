import { projects } from '@/utils/constants';
import {
  AntdImage,
  GrapgqlImage,
  JavascriptImage,
  NextImage,
  ReactImage,
  TailwindImage,
  TypescriptImage,
  sincImage,
} from '@/utils/images';
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  ScrollShadow,
  image,
  // Image,
} from '@nextui-org/react';
import { GithubLogo } from '@phosphor-icons/react';
import { ExternalLink, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ProjectsComponent = () => {
  return (
    <div className="flex flex-col items-center w-full dark:bg-[#282828] bg-gray-100" id="projects">
      <h1 className="py-20 text-left text-4xl font-bold">Projects</h1>
      <p className="md:w-[70%] mx-4 text-center mb-10">
        Below is some of the projects i have worked on.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {projects.map((project) => (
          <Card
            key={project.link}
            className="md:w-[18rem] w-[22rem] h-[22rem] border rounded-md p-0"
          >
            {/* <CardHeader>Sinc Organizer Dashboard</CardHeader> */}
            {/* <CardBody className="overflow-visible py-2"> */}
            <Image
              isZoomed
              alt="Project Image"
              className="object-cover h-48 w-full"
              src={project.imageSrc}
              // width={370}
            />
            {/* </CardBody> */}
            <CardFooter className="flex flex-col">
              <div className="flex justify-between items-center w-full">
                <p>{project.name}</p>
                <div className="flex gap-3">
                  <Link target="blank" href={project.link} className="">
                    <ExternalLink size={20} />
                  </Link>
                  {project?.github && (
                    <Link target="blank" href={project?.github} className="">
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
                className="flex flex-wrap gap-1"
              >
                {project.technologies.map((teck) => (
                  <Chip
                    key={teck}
                    className="rounded-md border border-secondary"
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
