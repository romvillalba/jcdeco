import { InstagramIcon, PhoneIcon,  } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center space-x-4 mt-4 mb-4">
      <Link href="/" className="flex"><InstagramIcon />@Jcdeco</Link>
      <Link href="/" className="flex"><PhoneIcon />+54911xxxxxxxxx</Link>
    </div>
  );
};

export default Footer;
