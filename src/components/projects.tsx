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
  // Image,
} from '@nextui-org/react';
import { ExternalLink, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectsComponent = () => {
  return (
    <div className="py-10 flex flex-col items-center" id="projects">
      <h1 className="text-left text-4xl font-bold">Projects</h1>
      <p className="md:w-1/2 mx-4 text-center">
        With a passion for [your field], I&apos;ve honed my skills over 3 years,
        blending creativity with strategic thinking. Specializing in Software
        development, I empower clients to thrive in today&apos;s dynamic
        landscape.With over three years in the field, I&apos;ve continuously
        expanded my expertise through various online platforms, shaping me into
        a dedicated and skilled web professional.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-x-5">
        <Card radius="sm" className="w-[18rem] h-[20rem]">
          {/* <CardHeader>Sinc Organizer Dashboard</CardHeader> */}
          <CardBody>
            <Image
              src={sincImage}
              alt="text"
              className="w-full h-[15rem] object-cover"
            />
          </CardBody>
          <CardFooter className="flex flex-col">
            <div className="flex justify-between items-center w-full">
              <p>Sinc | Dashboard</p>
              <Link href="#" className="">
                <ExternalLink />
              </Link>
            </div>
            <div className="flex justify-between">
              <Chip className="rounded-md">NextJs</Chip>
              {/* <Chip className="rounded-md">RTK Query</Chip> */}
              <Chip className="rounded-md">Tailwind</Chip>
              <Chip className="rounded-md">Antd</Chip>
            </div>
          </CardFooter>
        </Card>
        <Card radius="sm">
          <CardHeader>Sinc Organizer Dashboard</CardHeader>
          <CardBody>Heloooooooo</CardBody>
          <CardFooter className="relative">
            <Link href="#" className="absolute top-0 right-5 mb-20">
              <ExternalLink />
            </Link>
            <div className="flex flex-wrap gap-1 mt-5">
              <Chip className="rounded-md">NextJs</Chip>
              <Chip className="rounded-md">RTK Query</Chip>
              <Chip className="rounded-md">Tailwind</Chip>
              <Chip className="rounded-md">Antd</Chip>
            </div>
          </CardFooter>
        </Card>
        <Card radius="sm">
          <CardHeader>Sinc Organizer Dashboard</CardHeader>
          <CardBody>Heloooooooo</CardBody>
          <CardFooter className="relative">
            <Link href="#" className="absolute top-0 right-5 mb-20">
              <ExternalLink />
            </Link>
            <div className="flex flex-wrap gap-1 mt-5">
              <Chip className="rounded-md">NextJs</Chip>
              <Chip className="rounded-md">RTK Query</Chip>
              <Chip className="rounded-md">Tailwind</Chip>
              <Chip className="rounded-md">Antd</Chip>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsComponent;
