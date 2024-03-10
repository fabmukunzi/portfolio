import { MapImage } from '@/utils/images';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContactComponent = () => {
  return (
    <div className="md:h-[120vh] py-20 flex flex-col items-center" id="contact">
      <h1 className=" text-left text-2xl font-bold">GET IN TOUCH</h1>

      <div className="flex flex-col items-center">
        <p className="md:w-[70%] my-10 mx-4 text-center">
          You can reach out to me anytime by clicking on bottom right corner
          button to view my contact info or, click the button below. My inbox is
          always open, I will try my best to get back to you as soon as
          possible.
        </p>
        <Button
          as={Link}
          href="mailto:mukunzifabrice77@gmail.com"
          className="font-semibold rounded-lg dark:bg-white dark:text-black md:mx-6 bg-black px-4 h-11 text-white"
        >
          Send an email
        </Button>
      </div>
      <Image
        alt="Map"
        src={MapImage}
        className="md:w-[60%] my-10 invert dark:invert-0 object-cover"
      />
      <p className="text-secondary relative my-4">
        &copy; {new Date().getFullYear()} All Right Reserved
      </p>
    </div>
  );
};

export default ContactComponent;
