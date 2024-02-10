import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { Sun } from 'lucide-react';

export default function HeaderComponent() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link className="font-bold text-inherit" color="foreground" href="#">
          FABMUKUNZI
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#experience">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact">
            Get in touch
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="#feedback">
            Feedback
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            size="lg"
            className="font-semibold"
            href="#"
            variant="flat"
          >
            Resume
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button isIconOnly>
            <Sun className="" />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
