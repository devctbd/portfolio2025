"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(
        () => {
          toast("SUCCESS!");
          form.current?.reset();
        },
        (error) => {
          toast("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container mx-auto px-2 md:px-0">
      <Breadcrumb className="mb-5 py-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
        className="text-3xl lg:text-4xl font-bold mt-10 mb-5"
      >
        Contact Us
      </motion.h2>
      <div className="min-h-[calc(100vh-20rem)] py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
              className="space-y-4 shadow-lg p-5 h-[400px] border border-gray-200 dark:border-gray-800 rounded-lg"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-white cursor-pointer"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="mt-1 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-white cursor-pointer"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="mt-1 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-white cursor-pointer"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  required
                  className="mt-1 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="flex">
                <Button
                  type="submit"
                  variant={"outline"}
                  className="cursor-pointer dark:bg-gray-800 dark:text-white"
                  size={"lg"}
                >
                  Send
                </Button>
              </div>
            </motion.form>
          </div>
          {/* image section  */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 1, ease: "easeInOut" }}
            className="flex justify-center items-center"
          >
            <Image
              src="/contact.webp"
              alt="Contact"
              width={500}
              height={500}
              className="object-cover rounded-md"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
