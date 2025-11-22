"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

const slides = [
  {
    title: "Innovating Oil & Fluid Analysis Solutions",
    description:
      "Advanced oil condition monitoring and fluid testing technologies driving industrial reliability and performance.",
    cta: "Explore Solutions",
    image: "/slider/01.png",
  },
  {
    title: "Precision Testing for Lubricants & Chemicals",
    description:
      "Accurate testing for petroleum, lubricants, and transformer oils — ensuring compliance, consistency, and quality.",
    cta: "View Services",
    image: "/slider/02.png",
  },
  {
    title: "Empowering Excellence Through Training",
    description:
      "Hands-on analytical training in GC-MS, HPLC, ICP-OES, and oil analysis led by industry-certified professionals.",
    cta: "Join Training",
    image: "/slider/03.png",
  },
  {
    title: "Trusted Global Partnerships in Reliability",
    description:
      "Delivering world-class filtration, monitoring, and analytical solutions with global leaders in fluid technology.",
    cta: "Discover Partners",
    image: "/slider/04.png",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(autoplayRef.current);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-full h-screen bg-black overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Ken Burns Zoom Out Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
            style={{
              transform:
                index === currentIndex
                  ? "scale3d(1, 1, 1)"
                  : "scale3d(1.15, 1.15, 1)",
              transitionProperty: "opacity, transform",
              transitionDuration:
                index === currentIndex ? "1000ms, 6000ms" : "1000ms, 1000ms",
              transitionTimingFunction: "ease-out, linear",
              willChange: "transform, opacity",
              zIndex: index === currentIndex ? 1 : 0,
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
              quality={100}
            />
          </div>
        ))}

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10" />
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center z-20 pt-20 pb-32">
        <div className="container mx-auto px-4 md:px-10 lg:px-16">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-6 inline-flex items-center gap-2.5 px-5 py-2.5 bg-accent1/10 backdrop-blur-md border border-accent1/30 rounded-full"
                >
                  <span className="w-2 h-2 bg-accent1 rounded-full animate-pulse" />
                  <span className="text-accent1 font-body text-xs md:text-sm font-bold uppercase tracking-wider">
                    Premium Solutions
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-heading text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
                >
                  {currentSlide.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="font-body text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl"
                >
                  {currentSlide.description}
                </motion.p>

                {/* CTA Button - Primary with Accent1 Hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-3 bg-primary hover:bg-accent1 text-white font-heading font-semibold px-10 py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-accent1/40 text-base md:text-lg overflow-hidden cursor-pointer"
                  >
                    <span className="relative z-10">{currentSlide.cta}</span>
                    <motion.div
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <HiArrowLongRight className="w-6 h-6" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-linear-to-t from-black/70 via-black/40 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-10 lg:px-16 py-8">
          <div className="flex items-center justify-between gap-6">
            {/* Left: Progress Indicators */}
            <div className="hidden md:flex items-center gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="group relative cursor-pointer"
                >
                  <div
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "bg-accent1 w-12 md:w-16 h-1.5"
                        : "bg-white/30 hover:bg-accent1 w-8 h-1.5"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right: Navigation Arrows + Counter */}
            <div className="flex items-center gap-4 md:gap-5">
              {/* Slide Counter */}
              <div className="flex items-baseline gap-1.5 text-white font-body">
                <span className="text-2xl md:text-3xl font-bold text-accent1">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-white/50 text-sm">/</span>
                <span className="text-white/50 text-lg">
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-3">
                {/* Previous */}
                <motion.button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-primary backdrop-blur-md border border-white/20 hover:border-primary text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  <HiArrowLongLeft className="w-6 h-6 md:w-7 md:h-7" />
                </motion.button>

                {/* Next - Primary with Accent1 Hover */}
                <motion.button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent1 hover:bg-primary backdrop-blur-md border border-accent1/50 hover:border-primary text-white transition-all duration-300 flex items-center justify-center shadow-lg shadow-accent1/30 hover:shadow-primary/40 cursor-pointer"
                >
                  <HiArrowLongRight className="w-6 h-6 md:w-7 md:h-7" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Accent Lines */}
      <div className="absolute right-0 top-1/4 w-px h-32 bg-linear-to-b from-transparent via-primary to-transparent z-10" />
      <div className="absolute right-8 top-1/2 w-px h-24 bg-linear-to-b from-transparent via-accent1 to-transparent z-10" />
    </section>
  );
}
