import {
  AntdImage,
  GrapgqlImage,
  JavascriptImage,
  NextImage,
  ReactImage,
  TailwindImage,
  TypescriptImage,
} from '@/utils/images';
import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const ContactComponent = () => {
  return (
    <div className="flex flex-col items-center h-[100vh]" id="contact">
      <h1 className="py-20 text-left text-2xl font-bold">GET IN TOUCH</h1>
      <p className="md:w-[70%] mx-4 text-center">
        You can reach out to me anytime by clicking on bottom right corner
        button to view my contact info or, click the button below. My inbox is
        always open, I will try my best to get back to you as soon as possible.
      </p>
      <Button
        as={Link}
        href="mailto:mukunzifabrice77@gmail.com"
        className="font-semibold my-20 rounded-lg dark:bg-white dark:text-black md:mx-6 bg-black px-4 h-11 text-white"
      >
        Send an email
      </Button>
      <p className="text-secondary mt-32 relative ">
        &copy; {new Date().getFullYear()} All Right Reserved
      </p>
    </div>
  );
};

export default ContactComponent;
