"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiBeaker,
  HiUserGroup,
  HiGlobeAlt,
  HiSparkles,
  HiCheckCircle,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function WhyChooseUs() {
  const features = [
    {
      icon: HiBeaker,
      title: "Industry-Relevant Courses",
      description: "Designed around real-world lab and plant challenges",
      color: "primary",
    },
    {
      icon: HiUserGroup,
      title: "Expert Trainers",
      description:
        "25+ years in oil analysis, reliability engineering & lab sciences",
      color: "secondary",
    },
    {
      icon: HiGlobeAlt,
      title: "Global Standards",
      description: "Courses mapped to ASTM, ISO, BIS, APHA, ICML requirements",
      color: "accent1",
    },
    {
      icon: HiSparkles,
      title: "Hands-On Training",
      description: "Training in live lab environments with modern instruments",
      color: "accent2",
    },
  ];

  const highlights = [
    "NABL-accredited laboratories with state-of-the-art instruments",
    "Trainers with 25+ years of industrial experience",
    "Courses aligned with international standards (ASTM, ISO, ICML, BIS, APHA, AOAC)",
    "A blend of theory, case studies, and real-world practical sessions",
    "Certifications add value for job placements, promotions, and international opportunities",
  ];

  const colorClasses = {
    primary: { bg: "bg-primary/10", icon: "text-primary" },
    secondary: { bg: "bg-secondary/10", icon: "text-secondary" },
    accent1: { bg: "bg-accent1/10", icon: "text-accent1" },
    accent2: { bg: "bg-accent2/10", icon: "text-accent2" },
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Choose Petrolabs Training Academy?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our training academy is backed by world-class facilities and
              expert trainers
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = colorClasses[feature.color];

              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all text-center"
                >
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </m.div>
              );
            })}
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-gray-100"
          >
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
              Our Training Academy is Backed By
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <HiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">
                    {highlight}
                  </span>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
