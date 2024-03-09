import { Button, Image } from '@nextui-org/react';
import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from '@phosphor-icons/react';
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
    <div className="flex mt-7 md:flex-row flex-col-reverse justify-around items-center text-lg">
      <div className="text-xl">
        <p className="text-2xl font-semibold">I am Fabrice Mukunzi</p>
        <p className="md:text-4xl text-3xl font-bold my-1">
          Full-stack Developer
        </p>
        <p className="text-xl">
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
      <div className="border p-6 rounded-xl rotate-12 hover:rotate-0">
        <Image
          width={300}
          alt="logo"
          src="https://res.cloudinary.com/dagurahkl/image/upload/v1698509499/xpu6s3rcfvdnvjrvnr61.png "
        />
      </div>
    </div>
  );
};
export default LandingPage;
