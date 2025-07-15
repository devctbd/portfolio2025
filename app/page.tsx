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

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] container mx-auto px-4 md:px-0">
      {/* hero section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-5 lg:py-20">
        <div>
          <h2 className="text-4xl font-bold mb-5">Hello, I'm Minarul Islam</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Creative Web Developer
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            I'm a web developer with a passion for creating beautiful and
            functional websites. I have experience with a variety of
            technologies and frameworks, and I'm always learning new things to
            improve my skills.
          </p>
          <Button className="mt-5" variant="outline">
            <Link href="/projects">View My Work</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/hero.webp"
            alt="Profile"
            width={500}
            height={500}
            className="object-cover rounded-md"
          />
        </div>
      </div>
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
              />
              <h2 className="text-2xl font-bold">UI/UX Design</h2>
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
