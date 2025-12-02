"use client";

import { LazyMotion, m } from "framer-motion";
import { HiAcademicCap, HiUsers, HiLightBulb } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function CareersIntro() {
  const highlights = [
    {
      icon: HiAcademicCap,
      title: "Learn & Grow",
      description: "Work with experienced professionals in your field",
    },
    {
      icon: HiUsers,
      title: "Collaborative",
      description: "Join a team of talented individuals",
    },
    {
      icon: HiLightBulb,
      title: "Innovation",
      description: "Work on cutting-edge testing technologies",
    },
  ];

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
            <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-6 text-gray-900">
              Why Join <span className="text-primary">Petrolabs?</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Each year, we welcome talented young people to start a Petrolabs
              internship or apprenticeship for ITI, Diploma holders, Management
              students and Mechanical Engineers. We believe that the best way to
              learn a profession in our industry is to closely study and work
              together with experienced minds within your field.
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
