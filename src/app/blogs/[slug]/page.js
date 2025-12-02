"use client";

import { useState, useEffect } from "react";
import { use } from "react";
import { LazyMotion, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HiArrowLeft,
  HiClock,
  HiCalendar,
  HiUser,
  HiArrowRight,
} from "react-icons/hi2";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function BlogPost({ params }) {
  const resolvedParams = use(params);
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize as true

  useEffect(() => {
    // Fetch data without setting loading at the start
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const currentBlog = data.blogs.find(
          (b) => b.slug === resolvedParams.slug
        );
        setBlog(currentBlog);

        if (currentBlog) {
          // Get recent blogs (excluding current)
          const recent = data.blogs
            .filter((b) => b.id !== currentBlog.id)
            .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
            .slice(0, 4);
          setRecentBlogs(recent);
        }
      })
      .catch((error) => {
        console.error("Error loading blog:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [resolvedParams.slug]);

  const handleShare = (platform) => {
    // Guard clause - ensure blog exists
    if (!blog) return;

    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog.title);
    const text = encodeURIComponent(blog.excerpt || blog.title);

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${title}%20${url}`,
      email: `mailto:?subject=${title}&body=${text}%20${url}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">Loading article...</p>
        </div>
      </div>
    );
  }

  // Not found state
  if (!blog) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
          >
            <HiArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="h-20"></div>
      <div className="bg-white">
        {/* Compact Hero Section */}
        <div className="bg-gray-900 py-8">
          <div className="container mx-auto px-8 md:px-12">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold transition-colors"
              >
                <HiArrowLeft className="w-5 h-5" />
                Back to Blog
              </Link>

              <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-lg">
                {blog.category}
              </span>
            </m.div>
          </div>
        </div>

        {/* Main Content */}
        <article className="container mx-auto px-8 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Article */}
            <div className="lg:col-span-8">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  {blog.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b-2 border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <HiUser className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{blog.author}</p>
                      <p className="text-sm text-gray-600">{blog.authorRole}</p>
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-12 bg-gray-200" />

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <HiCalendar className="w-4 h-4 text-primary" />
                      <span>
                        {new Date(blog.publishDate).toLocaleDateString(
                          "en-IN",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiClock className="w-4 h-4 text-secondary" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8 shadow-xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  {blog.content.map((block, index) => {
                    if (block.type === "paragraph") {
                      return (
                        <p
                          key={index}
                          className="text-gray-700 leading-relaxed mb-6 text-lg"
                        >
                          {block.text}
                        </p>
                      );
                    }

                    if (block.type === "heading") {
                      return (
                        <h2
                          key={index}
                          className="text-2xl md:text-3xl font-black text-gray-900 mt-10 mb-5 scroll-mt-24"
                        >
                          {block.text}
                        </h2>
                      );
                    }

                    if (block.type === "list") {
                      return (
                        <ul key={index} className="space-y-3 mb-8 ml-0">
                          {block.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                              <span className="text-gray-700 text-lg leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    return null;
                  })}
                </div>

                {/* Share Buttons */}
                <div className="mt-12 pt-8 border-t-2 border-gray-100">
                  <h3 className="font-black text-gray-900 mb-4 text-lg">
                    Share This Article
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                      aria-label="Share on Facebook"
                    >
                      <FaFacebookF className="w-4 h-4" />
                      <span className="hidden sm:inline">Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                      aria-label="Share on Twitter"
                    >
                      <FaTwitter className="w-4 h-4" />
                      <span className="hidden sm:inline">Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                      aria-label="Share on LinkedIn"
                    >
                      <FaLinkedinIn className="w-4 h-4" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                      aria-label="Share on WhatsApp"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </button>
                    <button
                      onClick={() => handleShare("email")}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                      aria-label="Share via Email"
                    >
                      <FaEnvelope className="w-4 h-4" />
                      <span className="hidden sm:inline">Email</span>
                    </button>
                  </div>
                </div>
              </m.div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Recent Articles */}
                {recentBlogs.length > 0 && (
                  <m.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
                  >
                    <h3 className="text-xl font-black text-gray-900 mb-6">
                      Recent Articles
                    </h3>
                    <div className="space-y-6">
                      {recentBlogs.map((recentBlog) => (
                        <Link
                          key={recentBlog.id}
                          href={`/blogs/${recentBlog.slug}`}
                          className="block group"
                        >
                          <div className="flex gap-4">
                            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                              <Image
                                src={recentBlog.image}
                                alt={recentBlog.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded mb-2">
                                {recentBlog.category}
                              </span>
                              <h4 className="font-bold text-gray-900 line-clamp-2 text-sm group-hover:text-primary transition-colors">
                                {recentBlog.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {new Date(
                                  recentBlog.publishDate
                                ).toLocaleDateString("en-IN", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </m.div>
                )}

                {/* Categories */}
                <m.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-primary/5 rounded-2xl p-6 border-2 border-primary/10"
                >
                  <h3 className="text-xl font-black text-gray-900 mb-4">
                    Explore Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Petroleum Testing",
                      "Water Testing",
                      "Food Testing",
                      "Air Quality",
                      "Metallography",
                      "Compliance Testing",
                    ].map((category) => (
                      <Link
                        key={category}
                        href="/blogs"
                        className="px-3 py-2 bg-white text-gray-700 text-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </m.div>

                {/* CTA */}
                <m.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-primary text-white rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-black mb-3">
                    Need Testing Services?
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Get in touch with our experts for comprehensive testing
                    solutions
                  </p>
                  <Link
                    href="/contact-us"
                    className="flex items-center justify-center gap-2 bg-white text-primary py-3 px-6 rounded-xl font-bold hover:bg-white/90 transition-colors"
                  >
                    Contact Us
                    <HiArrowRight className="w-5 h-5" />
                  </Link>
                </m.div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </LazyMotion>
  );
}
