import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import {FaShuttleSpace  } from "react-icons/fa6";

const NavBar = () => {
  return (
    <Navbar className="bg-slate-100 h-16">
      <NavbarBrand>
        <FaShuttleSpace  className="w-8 h-8 text-primary" />
        <p className="font-bold text-inherit"> - CN6035 API</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            Current APIs
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#">
            Upcoming features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Gallery
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>


    </Navbar>
  );
};

export default NavBar;
