import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex space-x-4 justify-center">
      <Link href="/">Acerca de Nosotros</Link>
      <Link href="/">SHOP</Link>
      <Link href="/">Contacto</Link>
    </nav>
  );
};

export default NavBar;
