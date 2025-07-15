"use client";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./theme/Toggle";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustifyIcon } from "lucide-react";
import { Button } from "./ui/button";

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
  const pathname = usePathname();

  return (
    <header className="border-b border-border/50 py-4">
      <nav className="container mx-auto px-2 md:px-0">
        <div className="flex items-center justify-between">
          {/* dextop  */}
          <div className="flex items-center gap-4">
            {/* logo */}

            <Link href="/" className="text-xl font-bold mr-4">
              Devct
            </Link>

            {/* menu desktop */}
            <div className="hidden md:flex">
              <ul className="flex gap-4">
                {MenuItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative transition duration-200 p-2 z-10",
                        pathname === item.href && "text-white"
                      )}
                    >
                      {item.title}
                      {pathname === item.href && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-primary rounded-md p-2 -z-10"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* menu mobile */}
          </div>
          {/* mobile */}
          <div className="flex items-center gap-4 ">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <AlignJustifyIcon />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      <ul className="flex flex-col gap-4 mt-5">
                        {MenuItems.map((item) => (
                          <li key={item.title}>
                            <Link
                              href={item.href}
                              className={cn(
                                "relative transition duration-200 p-2 z-10",
                                pathname === item.href && "text-white"
                              )}
                            >
                              {item.title}
                              {pathname === item.href && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute inset-0 bg-primary rounded-md p-2 -z-10"
                                />
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                      Are you absolutely sure?
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
