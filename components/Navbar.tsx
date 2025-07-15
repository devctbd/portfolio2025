"use client";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./theme/Toggle";

export const MenuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

const Navbar = () => {
  return (
    <header className="border-b border-border/50 py-4">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* dextop  */}
          <div className="flex items-center gap-4">
            {/* logo */}

            <Link href="/" className="text-xl font-bold mr-4">
              Devct
            </Link>

            {/* menu */}
            <div>
              <ul className="flex gap-4">
                {MenuItems.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* mobile */}
          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
