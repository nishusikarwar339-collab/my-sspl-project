import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/blog/BlogList";
import { getAllBlogs } from "@/data/blogs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const allBlogs = getAllBlogs();

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-900/20 via-background to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4">

            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Blog
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Insights & Articles
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of articles covering the latest trends in technology,
              development best practices, and industry insights from the Shakuniya Solution team.
            </p>

            {/* Go Back to Home Blogs */}
            <div className="pt-6">
  <Link href="/#blogs" className="inline-block">
    <Button className="flex items-center gap-2">
      <ArrowLeft size={16} />
      Go to Home Blogs
    </Button>
  </Link>
</div>


          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <BlogList blogs={allBlogs} />
        </div>
      </section>

    </div>
  );
};

export default Blogs;
