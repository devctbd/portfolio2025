"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen container mx-auto px-4 md:px-0">
      <Breadcrumb className="py-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-3xl lg:text-4xl font-bold mb-10">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-5"
        >
          <Image
            src="/minarul.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="object-cover rounded-full"
          />

          <div className="mt-5 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Minarul Islam</h2>
            <p className="text-gray-700 dark:text-gray-400">
              I am a skilled JavaScript developer with a strong background in
              developing web applications. I have experience with popular
              frameworks such as React and Next.js. I also have experience with
              Node.js and Express. I am always looking to learn new technologies
              and expand my skillset.
            </p>
            <div className="flex gap-2">
              <Button variant="outline">Download CV</Button>
              <Button variant="outline">
                <Link href="/contact">Hire Me</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-3xl font-bold mt-10 mb-5">Skills</h2>
          <p className="text-gray-700 dark:text-gray-400">Frontend</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">HTML</h2>
              <p className="text-gray-700 dark:text-gray-400">96%</p>
              <Slider defaultValue={[96]} />
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">CSS</h2>
              <p className="text-gray-700 dark:text-gray-400">90%</p>
              <Slider defaultValue={[90]} />
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">JavaScript</h2>
              <p className="text-gray-700 dark:text-gray-400">65%</p>
              <Slider defaultValue={[65]} />
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">React</h2>
              <p className="text-gray-700 dark:text-gray-400">75%</p>
              <Slider defaultValue={[75]} />
            </div>

            <p className="text-gray-700 dark:text-gray-400 uppercase">cms</p>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Wordpress</h2>
              <p className="text-gray-700 dark:text-gray-400">80%</p>
              <Slider defaultValue={[80]} />
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Sanity</h2>
              <p className="text-gray-700 dark:text-gray-400">65%</p>
              <Slider defaultValue={[65]} />
            </div>
            <p className="text-gray-700 dark:text-gray-400 uppercase">
              framework
            </p>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Next.js</h2>
              <p className="text-gray-700 dark:text-gray-400">85%</p>
              <Slider defaultValue={[85]} />
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Node.js</h2>
              <p className="text-gray-700 dark:text-gray-400">70%</p>
              <Slider defaultValue={[70]} />
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Express.js</h2>
              <p className="text-gray-700 dark:text-gray-400">60%</p>
              <Slider defaultValue={[60]} />
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Laravel</h2>
              <p className="text-gray-700 dark:text-gray-400">87%</p>
              <Slider defaultValue={[87]} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
