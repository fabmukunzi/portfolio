import {
  AntdImage,
  GrapgqlImage,
  JavascriptImage,
  NextImage,
  ReactImage,
  TailwindImage,
  TypescriptImage,
} from '@/utils/images';
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from '@nextui-org/react';
import { ExternalLink, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ProjectsComponent = () => {
  return (
    <div
      className="bg-[#111111] py-10 flex flex-col items-center"
      id="projects"
    >
      <h1 className="text-left text-4xl font-bold">Projects</h1>
      <p className="md:w-1/2 mx-4 text-center">
        With a passion for [your field], I&apos;ve honed my skills over 3 years,
        blending creativity with strategic thinking. Specializing in Software
        development, I empower clients to thrive in today&apos;s dynamic
        landscape.With over three years in the field, I&apos;ve continuously
        expanded my expertise through various online platforms, shaping me into
        a dedicated and skilled web professional.
      </p>
      <div className="grid grid-cols-3 gap-x-5">
        <Card radius="sm">
          <CardHeader>Sinc Organizer Dashboard</CardHeader>
          <CardBody className='min-h-48'>Heloooooooo</CardBody>
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
