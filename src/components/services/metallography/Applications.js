"use client";

import { LazyMotion, m } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function Applications() {
  const applications = [
    {
      title: "Weld Quality Assessment",
      items: [
        "Fusion depth and penetration measurement",
        "Weld profile conformity verification",
        "Detection of weld defects and inclusions",
        "Heat-affected zone (HAZ) characterization",
      ],
    },
    {
      title: "Failure Investigation",
      items: [
        "Root cause analysis of component failures",
        "Crack origin and propagation studies",
        "Material defect identification",
        "Fracture mode determination",
      ],
    },
    {
      title: "Heat Treatment Verification",
      items: [
        "Microstructure transformation validation",
        "Case depth measurement in carburized parts",
        "Tempering and annealing effectiveness",
        "Hardness profile correlation",
      ],
    },
    {
      title: "Quality Control & Production",
      items: [
        "Casting and forging defect detection",
        "Grain size and structure uniformity",
        "Coating thickness verification",
        "Material grade confirmation",
      ],
    },
    {
      title: "Surface Treatment Evaluation",
      items: [
        "Carburization and decarburization assessment",
        "Coating adhesion and uniformity",
        "Surface hardening depth measurement",
        "Corrosion protection layer analysis",
      ],
    },
    {
      title: "Research & Development",
      items: [
        "New alloy characterization",
        "Process optimization studies",
        "Material behavior under stress",
        "Performance prediction modeling",
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
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Applications of Metallography
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Essential for critical industries requiring material integrity
              assurance
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <h3 className="text-xl font-black mb-4">{app.title}</h3>
                <div className="space-y-3">
                  {app.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <HiCheckCircle className="w-5 h-5 text-accent1 shrink-0 mt-0.5" />
                      <span className="text-white/90 text-sm leading-relaxed">
                        {item}
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
