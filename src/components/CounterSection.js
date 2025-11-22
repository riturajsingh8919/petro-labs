"use client";

import {
  LazyMotion,
  m,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiUserGroup, HiUsers, HiCheckBadge } from "react-icons/hi2";

// Optimized bundle size
const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

// Animated Counter Component - FIXED
function AnimatedCounter({ value, duration = 2.5 }) {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      // ✅ CORRECT: Use animate() function, not count.animate()
      const controls = animate(count, parseInt(value), {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      });

      // Cleanup function to stop animation on unmount
      return () => controls.stop();
    }
  }, [isInView, count, value, duration]);

  return (
    <m.span ref={ref} className="tabular-nums">
      {rounded}
    </m.span>
  );
}

const CounterSection = () => {
  const countersData = [
    {
      icon: HiUserGroup,
      number: "999+",
      title: "Happy Customers",
      color: "primary",
      delay: 0,
    },
    {
      icon: HiUsers,
      number: "30+",
      title: "Professional Contractors",
      color: "accent1",
      delay: 0.15,
    },
    {
      icon: HiCheckBadge,
      number: "99+",
      title: "Projects Complete",
      color: "accent2",
      delay: 0.3,
    },
    {
      icon: HiOutlineOfficeBuilding,
      number: "27+",
      title: "Industries We Served",
      color: "secondary",
      delay: 0.45,
    },
  ];

  // Color mapping using Tailwind v4 color variables
  const colorMap = {
    primary: {
      bgGradient: "from-primary/10 via-primary/5 to-transparent",
      iconGradient: "from-primary to-blue-700",
      shadowColor: "shadow-primary/30",
      ringColor: "ring-primary/20 hover:ring-primary/40",
      glowFrom: "from-primary/20",
    },
    accent1: {
      bgGradient: "from-accent1/10 via-accent1/5 to-transparent",
      iconGradient: "from-accent1 to-orange-600",
      shadowColor: "shadow-accent1/30",
      ringColor: "ring-accent1/20 hover:ring-accent1/40",
      glowFrom: "from-accent1/20",
    },
    accent2: {
      bgGradient: "from-accent2/10 via-accent2/5 to-transparent",
      iconGradient: "from-accent2 to-orange-700",
      shadowColor: "shadow-accent2/30",
      ringColor: "ring-accent2/20 hover:ring-accent2/40",
      glowFrom: "from-accent2/20",
    },
    secondary: {
      bgGradient: "from-secondary/10 via-secondary/5 to-transparent",
      iconGradient: "from-secondary to-red-700",
      shadowColor: "shadow-secondary/30",
      ringColor: "ring-secondary/20 hover:ring-secondary/40",
      glowFrom: "from-secondary/20",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="relative bg-linear-to-b from-gray-100 via-gray-50 to-white py-16 overflow-hidden">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
          {/* Gradient Orbs with pure CSS animation */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-linear-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-float" />
          <div
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-linear-to-tl from-accent1/20 to-transparent rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
          {/* Section Header */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            {/* Decorative Line */}
            <m.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-linear-to-r from-primary via-accent1 to-secondary rounded-full mx-auto mb-6"
            />

            <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-3 text-gray-900">
              Our Impact <span className="text-primary">in Numbers</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering excellence across industries with proven results and
              trusted partnerships
            </p>
          </m.div>

          {/* Counters Grid */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {countersData.map((item, index) => {
              const IconComponent = item.icon;
              const colors = colorMap[item.color];
              const numericValue = item.number.replace(/\D/g, "");
              const suffix = item.number.replace(/[0-9]/g, "");

              return (
                <m.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  className="group relative w-[70%] mx-auto md:w-full"
                >
                  {/* Card */}
                  <div
                    className={`relative h-full bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 ring-2 ${colors.ringColor} backdrop-blur-sm`}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${colors.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4 md:space-y-6">
                      {/* Icon Container */}
                      <m.div
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.6 }}
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-linear-to-br ${colors.iconGradient} flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />

                        {/* Pulsing Ring with pure CSS */}
                        <div
                          className="absolute inset-0 rounded-2xl border border-gray-400 opacity-50 animate-glow-pulse"
                          style={{ animationDelay: `${item.delay}s` }}
                        />
                      </m.div>

                      {/* Counter Number */}
                      <div className="space-y-2">
                        <h3 className="text-4xl sm:text-5xl font-black text-gray-900 leading-none">
                          <AnimatedCounter
                            value={numericValue}
                            duration={2.5}
                          />
                          <span className="inline-block ml-1">{suffix}</span>
                        </h3>

                        {/* Title */}
                        <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 leading-snug">
                          {item.title}
                        </p>
                      </div>

                      {/* Bottom Decorative Line */}
                      <m.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + item.delay }}
                        className={`h-1 bg-linear-to-r ${colors.iconGradient} rounded-full`}
                      />
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-200 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-200 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Floating Shadow Effect - pure CSS animation */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${colors.iconGradient} rounded-3xl -z-10 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-float`}
                    style={{ animationDelay: `${item.delay}s` }}
                  />
                </m.div>
              );
            })}
          </m.div>

          {/* Bottom Decorative Element - Pure CSS Animation */}
          <m.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mt-12 md:mt-16 lg:mt-20"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
              <div
                className="w-2 h-2 rounded-full bg-accent1 animate-pulse-slow"
                style={{ animationDelay: "0.15s" }}
              />
              <div
                className="w-2 h-2 rounded-full bg-accent2 animate-pulse-slow"
                style={{ animationDelay: "0.3s" }}
              />
              <div
                className="w-2 h-2 rounded-full bg-secondary animate-pulse-slow"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default CounterSection;
