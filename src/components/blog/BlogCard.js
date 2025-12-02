"use client";

import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiClock, HiCalendar } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function BlogCard({ blog, index }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <Link href={`/blogs/${blog.slug}`}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all h-full flex flex-col group">
            {/* Image */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-lg">
                  {blog.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                {blog.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  <HiCalendar className="w-4 h-4" />
                  <span>
                    {new Date(blog.publishDate).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HiClock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {blog.author}
                  </p>
                  <p className="text-xs text-gray-500">{blog.authorRole}</p>
                </div>
                <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                  Read More
                  <HiArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </m.div>
    </LazyMotion>
  );
}
