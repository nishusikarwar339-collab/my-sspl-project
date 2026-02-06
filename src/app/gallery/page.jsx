"use client";

import { useState } from "react";
import { Play, Eye } from "lucide-react";

const categories = ["All", "Product", "UI", "Dashboard", "App"];

const galleryItems = [
  {
    id: 1,
    title: "Vyaparbot Dashboard",
    category: "Dashboard",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    type: "video",
  },
  {
    id: 2,
    title: "Mobile App Interface",
    category: "App",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    type: "video",
  },
  {
    id: 3,
    title: "E-Commerce UI Kit",
    category: "UI",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    type: "image",
  },
  {
    id: 4,
    title: "SaaS Product Demo",
    category: "Product",
    thumbnail:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
    type: "video",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    category: "Dashboard",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    type: "video",
  },
  {
    id: 6,
    title: "NiyaMeet Interface",
    category: "App",
    thumbnail:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    type: "video",
  },
  {
    id: 7,
    title: "Modern UI Components",
    category: "UI",
    thumbnail:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
    type: "image",
  },
  {
    id: 8,
    title: "Enterprise Solutions",
    category: "Product",
    thumbnail:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    type: "video",
  },
  {
    id: 9,
    title: "Bio Linker Preview",
    category: "App",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    type: "video",
  },
  {
    id: 10,
    title: "Admin Panel Design",
    category: "Dashboard",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    type: "image",
  },
  {
    id: 11,
    title: "EWS Platform",
    category: "Product",
    thumbnail:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
    type: "video",
  },
  {
    id: 12,
    title: "Design System",
    category: "UI",
    thumbnail:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    type: "image",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="min-h-screen bg-[#0a0a0f]">

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/5" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-purple-400 uppercase tracking-widest text-sm">
            Our Portfolio
          </span>
          <h1 className="text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of innovative digital solutions and
            stunning interfaces.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm transition ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-2xl overflow-hidden bg-white/5 border border-white/5"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className={`w-full h-full object-cover transition duration-500 ${
                  hoveredItem === item.id ? "scale-110" : ""
                }`}
              />

              <div
                className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center transition ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  {item.type === "video" ? (
                    <Play className="text-white ml-1" fill="white" />
                  ) : (
                    <Eye className="text-white" />
                  )}
                </div>
                <h3 className="text-white font-semibold text-center">
                  {item.title}
                </h3>
                <span className="text-xs text-white/70 mt-1">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Gallery;
