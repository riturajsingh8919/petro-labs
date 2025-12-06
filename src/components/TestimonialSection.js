"use client";

import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

// ✅ FIXED: Move static data OUTSIDE component
const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    title: "Maintenance Head, Manufacturing Unit",
    testimonial:
      "Petrolabs has been an exceptional partner for our oil analysis and reliability programs. Their quick turnaround and accurate reports have significantly improved our maintenance decisions.",
    rating: 5,
    image: "/testi-01.jpg",
  },
  {
    name: "Anita Verma",
    title: "Reliability Engineer",
    testimonial:
      "Their lubrication and reliability training programs provided our team with practical knowledge aligned to global standards. Highly recommended for upskilling technical staff.",
    rating: 5,
    image: "/testi-03.jpg",
  },
  {
    name: "Vikram Patel",
    title: "Plant Operations Manager",
    testimonial:
      "The onsite oil analysis solutions by Petrolabs have helped us reduce downtime and improve equipment health dramatically. Professional team and excellent support.",
    rating: 5,
    image: "/testi-02.jpg",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  // ✅ No more warnings - TESTIMONIALS is constant
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused, handleNext]);

  // ✅ FIXED: Image section uses fade-only (no white space)
  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.05,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Text section keeps slide animation
  const textVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="relative bg-linear-to-br from-white via-gray-50 to-white py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-accent1/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
          {/* Section Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-accent1/10 via-secondary/10 to-accent1/10 px-4 py-2 rounded-full mb-4">
              <FaQuoteLeft className="w-4 h-4 text-accent1" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Client Reviews
              </span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-3 text-gray-900">
              What Our <span className="text-primary">Customers Say</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders across manufacturing, energy, and
              reliability sectors
            </p>
          </m.div>

          {/* Split Screen Testimonial Slider */}
          <div
            className="relative max-w-7xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Left Side - Image Section - ✅ FIXED: No white space */}
              <div className="relative h-[400px] lg:h-auto overflow-hidden bg-gray-100">
                <AnimatePresence mode="wait">
                  <m.div
                    key={currentIndex}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative h-full w-full"
                  >
                    {/* Background Image */}
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                      priority
                      quality={100}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Decorative Quote Icon */}
                    <m.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute top-8 left-8"
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                        <FaQuoteLeft className="w-8 h-8 text-white" />
                      </div>
                    </m.div>

                    {/* Bottom Name Badge */}
                    <m.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="absolute bottom-8 left-8 right-8"
                    >
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/50 shadow-xl">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-accent1 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                            {currentTestimonial.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900">
                              {currentTestimonial.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {currentTestimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </m.div>
                  </m.div>
                </AnimatePresence>
              </div>

              {/* Right Side - Content Section */}
              <div className="relative bg-linear-to-br from-gray-50 to-white p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-accent1/10 to-transparent rounded-tr-3xl" />

                <AnimatePresence mode="wait" custom={direction}>
                  <m.div
                    key={currentIndex}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="relative z-10"
                  >
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <m.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          <HiStar className="w-7 h-7 text-accent1 fill-accent1" />
                        </m.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed mb-8">
                      &quot;{currentTestimonial.testimonial}&quot;
                    </blockquote>

                    {/* Author Info - Desktop Only (Mobile shows in image) */}
                    <div className="hidden lg:block">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-1 w-12 bg-linear-to-r from-primary to-accent1 rounded-full" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-base text-gray-600">
                        {currentTestimonial.title}
                      </p>
                    </div>
                  </m.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="relative z-10 flex items-center justify-between mt-10">
                  {/* Arrow Buttons */}
                  <div className="flex items-center gap-3">
                    <m.button
                      whileHover={{ scale: 1.1, x: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePrev}
                      className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-primary flex items-center justify-center text-gray-700 hover:text-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <HiChevronLeft className="w-6 h-6" />
                    </m.button>

                    <m.button
                      whileHover={{ scale: 1.1, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNext}
                      className="w-12 h-12 rounded-full bg-linear-to-r from-primary to-accent1 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <HiChevronRight className="w-6 h-6" />
                    </m.button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="flex items-center gap-2">
                    {TESTIMONIALS.map((_, index) => (
                      <m.button
                        key={index}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1);
                          setCurrentIndex(index);
                        }}
                        className={`rounded-full transition-all duration-300 cursor-pointer ${
                          index === currentIndex
                            ? "w-10 h-3 bg-linear-to-r from-primary to-accent1"
                            : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats - Optional */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-12 md:mt-16"
          >
            <div className="text-center">
              <div className="text-3xl  font-bold bg-linear-to-r from-primary to-accent1 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                Happy Clients
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-300" />

            <div className="text-center">
              <div className="text-3xl  font-bold bg-linear-to-r from-accent1 to-secondary bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                Satisfaction Rate
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-300" />

            <div className="text-center">
              <div className="text-3xl  font-bold bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                Years Experience
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default TestimonialSection;
