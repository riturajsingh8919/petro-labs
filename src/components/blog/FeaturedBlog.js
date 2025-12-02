"use client";

import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiClock, HiCalendar } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function FeaturedBlog({ blog }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="bg-white py-16">
        <div className="container mx-auto px-8 md:px-12">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href={`/blogs/${blog.slug}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100 hover:border-primary hover:shadow-3xl transition-all group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl shadow-lg">
                        Featured Article
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-lg mb-4 w-fit">
                      {blog.category}
                    </span>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <HiCalendar className="w-4 h-4" />
                        <span>
                          {new Date(blog.publishDate).toLocaleDateString(
                            "en-IN",
                            { year: "numeric", month: "long", day: "numeric" }
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiClock className="w-4 h-4" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <p className="text-base font-bold text-gray-900">
                          {blog.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {blog.authorRole}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-primary font-bold text-lg group-hover:gap-4 transition-all">
                        Read Article
                        <HiArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
