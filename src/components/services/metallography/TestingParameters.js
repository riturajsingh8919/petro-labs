"use client";

import { LazyMotion, m } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TestingParameters() {
  const parameters = [
    {
      category: "Structural Analysis",
      tests: [
        {
          name: "Phase Identification",
          description:
            "Detecting different phases present in metals and alloys",
        },
        {
          name: "Alloy Segregation Studies",
          description: "Identifying inhomogeneities in material composition",
        },
        {
          name: "Macrostructure Examination",
          description:
            "Revealing casting defects, weld zones & structural features",
        },
        {
          name: "Grain Flow Analysis",
          description: "Studying forging & deformation patterns",
        },
      ],
    },
    {
      category: "Weld Assessment",
      tests: [
        {
          name: "Weld Profile Checking",
          description: "Evaluating weld quality and conformity",
        },
        {
          name: "Depth of Penetration",
          description: "Measuring weld fusion and effectiveness",
        },
        {
          name: "Fusion Zone Analysis",
          description: "Examining heat-affected zones and weld interfaces",
        },
        {
          name: "Weld Defect Detection",
          description: "Identifying porosity, cracks, and inclusions",
        },
      ],
    },
    {
      category: "Grain & Particle Analysis",
      tests: [
        {
          name: "Grain Size Measurement (ASTM E112)",
          description: "Assessing material strength & toughness",
        },
        {
          name: "Non-Metallic Inclusion Rating (ASTM E45)",
          description: "Assessing inclusions for steel quality",
        },
        {
          name: "Nodularity & Mesh Size Analysis",
          description: "Critical for ductile iron castings",
        },
        {
          name: "Particle Count",
          description: "Identifying contaminant particles in metallic samples",
        },
      ],
    },
    {
      category: "Surface & Coating Evaluation",
      tests: [
        {
          name: "Coating Thickness Measurement",
          description: "Determining protective layer performance",
        },
        {
          name: "Coating Analysis",
          description: "Evaluating surface treatments & protective layers",
        },
        {
          name: "Surface Carburization",
          description: "Detecting carbon enrichment in surface layers",
        },
        {
          name: "Decarburization Detection",
          description: "Identifying carbon depletion on surfaces",
        },
      ],
    },
    {
      category: "Heat Treatment Verification",
      tests: [
        {
          name: "Heat Treatment Condition Assessment",
          description: "Verifying annealing, quenching, or tempering quality",
        },
        {
          name: "Case Depth Measurement",
          description: "Measuring hardened case depth in carburized steels",
        },
        {
          name: "Microstructure Transformation",
          description: "Evaluating phase changes from heat treatment",
        },
        {
          name: "Hardness Profile Correlation",
          description: "Relating microstructure to hardness distribution",
        },
      ],
    },
    {
      category: "Defect & Failure Analysis",
      tests: [
        {
          name: "Material Defects Detection",
          description:
            "Detecting porosity, cracks, segregation, and laminations",
        },
        {
          name: "Failure Analysis",
          description: "Identifying root cause of component failures",
        },
        {
          name: "Fracture Surface Examination",
          description: "Studying fracture modes and mechanisms",
        },
        {
          name: "Corrosion Assessment",
          description: "Evaluating corrosion type and depth",
        },
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
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Comprehensive Testing Parameters
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our laboratory is equipped to conduct a wide range of metallographic
            examinations
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
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-black text-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-black text-gray-900">
                  {param.category}
                </h3>
              </div>

              <div className="space-y-4">
                {param.tests.map((test, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-primary/20 pl-4 hover:border-primary transition-colors"
                  >
                    <h4 className="font-bold text-gray-900 mb-1">
                      {test.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {test.description}
                    </p>
                  </div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}
