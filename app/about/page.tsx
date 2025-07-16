"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
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
    <div className="min-h-screen container mx-auto px-4 md:px-0 ">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col py-5 justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src="/minarul.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="object-cover rounded-full"
          />

          <div className="mt-5 flex flex-col gap-5 max-w-prose">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-2xl font-bold"
            >
              Minarul
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="text-gray-700 dark:text-gray-400"
            >
              I am a skilled JavaScript developer with a strong background in
              developing web applications. I have experience with popular
              frameworks such as React and Next.js. I also have experience with
              Node.js and Express. I am always looking to learn new technologies
              and expand my skillset.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="flex gap-2"
            >
              <Button variant="outline">Download CV</Button>
              <Button variant="outline">
                <Link href="https://www.fiverr.com/sungreat_it" target="_blank">
                  Hire Me on Fiverr
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        {/* right grid */}
        <div className="py-5">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="text-3xl lg:text-4xl font-bold mb-10"
          >
            Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="border bg-accent p-4 rounded-md"
            >
              <h2 className="text-xl font-bold">Frontend</h2>
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-gray-700 dark:text-gray-400">React</p>
                <p className="text-gray-700 dark:text-gray-400">Next.js</p>
                <p className="text-gray-700 dark:text-gray-400">Vite</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.6 }}
              className="border bg-accent p-4 rounded-md"
            >
              <h2 className="text-xl font-bold">Backend</h2>
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-gray-700 dark:text-gray-400">Node.js</p>
                <p className="text-gray-700 dark:text-gray-400">Express</p>
                <p className="text-gray-700 dark:text-gray-400">PHP</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.7 }}
              className="border bg-accent p-4 rounded-md"
            >
              <h2 className="text-xl font-bold">Framework</h2>
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-gray-700 dark:text-gray-400">Next.js</p>
                <p className="text-gray-700 dark:text-gray-400">Laravel</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.8 }}
              className="border bg-accent p-4 rounded-md"
            >
              <h2 className="text-xl font-bold">Version Control</h2>
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-gray-700 dark:text-gray-400">Git</p>
                <p className="text-gray-700 dark:text-gray-400">GitHub</p>
                <p className="text-gray-700 dark:text-gray-400">GitLab</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="border bg-accent p-4 rounded-md"
            >
              <h2 className="text-xl font-bold">Version Control</h2>
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-gray-700 dark:text-gray-400">Git</p>
                <p className="text-gray-700 dark:text-gray-400">GitHub</p>
                <p className="text-gray-700 dark:text-gray-400">GitLab</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.3 }}
              className="border bg-accent p-4 rounded-md"
            >
              <h2 className="text-xl font-bold">Database</h2>
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-gray-700 dark:text-gray-400">MySQL</p>
                <p className="text-gray-700 dark:text-gray-400">MongoDB</p>
                <p className="text-gray-700 dark:text-gray-400">PostgreSQL</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
