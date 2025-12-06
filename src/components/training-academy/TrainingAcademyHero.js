"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiAcademicCap,
  HiBeaker,
  HiShieldCheck,
  HiBriefcase,
} from "react-icons/hi2";
import Link from "next/link";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TrainingAcademyHero() {
  const stats = [
    { icon: HiBeaker, value: "10+", label: "Live Instruments" },
    { icon: HiShieldCheck, value: "NABL", label: "Accredited Lab" },
    { icon: HiAcademicCap, value: "25+", label: "Years Experience" },
    { icon: HiBriefcase, value: "Job", label: "Career Support" },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="h-20"></div>
      <section className="relative bg-[url('/training/1.png')] bg-no-repeat bg-cover bg-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-primary opacity-80"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-10 py-16">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <HiAcademicCap className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-bold">
                Professional Training Academy
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-4xl font-black text-white mb-6 leading-tight">
              Build Your Career as a
              <span className="block text-accent1">Lab Analyst</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl  text-white/90 font-semibold mb-4">
              Hands-on Industrial Training for B.Sc, M.Sc, B.Pharm & M.Pharm
              Graduates
            </p>

            {/* Description */}
            <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              Launch your lab career with practical, instrument-focused training
              delivered inside NABL-accredited laboratories. Learn on real
              samples, real methods, and real instruments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a
                href="tel:7675043138"
                className="px-8 py-4 bg-white text-primary rounded-lg font-black text-lg hover:bg-white/90 transition-all shadow-xl hover:scale-105"
              >
                Enroll Now
              </a>
              <a
                href="mailto:training@petrolabs.com"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
              >
                Request Syllabus
              </a>
              <Link
                href="#training-tracks"
                className="px-8 py-4 bg-transparent text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all border-2 border-white/30"
              >
                View Programs
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <Icon className="w-8 h-8 text-white mx-auto mb-2" />
                    <div className="text-3xl font-black text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/80 font-semibold">
                      {stat.label}
                    </div>
                  </m.div>
                );
              })}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
