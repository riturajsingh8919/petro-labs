"use client";

import { useState, useEffect } from "react";
import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <AnimatePresence>
        {isVisible && (
          <m.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <m.button
              onClick={scrollToTop}
              whileHover={{
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative w-14 h-14 bg-linear-to-br from-primary via-accent1 to-secondary rounded-2xl flex items-center justify-center text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
              aria-label="Back to top"
            >
              {/* Animated Background Pulse */}
              <m.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-linear-to-br from-primary to-accent1 rounded-2xl"
              />

              {/* Icon */}
              <HiArrowUp className="w-7 h-7 relative z-10 group-hover:animate-bounce" />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </m.button>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default BackToTop;
