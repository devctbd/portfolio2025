"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl p-6 shadow-md rounded-md mt-5 border border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mt-10 mb-5">Contact Us</h2>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
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
                required
                className="mt-1 dark:bg-gray-800"
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
                required
                className="mt-1 dark:bg-gray-800"
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
                required
                className="mt-1 dark:bg-gray-800"
              />
            </div>
            <div className="flex">
              <Button
                type="submit"
                variant={"outline"}
                className="cursor-pointer dark:bg-gray-800"
                size={"lg"}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
