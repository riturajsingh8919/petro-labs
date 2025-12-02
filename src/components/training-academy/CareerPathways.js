"use client";

import { LazyMotion, m } from "framer-motion";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import {
  HiAcademicCap,
  HiArrowRight,
  HiBriefcase,
  HiOfficeBuilding,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function CareerPathways() {
  const careerPaths = [
    {
      education: "B.Sc / M.Sc",
      fields: "Chem., Biochem, Env Science, Food Tech.",
      avatar: "👨‍🔬",
      color: "primary",
      bgColor: "bg-primary",
      textColor: "text-primary",
      lightBg: "bg-primary/10",
      borderColor: "border-primary/20",
      tracks: [
        "Analytical Chemistry (HPLC, GC, GC MS/MS, ICP-OES, AAS)",
        "Environmental Testing (Water, Air, Soil)",
        "Food & Oils Testing",
        "Oil Analysis & Ferrography (advanced)",
      ],
      roles: [
        "QC/QA Analyst",
        "Lab Chemist",
        "Environmental Analyst",
        "Food Analyst",
      ],
      industries:
        "Pharma, Food & Beverages, NABL Labs, Oil & Lubricants, Environmental Testing, Chemical Plants",
    },
    {
      education: "B.Pharm / M.Pharm",
      fields: "",
      avatar: "👩‍💼",
      color: "secondary",
      bgColor: "bg-secondary",
      textColor: "text-secondary",
      lightBg: "bg-secondary/10",
      borderColor: "border-secondary/20",
      tracks: [
        "Pharma QC (HPLC, GC, ICP-MS)",
        "Stability & Validation (ICH)",
        "Impurity Profiling",
        "Shelf-Life & Nutritional Testing",
      ],
      roles: [
        "QC/QA Analyst",
        "Lab Assistant",
        "Production QC Operator",
        "Plant QC Support Engineer",
      ],
      industries:
        "Pharma Companies, CROs, FDA/WHO GMP-compliant industries, Chemical Plants, Oil & Lube Refineries, Cement, Paints, Food Processing",
    },
    {
      education: "Diploma",
      fields: "Chemical-Mechanical, Electrical, Food Tech, Environmental",
      avatar: "👷",
      color: "accent1",
      bgColor: "bg-accent1",
      textColor: "text-accent1",
      lightBg: "bg-accent1/10",
      borderColor: "border-accent1/20",
      tracks: [
        "General Industries QC (water, oils, lubricants, materials)",
        "Basic Instrumentation (HPLC/GC overview)",
        "Manufacturing QC Practices",
        "Plant Maintenance QC",
      ],
      roles: [
        "QC Helper / Assistant",
        "Shop Floor QC Technician",
        "Sample Collection Technician",
        "Plant Operator Support",
      ],
      industries:
        "Manufacturing Plants, Refineries, Small-Medium Industries, Food Units, Water Plants",
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
              Career Path Comparison – Who Fits Where?
            </h2>
            <p className="text-gray-600 text-lg">
              Find your perfect training track based on your educational
              background
            </p>
          </m.div>

          {/* Desktop Table - Hidden on Mobile */}
          <div className="hidden lg:block max-w-7xl mx-auto mb-12 overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-black text-base border-r border-white/20 w-[20%]">
                    Education Background
                  </th>
                  <th className="px-6 py-4 text-left font-black text-base border-r border-white/20 w-[30%]">
                    Recommended Training Tracks
                  </th>
                  <th className="px-6 py-4 text-left font-black text-base border-r border-white/20 w-[25%]">
                    Typical Job Roles After Training
                  </th>
                  <th className="px-6 py-4 text-left font-black text-base w-[25%]">
                    Industries Hiring
                  </th>
                </tr>
              </thead>
              <tbody>
                {careerPaths.map((path, index) => (
                  <m.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-primary/5 transition-colors`}
                  >
                    {/* Education Column */}
                    <td className="px-6 py-6 align-top border-r border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="text-4xl shrink-0">{path.avatar}</div>
                        <div>
                          <div className="font-black text-gray-900 text-base mb-1">
                            {path.education}
                          </div>
                          {path.fields && (
                            <div className="text-gray-600 text-xs leading-relaxed">
                              {path.fields}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Training Tracks Column */}
                    <td className="px-6 py-6 align-top border-r border-gray-200">
                      <ul className="space-y-2">
                        {path.tracks.map((track, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <HiArrowRight
                              className={`w-4 h-4 ${path.textColor} shrink-0 mt-0.5`}
                            />
                            <span className="text-gray-700 text-xs leading-relaxed">
                              {track}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </td>

                    {/* Job Roles Column */}
                    <td className="px-6 py-6 align-top border-r border-gray-200">
                      <div className="space-y-2">
                        {path.roles.map((role, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <HiArrowRight
                              className={`w-4 h-4 ${path.textColor} shrink-0 mt-0.5`}
                            />
                            <span className="text-gray-700 text-xs font-semibold leading-relaxed">
                              {role}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* Industries Column */}
                    <td className="px-6 py-6 align-top">
                      <p className="text-gray-700 text-xs leading-relaxed">
                        {path.industries}
                      </p>
                    </td>
                  </m.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Cards - Shown on Mobile */}
          <div className="lg:hidden space-y-6 max-w-3xl mx-auto">
            {careerPaths.map((path, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100"
              >
                {/* Header */}
                <div className={`${path.bgColor} p-5`}>
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{path.avatar}</div>
                    <div>
                      <h3 className="text-xl font-black text-white mb-1">
                        {path.education}
                      </h3>
                      {path.fields && (
                        <p className="text-white/90 text-sm font-semibold">
                          {path.fields}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-5">
                  {/* Training Tracks */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <HiAcademicCap className={`w-5 h-5 ${path.textColor}`} />
                      <h4 className="font-black text-gray-900 text-sm">
                        Recommended Training Tracks
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-2">
                      {path.tracks.map((track, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${path.bgColor} shrink-0 mt-2`}
                          ></span>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {track}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Job Roles */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <HiBriefcase className={`w-5 h-5 ${path.textColor}`} />
                      <h4 className="font-black text-gray-900 text-sm">
                        Typical Job Roles
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {path.roles.map((role, idx) => (
                        <div
                          key={idx}
                          className={`px-3 py-2 ${path.lightBg} rounded-lg text-gray-800 font-semibold text-sm border ${path.borderColor}`}
                        >
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <HiOutlineOfficeBuilding
                        className={`w-5 h-5 ${path.textColor}`}
                      />
                      <h4 className="font-black text-gray-900 text-sm">
                        Industries Hiring
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm pl-2">
                      {path.industries}
                    </p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* Placement Focus */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-5xl mx-auto"
          >
            <div className="bg-linear-to-br from-primary to-primary/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-center">
                Placement Focus
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: "🔬",
                    title: "Lab Analyst Roles",
                    desc: "NABL, FSSAI, Pharma QC",
                  },
                  {
                    icon: "⚙️",
                    title: "QC Technicians",
                    desc: "Manufacturing, Oil, Cement, Food",
                  },
                  {
                    icon: "🌍",
                    title: "Environmental Analysts",
                    desc: "Water, Air, Soil, Effluent Labs",
                  },
                  {
                    icon: "🛢️",
                    title: "Reliability Engineers",
                    desc: "After MLA/MLT certifications",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-black mb-1 text-sm">{item.title}</div>
                    <div className="text-white/80 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

          {/* Key Takeaway */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 max-w-4xl mx-auto bg-primary/5 rounded-xl p-6 border-2 border-primary/20"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white text-xl">💡</span>
              </div>
              <div>
                <h4 className="font-black text-gray-900 mb-2">
                  How This Helps
                </h4>
                <ul className="space-y-1 text-gray-700 text-sm leading-relaxed">
                  <li>
                    <span className="font-bold">B.Sc/M.Sc:</span> Move into
                    advanced lab analyst/QC roles with NABL/FDA compliance
                    exposure
                  </li>
                  <li>
                    <span className="font-bold">B.Pharm/M.Pharm:</span> Enter
                    pharma QC/QA, regulatory labs, and stability/validation
                    functions
                  </li>
                  <li>
                    <span className="font-bold">Diploma:</span> Strong fit for
                    general industry QC technician jobs in production plants
                  </li>
                </ul>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
