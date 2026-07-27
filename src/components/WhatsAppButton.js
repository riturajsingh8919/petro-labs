"use client";

import { LazyMotion, m } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const WhatsAppButton = () => {
  const phoneNumber = "916304935323"; 
  const message = encodeURIComponent("Hello PetroLabs, I would like to know more.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <LazyMotion features={loadFeatures} strict>
      <m.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-8 left-8 z-50"
      >
        <m.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          className="group relative w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 cursor-pointer overflow-hidden"
          aria-label="Chat on WhatsApp"
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
            className="absolute inset-0 bg-[#1ebe57] rounded-2xl"
          />

          {/* Icon */}
          <FaWhatsapp className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300" />

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        </m.a>
      </m.div>
    </LazyMotion>
  );
};

export default WhatsAppButton;
