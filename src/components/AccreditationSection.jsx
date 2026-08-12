"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineDownload, HiOutlineDocumentSearch } from "react-icons/hi";

const AccreditationSection = () => {
  const accreditations = [
    {
      id: "nabl",
      title: "NABL Accredited",
      description:
        "Our laboratory operations are strictly compliant with ISO/IEC 17025 standards, accredited by the National Accreditation Board for Testing and Calibration Laboratories (NABL), ensuring the highest degree of accuracy, reliability, and global acceptance of our test results.",
      image: "/nabl.webp",
      links: [
        { label: "View NABL Certificate", href: "/NABL.pdf", primary: false, icon: HiOutlineDocumentSearch },
        { label: "Download Scope", href: "/NABL.pdf", primary: true, icon: HiOutlineDownload },
      ],
      glowColor: "rgba(53, 130, 186, 0.2)",
    },
    {
      id: "iso",
      title: "ISO Certified (9001, 14001, 45001)",
      description:
        "PetroLabs is an ISO 9001, 14001, and 45001 certified organization, reflecting our unwavering commitment to maintaining a robust Quality, Environmental, and Occupational Health & Safety Management System. We guarantee operational excellence.",
      image: "/iso.webp",
      links: [
        { label: "ISO 9001", href: "/iso-9001-certificate.pdf", primary: false, icon: HiOutlineDocumentSearch },
        { label: "ISO 14001", href: "/iso-14001-certificate.pdf", primary: false, icon: HiOutlineDocumentSearch },
        { label: "ISO 45001", href: "/iso-45001-certificate.pdf", primary: false, icon: HiOutlineDocumentSearch },
      ],
      glowColor: "rgba(245, 126, 24, 0.2)",
    },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 40px 40px, #3582ba 2px, transparent 0)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-primary rounded-full mb-2 mx-auto" />
            <div className="w-12 h-1 bg-secondary rounded-full mx-auto" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Global Standards of <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We operate under stringent international quality frameworks, ensuring that
            every test report we generate is accurate, traceable, and legally defensible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {accreditations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group h-full flex"
            >
              <div
                className="w-full bg-gray-50 rounded-3xl p-8 md:p-10 border-2 border-gray-100 flex flex-col justify-between transition-all duration-500 hover:bg-white"
                style={{
                  boxShadow: `0 4px 20px rgba(0,0,0,0.03), 0 0 0 1px rgba(255,255,255,0.8) inset`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 40px ${item.glowColor}, 0 0 0 1px rgba(255,255,255,0.8) inset`;
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.03), 0 0 0 1px rgba(255,255,255,0.8) inset`;
                  e.currentTarget.style.borderColor = "rgb(243 244 246)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-8">
                    <div className="relative w-32 h-32 shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-4"
                        sizes="128px"
                        quality={80}
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-200/60">
                  {item.links.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                          link.primary
                            ? "bg-gray-900 text-white hover:bg-primary shadow-md hover:shadow-lg"
                            : "bg-white text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary"
                        }`}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <span className="text-xs sm:text-sm whitespace-nowrap">{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
