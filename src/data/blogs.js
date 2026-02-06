export const blogs = [
  {
    id: "1",
    slug: "future-of-mobile-app-development",
    title: "The Future of Mobile App Development in 2024",
    excerpt:
      "Discover the latest trends shaping mobile app development.",
    content: `<h2>Introduction</h2><p>Mobile apps are evolving fast.</p>`,
    featuredImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    author: "Rahul Sharma",
    date: "2024-01-15",
    category: "Mobile Development",
  },

  {
    id: "2",
    slug: "importance-of-it-consulting",
    title: "Why IT Consulting is Essential for Business Growth",
    excerpt: "Professional IT consulting transforms businesses.",
    content: `<h2>IT Consulting</h2><p>Technology strategy matters.</p>`,
    featuredImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
    author: "Priya Patel",
    date: "2024-01-10",
    category: "IT Consulting",
  },

  {
    id: "3",
    slug: "scalable-web-applications-best-practices",
    title: "Building Scalable Web Applications: Best Practices",
    excerpt: "Learn how to scale web apps.",
    content: `<h2>Scalability</h2><p>Handle growth smoothly.</p>`,
    featuredImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    author: "Amit Kumar",
    date: "2024-01-05",
    category: "Web Development",
  },

  {
    id: "4",
    slug: "live-streaming-technology-trends",
    title: "Live Streaming Technology: Trends and Innovations",
    excerpt: "Live streaming is evolving fast.",
    content: `<h2>Live Streaming</h2><p>Real-time engagement.</p>`,
    featuredImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    author: "Sneha Gupta",
    date: "2024-01-01",
    category: "Live Streaming",
  },

  {
    id: "5",
    slug: "cybersecurity-best-practices",
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt: "Protect your business digitally.",
    content: `<h2>Security</h2><p>Defense matters.</p>`,
    featuredImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    author: "Vikram Singh",
    date: "2023-12-28",
    category: "Cybersecurity",
  },

  {
    id: "6",
    slug: "ecommerce-app-development-complete-guide",
    title: "Complete Guide to E-commerce App Development",
    excerpt: "Build successful e-commerce apps.",
    content: `<h2>E-commerce</h2><p>Plan wisely.</p>`,
    featuredImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    author: "Neha Verma",
    date: "2023-12-20",
    category: "E-commerce",
  },
];

export const getLatestBlogs = (count = 4) => {
  return blogs.slice(0, count);
};

export const getBlogBySlug = (slug) => {
  return blogs.find((blog) => blog.slug === slug);
};

export const getAllBlogs = () => {
  return blogs;
};
