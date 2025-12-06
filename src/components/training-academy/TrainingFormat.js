"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiClock,
  HiCalendar,
  HiDocumentCheck,
  HiAcademicCap,
  HiClipboardDocumentList,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TrainingFormat() {
  const formats = [
    {
      icon: HiClock,
      title: "Intensive Bootcamp",
      duration: "1–2 weeks",
      hours: "40–80 hours",
      focus: "Focused instrument skills",
      color: "primary",
    },
    {
      icon: HiCalendar,
      title: "Professional Certificate",
      duration: "4–6 weeks",
      hours: "160–240 hours",
      focus: "Multi-instrument + validation + project",
      color: "accent2",
    },
    {
      icon: HiAcademicCap,
      title: "Advanced Diploma",
      duration: "8–12 weeks",
      hours: "320–480 hours",
      focus: "Cross-track immersion + capstone + mock audit",
      color: "accent1",
    },
  ];

  const deliverables = [
    "Completion certificate (track & hours), skill transcript, and instrument logbook",
    "Personal SOP compendium, calibration & system suitability templates",
    "Capstone report (method + data + conclusions) you can show at interviews",
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="py-16 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl  font-black text-gray-900 mb-4">
              Training Format & Deliverables
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the format that fits your career goals
            </p>
          </m.div>

          {/* Formats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {formats.map((format, index) => {
              const Icon = format.icon;
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-${format.color} text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all`}
                >
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">{format.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <HiCalendar className="w-5 h-5 text-white/80" />
                      <span className="font-bold">{format.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiClock className="w-5 h-5 text-white/80" />
                      <span className="font-bold">{format.hours}</span>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {format.focus}
                  </p>
                </m.div>
              );
            })}
          </div>

          {/* Deliverables */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <HiDocumentCheck className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-black text-gray-900">
                You&apos;ll Receive
              </h3>
            </div>
            <div className="space-y-4">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <HiClipboardDocumentList className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
