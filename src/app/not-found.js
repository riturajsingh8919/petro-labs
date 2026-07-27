"use client";

import Link from "next/link";
import { HiHome, HiArrowRight } from "react-icons/hi2";
import { m, LazyMotion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function NotFound() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="bg-white min-h-[70vh] flex flex-col justify-center items-center py-20 px-4">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-accent1 mb-6">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Oops! The page you are looking for might have been removed, had its
            name changed, or is temporarily unavailable. Let&apos;s get you back
            on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              <HiHome className="w-5 h-5" />
              Back to Homepage
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-50 text-gray-900 font-bold rounded-xl border-2 border-gray-200 hover:border-accent1 hover:text-accent1 transition-colors"
            >
              Explore Our Services
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </m.div>
      </div>
    </LazyMotion>
  );
}
