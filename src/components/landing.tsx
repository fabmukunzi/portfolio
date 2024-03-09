import { Button, Image } from '@nextui-org/react';
import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LandingPage = () => {
  const socialMediaLinks = [
    {
      icon: <LinkedinLogo size={20} />,
      href: 'https://www.linkedin.com/in/mukunzi-fabrice/',
    },
    {
      icon: <GithubLogo size={20} />,
      href: 'https://github.com/fabmukunzi',
    },
    {
      icon: <InstagramLogo size={20} />,
      href: 'https://www.instagram.com/fab_mukunzi/',
    },
    {
      icon: <WhatsappLogo size={20} />,
      href: 'https://api.whatsapp.com/send?phone=250798221541',
    },
    // {
    //   icon: <TwitterLogo size={20} />,
    //   href: 'https://twitter.com/',
    // },
    // {
    //   icon: <FacebookLogo size={20} />,
    //   href: 'https://www.facebook.com/',
    // },
  ];
  return (
    <div className="flex -mt-4 h-[100vh] md:flex-row flex-col-reverse justify-around items-center text-lg">
      <div className="text-xl">
        <p className="text-2xl font-semibold">I am Fabrice Mukunzi</p>
        <p className="md:text-4xl text-3xl font-bold my-1">
          Full-stack Developer
        </p>
        <p className="text-lg text-secondary">
          Experienced Fullstack developer based in Kigali,Rwanda
          <br />I thrive on turning ideas into impactful solutions.
        </p>

        <div className="my-5">
          <div className="flex gap-2">
            {socialMediaLinks.map((link, index) => (
              <Button
                key={index}
                target="_blank"
                isIconOnly
                className="p-2 rounded-full border dark:border-white border-black"
                as={Link}
                href={link.href}
              >
                {link.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <motion.img
        className="border p-6 rounded-xl md:rotate-12"
        initial={{ rotate: 20 }}
        whileHover={{ rotate: 0 }}
        transition={{ duration: 0.3 }}
        src="https://res.cloudinary.com/dagurahkl/image/upload/v1698509499/xpu6s3rcfvdnvjrvnr61.png "
        width={290}
      />
    </div>
  );
};
export default LandingPage;
