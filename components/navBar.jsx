import Link from "next/link";

import { ModeToggle } from "./ui/theme-toggle";
import { Button } from "./ui/button";
import Cart from "./ui/cart";


const NavBar = () => {
  return (
    <nav className="flex items-center justify-around lg:justify-evenly">
      <Button asChild variant="ghost">
        <Link href="/">Nosotros</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/">SHOP</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/contacto">Contacto</Link>
      </Button>
      <Cart/>
      <ModeToggle />
     
    </nav>
  );
};

export default NavBar;
