"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiAcademicCap,
  HiCheckBadge,
  HiUsers,
  HiTrophy,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TrainingHero() {
  const stats = [
    { icon: HiAcademicCap, value: "25+", label: "Years Experience" },
    { icon: HiUsers, value: "1000+", label: "Students Trained" },
    { icon: HiTrophy, value: "13", label: "Courses Offered" },
    { icon: HiCheckBadge, value: "NABL", label: "Accredited Lab" },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="relative bg-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />

        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <HiAcademicCap className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                Professional Training Academy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Build Skills. Gain Expertise.
              <br />
              <span className="text-primary">Drive Reliability.</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Empowering students, professionals, and industry experts with
              practical, hands-on training in laboratory sciences, oil analysis,
              lubrication, and reliability engineering.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 text-center hover:border-primary hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
