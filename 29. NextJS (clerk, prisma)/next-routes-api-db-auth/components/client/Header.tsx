"use client";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import {
  House,
  Phone,
  Store,
  Handshake,
  Menu,
  Moon,
  Sun,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavigationType = {
  link: string;
  name: string;
  icon: React.ReactNode;
};

function Header() {
  const { setTheme } = useTheme();
  const { isSignedIn, user } = useUser();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuBar = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path: string) => path === pathname;
  const links: NavigationType[] = [
    {
      link: "/",
      icon: <House />,
      name: "Home",
    },
    {
      link: "/about",
      icon: <Handshake />,
      name: "About",
    },
    {
      link: "/contact",
      icon: <Phone />,
      name: "Contact",
    },
    {
      link: "/shop",
      icon: <Store />,
      name: "Shop",
    },
  ];

  return (
    <header className={`py-5 px-10 shadow shadow-gray-200`}>
      <div className="flex items-center justify-between">
        <div className="logo">
          <Link prefetch={true} className="font-bold text-3xl" href={"/"}>
            <span className="text-blue-500">Code</span>
            <span className="text-gray-800 dark:text-white">Market</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          {links &&
            links.map((navigation, idx) => {
              return (
                <Link
                  prefetch={true}
                  className={`hover:scale-95 transition ${
                    isActive(navigation.link) && "text-blue-500"
                  }`}
                  title={navigation.name}
                  key={idx}
                  href={navigation.link}
                >
                  {navigation.icon}
                </Link>
              );
            })}
          {isSignedIn ? (
            <>
              <UserButton />
            </>
          ) : (
            <>
              <Link
                prefetch={true}
                className={`hover:scale-95 transition`}
                href={"/auth/login"}
              >
                <LogIn />
              </Link>
              <Link
                prefetch={true}
                className={`hover:scale-95 transition`}
                href={"/auth/register"}
              >
                <UserPlus />
              </Link>
            </>
          )}
          {/* toggle theme shadCN */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        {/* mobile menu bar */}
        <button onClick={toggleMenuBar} className="block md:hidden menu">
          <Menu />
        </button>
      </div>
      <menu className={`${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="mt-1.5 mx-auto space-y-1.5 flex flex-col gap-2 items-center">
          {links &&
            links.map((navigation, idx) => {
              return (
                <Link
                  onClick={toggleMenuBar}
                  className={`hover:scale-95 text-xl bg-gray-100 w-full text-center rounded py-2 transition ${
                    isActive(navigation.link) && "text-blue-500"
                  }`}
                  title={navigation.name}
                  key={idx}
                  href={navigation.link}
                >
                  {navigation.name}
                </Link>
              );
            })}
        </ul>
      </menu>
    </header>
  );
}

export default Header;
