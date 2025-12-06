"use client";

import { LazyMotion, m } from "framer-motion";
import Image from "next/image";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TransformerOverview() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Professional Transformer Oil Analysis
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our laboratory carries out comprehensive testing of transformer
              oils to ensure optimal performance, safety, and longevity of
              electrical equipment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We employ state-of-the-art analytical instruments and follow
              international standards including IEC, ASTM, IS, and BIS to
              deliver accurate and reliable results.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/services/transformer-lab.png"
              alt="Transformer Oil Testing Laboratory"
              fill
              className="object-cover"
            />
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
