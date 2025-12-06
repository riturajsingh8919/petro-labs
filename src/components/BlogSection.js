"use client";

import { LazyMotion, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiCalendar } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const BLOG_POSTS = [
  {
    title: "Why Oil Analysis Is Essential for Modern Industries",
    subtitle:
      "A quick overview of how oil analysis helps reduce breakdowns, extend equipment life, and improve reliability.",
    date: "Nov 15, 2025",
    category: "Oil Analysis",
    thumbnail: "/blog1.jpg",
    postLink: "/blogs/why-oil-analysis-is-essential-for-modern-industries",
  },
  {
    title: "Understanding Viscosity: The Key to Lubricant Performance",
    subtitle:
      "Learn how viscosity affects lubrication efficiency, equipment protection, and oil health monitoring.",
    date: "Nov 10, 2025",
    category: "Lubrication",
    thumbnail: "/blog2.jpg",
    postLink: "/blogs/understanding-viscosity-the-key-to-lubricant-performance",
  },
  {
    title: "Condition-Based Maintenance: The Future of Reliability",
    subtitle:
      "Explore how CBM strategies help industries shift from reactive to predictive maintenance.",
    date: "Nov 5, 2025",
    category: "Reliability",
    thumbnail: "/blog3.jpg",
    postLink: "/blogs/condition-based-maintenance-the-future-of-reliability",
  },
];

const BlogSection = () => {
  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="relative bg-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-10 lg:px-16">
          {/* Simple Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-end justify-between mb-3">
              <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-1 text-gray-900">
                Latest <span className="text-primary">Insights</span>
              </h2>
              <Link href="/blogs">
                <m.button
                  whileHover={{ x: 5 }}
                  className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-300 cursor-pointer"
                >
                  View All
                  <HiArrowRight className="w-5 h-5" />
                </m.button>
              </Link>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Expert articles on oil analysis, lubrication, and reliability
              engineering
            </p>
          </m.div>

          {/* Diagonal Tilted Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Card 1 - Large Featured */}
            <m.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <Link href={BLOG_POSTS[0].postLink}>
                <m.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-[500px] md:h-[600px] bg-gray-900 overflow-hidden cursor-pointer"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
                  }}
                >
                  {/* Image */}
                  <Image
                    src={BLOG_POSTS[0].thumbnail}
                    alt={BLOG_POSTS[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white uppercase tracking-wider mb-4">
                      {BLOG_POSTS[0].category}
                    </span>

                    <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                      {BLOG_POSTS[0].title}
                    </h3>

                    <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl">
                      {BLOG_POSTS[0].subtitle}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <HiCalendar className="w-5 h-5" />
                        <span>{BLOG_POSTS[0].date}</span>
                      </div>

                      <m.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                      >
                        <HiArrowRight className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                      </m.div>
                    </div>
                  </div>
                </m.div>
              </Link>
            </m.div>

            {/* Cards 2 & 3 - Stacked on Right */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-12">
              {BLOG_POSTS.slice(1).map((post, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <Link href={post.postLink}>
                    <m.div
                      whileHover={{ x: -8 }}
                      transition={{ duration: 0.3 }}
                      className="group relative bg-white overflow-hidden cursor-pointer"
                      style={{
                        clipPath:
                          index === 0
                            ? "polygon(0 5%, 100% 0, 100% 100%, 0 100%)"
                            : "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
                      }}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image Side */}
                        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 300px"
                          />

                          <div className="absolute top-8 left-4">
                            <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-gray-50">
                          <h3 className="text-xl font-medium text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                            {post.title}
                          </h3>

                          <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">
                            {post.subtitle}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <HiCalendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>

                            <m.div
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                            >
                              <HiArrowRight className="w-5 h-5 text-white" />
                            </m.div>
                          </div>
                        </div>
                      </div>
                    </m.div>
                  </Link>
                </m.div>
              ))}
            </div>
          </div>

          {/* Mobile View All */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex md:hidden justify-center mt-12"
          >
            <Link href="/blog">
              <m.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full cursor-pointer"
              >
                View All Posts
                <HiArrowRight className="w-5 h-5" />
              </m.button>
            </Link>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default BlogSection;
