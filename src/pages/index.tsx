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
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">FABMUKUNZI</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#experience">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#projects" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#feedback">
            Feedback
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            GET IN TOUCH
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
