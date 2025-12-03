"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiCheckCircle,
  FiGlobe,
  FiBookOpen,
  FiArrowRight,
  FiAward,
} from "react-icons/fi";
import Link from "next/link";

const AboutPetroLabsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const highlights = [
    {
      icon: FiCheckCircle,
      label: "Certified Quality",
      text: "ISO 9001:2015 & NABL Accredited",
      colorVar: "--color-primary",
    },
    {
      icon: FiGlobe,
      label: "Global Network",
      text: "Spectro Scientific, Filtertechnik, Triple R Japan",
      colorVar: "--color-accent1",
    },
    {
      icon: FiBookOpen,
      label: "Expert Training",
      text: "Professional Certifications by PetroINSTITUTE",
      colorVar: "--color-accent2",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-gray-100 to-gray-200 py-16">
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right curved shape */}
        <motion.div
          className="absolute -top-40 -right-20 w-96 h-96"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary), transparent)",
            opacity: 0.08,
            borderRadius: "50%",
          }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bottom-left curved shape */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-80 h-80"
          style={{
            background:
              "linear-gradient(135deg, var(--color-accent1), transparent)",
            opacity: 0.06,
            borderRadius: "50%",
          }}
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small accent circles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full opacity-20"
          style={{ backgroundColor: "var(--color-accent1)" }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full opacity-25"
          style={{ backgroundColor: "var(--color-primary)" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        />

        {/* Grid pattern overlay - subtle */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left: Large Image Block */}
          <motion.div
            className="relative group order-2 md:order-1"
            variants={imageVariants}
          >
            {/* Geometric frame background - rotated square */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary), var(--color-accent1))",
                transform: "rotate(3deg) scale(1.05)",
              }}
              animate={{ rotate: [3, 5, 3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Image with accent border */}
            <div className="relative w-full h-[70vh] lg:h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/about.jpg"
                alt="PetroLabs Laboratory"
                fill
                priority
                quality={100}
                className="object-cover w-full h-full rounded-3xl group-hover:scale-110 transition-transform duration-700"
              />

              {/* Bold accent corner - top left */}
              <div
                className="absolute -top-0.5 -left-0.5 w-40 h-40 rounded-br-3xl opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent1), var(--color-accent2))",
                }}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-tr from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </div>

            {/* Floating stat badge - rotated */}
            <motion.div
              className="absolute -bottom-8 right-1 lg:-right-8 bg-white rounded-2xl p-6 shadow-2xl border-4"
              style={{ borderColor: "var(--color-primary)" }}
              animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary), #1e40af)",
                  }}
                >
                  ISO
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Certified</p>
                  <p className="text-xs text-gray-600">Since 2015</p>
                </div>
              </div>
            </motion.div>

            {/* Accent shapes around image */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 border-2 rounded-full opacity-20"
              style={{ borderColor: "var(--color-accent1)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-32 h-32 border-2 opacity-15"
              style={{ borderColor: "var(--color-primary)" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Right: Content Block */}
          <motion.div
            className="order-1 md:order-2 flex flex-col justify-between"
            variants={containerVariants}
          >
            {/* Top section: Heading + Intro */}
            <div>
              {/* Label with animated underline */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-8"
              >
                <motion.div
                  className="h-1 rounded-full"
                  style={{ backgroundColor: "var(--color-accent1)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 50 }}
                  transition={{ duration: 0.7 }}
                />
                <span
                  className="text-xs font-bold tracking-widest uppercase text-gray-600"
                  style={{ color: "var(--color-accent1)" }}
                >
                  Who We Are
                </span>
              </motion.div>

              {/* Main Heading - Bold and Large */}
              <motion.h2
                variants={itemVariants}
                className="text-4xl xl:text-5xl font-black leading-tight mb-8 text-gray-900"
              >
                Driving Reliability
                <br />
                <span className="text-primary">Through Innovation</span>
              </motion.h2>

              {/* Description */}
              <motion.div variants={containerVariants} className="space-y-6">
                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg text-gray-700 leading-relaxed font-medium"
                >
                  In collaboration with{" "}
                  <span className="font-bold text-gray-900">
                    Spectro Scientific (USA)
                  </span>
                  , we deliver advanced oil, fuel, and fluid analysis solutions
                  to industries and defense sectors across India and the Middle
                  East.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg text-gray-700 leading-relaxed font-medium"
                >
                  Backed by NABL accreditation and ISO 9001:2015 certification,
                  we empower technicians and engineers through{" "}
                  <span className="font-bold text-gray-900">
                    PetroINSTITUTE
                  </span>{" "}
                  with world-class training.
                </motion.p>
              </motion.div>
            </div>

            {/* Highlights - Color-coded boxes */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-4 mt-12 mb-12"
            >
              {highlights.map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group transition-all duration-300 cursor-default backdrop-blur-sm"
                    whileHover={{ x: 8, y: -4, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="shrink-0 p-3 rounded-lg mt-0.5 text-white"
                        style={{ backgroundColor: `var(${item.colorVar})` }}
                        whileHover={{ rotate: 12, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm">
                          {item.label}
                        </p>
                        <p className="text-gray-700 text-sm mt-1.5 leading-snug font-medium">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA - Bold 3D Button */}
            <motion.div variants={itemVariants}>
              <Link href="/about-us">
                <motion.button
                  className="relative px-12 py-5 rounded-2xl font-bold text-white text-lg overflow-hidden group shadow-xl cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary), #1e40af)",
                  }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 35px 70px rgba(53, 130, 186, 0.45)",
                  }}
                  whileTap={{ y: 0 }}
                >
                  {/* Content */}
                  <span className="relative flex items-center justify-center gap-3">
                    Explore PetroLabs
                    <motion.span
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    >
                      <FiArrowRight className="w-6 h-6" />
                    </motion.span>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom curve divider with accent */}
      <div className="absolute -bottom-0.5 left-0 w-full h-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="bottomDivider"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(53, 130, 186, 0.1)" />
              <stop offset="50%" stopColor="rgba(245, 126, 24, 0.08)" />
              <stop offset="100%" stopColor="rgba(53, 130, 186, 0.1)" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 Q300,30 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="url(#bottomDivider)"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutPetroLabsSection;
