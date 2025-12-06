"use client";

import { LazyMotion, m } from "framer-motion";
import {
  HiPhone,
  HiEnvelope,
  HiDocumentArrowDown,
  HiCurrencyRupee,
  HiCheckBadge,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function EnrollmentCTA() {
  const steps = [
    "Choose your track & duration",
    "Email with CV + preferred dates",
    "Receive schedule & fee quote",
    "Confirm seat (limited batch sizes)",
  ];

  const actions = [
    {
      icon: HiDocumentArrowDown,
      title: "Request Syllabus PDF",
      description: "Detailed course outline",
      href: "mailto:training@petrolabs.com?subject=Syllabus%20Request",
      color: "primary",
    },
    {
      icon: HiCurrencyRupee,
      title: "Get a Fee Quote",
      description: "Custom pricing for your track",
      href: "mailto:training@petrolabs.com?subject=Fee%20Quote%20Request",
      color: "secondary",
    },
    {
      icon: HiCheckBadge,
      title: "Download Sample Certificate",
      description: "See what you'll receive",
      href: "#",
      color: "accent1",
    },
  ];

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="py-16 bg-linear-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl  lg:text-5xl font-black text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              Join hundreds of successful lab analysts who started their careers
              with Petrolabs Training Academy
            </p>
          </m.div>

          {/* Enrollment Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-black text-white mb-6 text-center">
                How to Enroll
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {steps.map((step, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white font-black">{index + 1}</span>
                    </div>
                    <span className="text-white font-semibold">{step}</span>
                  </m.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <m.a
              href="tel:7675043138"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/25 transition-all group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <HiPhone className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <span className="text-white/80 text-sm block mb-1">
                  Talk to Training Advisor
                </span>
                <span className="text-white text-2xl font-black">
                  7675043138
                </span>
              </div>
            </m.a>

            <m.a
              href="mailto:training@petrolabs.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/25 transition-all group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <HiEnvelope className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <span className="text-white/80 text-sm block mb-1">
                  Email Us
                </span>
                <span className="text-white text-lg font-black break-all">
                  training@petrolabs.com
                </span>
              </div>
            </m.a>
          </div>

          {/* Quick Actions */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <m.a
                  key={index}
                  href={action.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 shadow-xl hover:shadow-2xl transition-all text-center group"
                >
                  <div
                    className={`w-12 h-12 bg-${action.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-black text-gray-900 mb-1">
                    {action.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </m.a>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
