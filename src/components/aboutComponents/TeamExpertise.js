"use client";

import { LazyMotion, m } from "framer-motion";
import Image from "next/image";
import {
  HiUserGroup,
  HiAcademicCap,
  HiShieldCheck,
  HiSparkles,
  HiArrowTrendingUp,
  HiCheckBadge,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const TeamExpertise = () => {
  const partners = [
    { name: "Spectro Scientific", country: "USA" },
    { name: "Biolab", country: "" },
    { name: "Filtertechnik", country: "UK" },
    { name: "Spectron XRF", country: "" },
    { name: "Tandelta Systems", country: "" },
    { name: "Triple R", country: "Japan" },
  ];

  const standFor = [
    {
      icon: HiShieldCheck,
      title: "Scientific Integrity",
      desc: "Every result we deliver reflects uncompromised accuracy.",
      color: "from-primary to-blue-600",
    },
    {
      icon: HiCheckBadge,
      title: "Customer Confidence",
      desc: "We act as trusted advisors, helping industries make data-driven decisions.",
      color: "from-accent1 to-orange-600",
    },
    {
      icon: HiSparkles,
      title: "Operational Excellence",
      desc: "From testing to reporting, we ensure a seamless, efficient customer experience.",
      color: "from-secondary to-red-600",
    },
    {
      icon: HiArrowTrendingUp,
      title: "Continuous Improvement",
      desc: "We invest in innovation, technology, and talent to stay ahead in an evolving industrial landscape.",
      color: "from-accent2 to-teal-600",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      {/* Expertise Section */}
      <section className="relative py-20 bg-linear-to-b from-gray-100 to-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8"
            >
              <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-6 text-gray-900">
                Powered by Expertise.<br></br>
                <span className="text-primary">Driven by Purpose.</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Behind every report is a team of skilled professionals—
                <span className="font-semibold text-gray-900">
                  chemists, analysts, engineers, and technical specialists
                </span>
                —each dedicated to upholding the highest standards of quality.
                Their collective expertise ensures that every sample, no matter
                how complex, is handled with accuracy, care, and technical
                mastery.
              </p>

              {/* Global Partners */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent1 flex items-center justify-center">
                    <HiAcademicCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Global Partnerships
                  </h3>
                </div>

                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  We partner with renowned global brands, expanding our
                  capability to bring superior diagnostic and monitoring
                  technologies to our clients:
                </p>

                <div className="flex flex-wrap gap-3">
                  {partners.map((partner, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ y: -2 }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-bold text-gray-900">
                        {partner.name}
                      </span>
                      {partner.country && (
                        <span className="text-xs text-gray-600">
                          ({partner.country})
                        </span>
                      )}
                    </m.div>
                  ))}
                </div>
              </div>
            </m.div>

            {/* Right - Team Image */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/expert-team.png" // Team working in lab
                  alt="Expert Team"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                {/* Icon Badge Overlay */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <HiUserGroup className="w-10 h-10 text-primary mb-2" />
                  <p className="text-sm font-bold text-gray-900">Expert Team</p>
                  <p className="text-xs text-gray-600">
                    Dedicated Professionals
                  </p>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="relative py-20 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-4 text-white">
              What We <span className="text-accent1">Stand For</span>
            </h2>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {standFor.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <div
                    className={`w-14 h-14 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-lab-equipment.png" // Modern lab equipment
                  alt="Laboratory Infrastructure"
                  width={600}
                  height={804}
                  className="w-full h-auto object-cover"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-linear-to-br from-primary to-accent1 rounded-2xl p-6 shadow-2xl">
                  <p className="text-sm font-bold text-white/90 uppercase tracking-wider mb-1">
                    State-of-the-Art
                  </p>
                  <p className="text-2xl font-black text-white">
                    Infrastructure
                  </p>
                </div>
              </div>
            </m.div>

            {/* Right - Content */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8"
            >
              <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-6 text-gray-900">
                Your Partner in Quality, Reliability &{" "}
                <span className="text-primary">Compliance</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Whether you&apos;re{" "}
                <span className="font-semibold text-gray-900">
                  optimizing machine performance
                </span>
                ,{" "}
                <span className="font-semibold text-gray-900">
                  validating product purity
                </span>
                ,{" "}
                <span className="font-semibold text-gray-900">
                  ensuring environmental safety
                </span>
                , or{" "}
                <span className="font-semibold text-gray-900">
                  meeting compliance requirements
                </span>
                —Petrolabs is here to support your mission.
              </p>

              <div className="bg-linear-to-br from-primary/5 to-accent1/5 rounded-2xl p-8 border-l-4 border-primary mb-8">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  With our{" "}
                  <span className="font-bold text-primary">
                    state-of-the-art laboratory infrastructure
                  </span>
                  , <span className="font-bold text-accent1">expert team</span>,
                  and{" "}
                  <span className="font-bold text-secondary">
                    comprehensive service offerings
                  </span>
                  , we are committed to delivering insights that strengthen your
                  operations and safeguard your brand.
                </p>
              </div>

              {/* Brand Slogan */}
              <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 bg-linear-to-r from-primary to-accent1 rounded-2xl px-8 py-6 shadow-xl"
              >
                <HiSparkles className="w-8 h-8 text-white" />
                <div>
                  <p className="text-2xl md:text-3xl font-black text-white leading-tight">
                    Science You Can Trust.
                  </p>
                  <p className="text-sm text-white/90 font-medium mt-1">
                    Excellence in Every Analysis.
                  </p>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default TeamExpertise;
