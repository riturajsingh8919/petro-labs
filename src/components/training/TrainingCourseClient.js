"use client";

import { useMemo } from "react";
import { LazyMotion, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HiArrowLeft,
  HiClock,
  HiAcademicCap,
  HiCheckCircle,
  HiUserGroup,
  HiPhone,
  HiEnvelope,
  HiArrowRight,
  HiShieldCheck,
  HiBeaker,
  HiLightBulb,
  HiChartBar,
  HiCubeTransparent,
  HiFire,
  HiCommandLine,
  HiCog,
  HiWrenchScrewdriver,
  HiBolt,
  HiCpuChip,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import { MdOilBarrel } from "react-icons/md";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

// Icon mapping
const iconMap = {
  HiBeaker,
  HiLightBulb,
  HiChartBar,
  HiCubeTransparent,
  HiFire,
  HiCommandLine,
  HiCog,
  HiWrenchScrewdriver,
  MdOilBarrel,
  HiBolt,
  HiCpuChip,
  HiMagnifyingGlass,
  HiShieldCheck,
};

export default function TrainingCourseClient({ courseData, allCourses }) {
  const relatedCourses = useMemo(() => {
    if (!courseData || !allCourses) return [];

    return allCourses
      .filter(
        (c) => c.id !== courseData.id && c.category === courseData.category
      )
      .slice(0, 6);
  }, [courseData, allCourses]);

  if (!courseData) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center px-8 py-16">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HiShieldCheck className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-3">
            Course Not Found
          </h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            The training course you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/training"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg"
          >
            <HiArrowLeft className="w-5 h-5" />
            Back to All Training
          </Link>
        </div>
      </div>
    );
  }

  const colorClasses = {
    primary: {
      gradient: "from-primary via-primary to-primary/90",
      bg: "bg-primary",
      text: "text-primary",
      border: "border-primary",
      lightBg: "bg-primary/10",
    },
    secondary: {
      gradient: "from-accent2 via-accent2 to-accent2/90",
      bg: "bg-accent2",
      text: "text-accent2",
      border: "border-accent2",
      lightBg: "bg-accent2/10",
    },
    accent1: {
      gradient: "from-primary via-primary to-primary/90",
      bg: "bg-primary",
      text: "text-primary",
      border: "border-primary",
      lightBg: "bg-primary/10",
    },
    accent2: {
      gradient: "from-accent2 via-accent2 to-accent2/90",
      bg: "bg-accent2",
      text: "text-accent2",
      border: "border-accent2",
      lightBg: "bg-accent2/10",
    },
  };

  const colors = colorClasses[courseData.color] || colorClasses.primary;
  const IconComponent = iconMap[courseData.icon] || HiBeaker;

  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="h-20"></div>
      <div className="bg-linear-to-b from-gray-50 to-white min-h-screen">
        {/* Compact Premium Hero */}
        <section
          className={`relative bg-linear-to-br ${colors.gradient} overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-10 py-16">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/training"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 text-sm font-semibold transition-colors group"
              >
                <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Training
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content - 2 columns */}
                <div className=" space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-lg border border-white/30">
                      {courseData.category}
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    {courseData.title}
                  </h1>

                  <p className="text-lg md:text-xl text-white/90 font-semibold">
                    {courseData.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                      <HiClock className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-bold">
                        {courseData.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                      <HiAcademicCap className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-bold">
                        {courseData.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                      <HiShieldCheck className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-bold">
                        NABL Certified
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="tel:7675043138"
                      className="px-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-white/90 transition-all shadow-xl hover:scale-105"
                    >
                      Enroll Now
                    </a>
                    <a
                      href="mailto:training@petrolabs.com"
                      className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-white/20 transition-all border-2 border-white/30"
                    >
                      Get Brochure
                    </a>
                  </div>
                </div>

                {/* Right Image - 1 column */}
                <m.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative h-64 lg:h-90 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
                >
                  <Image
                    src={courseData.image}
                    alt={courseData.title}
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                  />
                </m.div>
              </div>
            </m.div>
          </div>
        </section>

        {/* Compact Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                {courseData.description}
              </p>
            </div>
          </div>
        </section>

        {/* Course Modules - Compact */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-5xl mx-auto">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  Course Curriculum
                </h2>
                <p className="text-gray-600">
                  Hands-on modules designed for practical learning
                </p>
              </m.div>

              <div className="space-y-3">
                {courseData.modules.map((module, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`bg-white rounded-xl p-4 shadow-md border-2 border-gray-100 hover:${colors.border} hover:shadow-lg transition-all group`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`shrink-0 w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <span className="text-white font-black text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {module}
                      </p>
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcomes & Target Audience - Compact Side by Side */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Learning Outcomes */}
              <m.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`${colors.lightBg} rounded-2xl p-6 border-2 ${colors.border}/20`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <HiCheckCircle className={`w-6 h-6 ${colors.text}`} />
                  <h3 className="text-2xl font-black text-gray-900">
                    What You&apos;ll Learn
                  </h3>
                </div>

                <div className="space-y-3">
                  {courseData.outcomes.map((outcome, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <HiCheckCircle
                        className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5`}
                      />
                      <span className="text-gray-700 font-medium leading-relaxed">
                        {outcome}
                      </span>
                    </m.div>
                  ))}
                </div>
              </m.div>

              {/* Target Audience */}
              <m.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`bg-linear-to-br ${colors.gradient} text-white rounded-2xl p-6`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <HiUserGroup className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-black text-white">
                    Perfect For
                  </h3>
                </div>

                <div className="space-y-3">
                  {courseData.targetAudience.map((audience, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                    >
                      <p className="text-white font-semibold leading-relaxed">
                        {audience}
                      </p>
                    </m.div>
                  ))}
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Compact CTA */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 md:px-10">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative bg-linear-to-r ${colors.gradient} text-white rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto`}
            >
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              <div className="relative z-10 p-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-black mb-3">Ready to Enroll?</h2>
                  <p className="text-white/90 text-lg">
                    Join <span className="font-black">{courseData.title}</span>{" "}
                    today
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href="tel:7675043138"
                    className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30 hover:bg-white/25 transition-all group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <HiPhone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="text-white/80 text-xs block">
                        Call to Enroll
                      </span>
                      <span className="text-white text-lg font-black">
                        7675043138
                      </span>
                    </div>
                    <HiArrowRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>

                  <a
                    href="mailto:training@petrolabs.com"
                    className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-xl p-4 border-2 border-white/30 hover:bg-white/25 transition-all group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <HiEnvelope className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="text-white/80 text-xs block">
                        Email Us
                      </span>
                      <span className="text-white text-sm font-black break-all">
                        training@petrolabs.com
                      </span>
                    </div>
                    <HiArrowRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* Related Courses - Compact Cards */}
        {relatedCourses.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-10">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-black text-gray-900 mb-2">
                  Explore More Courses
                </h2>
                <p className="text-gray-600">
                  Other programs in {courseData.category}
                </p>
              </m.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {relatedCourses.map((related, index) => {
                  const RelatedIcon = iconMap[related.icon] || HiBeaker;
                  const relatedColors =
                    colorClasses[related.color] || colorClasses.primary;

                  return (
                    <m.div
                      key={related.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={`/training/${related.slug}`}
                        className="block bg-white rounded-xl overflow-hidden shadow-md border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all h-full group"
                      >
                        <div className="relative h-70">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            quality={100}
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-3 left-3">
                            <div
                              className={`w-10 h-10 ${relatedColors.bg} rounded-lg flex items-center justify-center shadow-lg`}
                            >
                              <RelatedIcon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <span
                            className={`inline-block px-2 py-1 ${relatedColors.lightBg} ${relatedColors.text} text-xs font-bold rounded mb-2`}
                          >
                            {related.category}
                          </span>
                          <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h3>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500 flex items-center gap-1">
                              <HiClock className="w-4 h-4" />
                              {related.duration}
                            </span>
                            <div className="flex items-center text-primary font-bold group-hover:gap-2 transition-all">
                              View
                              <HiArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </m.div>
                  );
                })}
              </div>

              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >
                <Link
                  href="/training"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg"
                >
                  View All Training
                  <HiArrowRight className="w-5 h-5" />
                </Link>
              </m.div>
            </div>
          </section>
        )}
      </div>
    </LazyMotion>
  );
}
