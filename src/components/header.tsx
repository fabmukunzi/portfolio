import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, Image, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Experience',
      href: '#experience',
    },
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Get in touch',
      href: '#contact',
    },
  ];

  return (
    <Navbar
      className="w-[70%]  mx-auto fixed rounded-xl mt-10 border-border_color border-2 backdrop-blur-md"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    // shouldHideOnScroll
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="start">
        <NavbarBrand>
          <Link className="font-bold text-inherit" color="foreground" href="#">
            <Image alt="Logo" className='w-8 h-8 rounded-full object-cover mr-2 grayscale' src='https://res.cloudinary.com/dagurahkl/image/upload/v1732890583/DSC_6249_2_xyiacb.jpg' />
            FABMUKUNZI
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white"
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
            href="../assets/resume4.pdf"
            variant="solid"
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
