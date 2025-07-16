"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] container mx-auto px-4 md:px-0">
      {/* hero section */}
      <section className="lg:grid lg:h-[calc(100vh-6rem)] lg:place-content-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-prose text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white px-5 py-5 leading-14"
            >
              your website will be{" "}
              <strong className="text-indigo-600">ready</strong> in 24 hours
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200 px-5"
            >
              I'm a web developer with a passion for creating beautiful and
              functional websites. I have experience with a variety of
              technologies and frameworks, and I'm always learning new things to
              improve my skills.
            </motion.p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <Link
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="/contact"
              >
                Get Started
              </Link>

              <Link
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                href="/projects"
              >
                View Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      {/* service section */}
      <div className="py-5 lg:py-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold mb-2">Services</h2>
          <p className="text-gray-600 dark:text-gray-400">
            I offer a range of services to help you with your web development
            needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          <Card>
            <CardHeader>
              <Image
                src="/eco.jpg"
                alt="Web Development"
                width={500}
                height={500}
                className="object-cover rounded-md"
                priority
              />
              <h2 className="text-2xl font-bold">Ecommerce Website</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                I develop custom multivendor ecommerce websites for businesses
                of all sizes.
              </p>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="outline">
                  <Link href="/contact">Order Now</Link>
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="/blog.webp"
                alt="Web Development"
                width={500}
                height={500}
                className="object-cover rounded-md"
                priority
              />
              <h2 className="text-2xl font-bold">Blog Website</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                I develop custom blog websites for businesses of all sizes.
              </p>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="outline">
                  <Link href="/contact">Order Now</Link>
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="/portfolio.jpg"
                alt="Web Development"
                width={500}
                height={500}
                className="object-cover rounded-md"
                priority
              />
              <h2 className="text-2xl font-bold">Portfolio Website</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                I develop custom portfolio websites with latest technology.
              </p>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="outline">
                  <Link href="/contact">Order Now</Link>
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="/ui.webp"
                alt="Web Development"
                width={500}
                height={500}
                className="object-cover rounded-md"
                priority
              />
              <h2 className="text-2xl font-bold">Landing Page</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                I will convert UI/UX design with next.js reactjs and
                tailwindcss.
              </p>
            </CardContent>
            <CardFooter>
              <CardAction>
                <Button variant="outline">
                  <Link href="/contact">Order Now</Link>
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
