"use client";

import { LazyMotion, m } from "framer-motion";
import Image from "next/image";
import { HiCheckBadge, HiBeaker } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function MechanicalHero() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="relative overflow-hidden mb-12">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/services/mechanical-hero.png"
            alt="Mechanical and Chemical Testing Laboratory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/70 to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-8 md:px-12 pb-12">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
                    <HiCheckBadge className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-white">
                      NABL Accredited
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent1/20 backdrop-blur-md rounded-full border border-accent1/30">
                    <HiBeaker className="w-5 h-5 text-accent1" />
                    <span className="text-sm font-bold text-white">
                      ASTM Certified
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Chemical & Mechanical Testing
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                  Advanced Metal Analysis for Strength, Quality & Compliance
                </p>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
