"use client";

import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiCheckCircle, HiChevronDown } from "react-icons/hi2";
import { FaWind, FaBuilding } from "react-icons/fa";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function AirTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(0);

  const services = [
    {
      id: "ambient",
      title: "Ambient Air Quality",
      subtitle: "Outdoor & Regulatory Monitoring",
      icon: FaWind,
      description:
        "We provide NABL-accredited Ambient Air Quality Monitoring services as per CPCB Notification under National Ambient Air Quality Standards (NAAQS).",
      fullDescription:
        "Monitoring ambient air helps assess pollution levels, protect public health, ensure regulatory compliance, and enable industries and municipalities to take corrective actions.",
      parameters: [
        {
          category: "Particulate Matter",
          items: [
            {
              name: "PM10",
              description: "Respirable particulate matter (≤10 micrometers)",
            },
            {
              name: "PM2.5",
              description: "Fine particulate matter (≤2.5 micrometers)",
            },
          ],
        },
        {
          category: "Gaseous Pollutants",
          items: [
            {
              name: "Sulphur Dioxide (SO₂)",
              description: "Industrial emissions & fuel combustion",
            },
            {
              name: "Nitrogen Dioxide (NO₂)",
              description: "Vehicle exhaust & industrial sources",
            },
            {
              name: "Ammonia (NH₃)",
              description: "Agricultural & industrial emissions",
            },
            {
              name: "Ozone (O₃)",
              description: "Ground-level ozone from photochemical reactions",
            },
          ],
        },
        {
          category: "Organic Compounds",
          items: [
            {
              name: "BTEX",
              description: "Benzene, Toluene, Ethylbenzene, Xylene",
            },
            {
              name: "Benzo(a)Pyrene",
              description: "Polycyclic aromatic hydrocarbon (PAH)",
            },
            {
              name: "Volatile Organic Compounds (VOC)",
              description: "Various organic chemicals in vapor form",
            },
          ],
        },
        {
          category: "Heavy Metals",
          items: [
            {
              name: "Nickel (Ni)",
              description: "Industrial emissions monitoring",
            },
            { name: "Lead (Pb)", description: "Legacy pollutant tracking" },
            { name: "Arsenic (As)", description: "Toxic metal monitoring" },
          ],
        },
      ],
      standards: "CPCB NAAQS Notification, IS 5182 Standards",
      industries: [
        "Power Plants & Thermal Stations",
        "Manufacturing & Heavy Industries",
        "Construction Sites & Infrastructure",
        "Chemical & Petrochemical Plants",
        "Mining & Quarrying Operations",
        "Urban Development Projects",
      ],
      benefits: [
        "Regulatory compliance with CPCB norms",
        "Early warning for pollution episodes",
        "Community health protection",
        "Environmental impact assessment",
        "Data for pollution control strategies",
      ],
      faqs: [
        {
          q: "Why is ambient air quality testing important?",
          a: "To assess pollution levels and comply with CPCB standards, helping industries and municipalities take corrective actions. It protects public health and ensures environmental sustainability.",
        },
        {
          q: "How often should ambient air be monitored?",
          a: "As per CPCB norms, continuous or periodic monitoring is required depending on industry type, location, and local regulations. High-pollution areas may need 24/7 monitoring.",
        },
        {
          q: "What industries require ambient air quality testing?",
          a: "Power plants, manufacturing industries, construction sites, chemical industries, mining operations, and urban infrastructure projects require regular monitoring.",
        },
        {
          q: "What is NAAQS and why does it matter?",
          a: "National Ambient Air Quality Standards (NAAQS) set by CPCB define acceptable air pollution levels. Compliance is mandatory for industries to operate legally.",
        },
        {
          q: "How do you collect ambient air samples?",
          a: "We use CPCB-approved high-volume samplers, respirable dust samplers, and gas analyzers placed at designated monitoring stations for 24-hour or 8-hour sampling.",
        },
      ],
    },
    {
      id: "indoor",
      title: "Indoor Air Quality",
      subtitle: "Work Zone & Facility Monitoring",
      icon: FaBuilding,
      description:
        "We provide specialized Indoor Air Quality (IAQ) Testing & Work Zone Monitoring Services to ensure safe and healthy environments in workplaces, factories, offices, and healthcare facilities.",
      fullDescription:
        "Our testing is carried out as per NIOSH, OSHA, and ASTM standards to identify pollutants, ensure employee safety, and maintain optimal indoor air conditions.",
      parameters: [
        {
          category: "Particulate & Dust",
          items: [
            { name: "PM10", description: "Respirable dust in work zones" },
            {
              name: "PM2.5",
              description: "Fine particles from indoor sources",
            },
            {
              name: "Total Suspended Particulates (TSP)",
              description: "Overall particulate load",
            },
          ],
        },
        {
          category: "Gases & Vapors",
          items: [
            {
              name: "Carbon Dioxide (CO₂)",
              description: "Ventilation adequacy indicator",
            },
            {
              name: "Carbon Monoxide (CO)",
              description: "Combustion byproduct monitoring",
            },
            { name: "Oxygen (O₂)", description: "Confined space safety" },
            {
              name: "Formaldehyde",
              description: "Building materials & furniture emissions",
            },
            { name: "Ozone (O₃)", description: "Office equipment emissions" },
            {
              name: "Ammonia (NH₃)",
              description: "Industrial & cleaning chemicals",
            },
          ],
        },
        {
          category: "Organic Compounds",
          items: [
            {
              name: "Total Volatile Organic Compounds (TVOCs)",
              description: "Paint, solvents, cleaning agents",
            },
            {
              name: "Specific VOCs",
              description: "Benzene, toluene, xylene identification",
            },
          ],
        },
        {
          category: "Microbiological",
          items: [
            {
              name: "Bacteria Count",
              description: "Airborne bacterial contamination",
            },
            { name: "Fungi & Mold", description: "Spore count in indoor air" },
          ],
        },
        {
          category: "Environmental Parameters",
          items: [
            { name: "Temperature", description: "Thermal comfort assessment" },
            {
              name: "Relative Humidity",
              description: "Moisture level monitoring",
            },
            { name: "Air Velocity", description: "Ventilation effectiveness" },
          ],
        },
      ],
      standards: "NIOSH, OSHA, ASTM, ASHRAE Standards",
      industries: [
        "Corporate Offices & IT Parks",
        "Manufacturing Facilities & Factories",
        "Hospitals & Healthcare Centers",
        "Pharmaceutical Cleanrooms",
        "Educational Institutions",
        "Hotels & Commercial Buildings",
      ],
      benefits: [
        "Employee health & productivity improvement",
        "Regulatory compliance for workplaces",
        "Sick building syndrome prevention",
        "HVAC system performance evaluation",
        "Indoor pollution source identification",
      ],
      faqs: [
        {
          q: "Why is indoor air quality testing important?",
          a: "Indoor pollutants can cause respiratory problems, fatigue, headaches, and reduced productivity. Regular testing ensures a safe and healthy environment for occupants.",
        },
        {
          q: "What standards do you follow for IAQ testing?",
          a: "We follow NIOSH (National Institute for Occupational Safety and Health), OSHA (Occupational Safety and Health Administration), ASTM, and ASHRAE standards for workplace and indoor environments.",
        },
        {
          q: "Who needs indoor air quality testing?",
          a: "Industries, IT parks, corporate offices, hospitals, pharma cleanrooms, educational institutions, hotels, and any facility concerned about occupant health.",
        },
        {
          q: "How often should indoor air be tested?",
          a: "Initial testing during building commissioning, annual testing for occupied spaces, and quarterly testing for sensitive environments like hospitals and cleanrooms.",
        },
        {
          q: "Can poor IAQ affect productivity?",
          a: "Yes, studies show poor indoor air quality reduces cognitive function, increases absenteeism, and lowers productivity by up to 10-15%.",
        },
      ],
    },
  ];

  const currentService = services[activeTab];
  const ServiceIcon = currentService.icon;

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="mb-14">
        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-12">
          <div className="grid grid-cols-2 gap-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeTab === index;
              return (
                <m.button
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    setActiveFAQ(0);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative flex items-center justify-center gap-3 px-6 py-5 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-200 text-gray-600 hover:bg-accent1 hover:text-white"
                  }`}
                >
                  <Icon className="w-6 h-6 shrink-0" />
                  <div className="text-left hidden sm:block">
                    <div className="text-lg">{service.title}</div>
                    <div className={`text-xs font-normal`}>
                      {service.subtitle}
                    </div>
                  </div>
                  <span className="sm:hidden text-lg">
                    {service.title.split(" ")[0]}
                  </span>

                  {isActive && (
                    <m.div
                      layoutId="activeAirTab"
                      className="absolute inset-0 bg-primary rounded-xl -z-10"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </m.button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <m.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header Card */}
            <div className="bg-primary text-white rounded-3xl p-8 md:p-12 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                  <ServiceIcon className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black mb-3">
                    {currentService.title} Monitoring
                  </h2>
                  <p className="text-xl text-white/90 mb-4 font-semibold">
                    {currentService.subtitle}
                  </p>
                  <p className="text-white/80 leading-relaxed text-lg mb-3">
                    {currentService.description}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {currentService.fullDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Parameters */}
            <div className="mb-12">
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Parameters Monitored
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentService.parameters.map((param, idx) => (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-black">
                          {idx + 1}
                        </span>
                      </div>
                      <h4 className="font-black text-gray-900 text-lg">
                        {param.category}
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {param.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="border-l-4 border-primary/20 pl-4 hover:border-primary transition-colors"
                        >
                          <h5 className="font-bold text-gray-900 mb-1">
                            {item.name}
                          </h5>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </m.div>
                ))}
              </div>
            </div>

            {/* Industries & Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-secondary">
                <h3 className="text-2xl font-black text-gray-900 mb-6">
                  Industries We Serve
                </h3>
                <div className="space-y-3">
                  {currentService.industries.map((industry, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {industry}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-accent1">
                <h3 className="text-2xl font-black text-gray-900 mb-6">
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {currentService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <HiCheckCircle className="w-6 h-6 text-accent1 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Standards */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <HiCheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">
                  Compliance Standards
                </h3>
              </div>
              <p className="text-gray-700 text-lg font-semibold pl-16">
                {currentService.standards}
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {currentService.faqs.map((faq, idx) => {
                  const isActive = activeFAQ === idx;
                  return (
                    <div
                      key={idx}
                      className={`bg-white rounded-2xl overflow-hidden shadow-md transition-all ${
                        isActive ? "ring-2 ring-primary shadow-lg" : ""
                      }`}
                    >
                      <button
                        onClick={() => setActiveFAQ(isActive ? null : idx)}
                        className="w-full flex items-start justify-between p-6 text-left cursor-pointer"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center font-black shrink-0 transition-all ${
                              isActive
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </div>
                          <span className="font-bold text-gray-900 pr-4 text-lg">
                            {faq.q}
                          </span>
                        </div>
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                            isActive
                              ? "bg-primary/10 rotate-180"
                              : "bg-gray-100"
                          }`}
                        >
                          <HiChevronDown
                            className={`w-5 h-5 ${
                              isActive ? "text-primary" : "text-gray-400"
                            }`}
                          />
                        </div>
                      </button>

                      <m.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pl-14">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </m.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </m.div>
        </AnimatePresence>
      </section>
    </LazyMotion>
  );
}
