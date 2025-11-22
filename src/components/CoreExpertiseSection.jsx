"use client";

import { motion } from "framer-motion";
import { useMemo, useSyncExternalStore } from "react";
import { GiChemicalDrop } from "react-icons/gi";
import { HiOutlineChip } from "react-icons/hi";
import { MdOutlineSchool } from "react-icons/md";
import { generateRandomPositions } from "@/utils/floatingElements";

// Hook to detect if we're on the client side
const useIsClient = () => {
  return useSyncExternalStore(
    () => () => {}, // subscribe: no-op
    () => true, // getSnapshot: return true on client
    () => false // getServerSnapshot: return false on server
  );
};

const CoreExpertiseSection = () => {
  const isClient = useIsClient();

  // Generate random positions only on client, memoized to prevent regeneration
  const randomPositions = useMemo(() => generateRandomPositions(12), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -20,
      scale: 1.03,
      rotateX: 2,
      rotateY: 2,
      z: 50,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      z: 30,
      transition: {
        duration: 0.3,
      },
    },
  };

  const expertiseData = [
    {
      id: 1,
      title: "Advanced Testing & Diagnostics",
      icon: GiChemicalDrop,
      description:
        "Comprehensive petroleum product, lubricant, transformer oil, and water testing services using cutting-edge instruments like FTIR, XRF, and viscometers — ensuring accuracy, compliance, and equipment reliability.",
      bgClass: "bg-primary",
      glowColor: "rgba(53, 130, 186, 0.15)",
      offset: "lg:-translate-y-8 xl:-translate-y-12",
    },
    {
      id: 2,
      title: "Integrated Solutions & Technology",
      icon: HiOutlineChip,
      description:
        "Authorized partners for industry-leading technologies from Spectro Scientific (USA), Filtertechnik (UK), and Triple R Japan — offering oil monitoring sensors, particle analyzers, and advanced filtration systems for predictive maintenance.",
      bgClass: "bg-accent1",
      glowColor: "rgba(245, 126, 24, 0.15)",
      offset: "lg:translate-y-4 xl:translate-y-8",
    },
    {
      id: 3,
      title: "Technical Training & Certification",
      icon: MdOutlineSchool,
      description:
        "Offering certified courses in analytical chemistry, GC-MS, HPLC, and lubrication reliability (MLA, MLT, MLE). PetroLabs empowers professionals with hands-on expertise and international best practices.",
      bgClass: "bg-secondary",
      glowColor: "rgba(235, 12, 30, 0.15)",
      offset: "lg:-translate-y-8 xl:-translate-y-12",
    },
  ];

  return (
    <section className="relative bg-linear-to-b from-gray-100 via-white to-gray-50 min-h-screen overflow-hidden py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Molecules - only render on client */}
        {isClient &&
          randomPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gray-100/30"
              initial={{
                opacity: 0,
                scale: 0,
                x: pos.initialX,
                y: pos.initialY,
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1],
                x: [pos.initialX, pos.initialX + 20, pos.initialX],
                y: [pos.initialY, pos.initialY + 20, pos.initialY],
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay,
                ease: "easeInOut",
              }}
              style={{
                width: pos.width,
                height: pos.height,
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
            />
          ))}

        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #3582ba 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-1 bg-primary rounded-full mb-4 mx-auto" />
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          </motion.div>
          <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-3 text-gray-900">
            Empowering Precision <br></br>
            <span className="text-primary">Across Industries</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="font-body text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            From laboratory excellence to field reliability, PetroLabs delivers
            integrated testing, technology, and training solutions for complete
            oil and fluid management.
          </motion.p>
        </motion.div>

        {/* Premium Staggered Layout with 3D Perspective */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
          style={{ perspective: "1200px" }}
        >
          {/* Connection Arc */}
          <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 hidden lg:block pointer-events-none"
          >
            <svg viewBox="0 0 1000 200" className="w-full h-full">
              <path
                d="M 100,100 C 300,50 700,50 900,100"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 5"
              />
              <defs>
                <linearGradient
                  id="connectionGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3582ba" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#f57e18" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#eb0c1e" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
            {expertiseData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover="hover"
                custom={index}
                className={`relative ${item.offset} group`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* 3D Glass Morphism Card */}
                <motion.div
                  variants={hoverVariants}
                  className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/60 transition-all duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: `
                      0 2px 8px rgba(0, 0, 0, 0.04),
                      0 8px 24px rgba(0, 0, 0, 0.06),
                      0 16px 48px rgba(0, 0, 0, 0.08),
                      0 0 0 1px rgba(255, 255, 255, 0.9) inset,
                      0 0 40px ${item.glowColor}
                    `,
                  }}
                >
                  {/* Enhanced 3D Border Glow Layer */}
                  <div
                    className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.8), ${item.glowColor}, rgba(255,255,255,0.8))`,
                      filter: "blur(12px)",
                      transform: "translateZ(-10px)",
                    }}
                  />

                  {/* Inner Glow on Hover */}
                  <div
                    className="absolute inset-0 rounded-3xl bg-gray-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      transform: "translateZ(-5px)",
                    }}
                  />

                  {/* Icon Container with Enhanced 3D */}
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className={`relative mb-8 inline-flex items-center justify-center p-6 rounded-2xl ${item.bgClass} text-white transition-all duration-500`}
                    style={{
                      transformStyle: "preserve-3d",
                      boxShadow: `
                        0 4px 12px ${item.glowColor},
                        0 8px 24px ${item.glowColor},
                        0 0 0 1px rgba(255, 255, 255, 0.3) inset
                      `,
                    }}
                  >
                    <item.icon
                      className="w-8 h-8"
                      style={{ transform: "translateZ(10px)" }}
                    />

                    {/* Animated Ring with 3D Depth */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-white/40"
                      initial={{ scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.2, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      style={{ transform: "translateZ(5px)" }}
                    />

                    {/* Outer Glow Ring */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: `0 0 30px ${item.glowColor}, 0 0 60px ${item.glowColor}`,
                        transform: "translateZ(8px)",
                      }}
                    />
                  </motion.div>

                  {/* Content with 3D Depth */}
                  <h3
                    className="font-heading text-xl xl:text-2xl font-bold text-gray-900 mb-6 leading-tight relative z-10"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="font-body text-gray-800 leading-relaxed relative z-10 text-lg"
                    style={{ transform: "translateZ(12px)" }}
                  >
                    {item.description}
                  </p>

                  {/* Enhanced Corner Accents */}
                  <div
                    className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-white/50 rounded-tr-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      transform: "translateZ(20px)",
                      boxShadow: `0 0 15px ${item.glowColor}`,
                    }}
                  />
                  <div
                    className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-white/50 rounded-bl-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      transform: "translateZ(20px)",
                      boxShadow: `0 0 15px ${item.glowColor}`,
                    }}
                  />

                  {/* 3D Depth Edge Highlights */}
                  <div
                    className="absolute -bottom-2 left-4 right-4 h-2 bg-linear-to-r from-transparent via-white/30 to-transparent rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    style={{ transform: "translateZ(-15px)" }}
                  />
                </motion.div>

                {/* Floating Elements with 3D Positioning */}
                <motion.div
                  className={`absolute -top-4 -right-4 w-8 h-8 ${item.bgClass} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 hidden lg:block pointer-events-none`}
                  animate={{
                    y: [0, -10, 0],
                    z: [0, 20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    boxShadow: `0 8px 16px ${item.glowColor}`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "200px", opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 lg:mt-24 h-1 bg-linear-to-r from-primary via-accent1 to-secondary rounded-full"
        />
      </div>
    </section>
  );
};

export default CoreExpertiseSection;
