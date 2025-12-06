"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LazyMotion, m } from "framer-motion";
import {
  FaFlask,
  FaBolt,
  FaTint,
  FaSnowflake,
  FaShieldAlt,
  FaMicroscope,
  FaIndustry,
  FaLeaf,
  FaTree,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function ServiceSidebar() {
  // ensure we know when we've mounted so initial render stays identical
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname(); // OK to call — we'll only use it after mount

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const services = [
    {
      title: "Petroleum & Lubricant",
      slug: "petroleum-lubricant-testing",
      icon: FaFlask,
    },
    { title: "Transformer Oil", slug: "transformer-oil-testing", icon: FaBolt },
    { title: "Water Testing", slug: "water-testing", icon: FaTint },
    { title: "Coolant & DEF", slug: "coolant-def-testing", icon: FaSnowflake },
    { title: "RoHS & ELC", slug: "rohs-elc-testing", icon: FaShieldAlt },
    {
      title: "Chemical & Mechanical",
      slug: "chemical-mechanical-testing",
      icon: FaMicroscope,
    },
    { title: "Metallography", slug: "metallography-testing", icon: FaIndustry },
    {
      title: "Food & Agriculture",
      slug: "food-agriculture-testing",
      icon: FaLeaf,
    },
    { title: "Environmental", slug: "environmental-testing", icon: FaTree },
  ];

  // static, deterministic aside class (single-line via join)
  const asideClass = [
    "sticky",
    "top-20",
    "h-auto",
    "max-h-[calc(100vh-5rem)]",
    "overflow-y-auto",
    "bg-linear-to-b",
    "from-gray-900",
    "to-gray-800",
    "rounded-xl",
    "p-0",
  ].join(" ");

  return (
    <LazyMotion features={loadFeatures} strict>
      <aside className={asideClass}>
        {/* Header */}
        <div className="p-8 border-b border-white/10">
          <h2 className="text-2xl font-black text-white mb-2">Our Services</h2>
          <p className="text-sm text-gray-400">
            Select a service to view details
          </p>
        </div>

        {/* Service Links */}
        <nav className="p-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            // only compute `active` after mount to keep SSR and first client render identical
            const active =
              mounted && pathname ? pathname.includes(service.slug) : false;

            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <m.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 8 }}
                  className={`group relative mb-2 rounded-xl transition-all duration-300 px-0 ${
                    active
                      ? "bg-primary shadow-lg shadow-primary/20"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4 p-4">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        active
                          ? "bg-white/20"
                          : "bg-white/10 group-hover:bg-white/15"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          active
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white"
                        }`}
                      />
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-base font-bold transition-colors duration-300 ${
                          active
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <HiArrowRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        active
                          ? "text-white opacity-100"
                          : "text-gray-400 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>

                  {/* Active Indicator */}
                  {active && (
                    <m.div
                      layoutId="activeService"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-accent1 rounded-r-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </m.div>
              </Link>
            );
          })}
        </nav>
      </aside>
    </LazyMotion>
  );
}
