"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ModeToggle from "./mode-toggle";
import { usePathname } from "next/navigation";
import NavSearch from "./nav-search";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
// import UserDropdown from "./user-button";

const navLinks = [
  {
    label: "Fuarlar",
    href: "/fuarlar",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
  },
  {
    label: "İletişim",
    href: "/iletisim",
  },
] as const;

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 dark:text-white"
            >
              {/* Fuarlarım */}
              <Image
                src="/images/logo.png"
                alt="logo"
                width={150}
                height={25}
              />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 ${
                      pathname === link.href
                        ? "text-gray-800 dark:text-white font-medium"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              {/* <NavSearch /> */}

              {/* <UserDropdown /> */}
              <ModeToggle />

              <UserButton />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 ${
                  pathname === link.href
                    ? "text-gray-800 dark:text-white font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-2 pt-2 pb-3">
            {/* <NavSearch /> */}

            <Button variant="outline" className="w-full my-2">
              Giriş Yap
            </Button>
            <Button className="w-full">Kayıt Ol</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
