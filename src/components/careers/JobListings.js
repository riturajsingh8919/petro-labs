"use client";

import { LazyMotion, m } from "framer-motion";
import { useState } from "react";
import {
  HiMapPin,
  HiBriefcase,
  HiClock,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function JobListings({ jobs, onApply }) {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  if (!jobs || jobs.length === 0) {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-8 md:px-12">
          <div className="text-center">
            <p className="text-gray-600">Loading job openings...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="bg-white py-16">
        <div className="container mx-auto px-8 md:px-12">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-6 text-gray-900">
              Current Job <span className="text-primary">Openings</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore exciting career opportunities and join our team of
              professionals
            </p>
          </m.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {jobs.map((job, index) => {
              const isExpanded = expandedJob === job.id;

              return (
                <m.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all ${
                    isExpanded
                      ? "border-primary shadow-xl"
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggleJob(job.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg">
                            {job.department}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg">
                            {job.type}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-black text-gray-700 mb-3 wrap-break-word">
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap gap-3 md:gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <HiMapPin className="w-4 h-4 text-primary shrink-0" />
                            <span className="wrap-break-word">
                              {job.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <HiBriefcase className="w-4 h-4 text-secondary shrink-0" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                          isExpanded ? "bg-primary/10" : "bg-gray-100"
                        }`}
                      >
                        {isExpanded ? (
                          <HiChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                          <HiChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                    </div>
                  </button>

                  <m.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-6 space-y-6">
                        <div>
                          <p className="text-gray-700 leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-black text-gray-900 mb-3">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                <span className="text-gray-700 leading-relaxed">
                                  {resp}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-black text-gray-900 mb-3">
                            Required Qualifications
                          </h4>
                          <ul className="space-y-2">
                            {job.qualifications.map((qual, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                                <span className="text-gray-700 leading-relaxed">
                                  {qual}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <m.button
                            onClick={(e) => {
                              e.stopPropagation();
                              onApply(job);
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-primary text-white py-3 px-6 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg cursor-pointer"
                          >
                            Apply for This Position
                          </m.button>
                        </div>
                      </div>
                    </div>
                  </m.div>
                </m.div>
              );
            })}
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-black text-gray-900 mb-3">
              Don&apos;t See Your Role?
            </h3>
            <p className="text-gray-600 mb-6">
              Petrolabs is always looking for exceptional talent. Send us your
              resume!
            </p>
            <a
              href="mailto:careers@petrolabsindia.com"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary/90 transition-colors shadow-lg"
            >
              Submit Your Resume
            </a>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
