import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Projects = () => {
  return (
    <div className="min-h-screen container mx-auto px-4 ">
      <Breadcrumb className="mb-5 py-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-3xl lg:text-4xl font-bold mb-5">Our Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <h2 className="text-2xl font-bold">AbNetWork</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
              AbNetWork is a Wi-Fi company based in Bangladesh. We provide
              internet services to homes and businesses. Our goal is to provide
              fast, reliable, and affordable internet to everyone.
            </p>
          </CardContent>
          <CardFooter>
            <CardAction>
              <Button variant="outline">
                <Link href="https://abnetwork.vercel.app/" target="_blank">
                  View Project
                </Link>
              </Button>
            </CardAction>
          </CardFooter>
        </Card>
        {/* 2 */}
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
            <h2 className="text-2xl font-bold line-clamp-1">
              Blog with sanity
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
              Blog with sanity is a blog website based in Bangladesh. We provide
              blog services to users. Our goal is to provide fast, reliable, and
              affordable blog to everyone. This blog is made with Sanity CMS,
              Next.js 15, and Tailwind CSS.
            </p>
          </CardContent>
          <CardFooter>
            <CardAction>
              <Button variant="outline">
                <Link
                  href="https://nextsanityblog-zeta.vercel.app/"
                  target="_blank"
                >
                  View Project
                </Link>
              </Button>
            </CardAction>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
