"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiEye,
  HiRocketLaunch,
  HiSparkles,
  HiShieldCheck,
} from "react-icons/hi2";
import { FaChartLine, FaGlobe } from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const VisionMission = () => {
  const missionPoints = [
    {
      icon: HiSparkles,
      text: "Deliver accurate, reliable, and timely testing services through continuous innovation and world-class instrumentation",
      color: "from-primary to-blue-600",
    },
    {
      icon: HiShieldCheck,
      text: "Support industries in making informed decisions through scientific excellence and adherence to international standards",
      color: "from-accent1 to-orange-600",
    },
    {
      icon: HiRocketLaunch,
      text: "Build long-term trust by providing transparent reporting, expert consultancy, and customer-focused service",
      color: "from-secondary to-red-600",
    },
    {
      icon: FaGlobe,
      text: "Contribute to a safer, more efficient, and sustainable industrial ecosystem",
      color: "from-accent2 to-teal-600",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="relative py-20 bg-white overflow-hidden -mt-1">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <m.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 -right-40 w-[600px] h-[600px] bg-linear-to-br from-primary/5 via-accent1/5 to-transparent rounded-full blur-3xl"
          />
          <m.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 -left-40 w-[500px] h-[500px] bg-linear-to-tr from-secondary/5 via-accent2/5 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
          {/* Section Header */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-20"
          >
            <m.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary/10 via-accent1/10 to-primary/10 rounded-full mb-6 border border-primary/20"
            >
              <HiSparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Our Purpose
              </span>
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl xl:text-5xl font-black leading-tight mb-3 text-gray-900"
            >
              Vision & <span className="text-primary">Mission</span>
            </m.h2>
          </m.div>

          {/* Equal Height Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Vision Card */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 overflow-hidden flex flex-col">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-accent1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Badge */}
                <m.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-primary to-accent1 shadow-lg mb-6"
                >
                  <HiEye className="w-10 h-10 text-white" />
                </m.div>

                {/* Title */}
                <m.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-black leading-tight mb-6 text-gray-900 relative z-10"
                >
                  Our <span className="text-primary">Vision</span>
                </m.h3>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    To be India&apos;s most trusted and technologically advanced
                    analytical laboratory—empowering industries with{" "}
                    <span className="font-semibold text-primary">
                      science-driven insights
                    </span>{" "}
                    that ensure quality, safety, and operational excellence.
                  </p>

                  {/* Vision Highlights */}
                  <div className="space-y-3 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <HiShieldCheck className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-base font-semibold text-gray-800">
                        India&apos;s Most Trusted Laboratory
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent1/10 flex items-center justify-center">
                        <FaChartLine className="w-5 h-5 text-accent1" />
                      </div>
                      <span className="text-base font-semibold text-gray-800">
                        Technologically Advanced Solutions
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <FaGlobe className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-base font-semibold text-gray-800">
                        Empowering Industrial Excellence
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-primary/10 to-transparent rounded-tl-[100px]" />
              </div>
            </m.div>

            {/* Mission Card */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="relative h-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-700 overflow-hidden flex flex-col">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-accent1/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Badge */}
                <m.div
                  whileHover={{ scale: 1.1, rotate: -360 }}
                  transition={{ duration: 0.6 }}
                  className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-accent1 to-secondary shadow-lg mb-6"
                >
                  <HiRocketLaunch className="w-10 h-10 text-white" />
                </m.div>

                {/* Title */}
                <m.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-black leading-tight mb-6 text-white relative z-10"
                >
                  Our <span className="text-accent1">Mission</span>
                </m.h3>

                {/* Mission Points */}
                <div className="flex-1 space-y-5 relative z-10">
                  {missionPoints.map((point, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group/item flex items-start gap-4"
                    >
                      {/* Icon */}
                      <div
                        className={`shrink-0 w-10 h-10 rounded-lg bg-linear-to-br ${point.color} flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}
                      >
                        <point.icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Text */}
                      <p className="text-base text-gray-300 leading-relaxed pt-1.5">
                        {point.text}
                      </p>
                    </m.div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-accent1/20 to-transparent rounded-tl-[100px]" />
              </div>
            </m.div>
          </div>

          {/* Bottom CTA Section */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 md:mt-20 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-linear-to-r from-primary/5 via-accent1/5 to-secondary/5 rounded-2xl border border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-accent1 flex items-center justify-center">
                  <HiSparkles className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg font-semibold text-gray-900">
                  Committed to Excellence Since 2005
                </p>
              </div>
              <div className="h-8 w-px bg-gray-300 hidden sm:block" />
              <p className="text-gray-600">
                Trusted by <span className="font-bold text-primary">500+</span>{" "}
                industries across India
              </p>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default VisionMission;
