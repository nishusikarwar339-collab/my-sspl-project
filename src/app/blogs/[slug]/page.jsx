import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/BlogCard";
import { getBlogBySlug, getLatestBlogs } from "@/data/blogs";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { notFound } from "next/navigation";

export default function BlogDetails({ params }) {
  // ✅ SAFE slug access
  const slug = params?.slug;

  // 🔍 DEBUG (remove later)
  console.log("SLUG 👉", slug);

  if (!slug) {
    notFound();
  }

  const blog = getBlogBySlug(slug);

  // 🔍 DEBUG (remove later)
  console.log("BLOG 👉", blog);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getLatestBlogs(3).filter(
    (b) => b.slug !== slug
  );

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Back Button */}
          <Link href="/blogs" className="inline-block mb-6">
            <Button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft size={16} />
              Back to Blogs
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Category */}
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-primary" />
              <span className="text-primary font-medium text-sm">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User size={16} /> {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {formattedDate}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto aspect-video overflow-hidden rounded-2xl">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <article
            className="prose prose-lg prose-invert max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Related Articles
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedBlogs.map((item) => (
                <BlogCard key={item.id} blog={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
