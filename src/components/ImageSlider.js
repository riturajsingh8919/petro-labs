// components/ImageSlider.js
"use client";

import { useState, useEffect, memo, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageSlider = memo(
  ({
    images,
    onActiveChange,
    activeIndex,
    onCycleComplete,
    priority = false,
    autoplay = true,
  }) => {
    const [localActiveIndex, setLocalActiveIndex] = useState(activeIndex);
    const timerRef = useRef(null);
    const onActiveChangeRef = useRef(onActiveChange);
    const onCycleCompleteRef = useRef(onCycleComplete);

    // Keep latest callbacks without restarting the autoplay timer
    useEffect(() => {
      onActiveChangeRef.current = onActiveChange;
      onCycleCompleteRef.current = onCycleComplete;
    });

    useEffect(() => {
      setLocalActiveIndex(activeIndex);
    }, [activeIndex]);

    // Auto-advance — stable deps so Windows browsers aren't stuck in a load loop
    useEffect(() => {
      if (!autoplay) return;

      timerRef.current = setTimeout(() => {
        const atLast = localActiveIndex === images.length - 1;

        if (atLast) {
          // Finished this set → advance main slide (parent resets activeIndex to 0)
          onCycleCompleteRef.current?.();
          return;
        }

        const nextIndex = localActiveIndex + 1;
        setLocalActiveIndex(nextIndex);
        onActiveChangeRef.current(nextIndex);
      }, 2000);

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, [localActiveIndex, images.length, autoplay]);

    const handleImageClick = (index) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setLocalActiveIndex(index);
      onActiveChangeRef.current(index);
    };

    return (
      <div className="relative">
        <div className="flex gap-3 h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
          {images.map((image, index) => {
            const isActive = localActiveIndex === index;

            return (
              <motion.div
                key={image.src}
                onClick={() => handleImageClick(index)}
                className={`relative cursor-pointer rounded-2xl overflow-hidden ${
                  isActive ? "flex-3" : "flex-1"
                }`}
                style={{
                  transition: "flex 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
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
                  priority={priority && index < 3}
                  loading={priority && index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 28vw"
                  quality={80}
                  unoptimized
                />

                {isActive && (
                  <motion.div
                    layoutId="activeBorder"
                    className="absolute inset-0 border-[3px] border-primary rounded-2xl pointer-events-none z-10"
                    transition={{ duration: 0.3 }}
                  />
                )}

                {!isActive && (
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                )}

                {isActive && (
                  <div className="absolute -inset-1 bg-linear-to-r from-primary via-accent1 to-secondary rounded-2xl blur-xl -z-10 opacity-70" />
                )}

                {isActive && (
                  <div className="absolute top-4 left-4 bg-white backdrop-blur-sm px-4 py-2 rounded-full z-10">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">
                      Active
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-5">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleImageClick(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                localActiveIndex === index
                  ? "w-8 bg-linear-to-r from-primary to-accent1"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Select image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  },
);

ImageSlider.displayName = "ImageSlider";

export default ImageSlider;
