import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function HeaderComponent() {
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState('#about');
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
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Link className="font-bold text-inherit" color="foreground" href="#">
          FABMUKUNZI
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href} isActive={isActive === item.href}>
            <Link
              onClick={() => setIsActive(item.href)}
              color="foreground"
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
            rel="noopener noreferrer"
            as={Link}
            className="font-semibold rounded-lg dark:bg-white dark:text-black md:mx-6 bg-black px-4 h-11 text-white"
            href="../assets/resume.pdf"
            variant="solid"
          >
            Resume
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="font-semibold rounded-full dark:bg-white dark:text-black bg-black p-2 text-white"
            isIconOnly
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
            }}
          >
            {theme === 'light' ? <Moon fill="black" size={20} /> : <Sun />}
          </Button>
        </NavbarItem>
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              onClick={() => {
                setIsActive(item.href);
                setIsMenuOpen(false);
              }}
              className="text-black dark:text-white"
              color="foreground"
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
