"use client";

import { LazyMotion, m } from "framer-motion";
import Image from "next/image";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function PetroleumHero() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="relative overflow-hidden">
        <div className="relative h-[350px] md:h-[450px]">
          <Image
            src="/services/petroleum-hero.png"
            alt="Petroleum Testing Laboratory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <div className="p-8 md:p-12 w-full">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 mb-4">
                  <span className="text-sm font-bold text-white">
                    NABL Accredited
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Petroleum Products & Lubricants Testing Services
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  Reliable Testing for Oils, Fuels, and Specialty Fluids
                </p>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
