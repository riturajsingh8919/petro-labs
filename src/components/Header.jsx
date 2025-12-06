"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { HiX, HiChevronDown } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const menuData = [
  {
    title: "Services",
    href: "/services",
    submenu: [
      {
        title: "Petroleum & Lubricant Testing",
        href: "/services/petroleum-lubricant-testing",
      },
      {
        title: "Transformer Oil Testing",
        href: "/services/transformer-oil-testing",
      },
      { title: "Water Testing Services", href: "/services/water-testing" },
      { title: "Coolant & DEF Testing", href: "/services/coolant-def-testing" },
      { title: "RoHS & ELC Certification", href: "/services/rohs-elc-testing" },
      {
        title: "Chemical & Mechanical Testing",
        href: "/services/chemical-mechanical-testing",
      },
      {
        title: "Metallography Testing",
        href: "/services/metallography-testing",
      },
      {
        title: "Food & Agriculture Testing",
        href: "/services/food-agriculture-testing",
      },
      {
        title: "Environmental Testing",
        href: "/services/environmental-testing",
      },
    ],
  },
  {
    title: "Products",
    href: "#",
    submenu: [
      {
        title: "Spectro Scientific USA",
        href: "https://www.spectrosci.com",
        external: true,
      },
      {
        title: "Biolab Viscometer",
        href: "https://biolab.com.tr/en/kinematic-viscometer/",
        external: true,
      },
      {
        title: "Filtertechnik UK",
        href: "https://www.filtertechnik.co.uk/particle-pal-range",
        external: true,
      },
      { title: "FTIR Spectrometers", href: "/products/ftir-spectrometers" },
      {
        title: "XRF Analyzers",
        href: "https://spectronxray.ru/en/",
        external: true,
      },
      {
        title: "Oil Monitoring Sensors",
        href: "https://www.tandeltasystems.com/",
        external: true,
      },
      {
        title: "Triple R Japan Filtration",
        href: "https://petrolabsindia.com/products/triple-r-japan/",
        external: true,
      },
      {
        title: "Industrial Lubricants",
        href: "/products/industrial-lubricants",
      },
    ],
  },
  {
    title: "Training Academy",
    href: "/training-academy",
    megaMenu: true,
    columns: [
      {
        category: "Analytical Chemistry",
        items: [
          { title: "GC-MS/MS Training", href: "/training/gc-ms-training" },
          { title: "ICP-OES Training", href: "/training/icp-oes-training" },
          { title: "HPLC Training", href: "/training/hplc-training" },
          { title: "AAS Training", href: "/training/aas-training" },
          { title: "GC Training", href: "/training/gc-training" },
          { title: "Chemistry Training", href: "/training/chemistry" },
        ],
      },
      {
        category: "Lubrication & Reliability",
        items: [
          {
            title: "Oil Analysis & Ferrography",
            href: "/training/oil-analysis-ferrography",
          },
          {
            title: "Condition-Based Maintenance",
            href: "/training/condition-based-maintenance",
          },
          {
            title: "Machinery Lubrication I",
            href: "/training/machinery-lubrication-1",
          },
          {
            title: "Machinery Lubrication II",
            href: "/training/machinery-lubrication-2",
          },
          { title: "Lubrication Engineer (MLE)", href: "/training/mle" },
          { title: "Lubricant Analyst II", href: "/training/mla-2" },
          { title: "Lubricant Analyst III", href: "/training/mla-3" },
        ],
      },
    ],
  },
  {
    title: "About",
    href: "#",
    submenu: [
      { title: "About Us", href: "/about-us" },
      { title: "Contact Us", href: "/contact-us" },
    ],
  },
  { title: "Blogs", href: "/blogs" },
  { title: "Careers", href: "/careers" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [openMobileCategory, setOpenMobileCategory] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1240) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  const handleParentClick = (e, href) => {
    if (href && href !== "#") {
      e.stopPropagation();
      setOpenDropdown(null);
      router.push(href);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -120, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-xl" : "bg-white shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-22 ">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                whileTap={{ scale: 0.95 }}
                className="relative w-32 h-12 lg:w-56 lg:h-16"
              >
                <Image
                  src="/logo1.png"
                  alt="PetroLabs"
                  width={4144}
                  height={1292}
                  quality={100}
                  className="object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden xl:flex items-center gap-2"
            >
              {menuData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.submenu || item.megaMenu ? (
                    <div className="relative group">
                      <Link
                        href={item.href}
                        onClick={(e) => handleParentClick(e, item.href)}
                        className={`relative group px-5 py-2.5 text-base font-body font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                          isActive(item.href)
                            ? "text-accent1"
                            : "text-gray-800 hover:text-primary"
                        }`}
                      >
                        <span>{item.title}</span>

                        <motion.span
                          animate={{
                            rotate: openDropdown === item.title ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="inline-flex"
                        >
                          <HiChevronDown
                            className={`w-4 h-4 transition-colors duration-300 ${
                              openDropdown === item.title
                                ? "text-primary"
                                : "text-gray-500 group-hover:text-primary"
                            }`}
                          />
                        </motion.span>

                        <motion.span
                          className="absolute bottom-1 left-5 right-5 h-0.5 bg-linear-to-r from-primary via-accent1 to-primary rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isActive(item.href) ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-linear-to-r from-primary via-accent1 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                      </Link>

                      <AnimatePresence>
                        {openDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, rotateX: -15 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, y: 10, rotateX: -15 }}
                            transition={{
                              duration: 0.25,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            style={{ transformPerspective: 1000 }}
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden ${
                              item.megaMenu ? "w-[680px]" : "w-[360px]"
                            }`}
                          >
                            {item.megaMenu ? (
                              <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="p-8 grid grid-cols-2 gap-8"
                              >
                                {item.columns.map((column, colIdx) => (
                                  <div key={colIdx} className="space-y-1">
                                    <motion.h3
                                      variants={itemVariants}
                                      className="font-heading font-bold text-xs text-primary mb-4 uppercase tracking-widest px-3"
                                    >
                                      {column.category}
                                    </motion.h3>
                                    {column.items.map((subItem, subIdx) => (
                                      <motion.div
                                        key={subIdx}
                                        variants={itemVariants}
                                      >
                                        <Link
                                          href={subItem.href}
                                          className="group/item flex items-center gap-3 px-3 py-2.5 text-sm text-gray-800 hover:text-accent1 hover:bg-linear-to-r hover:from-accent1/10 hover:to-transparent rounded-xl transition-all duration-200"
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-accent1 transition-colors" />
                                          <span>{subItem.title}</span>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                ))}
                              </motion.div>
                            ) : (
                              <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="p-5 space-y-1"
                              >
                                {item.submenu.map((subItem, subIdx) => (
                                  <motion.div
                                    key={subIdx}
                                    variants={itemVariants}
                                  >
                                    <Link
                                      href={subItem.href}
                                      target={
                                        subItem.external ? "_blank" : "_self"
                                      }
                                      rel={
                                        subItem.external
                                          ? "noopener noreferrer"
                                          : ""
                                      }
                                      className="group/item flex items-center gap-3 px-4 py-3 text-sm text-gray-800 hover:text-accent1 hover:bg-linear-to-r hover:from-accent1/10 hover:to-transparent rounded-xl transition-all duration-200"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-accent1 transition-colors" />
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative group px-5 py-2.5 text-base font-body font-semibold transition-all duration-300 cursor-pointer ${
                        isActive(item.href)
                          ? "text-accent1"
                          : "text-gray-800 hover:text-primary"
                      }`}
                    >
                      {item.title}
                      <motion.span
                        className="absolute bottom-1 left-5 right-5 h-0.5 bg-linear-to-r from-primary via-accent1 to-primary rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive(item.href) ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-linear-to-r from-primary via-accent1 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden w-11 h-11 flex items-center justify-center text-gray-900 cursor-pointer relative z-50"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center"
                  >
                    <HiX className="w-7 h-7 text-gray-900" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RiMenu3Fill className="w-7 h-7" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900 z-40 overflow-y-auto"
          >
            <div className="container mx-auto px-8 py-32">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="space-y-4"
              >
                {menuData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {item.submenu || item.megaMenu ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenMobileSubmenu(
                              openMobileSubmenu === item.title
                                ? null
                                : item.title
                            )
                          }
                          className={`group flex items-center justify-between w-full text-left text-4xl md:text-4xl font-heading font-bold transition-all duration-300 ${
                            isActive(item.href)
                              ? "text-transparent bg-clip-text bg-linear-to-r from-accent1 to-primary"
                              : "text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-accent1 hover:to-primary"
                          }`}
                        >
                          <motion.span className="inline-block">
                            {item.title}
                          </motion.span>
                          <motion.span
                            animate={{
                              rotate:
                                openMobileSubmenu === item.title ? 180 : 0,
                            }}
                            transition={{
                              duration: 0.4,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                          >
                            <HiChevronDown
                              className={`w-10 h-10 transition-colors duration-300 ${
                                openMobileSubmenu === item.title
                                  ? "text-accent1"
                                  : "text-white group-hover:text-accent1"
                              }`}
                            />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {openMobileSubmenu === item.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden mt-4 ml-8"
                            >
                              {item.megaMenu ? (
                                <div className="space-y-6">
                                  {item.columns.map((column, colIdx) => (
                                    <div key={colIdx}>
                                      <button
                                        onClick={() =>
                                          setOpenMobileCategory(
                                            openMobileCategory ===
                                              column.category
                                              ? null
                                              : column.category
                                          )
                                        }
                                        className="flex items-center justify-between w-full text-sm font-heading font-bold text-primary uppercase tracking-widest mb-3"
                                      >
                                        <span>{column.category}</span>
                                        <motion.span
                                          animate={{
                                            rotate:
                                              openMobileCategory ===
                                              column.category
                                                ? 180
                                                : 0,
                                          }}
                                          transition={{ duration: 0.3 }}
                                        >
                                          <HiChevronDown
                                            className={`w-5 h-5 ${
                                              openMobileCategory ===
                                              column.category
                                                ? "text-accent1"
                                                : "text-primary"
                                            }`}
                                          />
                                        </motion.span>
                                      </button>

                                      <AnimatePresence>
                                        {openMobileCategory ===
                                          column.category && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                              opacity: 1,
                                              height: "auto",
                                            }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden space-y-2 ml-4"
                                          >
                                            {column.items.map(
                                              (subItem, subIdx) => (
                                                <Link
                                                  key={subIdx}
                                                  href={subItem.href}
                                                  onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                  }
                                                  className="block text-base text-gray-400 hover:text-accent1 transition-colors duration-200 py-1"
                                                >
                                                  {subItem.title}
                                                </Link>
                                              )
                                            )}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="space-y-2">
                                  {item.submenu.map((subItem, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      href={subItem.href}
                                      target={
                                        subItem.external ? "_blank" : "_self"
                                      }
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block text-lg text-gray-400 hover:text-accent1 transition-colors duration-200 py-1"
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group block text-4xl md:text-4xl font-heading font-bold transition-all duration-300 ${
                          isActive(item.href)
                            ? "text-transparent bg-clip-text bg-linear-to-r from-accent1 to-primary"
                            : "text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-accent1 hover:to-primary"
                        }`}
                      >
                        <motion.span className="inline-block">
                          {item.title}
                        </motion.span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
