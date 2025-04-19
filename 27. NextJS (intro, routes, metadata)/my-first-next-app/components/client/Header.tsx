"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
import React from "react";

// client component
const Header = () => {
  const pathname = usePathname();
  // const router = useRouter();

  return (
    <header className="text-white flex items-center justify-between px-14 w-full h-[80px] shadow bg-blue-400">
      <div className="logo">
        <h3 className="text-2xl font-bold">
          <Link href={"https://code.edu.az/"}>Code Next</Link>
        </h3>
      </div>
      <ul className="flex gap-6 cursor-pointer">
        <li
          className={`text-white ${
            pathname == "/" && "underline"
          }  p-2 transition duration-500`}
        >
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className={`text-white ${
            pathname == "/about" && "underline"
          }  p-2 transition duration-500`}
        >
          <Link href={"/about"}>About</Link>
        </li>
        <li
          className={`text-white ${
            pathname == "/contact" && "underline"
          }  p-2 transition duration-500`}
        >
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
