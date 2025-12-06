"use client";

import { LazyMotion, m } from "framer-motion";
import BlogCard from "./BlogCard";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function BlogGrid({ blogs }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="bg-white py-16">
        <div className="container mx-auto px-8 md:px-12">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl  font-black text-gray-900 mb-4">
              Latest Insights & Articles
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and best practices
              in laboratory testing and quality assurance
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
