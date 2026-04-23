import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  Image,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Work_Sans } from "next/font/google";

const inter = Work_Sans({ subsets: ["latin"] });

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Get in touch", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = item.href;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      className="lg:w-[70%] w-[95%] mx-auto fixed rounded-xl md:mt-10 mt-2 border-border_color border-2 backdrop-blur-md"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="md:pr-3" justify="start">
        <NavbarBrand>
          <Link className="font-bold text-inherit" color="foreground" href="#">
            <Image
              alt="Logo"
              className="w-8 h-8 hidden lg:block rounded-lg object-cover mr-2 grayscale"
              src="https://res.cloudinary.com/dagurahkl/image/upload/v1732890583/DSC_6249_2_xyiacb.jpg"
            />
            <span className={`${inter.className} mr-6`}>FABMUKUNZI</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className={`my-1 font-medium text-white ${
                activeSection === item.href ? "font-semibold text-xl transition-all duration-300" : ""
              } ${inter.className}`}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="font-semibold rounded-lg dark:bg-white dark:text-black bg-black h-10 text-white"
            href="../assets/fabrice-mukunzi-resume.pdf"
            variant="solid"
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-10">
        {navItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className={`my-1 font-medium text-lg text-white ${
                activeSection === item.href ? "font-semibold text-xl" : ""
              } ${inter.className}`}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
