"use client";

import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import { HiPhone, HiEnvelope, HiArrowRight } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function EnrollCTA() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="bg-white py-16">
        <div className="container mx-auto px-8 md:px-12">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-primary text-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl  font-black mb-4">Enroll Today</h2>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    Accelerate your career with Petrolabs Training Academy. Join
                    our upcoming training sessions and gain industry-recognized
                    certifications.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg">
                      <span className="text-sm font-semibold">
                        ✓ Hands-On Training
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg">
                      <span className="text-sm font-semibold">
                        ✓ Expert Trainers
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg">
                      <span className="text-sm font-semibold">
                        ✓ Certification
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:7675043138"
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:bg-white/15 transition-all group"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <HiPhone className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-white/70 text-sm block mb-1">
                        Call us at
                      </span>
                      <span className="text-white text-xl font-black">
                        7675043138
                      </span>
                    </div>
                    <HiArrowRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>

                  <a
                    href="mailto:training@petrolabs.com"
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:bg-white/15 transition-all group"
                  >
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <HiEnvelope className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-white/70 text-sm block mb-1">
                        Email us at
                      </span>
                      <span className="text-white text-lg font-black break-all">
                        training@petrolabs.com
                      </span>
                    </div>
                    <HiArrowRight className="w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
