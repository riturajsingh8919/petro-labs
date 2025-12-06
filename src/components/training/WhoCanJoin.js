"use client";

import { LazyMotion, m } from "framer-motion";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiAcademicCap, HiBriefcase } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function WhoCanJoin() {
  const audiences = [
    {
      icon: HiAcademicCap,
      title: "Students & Researchers",
      description:
        "MSc, PhD, and B.Tech graduates in Chemistry, Biotech, Pharma, Mechanical & Reliability",
      color: "primary",
    },
    {
      icon: HiBriefcase,
      title: "Industry Professionals",
      description:
        "QC/QA analysts, reliability engineers, plant managers, maintenance teams",
      color: "secondary",
    },
    {
      icon: HiOutlineOfficeBuilding,
      title: "Organizations",
      description:
        "Companies looking to upskill their workforce in reliability and testing practices",
      color: "accent1",
    },
  ];

  const colorClasses = {
    primary: { bg: "bg-primary", light: "bg-primary/10", icon: "text-primary" },
    secondary: {
      bg: "bg-secondary",
      light: "bg-secondary/10",
      icon: "text-secondary",
    },
    accent1: { bg: "bg-accent1", light: "bg-accent1/10", icon: "text-accent1" },
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-8 md:px-12">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl  font-black text-gray-900 mb-4">
              Who Can Join?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our training programs are designed for diverse audiences across
              academia and industry
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              const colors = colorClasses[audience.color];

              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all text-center"
                >
                  <div
                    className={`w-20 h-20 ${colors.light} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <Icon className={`w-10 h-10 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {audience.description}
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
