import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/theme-toggle";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center lg:justify-evenly">
      <Button asChild variant="ghost">
        <Link href="/">Acerca de Nosotros</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/">SHOP</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/contacto">Contacto</Link>
      </Button>
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
