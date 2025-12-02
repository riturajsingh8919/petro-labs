"use client";

import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Training", href: "/training" },
    { name: "Training Academy", href: "/training-academy" },
    { name: "Blogs", href: "/blogs" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact-us" },
  ];

  const services = [
    {
      name: "Petroleum & Lubricant Testing",
      href: "/services/petroleum-lubricant-testing",
    },
    {
      name: "Transformer Oil Testing",
      href: "/services/transformer-oil-testing",
    },
    { name: "Water Testing Services", href: "/services/water-testing" },
    { name: "Coolant & DEF Testing", href: "/services/coolant-def-testing" },
    {
      name: "RoHS & ELC Certification",
      href: "/services/rohs-elc-testing",
    },
    {
      name: "Chemical & Mechanical Testing",
      href: "/services/chemical-mechanical-testing",
    },
    { name: "Metallography Testing", href: "/services/metallography-testing" },
    {
      name: "Food & Agriculture Testing",
      href: "/services/food-agriculture-testing",
    },
    { name: "Environmental Testing", href: "/services/environmental-testing" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://www.facebook.com/PetroLabs-102969335594626",
      color: "hover:bg-[#1877F2]",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://twitter.com/PetroLabsIndia",
      color: "hover:bg-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/petrolabs-india-private-ltd",
      color: "hover:bg-[#0A66C2]",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "#",
      color:
        "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045]",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <footer className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-accent1 to-secondary" />

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating Gradient Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <m.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 -right-20 w-[500px] h-[500px] bg-linear-to-br from-primary/40 to-accent1/40 rounded-full blur-3xl"
          />
          <m.div
            animate={{
              scale: [1.3, 1, 1.3],
              x: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 -left-20 w-[400px] h-[400px] bg-linear-to-tl from-accent2/40 to-secondary/40 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
          {/* Main Footer Content */}
          <div className="py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
              {/* Company Info - Wider Column */}
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-4"
              >
                {/* Logo/Brand */}
                <div className="mb-6">
                  <h3 className="text-4xl font-black bg-linear-to-r from-primary via-accent1 to-secondary bg-clip-text text-transparent">
                    PetroLabs
                  </h3>
                  <p className="text-sm text-white/70 mt-1">India Pvt. Ltd.</p>
                </div>

                <p className="text-white/80 leading-relaxed mb-8 max-w-md">
                  Leading provider of oil analysis, lubrication services, and
                  reliability engineering solutions for industries worldwide.
                </p>

                {/* Social Media */}
                <div>
                  <h5 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">
                    Follow Us
                  </h5>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social, index) => (
                      <m.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 cursor-pointer ${social.color} hover:border-white/40`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </m.a>
                    ))}
                  </div>
                </div>
              </m.div>

              {/* Quick Links */}
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <h4 className="text-lg font-bold mb-6 text-white">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>
                        <m.span
                          whileHover={{ x: 5 }}
                          className="text-white/70 hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-2 group text-sm"
                        >
                          <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                          {link.name}
                        </m.span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </m.div>

              {/* Services */}
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <h4 className="text-lg font-bold mb-6 text-white">
                  Our Services
                </h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link href={service.href}>
                        <m.span
                          whileHover={{ x: 5 }}
                          className="text-white/70 hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-2 group text-sm"
                        >
                          <span className="w-0 h-0.5 bg-accent1 group-hover:w-4 transition-all duration-300" />
                          {service.name}
                        </m.span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </m.div>

              {/* Contact Info */}
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <h4 className="text-lg font-bold mb-6 text-white">
                  Contact Us
                </h4>

                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center shrink-0">
                      <HiMapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white mb-1">
                        Address
                      </h5>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Building No. 5-36/1/11-A, Plot No. 11-A, 3rd Floor,
                        TSIIC, IALA, Prashanth Nagar, Kukatpally, Hyderabad,
                        Telangana 500072
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-accent1/20 to-accent1/5 border border-accent1/30 flex items-center justify-center shrink-0">
                      <HiPhone className="w-5 h-5 text-accent1" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white mb-1">
                        Phone
                      </h5>
                      <p className="text-sm text-white/70">
                        040-23156400, 7675043138, 39, 40, 41
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-secondary/20 to-secondary/5 border border-secondary/30 flex items-center justify-center shrink-0">
                      <HiEnvelope className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white mb-1">
                        Email
                      </h5>
                      <a
                        href="mailto:sales@petrolabsindia.com"
                        className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                      >
                        sales@petrolabsindia.com
                      </a>
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm text-white/60 text-center md:text-left"
              >
                © {new Date().getFullYear()}{" "}
                <span className="text-white font-semibold">
                  PetroLabs India Pvt. Ltd.
                </span>{" "}
                All Rights Reserved.
              </m.p>

              {/* Legal Links */}
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-6 text-sm"
              >
                <Link href="/privacy-policy">
                  <span className="text-white/60 hover:text-white transition-colors duration-300 cursor-pointer">
                    Privacy Policy
                  </span>
                </Link>
                <span className="text-white/30">•</span>
                <Link href="/terms-conditions">
                  <span className="text-white/60 hover:text-white transition-colors duration-300 cursor-pointer">
                    Terms & Conditions
                  </span>
                </Link>
                <span className="text-white/30">•</span>
                <Link href="/sitemap">
                  <span className="text-white/60 hover:text-white transition-colors duration-300 cursor-pointer">
                    Sitemap
                  </span>
                </Link>
              </m.div>
            </div>
          </div>
        </div>
      </footer>
    </LazyMotion>
  );
};

export default Footer;
