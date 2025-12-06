"use client";

import { LazyMotion, m } from "framer-motion";
import { HiCalendarDays, HiCheckCircle } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function WeeklySchedule() {
  const schedule = [
    {
      day: "Day 1",
      topics: ["Safety, GLP, documentation", "Instrument overviews"],
      color: "primary",
    },
    {
      day: "Day 2-3",
      topics: ["HPLC system suitability", "Gradient runs", "Troubleshooting"],
      color: "secondary",
    },
    {
      day: "Day 4",
      topics: ["GC/GC-HS method setup", "FID/TCD detectors", "Maintenance"],
      color: "accent1",
    },
    {
      day: "Day 5",
      topics: ["GC-MS/MS tuning", "MRM quantification"],
      color: "accent2",
    },
    {
      day: "Day 6",
      topics: ["ICP-OES/AAS digestion", "Multi-element analysis"],
      color: "primary",
    },
    {
      day: "Day 7",
      topics: ["QA/QC, data integrity", "Mini-validation", "Viva & feedback"],
      color: "secondary",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="py-16 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl  font-black text-gray-900 mb-4">
              Sample Weekly Schedule
            </h2>
            <p className="text-gray-600 text-lg">
              Intensive Bootcamp format (longer programs add more depth +
              capstone)
            </p>
          </m.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {schedule.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-5 shadow-lg border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all"
                >
                  <div
                    className={`inline-block px-3 py-1 bg-${item.color} text-white rounded-lg font-black text-sm mb-3`}
                  >
                    {item.day}
                  </div>
                  <ul className="space-y-2">
                    {item.topics.map((topic, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <HiCheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </m.div>
              ))}
            </div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-primary/5 rounded-xl p-6 border-2 border-primary/20"
            >
              <div className="flex items-start gap-3">
                <HiCalendarDays className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-black text-gray-900 mb-2">
                    Extended Programs
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Professional Certificate and Advanced Diploma programs
                    include additional modules on microbiology, food &
                    environment testing, plus a comprehensive capstone project
                    with mock audit preparation.
                  </p>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
