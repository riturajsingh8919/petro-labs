"use client";

import { LazyMotion, m } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TestingParameters() {
  const parameters = [
    {
      category: "Chemical Analysis",
      icon: "🧪",
      tests: [
        "Moisture, Ash, pH, Acidity, Titrable Acidity",
        "Protein, Fat, Carbohydrate, Energy Value",
        "Salt, Sugar, Fibre, Starch Content",
        "Fatty Acid Profile, Cholesterol, Trans Fat",
        "Preservatives (Benzoates, Sorbates, Sulfites)",
        "Food Additives (Colours, Flavours, Stabilizers)",
      ],
    },
    {
      category: "Nutritional Testing",
      icon: "🍎",
      tests: [
        "Macro & Micro Nutrients",
        "Vitamins (A, B, C, D, E, K)",
        "Minerals (Ca, Mg, K, Na, Fe, Zn, Se)",
        "Amino Acid Profile",
        "Omega 3 & Omega 6 Fatty Acids",
        "Dietary Fiber & Energy Calculation",
      ],
    },
    {
      category: "Contaminant Analysis",
      icon: "⚠️",
      tests: [
        "Heavy Metals (Lead, Arsenic, Cadmium, Mercury)",
        "Pesticide Residues (Multi-residue screening)",
        "Mycotoxins (Aflatoxins, Ochratoxin, DON)",
        "Polyaromatic Hydrocarbons (PAHs)",
        "Plasticizers & Residual Solvents",
        "Antibiotic Residues",
      ],
    },
    {
      category: "Microbiological Testing",
      icon: "🦠",
      tests: [
        "Total Plate Count (TPC)",
        "Yeast & Mould Count",
        "Coliforms & E. coli",
        "Salmonella, Shigella, Listeria",
        "Staphylococcus aureus",
        "Clostridium & Pathogen Testing",
      ],
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-white">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl  font-black mb-4">
              Comprehensive Testing Parameters
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Our laboratory conducts detailed testing to ensure food safety,
              quality, and regulatory compliance
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {parameters.map((param, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-4xl">{param.icon}</div>
                  <h3 className="text-2xl font-black">{param.category}</h3>
                </div>

                <div className="space-y-3">
                  {param.tests.map((test, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <HiCheckCircle className="w-5 h-5 text-accent1 shrink-0 mt-0.5" />
                      <span className="text-white/90 leading-relaxed">
                        {test}
                      </span>
                    </div>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
