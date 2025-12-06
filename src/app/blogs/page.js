"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import FeaturedBlog from "@/components/blog/FeaturedBlog";
import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data.blogs))
      .catch((error) => console.error("Error loading blogs:", error));
  }, []);

  if (blogs.length === 0) {
    return (
      <div className="bg-white">
        <div className="container mx-auto px-8 md:px-12 py-16">
          <p className="text-center text-gray-600">Loading articles...</p>
        </div>
      </div>
    );
  }

  const [featuredBlog, ...otherBlogs] = blogs;

  return (
    <div className="bg-white">
      <PageHeader tagline="Expert insights on laboratory testing and quality assurance" />
      <FeaturedBlog blog={featuredBlog} />
      <BlogGrid blogs={otherBlogs} />
    </div>
  );
}
