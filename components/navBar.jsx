import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/theme-toggle";

const NavBar = () => {
  return (
    <nav className="flex space-x-4 items-center justify-center lg:justify-evenly">
      <Link href="/">Acerca de Nosotros</Link>
      <Link href="/">SHOP</Link>
      <Link href="/">Contacto</Link>
      <ModeToggle/>
    </nav>
  );
};

export default NavBar;
