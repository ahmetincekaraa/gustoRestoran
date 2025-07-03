import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="relative w-56 h-72">
      <Image
        alt=""
        src="/images/logo.png"
        layout="fill"
        className="object-center "
      />
    </Link>
  );
};

export default Logo;
