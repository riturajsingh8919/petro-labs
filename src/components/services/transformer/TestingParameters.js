"use client";

import { LazyMotion, m } from "framer-motion";
import { HiBeaker, HiBolt, HiChartBar, HiCog } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TestingParameters() {
  const categories = [
    {
      title: "Physical & Chemical Tests",
      icon: HiBeaker,
      color: "from-blue-500 to-cyan-500",
      tests: [
        "Appearance & Colour",
        "Density @ 27°C",
        "Viscosity",
        "Flash Point",
        "Pour Point",
        "Interfacial Tension (IFT)",
        "Acidity (Neutralization Value)",
        "Moisture Content (Karl Fischer)",
        "Oxidation Stability",
        "Sludge Content",
      ],
    },
    {
      title: "Electrical Properties",
      icon: HiBolt,
      color: "from-yellow-500 to-orange-500",
      tests: [
        "Dielectric Breakdown Voltage (BDV)",
        "Resistivity",
        "Dissipation Factor / Tan Delta",
      ],
    },
    {
      title: "Dissolved Gas Analysis (DGA)",
      icon: HiChartBar,
      color: "from-purple-500 to-pink-500",
      tests: [
        "Hydrogen (H₂)",
        "Methane (CH₄)",
        "Ethane (C₂H₆)",
        "Ethylene (C₂H₄)",
        "Acetylene (C₂H₂)",
        "Carbon Monoxide (CO)",
        "Carbon Dioxide (CO₂)",
      ],
      note: "Interpretation as per IEC 60599 & Rogers Ratio Method",
    },
    {
      title: "Advanced Tests",
      icon: HiCog,
      color: "from-green-500 to-emerald-500",
      tests: [
        "Furan Analysis (insulating paper degradation)",
        "PCB (Polychlorinated Biphenyls) Content",
        "Particle Count (ISO 4406 Cleanliness Code)",
      ],
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl  font-black text-gray-900 mb-3">
            Comprehensive Testing Parameters
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete analysis covering all critical aspects of transformer oil
            quality
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-linear-to-r ${category.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Tests List */}
                <div className="p-6">
                  <div className="space-y-2.5">
                    {category.tests.map((test, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="text-primary font-bold mt-1 shrink-0">
                          •
                        </span>
                        <span className="leading-relaxed">{test}</span>
                      </div>
                    ))}
                  </div>

                  {category.note && (
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-sm text-primary font-semibold">
                        👉 {category.note}
                      </p>
                    </div>
                  )}
                </div>
              </m.div>
            );
          })}
        </div>
      </section>
    </LazyMotion>
  );
}
