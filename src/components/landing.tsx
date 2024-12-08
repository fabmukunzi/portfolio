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
import { useMediaQuery } from '@geist-ui/react';
import { BackgroundLines } from './ui/background-lines';

const LandingPage = () => {
  const socialMediaLinks = [
    {
      icon: (
        <LinkedinLogo
          weight="fill"
          className="group-hover:scale-125 transition-all duration-500"
          size={25}
        />
      ),
      href: 'https://www.linkedin.com/in/mukunzi-fabrice/',
    },
    {
      icon: (
        <GithubLogo
          weight="fill"
          className="group-hover:scale-125 transition-all duration-500"
          size={25}
        />
      ),
      href: 'https://github.com/fabmukunzi',
    },
    {
      icon: (
        <InstagramLogo
          weight="fill"
          className="group-hover:scale-125 transition-all duration-500"
          size={25}
        />
      ),
      href: 'https://www.instagram.com/fab_mukunzi/',
    },
    {
      icon: (
        <WhatsappLogo
          weight="fill"
          className="group-hover:scale-125 transition-all duration-500"
          size={25}
        />
      ),
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
  const isMobile = useMediaQuery('mobile');
  return (
    <BackgroundLines className="flex items-center grayscale justify-center w-full flex-col px-4 h-screen mt-12">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-3xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Hello 👋🏿, I&apos;m Fabrice Mukunzi<br />and I&apos;m a Software Engineer
      </h2>

      <Image alt='My Picture' className='w-[30rem] h-[20rem] rounded-xl object-cover' src='https://res.cloudinary.com/dagurahkl/image/upload/v1732890583/DSC_6249_2_xyiacb.jpg' />
    </BackgroundLines>
  );
};
export default LandingPage;
