"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiBeaker,
  HiShieldCheck,
  HiCake,
  HiGlobeAlt,
  HiCog,
  HiChevronRight,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TrainingTracks() {
  const tracks = [
    {
      id: 1,
      icon: HiBeaker,
      title: "Analytical Chemistry – Core Instruments",
      ideal: "B.Sc/M.Sc Chemistry, B.Pharm/M.Pharm (QC/QA)",
      color: "primary",
      modules: [
        {
          name: "GC-MS/MS",
          desc: "Trace organics, pesticide residues, pharma impurities",
          topics: [
            "Principles",
            "Sample prep",
            "Tuning/calibration",
            "MRM/scan",
            "Quant",
            "QA/QC",
            "Data integrity",
            "Troubleshooting",
          ],
        },
        {
          name: "HPLC (UV/PDA/FLD)",
          desc: "Assay, impurities, dissolution",
          topics: [
            "Columns & mobile phases",
            "Gradient design",
            "System suitability",
            "ICH validation",
            "Robustness",
            "OOS/OOT",
          ],
        },
        {
          name: "GC (FID/TCD/ECD)",
          desc: "Volatiles & semi-volatiles, solvents, flavors",
          topics: [
            "Column choice",
            "Carrier gases",
            "Headspace/SPME",
            "Calibration strategies",
            "Maintenance",
          ],
        },
        {
          name: "ICP-OES / AAS",
          desc: "Metals & minerals in water, food, pharma, oils",
          topics: [
            "Digestion (closed/open)",
            "Interferences",
            "Multi-element methods",
            "Detection limits",
            "Spike recoveries",
          ],
        },
      ],
      outcomes:
        "Method execution, validation assistance, audit-ready documentation, CAPA thinking",
    },
    {
      id: 2,
      icon: HiShieldCheck,
      title: "Pharmaceutical QC & Regulatory Readiness",
      ideal: "B.Pharm/M.Pharm, M.Sc (Pharm Analysis)",
      color: "accent2",
      modules: [
        {
          name: "GxP & Data Integrity",
          desc: "ALCOA+ principles",
          topics: [],
        },
        {
          name: "Pharm Method Validation (ICH Q2)",
          desc: "Accuracy, precision, linearity, range, LOD/LOQ, robustness",
          topics: [],
        },
        {
          name: "Stability & Degradation Studies",
          desc: "Photolysis, oxidation, hydrolysis",
          topics: [],
        },
        {
          name: "Impurity Profiling",
          desc: "Elemental Impurities (ICH Q3D)",
          topics: [],
        },
        {
          name: "Documentation for Audits",
          desc: "SOPs, protocols, raw data, CoAs",
          topics: [],
        },
      ],
      outcomes:
        "Confident QC analyst ready for US-FDA/MHRA/WHO-GMP environments",
    },
    {
      id: 3,
      icon: HiCake,
      title: "Food & Oils Testing (FSSAI/Codex)",
      ideal: "B.Sc/M.Sc Food/Chemistry",
      color: "primary",
      modules: [
        {
          name: "Food Proximate & Nutrition",
          desc: "Moisture, ash, protein, fat, carbs, energy, fiber, vitamins/minerals",
          topics: [],
        },
        {
          name: "Contaminants",
          desc: "Heavy metals (ICP-OES/AAS), pesticides (GC-MS/MS), mycotoxins, PAHs",
          topics: [],
        },
        {
          name: "Edible Oils & Fats",
          desc: "Acid value, PV, IV, SV, trans-fats, fatty acid profile",
          topics: [],
        },
        {
          name: "Microbiology (intro)",
          desc: "TPC, Yeast & Mould, coliforms, E. coli, pathogen screening",
          topics: [],
        },
        {
          name: "Labeling Support",
          desc: "Nutrition facts, claims, shelf-life study design",
          topics: [],
        },
      ],
      outcomes:
        "Analyst roles in food labs, edible oil refineries, and FSSAI-approved facilities",
    },
    {
      id: 4,
      icon: HiGlobeAlt,
      title: "Environmental Testing (Water & Air)",
      ideal: "B.Sc/M.Sc Environmental/Chemistry",
      color: "accent2",
      modules: [
        {
          name: "Water/Wastewater (APHA/BIS)",
          desc: "pH, TDS, BOD, COD, nutrients, metals, cyanide/phenols, oil & grease",
          topics: [],
        },
        {
          name: "Ambient & Indoor Air",
          desc: "PM10/PM2.5, SO₂, NO₂, O₃, VOCs/BTEX, heavy metals, microbial air",
          topics: [],
        },
        {
          name: "Sampling & Preservation",
          desc: "Grab/composite, chain-of-custody",
          topics: [],
        },
        {
          name: "Uncertainty of Measurement & QA/QC",
          desc: "Blanks, duplicates, spikes, control charts",
          topics: [],
        },
      ],
      outcomes:
        "Analyst/field chemist roles in CPCB/SPCB projects & private labs",
    },
    {
      id: 5,
      icon: HiCog,
      title: "Petro/Oils & Lubricants (Bonus Elective)",
      ideal: "B.Sc/M.Sc Chemistry, Mech/Prod with interest in fluids",
      color: "primary",
      modules: [
        {
          name: "Lube/Fuel Tests",
          desc: "Viscosity, TAN/TBN, FTIR, ICP wear metals, particle count, flash/pour, distillation",
          topics: [],
        },
        {
          name: "Transformer Oil",
          desc: "BDV, moisture, acidity, IFT, DGA overview",
          topics: [],
        },
        {
          name: "Report Interpretation",
          desc: "Trends, alarms, maintenance recommendations",
          topics: [],
        },
      ],
      outcomes:
        "QC analyst in lubricant/fuel labs; pathway to reliability specializations",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section id="training-tracks" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-10 lg:px-16">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Choose Your Training Track
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Job-ready programs designed for different career paths
            </p>
          </m.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tracks.map((track, index) => {
              const Icon = track.icon;
              return (
                <m.div
                  key={track.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all"
                >
                  {/* Header */}
                  <div className={`bg-${track.color} p-6`}>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-white mb-2">
                          {track.id}. {track.title}
                        </h3>
                        <p className="text-white/90 font-semibold">
                          <span className="text-white/70">Ideal for: </span>
                          {track.ideal}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Modules */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {track.modules.map((module, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-xl p-4 border border-gray-200"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-8 h-8 bg-${track.color} rounded-lg flex items-center justify-center shrink-0`}
                            >
                              <HiChevronRight className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-black text-gray-900 mb-1">
                                {module.name}
                              </h4>
                              <p className="text-gray-600 text-sm mb-2">
                                {module.desc}
                              </p>
                              {module.topics.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {module.topics.map((topic, topicIdx) => (
                                    <span
                                      key={topicIdx}
                                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded"
                                    >
                                      {topic}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Outcomes */}
                    <div
                      className={`mt-6 p-4 bg-${track.color}/10 rounded-xl border-2 border-${track.color}/20`}
                    >
                      <div className="flex items-start gap-3">
                        <HiShieldCheck
                          className={`w-6 h-6 text-${track.color} shrink-0 mt-0.5`}
                        />
                        <div>
                          <h5 className="font-black text-gray-900 mb-1">
                            Learning Outcomes
                          </h5>
                          <p className="text-gray-700 leading-relaxed">
                            {track.outcomes}
                          </p>
                        </div>
                      </div>
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
