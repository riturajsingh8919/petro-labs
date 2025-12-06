"use client";

import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiChevronRight, HiHome } from "react-icons/hi2";
import {
  FaHandshake, // Services
  FaChalkboardTeacher, // Training
  FaBoxOpen, // Products
  FaPenNib, // Blog
  FaUserTie, // Careers
} from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const PageHeader = ({ tagline, variant = "default" }) => {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean);
    const breadcrumbs = [];

    paths.forEach((path, index) => {
      const href = "/" + paths.slice(0, index + 1).join("/");
      const label = path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      breadcrumbs.push({
        label,
        href: index === paths.length - 1 ? null : href,
      });
    });

    return breadcrumbs;
  };

  const generateTitle = () => {
    const paths = pathname.split("/").filter(Boolean);
    const lastSegment = paths[paths.length - 1] || "Home";

    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const breadcrumbs = generateBreadcrumbs();
  const title = generateTitle();

  const variants = {
    default: {
      bg: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
      titleColor: "text-white",
      taglineColor: "text-gray-300",
      breadcrumbColor: "text-gray-400",
      breadcrumbHover: "hover:text-white",
      graphicIcons: [
        "text-red-200",
        "text-accent1",
        "text-accent2",
        "text-white",
        "text-white/70",
      ],
      graphicBorder: "border-white/10",
      graphicBg: "bg-white/5",
      lineColor: "text-white/20",
    },
    gradient: {
      bg: "bg-gradient-to-br from-primary via-accent1 to-secondary",
      titleColor: "text-white",
      taglineColor: "text-white/90",
      breadcrumbColor: "text-white/70",
      breadcrumbHover: "hover:text-white",
      graphicIcons: [
        "text-white",
        "text-white",
        "text-white",
        "text-white",
        "text-white",
      ],
      graphicBorder: "border-white/20",
      graphicBg: "bg-white/10",
      lineColor: "text-white/30",
    },
    minimal: {
      bg: "bg-gradient-to-b from-gray-50 to-white",
      titleColor: "text-gray-900",
      taglineColor: "text-gray-600",
      breadcrumbColor: "text-gray-500",
      breadcrumbHover: "hover:text-primary",
      graphicIcons: [
        "text-primary",
        "text-secondary",
        "text-accent1",
        "text-yellow-600",
        "text-red-600",
      ],
      graphicBorder: "border-gray-200",
      graphicBg: "bg-white/60",
      lineColor: "text-primary/30",
    },
  };

  const currentVariant = variants[variant] || variants.default;

  // Added 'will-change-transform' to force GPU acceleration for smoothness
  const iconCardClass = `w-14 h-14 rounded-2xl ${currentVariant.graphicBg} backdrop-blur-md border ${currentVariant.graphicBorder} flex items-center justify-center shadow-lg relative z-10 hover:scale-110 transition-transform duration-300 will-change-transform`;

  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="h-20" />

      <section
        className={`relative ${currentVariant.bg} min-h-[380px] md:min-h-[540px] flex items-center overflow-hidden`}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-accent1 to-secondary" />

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${
                variant === "minimal" ? "#000" : "#fff"
              } 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <m.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] ${
              variant === "minimal" ? "bg-primary/5" : "bg-blue-500/10"
            }`}
          />
        </div>

        {/* ------------------------------------------------------- */}
        {/* RIGHT SIDE GRAPHIC */}
        {/* ------------------------------------------------------- */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none select-none">
          {/* Inner Ring (Outer one removed as requested) */}
          <m.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className={`absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full border ${currentVariant.graphicBorder} opacity-40`}
          />

          {/* Central Hexagon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center z-20">
            <m.div
              animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
              transition={{
                rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <svg width="80" height="92" viewBox="0 0 100 115">
                <polygon
                  points="50,5 90,30 90,80 50,105 10,80 10,30"
                  fill="none"
                  stroke={variant === "minimal" ? "#3582ba" : "#fff"}
                  strokeWidth="1.5"
                  opacity="0.5"
                />
              </svg>
            </m.div>
          </div>

          {/* Container for Icons and Lines */}
          <div className="absolute inset-0">
            {/* Connection Lines - Adjusted for +5% distance */}
            <svg
              className={`absolute inset-0 w-full h-full overflow-visible ${currentVariant.lineColor}`}
            >
              {/* 1. Services (Top) */}
              <line
                x1="50%"
                y1="50%"
                x2="50%"
                y2="26%"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              {/* 2. Training (Top Right) */}
              <line
                x1="50%"
                y1="50%"
                x2="75%"
                y2="40%"
                stroke="currentColor"
                strokeWidth="1"
              />
              {/* 3. Products (Bottom Right) */}
              <line
                x1="50%"
                y1="50%"
                x2="70%"
                y2="72%"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              {/* 4. Blog (Bottom Left) */}
              <line
                x1="50%"
                y1="50%"
                x2="30%"
                y2="72%"
                stroke="currentColor"
                strokeWidth="1"
              />
              {/* 5. Careers (Top Left) */}
              <line
                x1="50%"
                y1="50%"
                x2="25%"
                y2="40%"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>

            {/* ----- 5 UNIFORM ICONS (Moved Outward by ~5%) ----- */}

            {/* 1. Services: Top Center */}
            <m.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] left-1/2 -translate-x-1/2 will-change-transform"
            >
              <div className={iconCardClass}>
                <FaHandshake
                  className={`w-6 h-6 ${currentVariant.graphicIcons[0]}`}
                />
              </div>
            </m.div>

            {/* 2. Training: Top Right */}
            <m.div
              animate={{ x: [-4, 4, -4], y: [-4, 4, -4] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-[35%] right-[20%] will-change-transform"
            >
              <div className={iconCardClass}>
                <FaChalkboardTeacher
                  className={`w-6 h-6 ${currentVariant.graphicIcons[1]}`}
                />
              </div>
            </m.div>

            {/* 3. Products: Bottom Right */}
            <m.div
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-[23%] right-[26%] will-change-transform"
            >
              <div className={iconCardClass}>
                <FaBoxOpen
                  className={`w-6 h-6 ${currentVariant.graphicIcons[2]}`}
                />
              </div>
            </m.div>

            {/* 4. Blog: Bottom Left */}
            <m.div
              animate={{ x: [4, -4, 4], y: [4, -4, 4] }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute bottom-[23%] left-[26%] will-change-transform"
            >
              <div className={iconCardClass}>
                <FaPenNib
                  className={`w-6 h-6 ${currentVariant.graphicIcons[3]}`}
                />
              </div>
            </m.div>

            {/* 5. Careers: Top Left */}
            <m.div
              animate={{ x: [-4, 4, -4] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="absolute top-[35%] left-[20%] will-change-transform"
            >
              <div className={iconCardClass}>
                <FaUserTie
                  className={`w-6 h-6 ${currentVariant.graphicIcons[4]}`}
                />
              </div>
            </m.div>
          </div>
        </div>

        {/* ------------------------------------------------------- */}
        {/* END RIGHT SIDE GRAPHIC */}
        {/* ------------------------------------------------------- */}

        <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10 pt-0 pb-12">
          <div className="max-w-4xl">
            {breadcrumbs.length > 0 && (
              <m.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                aria-label="Breadcrumb"
                className="mb-3"
              >
                <ol className="flex items-center flex-wrap gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Link
                      href="/"
                      className={`flex items-center gap-1.5 ${currentVariant.breadcrumbColor} ${currentVariant.breadcrumbHover} transition-colors duration-300 group`}
                    >
                      <HiHome className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">Home</span>
                    </Link>
                    <HiChevronRight
                      className={`w-4 h-4 ${currentVariant.breadcrumbColor}`}
                    />
                  </li>

                  {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {crumb.href ? (
                        <>
                          <Link
                            href={crumb.href}
                            className={`${currentVariant.breadcrumbColor} ${currentVariant.breadcrumbHover} transition-colors duration-300 font-medium hover:underline`}
                          >
                            {crumb.label}
                          </Link>
                          {index < breadcrumbs.length - 1 && (
                            <HiChevronRight
                              className={`w-4 h-4 ${currentVariant.breadcrumbColor}`}
                            />
                          )}
                        </>
                      ) : (
                        <span
                          className={`${
                            variant === "minimal"
                              ? "text-primary"
                              : "text-white"
                          } font-semibold`}
                        >
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </m.nav>
            )}

            <m.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`text-4xl xl:text-5xl font-black leading-tight mb-3 ${currentVariant.titleColor}`}
            >
              {title}
            </m.h1>

            {tagline && (
              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className={`text-lg md:text-xl lg:text-2xl ${currentVariant.taglineColor} leading-relaxed max-w-3xl font-light`}
              >
                {tagline}
              </m.p>
            )}

            <m.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`mt-5 h-1 rounded-full ${
                variant === "minimal"
                  ? "bg-linear-to-r from-primary to-accent1"
                  : "bg-white/40"
              }`}
            />
          </div>
        </div>

        {variant !== "minimal" && (
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className="relative block w-full h-16 md:h-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C150,80 350,80 600,60 C850,40 1050,60 1200,80 L1200,120 L0,120 Z"
                fill="#ffffff"
                opacity="0.3"
              />
              <path
                d="M0,20 C200,100 400,80 600,80 C800,80 1000,60 1200,100 L1200,120 L0,120 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        )}
      </section>
    </LazyMotion>
  );
};

export default PageHeader;
