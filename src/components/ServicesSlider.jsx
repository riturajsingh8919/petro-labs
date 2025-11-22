"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiDroplet,
} from "react-icons/fi";
import {
  MdOutlineOilBarrel,
  MdOutlineElectricalServices,
  MdOutlineScience,
  MdOutlineWaterDrop,
  MdOutlineBiotech,
  MdOutlineFactory,
  MdOutlinePrecisionManufacturing,
  MdOutlineRestaurant,
  MdOutlineEco,
} from "react-icons/md";
import Link from "next/link";

const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(1);

  const services = [
    {
      id: 1,
      title: "Petroleum Products & Lubricant Testing",
      image: "/services/1.jpg",
      icon: MdOutlineOilBarrel,
    },
    {
      id: 2,
      title: "Transformer Oil Testing",
      image: "/services/2.jpg",
      icon: MdOutlineElectricalServices,
    },
    {
      id: 3,
      title: "Water Testing Services",
      image: "/services/3.jpg",
      icon: FiDroplet,
    },
    {
      id: 4,
      title: "Coolant and DEF Testing",
      image: "/services/4.jpg",
      icon: MdOutlineScience,
    },
    {
      id: 5,
      title: "RoHS and ELC Certification Testing",
      image: "/services/5.jpg",
      icon: MdOutlineBiotech,
    },
    {
      id: 6,
      title: "Chemical, Mechanical Testing",
      image: "/services/6.jpg",
      icon: MdOutlineFactory,
    },
    {
      id: 7,
      title: "Metallography Testing",
      image: "/services/7.jpg",
      icon: MdOutlinePrecisionManufacturing,
    },
    {
      id: 8,
      title: "Food and Agriculture Product Testing",
      image: "/services/8.jpg",
      icon: MdOutlineRestaurant,
    },
    {
      id: 9,
      title: "Environmental Testing",
      image: "/services/9.jpg",
      icon: MdOutlineEco,
    },
  ];

  // Handle responsive visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(1); // Mobile: 1 card
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, services.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(services[(currentIndex + i) % services.length]);
    }
    return visible;
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
        {/* Header with Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-end justify-between gap-6">
            <div className="flex-1">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 md:mb-4">
                Our Services
              </p>
              <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-3 text-gray-900">
                Comprehensive{" "}
                <span className="text-primary">Testing Solutions</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                Industry-leading laboratory services ensuring precision,
                compliance, and quality across diverse sectors.
              </p>
            </div>

            {/* Navigation Arrows - Desktop */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <motion.button
                whileHover={{ scale: 1.05, x: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePrev}
                className="relative w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-linear-to-br from-primary/20 via-accent1/30 to-transparent backdrop-blur-sm border border-primary/20 shadow-[0_4px_20px_rgba(53,130,186,0.15)] hover:shadow-[0_8px_30px_rgba(53,130,186,0.25)] flex items-center justify-center text-primary hover:text-white group transition-all duration-400 overflow-hidden cursor-pointer"
                aria-label="Previous slide"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <FiChevronLeft
                  className="relative z-10 w-6 h-6 xl:w-7 xl:h-7"
                  strokeWidth={2.5}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className="relative w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-linear-to-br from-accent1/30 via-primary/20 to-transparent backdrop-blur-sm border border-primary/20 shadow-[0_4px_20px_rgba(53,130,186,0.15)] hover:shadow-[0_8px_30px_rgba(53,130,186,0.25)] flex items-center justify-center text-primary hover:text-white group transition-all duration-400 overflow-hidden cursor-pointer"
                aria-label="Next slide"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <FiChevronRight
                  className="relative z-10 w-6 h-6 xl:w-7 xl:h-7"
                  strokeWidth={2.5}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Cards Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`grid gap-4 md:gap-5 lg:gap-6 ${
              visibleCards === 1
                ? "grid-cols-1"
                : visibleCards === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisibleServices().map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={`${service.id}-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -20 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.08,
                      ease: [0.22, 0.61, 0.36, 1],
                    }}
                    className="group"
                  >
                    {/* Service Card */}
                    <motion.div
                      whileHover={{ y: -8, scale: 1.015 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 0.61, 0.36, 1],
                      }}
                      className="relative h-[450px] sm:h-[480px] md:h-[500px] lg:h-[520px] rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.2)] transition-shadow duration-500"
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={100}
                          priority={idx === 0}
                        />
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />

                      {/* Card Content */}
                      <div className="relative h-full flex flex-col justify-between p-6 sm:p-7 md:p-8 lg:p-9">
                        {/* Top - External Link Icon */}
                        <Link href={"#"} className="flex justify-end">
                          <motion.div
                            whileHover={{ scale: 1.12, rotate: 45 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 0.61, 0.36, 1],
                            }}
                            className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-linear-to-br from-primary/30 via-primary/20 to-accent1/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 cursor-pointer hover:border-white/60 hover:shadow-[0_0_25px_rgba(53,130,186,0.4)] transition-all duration-400 group/icon overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-linear-to-br from-primary to-accent1 opacity-0 group-hover/icon:opacity-80 transition-opacity duration-400" />
                            <FiArrowUpRight
                              className="relative z-10 w-5 h-5 md:w-6 md:h-6"
                              strokeWidth={2.5}
                            />
                          </motion.div>
                        </Link>

                        {/* Bottom - Service Info */}
                        <div className="space-y-4 md:space-y-5">
                          {/* Service Icon */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 0.3,
                              duration: 0.5,
                              ease: [0.34, 1.56, 0.64, 1],
                            }}
                            className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-primary/25 via-primary/15 to-transparent backdrop-blur-md border border-white/30 shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                          >
                            <IconComponent
                              className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                              strokeWidth={1.5}
                            />
                          </motion.div>

                          {/* Service Title */}
                          <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden justify-center gap-4 mt-8 md:mt-10">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-primary/30 via-accent1/25 to-transparent backdrop-blur-sm border border-primary/20 shadow-[0_4px_20px_rgba(53,130,186,0.15)] active:shadow-[0_8px_30px_rgba(53,130,186,0.25)] flex items-center justify-center text-primary active:text-white group transition-all duration-300 overflow-hidden cursor-pointer"
            aria-label="Previous"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary to-primary/80 opacity-0 group-active:opacity-100 transition-opacity duration-300" />
            <FiChevronLeft
              className="relative z-10 w-5 h-5 sm:w-6 sm:h-6"
              strokeWidth={2.5}
            />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-accent1/30 via-primary/25 to-transparent backdrop-blur-sm border border-primary/20 shadow-[0_4px_20px_rgba(53,130,186,0.15)] active:shadow-[0_8px_30px_rgba(53,130,186,0.25)] flex items-center justify-center text-primary active:text-white group transition-all duration-300 overflow-hidden cursor-pointer"
            aria-label="Next"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary to-primary/80 opacity-0 group-active:opacity-100 transition-opacity duration-300" />
            <FiChevronRight
              className="relative z-10 w-5 h-5 sm:w-6 sm:h-6"
              strokeWidth={2.5}
            />
          </motion.button>
        </div>

        {/* Pagination Dots */}
        <div className="hidden lg:flex justify-center items-center gap-2 mt-10 md:mt-12 lg:mt-14">
          {services.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-500 ease-out ${
                idx === currentIndex
                  ? "w-8 sm:w-10 md:w-12 h-2 bg-primary shadow-[0_0_15px_rgba(53,130,186,0.4)]"
                  : "w-2 h-2 bg-gray-300 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
