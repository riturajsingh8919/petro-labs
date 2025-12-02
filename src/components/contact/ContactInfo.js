"use client";

import { LazyMotion, m } from "framer-motion";
import { HiPhone, HiEnvelope, HiMapPin, HiClock } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: HiPhone,
      title: "Call Us",
      details: ["040-23156400", "7675043138, 39, 40, 41"],
      link: "tel:04023156400",
      color: "primary",
    },
    {
      icon: HiEnvelope,
      title: "Email Us",
      details: ["sales@petrolabsindia.com"],
      link: "mailto:sales@petrolabsindia.com",
      color: "secondary",
    },
    {
      icon: HiMapPin,
      title: "Visit Us",
      details: ["Kukatpally, Hyderabad", "Telangana 500072"],
      link: "#map",
      color: "accent1",
    },
    {
      icon: HiClock,
      title: "Working Hours",
      details: ["Mon - Sat: 9 AM - 6 PM", "Sunday: Closed"],
      color: "accent2",
    },
  ];

  const colorClasses = {
    primary: {
      bg: "bg-primary/10",
      icon: "text-primary",
      border: "border-primary/20",
      hover: "hover:border-primary hover:shadow-primary/20",
    },
    secondary: {
      bg: "bg-secondary/10",
      icon: "text-secondary",
      border: "border-secondary/20",
      hover: "hover:border-secondary hover:shadow-secondary/20",
    },
    accent1: {
      bg: "bg-accent1/10",
      icon: "text-accent1",
      border: "border-accent1/20",
      hover: "hover:border-accent1 hover:shadow-accent1/20",
    },
    accent2: {
      bg: "bg-accent2/10",
      icon: "text-accent2",
      border: "border-accent2/20",
      hover: "hover:border-accent2 hover:shadow-accent2/20",
    },
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="container mx-auto px-8 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const colors = colorClasses[method.color];
            const Component = method.link ? "a" : "div";

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Component
                  href={method.link}
                  className={`block bg-white rounded-2xl p-6 shadow-lg border-2 ${
                    colors.border
                  } ${colors.hover} hover:shadow-xl transition-all h-full ${
                    method.link ? "cursor-pointer" : ""
                  }`}
                >
                  <div
                    className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <div className="space-y-1">
                    {method.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 text-sm font-medium"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </Component>
              </m.div>
            );
          })}
        </div>
      </section>
    </LazyMotion>
  );
}
