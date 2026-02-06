"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import { getLatestBlogs } from "@/data/blogs";

const BlogSection = () => {
  const latestBlogs = getLatestBlogs(4);

  return (
    <section id="blogs" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Blog
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest Insights & News
            </h2>

            <p className="text-muted-foreground max-w-xl">
              Stay updated with the latest trends in technology, development insights,
              and industry news from our expert team.
            </p>
          </div>

          {/* View All Button */}
        <Link href="/blogs" className="inline-block w-fit group">
  <Button className="flex items-center gap-2">
    View All Blogs
    <ArrowRight
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Button>
</Link>

        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
