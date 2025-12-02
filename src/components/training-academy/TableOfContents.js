"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { HiListBullet, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const tocRef = useRef(null);

  const sections = useMemo(
    () => [
      { id: "hero", label: "Overview" },
      { id: "why-petrolabs", label: "Why Petrolabs?" },
      { id: "training-tracks", label: "Training Tracks" },
      { id: "training-format", label: "Format & Duration" },
      { id: "learning-outcomes", label: "Learning Outcomes" },
      { id: "career-pathways", label: "Career Pathways" },
      { id: "weekly-schedule", label: "Weekly Schedule" },
      { id: "career-support", label: "Career Support" },
      { id: "faqs", label: "FAQs" },
      { id: "enrollment", label: "Enroll Now" },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tocRef.current && !tocRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const progress = ((activeIndex + 1) / sections.length) * 100;

  return (
    <LazyMotion features={loadFeatures} strict>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-60 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Table of Contents - Fixed container */}
      <div
        ref={tocRef}
        className="fixed top-1/2 -translate-y-1/2 right-0 z-70 pointer-events-none"
      >
        <div className="relative pointer-events-auto">
          {/* Toggle Button - Always at right edge */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 right-0 transition-opacity duration-200 ${
              isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <button
              onClick={() => setIsOpen(true)}
              className="group relative bg-primary hover:bg-primary/90 text-white px-3 py-6 rounded-l-2xl shadow-2xl transition-colors"
              aria-label="Open Table of Contents"
            >
              <div className="flex flex-col items-center gap-2">
                <HiChevronLeft className="w-5 h-5 animate-pulse" />
                <div
                  className="flex flex-col items-center gap-1"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  <span className="text-xs font-black tracking-wider">
                    CONTENTS
                  </span>
                </div>
                <div className="w-1 h-12 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="w-full bg-white rounded-full transition-all duration-300"
                    style={{ height: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-xl relative">
                  Table of Contents
                  <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-px">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-gray-900"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Expanded Panel - Slides over button */}
          <AnimatePresence>
            {isOpen && (
              <m.div
                initial={{ x: 320 }}
                animate={{ x: 0 }}
                exit={{ x: 320 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="w-80 bg-white rounded-l-2xl shadow-2xl border-2 border-r-0 border-gray-200 overflow-hidden flex flex-col"
                style={{ maxHeight: "85vh" }}
              >
                {/* Header */}
                <div className="bg-primary p-4 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <HiListBullet className="w-5 h-5 text-white" />
                    <h3 className="font-black text-white text-sm">
                      Table of Contents
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 rounded-lg p-1.5 transition-colors group"
                    aria-label="Close Table of Contents"
                  >
                    <HiChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="overflow-y-auto flex-1 p-4">
                  <ul className="space-y-1.5">
                    {sections.map((section, index) => {
                      const isActive = activeSection === section.id;
                      return (
                        <li key={section.id}>
                          <button
                            onClick={() => scrollToSection(section.id)}
                            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold transition-all group relative ${
                              isActive
                                ? "bg-primary text-white shadow-md scale-105"
                                : "text-gray-700 hover:bg-gray-100 hover:pl-4"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black transition-all shrink-0 ${
                                  isActive
                                    ? "bg-white/20 text-white scale-110"
                                    : "bg-gray-200 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary"
                                }`}
                              >
                                {index + 1}
                              </div>
                              <span className="flex-1 leading-tight">
                                {section.label}
                              </span>
                            </div>

                            {isActive && (
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Progress Bar */}
                <div className="p-4 border-t border-gray-200 bg-gray-50 shrink-0">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <span className="font-semibold">Reading Progress</span>
                    <span className="font-black text-primary">
                      {activeIndex + 1} / {sections.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-full transition-all duration-300 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-xs font-bold text-gray-500">
                      {Math.round(progress)}% Complete
                    </span>
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </LazyMotion>
  );
}
