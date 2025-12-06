"use client";

import { LazyMotion, m } from "framer-motion";
import Image from "next/image";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TransformerHero() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="relative overflow-hidden mb-14">
        <div className="relative h-[350px] md:h-[450px]">
          <Image
            src="/services/transformer-hero.png"
            alt="Transformer Oil Testing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-8 md:px-12 pb-12">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 mb-4">
                  <span className="text-sm font-bold text-white">
                    IEC & ASTM Certified
                  </span>
                </div>
                <h1 className="text-3xl  lg:text-5xl font-black text-white mb-4 leading-tight">
                  Transformer Oil Testing Services
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  Comprehensive analysis for electrical safety and reliability
                </p>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
