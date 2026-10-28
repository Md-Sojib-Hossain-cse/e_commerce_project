"use client";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";

const NavbarLogo = () => {

  const settings = {
    logo : "https://res.cloudinary.com/dikjzg7df/image/upload/v1792817904/logo_puciyl.jpg"
  }
  
  return (
    <div>
      <MobileMenu />
      <Link href="/" className="flex items-center">
        {settings?.logo ? (
          <Image
            src={settings.logo}
            alt="Dressen Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        ) : (
          <span className="text-xl font-bold">Dressen</span>
        )}
      </Link>
    </div>
  );
};

export default NavbarLogo;
