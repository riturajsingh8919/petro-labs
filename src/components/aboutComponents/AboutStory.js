"use client";

import { LazyMotion, m } from "framer-motion";
import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const AboutStory = () => {
  const focusAreas = [
    "Precision in methodology",
    "Integrity in reporting",
    "Consistency in service",
    "Innovation in technology",
  ];

  const technologies = [
    "FTIR",
    "ICP-OES",
    "CHNS/CHNSO",
    "TGA",
    "XRF",
    "GC",
    "HPLC",
    "UV-Vis",
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="relative pb-20 overflow-hidden">
        {/* Hero Section with Image Background */}
        <div className="bg-gray-100">
          <div className="container mx-auto px-4 md:px-10 lg:px-16 relative z-10 pt-20">
            <div className="relative grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-0">
              <div className="relative">
                <m.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-tight mb-6"
                >
                  Where Science Meets{" "}
                  <span className="text-accent1">Precision</span>
                </m.h2>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-xl  text-gray-700 leading-relaxed mb-8"
                >
                  At{" "}
                  <span className="font-bold text-gray-900">
                    Petrolabs India Pvt. Ltd.
                  </span>
                  , our story begins with a commitment—a commitment to bring
                  world-class testing solutions to industries that move the
                  world forward.
                </m.p>

                {/* Stats Bar */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="flex flex-wrap gap-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-xl font-black text-white">20+</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">Years of</p>
                      <p className="text-lg font-bold text-gray-900">
                        Excellence
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-accent1 flex items-center justify-center">
                      <span className="text-xl font-black text-white">
                        500+
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">Trusted</p>
                      <p className="text-lg font-bold text-gray-900">Clients</p>
                    </div>
                  </div>
                </m.div>
              </div>
              <div className="relative flex items-center justify-center lg:justify-end">
                <Image
                  src="/about-story1.png"
                  alt="Laboratory Equipment"
                  width={668}
                  height={938}
                  className="w-auto h-full object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white relative">
          <div className="container mx-auto px-4 md:px-10 lg:px-16 pt-20">
            {/* Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              {/* Left Content */}
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    What started as a focused laboratory has grown into a{" "}
                    <span className="font-bold text-gray-900">
                      trusted analytical powerhouse
                    </span>
                    , serving diverse sectors with precision, reliability, and
                    scientific excellence.
                  </p>

                  <p>
                    Today, Petrolabs stands at the forefront of petroleum
                    testing, water, material science, environmental analysis,
                    and a wide spectrum of laboratory services—helping companies
                    improve product quality, enhance performance, and meet
                    global compliance standards.
                  </p>
                </div>
              </m.div>

              {/* Right - Quote Box */}
              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative bg-linear-to-br from-primary to-accent1 rounded-3xl p-10 md:p-12">
                  <svg
                    className="absolute top-6 left-6 w-12 h-12 text-white/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm font-bold text-white/80 uppercase tracking-wider mb-4">
                    Our Belief
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-white leading-tight">
                    Precision You Can Trust. Results You Can Rely On.
                  </p>
                </div>
              </m.div>
            </div>

            {/* Excellence Section */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <h3 className="text-4xl xl:text-5xl font-black leading-tight mb-6 text-gray-900">
                A Corporate Approach Rooted in{" "}
                <span className="text-primary">Excellence</span>
              </h3>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
                Our work spans vital sectors—
                <span className="font-semibold text-gray-900">
                  petroleum, power, cement, manufacturing, chemicals, mining,
                  food, agriculture, and environmental studies
                </span>
                .
              </p>
            </m.div>

            {/* Focus Areas & Technologies Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Focus Areas */}
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  With every test we conduct, our focus remains unwavering:
                </h4>
                <div className="space-y-4">
                  {focusAreas.map((area, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent1 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <HiCheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-lg font-semibold text-gray-800">
                        {area}
                      </p>
                    </m.div>
                  ))}
                </div>
              </m.div>

              {/* Technologies */}
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Industry-Leading Analytical Systems:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-5 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
                    >
                      <span className="text-base font-bold text-gray-900">
                        {tech}
                      </span>
                    </m.div>
                  ))}
                </div>

                <p className="text-base text-gray-700 leading-relaxed mt-6">
                  These tools empower us to deliver results that are{" "}
                  <span className="font-bold text-primary">
                    scientifically robust
                  </span>
                  ,{" "}
                  <span className="font-bold text-accent1">
                    globally compliant
                  </span>
                  , and{" "}
                  <span className="font-bold text-secondary">
                    trusted by organizations
                  </span>{" "}
                  across India.
                </p>
              </m.div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default AboutStory;
