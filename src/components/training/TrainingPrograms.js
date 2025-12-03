"use client";

import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import { HiBeaker, HiCog, HiArrowRight } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TrainingPrograms() {
  const programs = [
    {
      icon: HiBeaker,
      category: "Analytical Chemistry",
      description:
        "Master advanced analytical techniques widely used in food, pharma, environment, and industrial testing.",
      color: "primary",
      courses: [
        { title: "GC-MS/MS Training", href: "/training/gc-ms-training" },
        { title: "ICP-OES Training", href: "/training/icp-oes-training" },
        { title: "HPLC Training", href: "/training/hplc-training" },
        { title: "AAS Training", href: "/training/aas-training" },
        { title: "GC Training", href: "/training/gc-training" },
        { title: "Chemistry Training", href: "/training/chemistry" },
      ],
    },
    {
      icon: HiCog,
      category: "Lubrication & Reliability",
      description:
        "Gain expertise in lubricant management, oil analysis, and predictive maintenance aligned with ICML certifications.",
      color: "secondary",
      courses: [
        {
          title: "Oil Analysis & Ferrography",
          href: "/training/oil-analysis-ferrography",
        },
        {
          title: "Condition-Based Maintenance",
          href: "/training/condition-based-maintenance",
        },
        {
          title: "Machinery Lubrication I",
          href: "/training/machinery-lubrication-1",
        },
        {
          title: "Machinery Lubrication II",
          href: "/training/machinery-lubrication-2",
        },
        { title: "Lubrication Engineer (MLE)", href: "/training/mle" },
        { title: "Lubricant Analyst II", href: "/training/mla-2" },
        { title: "Lubricant Analyst III", href: "/training/mla-3" },
      ],
    },
  ];

  const colorClasses = {
    primary: {
      bg: "bg-primary",
      light: "bg-primary/10",
      text: "text-primary",
      border: "border-primary",
      hover: "hover:bg-primary hover:text-white",
    },
    secondary: {
      bg: "bg-accent2",
      light: "bg-accent2/10",
      text: "text-accent2",
      border: "border-accent2",
      hover: "hover:bg-accent2 hover:text-white",
    },
  };

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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Training Programs Offered
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose from our comprehensive range of professional training
              courses
            </p>
          </m.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const colors = colorClasses[program.color];

              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className={`${colors.bg} p-6`}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-white">
                        {program.category}
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="space-y-2">
                      {program.courses.map((course, idx) => (
                        <Link
                          key={idx}
                          href={course.href}
                          className={`flex items-center justify-between p-4 rounded-xl border-2 ${colors.border}/20 ${colors.hover} transition-all group`}
                        >
                          <span
                            className={`font-bold ${colors.text} group-hover:text-white transition-colors`}
                          >
                            {course.title}
                          </span>
                          <HiArrowRight
                            className={`w-5 h-5 ${colors.text} group-hover:text-white transition-all group-hover:translate-x-1`}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
