// components/ImageSlider.js
"use client";

import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageSlider = memo(({ images, onActiveChange, activeIndex }) => {
  const [localActiveIndex, setLocalActiveIndex] = useState(activeIndex);

  useEffect(() => {
    setLocalActiveIndex(activeIndex);
  }, [activeIndex]);

  const handleImageClick = (index) => {
    setLocalActiveIndex(index);
    onActiveChange(index);
  };

  return (
    <div className="relative">
      {/* Main Accordion Slider */}
      <div className="flex gap-3 h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
        {images.map((image, index) => {
          const isActive = localActiveIndex === index;

          return (
            <motion.div
              key={index}
              onClick={() => handleImageClick(index)}
              className={`relative cursor-pointer rounded-2xl overflow-hidden ${
                isActive ? "flex-3" : "flex-1"
              }`}
              style={{
                transition: "flex 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: isActive ? 1 : 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              />

              {/* Active Border */}
              {isActive && (
                <motion.div
                  layoutId="activeBorder"
                  className="absolute inset-0 border-[3px] border-primary rounded-2xl pointer-events-none z-10"
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Overlay for Non-Active */}
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 0.6 }}
                  className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"
                  style={{ willChange: "opacity" }}
                />
              )}

              {/* Glow Effect */}
              {isActive && (
                <div
                  className="absolute -inset-1 bg-linear-to-r from-primary via-accent1 to-secondary rounded-2xl blur-xl -z-10 opacity-70"
                  style={{ willChange: "transform" }}
                />
              )}

              {/* Active Label */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-4 left-4 bg-white backdrop-blur-sm px-4 py-2 rounded-full z-10"
                >
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">
                    Active
                  </span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              localActiveIndex === index
                ? "w-8 bg-linear-to-r from-primary to-accent1"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Select image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

ImageSlider.displayName = "ImageSlider";

export default ImageSlider;
