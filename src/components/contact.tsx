import { MapImage } from '@/utils/images';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const ContactComponent = () => {
  return (
    <motion.div
      className="lg:h-[120vh] py-20 flex flex-col items-center"
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
    >
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
        className="md:w-[60%] my-10 invert dark:invert-0 object-cover pointer-events-none"
      />
      {/* <WorldMap dots={[{
        start: { lat: -30.5595, lng: 22.9375, label: "South Africa" },
        end: { lat: 47.5162, lng: 14.5501, label: "Austria" },
      },
      {
        start: { lat: -1.9403, lng: 29.8739, label: "Rwanda" },
        end: { lat: -30.5595, lng: 22.9375, label: "South Africa" },
      },
      {
        start: { lat: 47.5162, lng: 14.5501, label: "Austria" },
        end: { lat: -1.9403, lng: 29.8739, label: "Rwanda" },
      }]} /> */}
      <p className="text-secondary relative my-4">
        &copy; {new Date().getFullYear()} All Right Reserved
      </p>
    </motion.div>
  );
};

export default ContactComponent;
