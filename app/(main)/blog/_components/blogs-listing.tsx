"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { Blog } from "@/lib/generated/prisma";
import BlogCard from "./blog-card";
import Link from "next/link";

export default function BlogsListing({ blogs }: { blogs: Blog[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Gezi Rehberi", "Bilgi Bankası", "Haberler", "Diğer"];

  let filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (searchTerm === "hepsi") filteredBlogs = blogs;

  return (
    <main className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
        <div className="lg:w-1/4">
          <div className="sticky top-4">
            <Card>
              <CardContent className="px-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Kategoriler
                </h2>
                <div className="flex flex-col gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="outline"
                      className=" flex justify-start hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => setSearchTerm(category)}
                    >
                      {category}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    className=" flex justify-start hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => setSearchTerm("hepsi")}
                  >
                    Hepsi
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardContent className="px-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Popüler Yazılar
                </h2>
                <div className="space-y-4">
                  {blogs.slice(0, 3).map((blog) => (
                    <Link
                      href={`/blog/${blog.slug}`}
                      key={blog.id}
                      className="flex items-center space-x-4 hover:opacity-80"
                    >
                      <div className="relative w-16 h-16">
                        <Image
                          src={blog?.image || "/images/hero.jpg"}
                          alt={blog.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-100">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(blog.createdAt).toLocaleDateString(
                            "tr-TR",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
