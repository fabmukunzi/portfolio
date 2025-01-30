import { Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@geist-ui/react';
import { BackgroundLines } from '@/components/ui/background-lines';

const LandingPage = () => {
  const isMobile = useMediaQuery('mobile');
  return (
    <BackgroundLines className="flex items-center grayscale justify-center w-full flex-col px-4 h-screen md:mt-12">
      <motion.div
        className="flex items-center grayscale justify-center w-full flex-col gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-200 dark:to-neutral-600 text-2xl md:text-3xl lg:text-5xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Hello 👋🏿, I&apos;m Fabrice Mukunzi
          <br />
          and I&apos;m a Software Engineer
        </h2>
        <Image
          alt="My Picture"
          className="w-[30rem] h-[20rem] rounded-xl object-cover"
          src="https://res.cloudinary.com/dagurahkl/image/upload/v1732890583/DSC_6249_2_xyiacb.jpg"
        />
      </motion.div>
    </BackgroundLines>
  );
};
export default LandingPage;
