"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiAcademicCap,
  HiClock,
  HiUserGroup,
  HiArrowRight,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function InternshipSection() {
  const programs = [
    {
      icon: HiAcademicCap,
      title: "Students Welcome",
      items: ["ITI Graduates", "Diploma Holders", "Management Students"],
      color: "primary",
    },
    {
      icon: HiUserGroup,
      title: "Engineering Fields",
      items: [
        "Mechanical Engineering",
        "Instrumentation Engineering",
        "Chemical Engineering",
      ],
      color: "secondary",
    },
    {
      icon: HiClock,
      title: "Flexible Duration",
      items: [
        "3 months internship",
        "6 months program",
        "Up to 1 year apprenticeship",
      ],
      color: "accent1",
    },
  ];

  const colorClasses = {
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/20",
    },
    secondary: {
      bg: "bg-secondary/10",
      text: "text-secondary",
      border: "border-secondary/20",
    },
    accent1: {
      bg: "bg-accent1/10",
      text: "text-accent1",
      border: "border-accent1/20",
    },
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-8 md:px-12">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-6 text-gray-900">
              Internships &{" "}
              <span className="text-primary">Apprenticeships</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Gain hands-on experience in a NABL-accredited testing laboratory.
              Our internship opportunities range from three months to one year.
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
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
                  className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${colors.border} hover:shadow-xl transition-all`}
                >
                  <div
                    className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  <ul className="space-y-2">
                    {program.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace(
                            "/10",
                            ""
                          )}`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </m.div>
              );
            })}
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="mailto:careers@petrolabsindia.com"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Apply for Internship
              <HiArrowRight className="w-5 h-5" />
            </a>
            <p className="text-gray-600 text-sm mt-4">
              Email your resume to{" "}
              <span className="font-bold text-primary">
                careers@petrolabsindia.com
              </span>
            </p>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
