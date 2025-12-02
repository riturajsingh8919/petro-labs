"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiDocumentText,
  HiUserGroup,
  HiBriefcase,
  HiAcademicCap,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function CareerSupport() {
  const supports = [
    {
      icon: HiDocumentText,
      title: "Resume & LinkedIn Refresh",
      description:
        "Keywords optimization for QC/QA roles, ATS-friendly formatting",
      color: "primary",
    },
    {
      icon: HiUserGroup,
      title: "Mock Interviews",
      description: "Technical + HR rounds, case studies, common QC questions",
      color: "secondary",
    },
    {
      icon: HiBriefcase,
      title: "Referral Support",
      description: "Connections to partner labs/industry where feasible",
      color: "accent1",
    },
    {
      icon: HiAcademicCap,
      title: "Portfolio Building",
      description:
        "Showcase your capstone project, SOPs, and validation reports",
      color: "accent2",
    },
  ];

  const eligibility = [
    {
      title: "Degrees",
      items: [
        "B.Sc/M.Sc (Chemistry, Biochemistry, Environmental, Food)",
        "B.Pharm/M.Pharm",
      ],
    },
    {
      title: "Skills Helpful",
      items: ["Basic lab safety", "Pipetting & titration", "MS Excel"],
    },
    {
      title: "Experience",
      items: ["Freshers welcome", "Upskilling for 0-3 years experience"],
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Career Support & Eligibility
            </h2>
            <p className="text-gray-600 text-lg">
              We help you land your dream lab analyst job
            </p>
          </m.div>

          {/* Career Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {supports.map((support, index) => {
              const Icon = support.icon;
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all text-center"
                >
                  <div
                    className={`w-14 h-14 bg-${support.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">
                    {support.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {support.description}
                  </p>
                </m.div>
              );
            })}
          </div>

          {/* Eligibility */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-linear-to-br from-primary to-primary/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-black mb-6 text-center">
                Who Should Apply?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {eligibility.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
                  >
                    <h4 className="font-black mb-3">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-white/90 text-sm leading-relaxed"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
