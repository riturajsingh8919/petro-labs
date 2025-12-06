"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiArrowRight,
  HiPhone,
  HiEnvelope,
  HiCheckCircle,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function FoodCTA() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="relative">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gray-900 text-white rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent1/20 rounded-full blur-3xl" />

          <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <m.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-4">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">
                      Get Expert Testing
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                    Ensure Food Safety &{" "}
                    <span className="text-primary">Quality</span>
                  </h2>

                  <p className="text-white/80 text-lg mb-6 leading-relaxed">
                    Ensure the safety, quality, and compliance of your food and
                    agricultural products with our comprehensive testing
                    services.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "NABL-accredited food laboratory",
                      "FSSAI & export compliance",
                      "Fast turnaround with detailed reports",
                    ].map((feature, index) => (
                      <m.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <HiCheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-white/90">{feature}</span>
                      </m.div>
                    ))}
                  </div>
                </m.div>
              </div>

              <div className="space-y-4">
                <m.a
                  href="tel:7675043138"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="block bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-primary hover:bg-white/15 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <HiPhone className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-white/60 text-sm font-medium block mb-1">
                        Call us directly
                      </span>
                      <span className="text-white text-xl font-black">
                        7675043138
                      </span>
                    </div>
                    <HiArrowRight className="w-6 h-6 text-white/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </m.a>

                <m.a
                  href="mailto:info@petrolabs.com"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="block bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-accent1 hover:bg-white/15 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent1 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <HiEnvelope className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-white/60 text-sm font-medium block mb-1">
                        Email us
                      </span>
                      <span className="text-white text-lg font-black break-all">
                        info@petrolabs.com
                      </span>
                    </div>
                    <HiArrowRight className="w-6 h-6 text-white/40 group-hover:text-accent1 group-hover:translate-x-1 transition-all" />
                  </div>
                </m.a>

                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-center pt-4"
                >
                  <p className="text-white/60 text-sm">
                    Available Monday to Saturday, 9 AM - 6 PM
                  </p>
                </m.div>
              </div>
            </div>
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
