import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutComponent from "@/components/about";
import ContactComponent from "@/components/contact";
import ExperienceComponent from "@/components/experience";
import HeaderComponent from "@/components/header";
import LandingPage from "@/components/landing";
import ProjectsComponent from "@/components/projects";
import ParallaxComponent from "@/components/pallarax";
import { Work_Sans } from "next/font/google";
import { AtSign } from "lucide-react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Button } from "@nextui-org/react";

const inter = Work_Sans({ subsets: ["latin"] });

const App: React.FC = () => {
  const [showSocials, setShowSocials] = useState(false);
  const socialsRef = useRef<HTMLDivElement>(null);

  const toggleSocials = () => setShowSocials((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (socialsRef.current && !socialsRef.current.contains(event.target as Node)) {
        setShowSocials(false);
      }
    };

    if (showSocials) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSocials]);

  const socialMediaLinks = [
    {
      icon: <LinkedinLogo weight="fill" size={20} />,
      href: "https://www.linkedin.com/in/mukunzi-fabrice/",
    },
    {
      icon: <GithubLogo weight="fill" size={20} />,
      href: "https://github.com/fabmukunzi",
    },
    {
      icon: <InstagramLogo weight="fill" size={20} />,
      href: "https://www.instagram.com/fab_mukunzi/",
    },
    {
      icon: <WhatsappLogo weight="fill" size={20} />,
      href: "https://api.whatsapp.com/send?phone=250798221541",
    },
  ];

  return (
    <div
      className={`${inter.className} dark:bg-black dark:text-white bg-white text-black headline`}
    >
      <div ref={socialsRef} className="fixed right-10 bottom-10 z-50">
        <Button
          onClick={toggleSocials}
          isIconOnly
          className="!w-[48px] !h-[48px] border-2 rounded-2xl flex bg-black border-border_color items-center justify-center transition-all text-white"
        >
          <AtSign strokeWidth={3} size={17} />
        </Button>

        <AnimatePresence>
          {showSocials && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute bottom-14 right-0 w-[48px] flex bg-black flex-col gap-3 p-2 border-2 border-border_color rounded-2xl shadow-lg"
            >
              {socialMediaLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center p-1 w-full rounded-lg border border-border_color transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <HeaderComponent />
      <LandingPage />
      <ParallaxComponent offset={50}>
        <AboutComponent />
      </ParallaxComponent>
      <ParallaxComponent offset={75}>
        <ExperienceComponent />
      </ParallaxComponent>
      <ParallaxComponent offset={50}>
        <ProjectsComponent />
      </ParallaxComponent>
      <ParallaxComponent offset={100}>
        <ContactComponent />
      </ParallaxComponent>
    </div>
  );
};

export default App;
